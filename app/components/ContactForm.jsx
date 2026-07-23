"use client";

import { isValidEmail } from "@/utils/check-email";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    }
    if (error.email) return;

    setError((prev) => ({ ...prev, required: false }));

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_email: userInput.email,
      from_name: userInput.name,
      message: userInput.message,
    };

    try {
      const res = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (res.status === 200) {
        toast.success("Message sent successfully");
        setUserInput({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message via Email");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      toast.error(err?.text || err.message || "An error occurred");
    }
  };

  const inputClass =
    "w-full rounded-md border border-border bg-[var(--surface)] px-3 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent/40";

  return (
    <form
      onSubmit={handleSendMail}
      className="rounded-lg border border-border bg-[var(--surface)] p-5 sm:p-6"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            className={inputClass}
            type="text"
            maxLength={100}
            required
            value={userInput.name}
            onChange={(e) =>
              setUserInput({ ...userInput, name: e.target.value })
            }
            onBlur={checkRequired}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            className={inputClass}
            type="email"
            maxLength={100}
            required
            value={userInput.email}
            onChange={(e) =>
              setUserInput({ ...userInput, email: e.target.value })
            }
            onBlur={() => {
              checkRequired();
              setError((prev) => ({
                ...prev,
                email: !isValidEmail(userInput.email),
              }));
            }}
          />
          {error.email && (
            <p className="text-sm text-red-400">Please provide a valid email</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            className={`${inputClass} resize-y min-h-[6rem]`}
            maxLength={500}
            name="message"
            required
            rows={4}
            value={userInput.message}
            onChange={(e) =>
              setUserInput({ ...userInput, message: e.target.value })
            }
            onBlur={checkRequired}
          />
        </div>

        <div className="flex flex-col items-start gap-2 pt-1">
          {error.required && (
            <p className="text-sm text-red-400">
              Name, email, and message are required
            </p>
          )}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <span>Send message</span>
            <TbMailForward size={18} className="text-icon" />
          </motion.button>
        </div>
      </div>
    </form>
  );
}
