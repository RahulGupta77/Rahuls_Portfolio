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
        toast.success("Message sent successfully!");
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
    "w-full rounded-md border border-border bg-background px-3 py-2 outline-none ring-0 transition-all duration-300 focus:border-sky-500";

  return (
    <div className="rounded-xl border border-sky-500/30 bg-surface p-5 lg:p-6">
      <p className="mb-2 text-sm text-muted-foreground">
        If you have any questions or concerns, please don&apos;t hesitate to
        contact me.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">
            Your Name
          </label>
          <input
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
          <label className="text-sm font-medium text-foreground">
            Your Email
          </label>
          <input
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
            <p className="text-sm text-red-400">Please provide a valid email!</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">
            Your Message
          </label>
          <textarea
            className={inputClass}
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

        <div className="flex flex-col items-start gap-2">
          {error.required && (
            <p className="text-sm text-red-400">
              Name, Email and Message are required!
            </p>
          )}
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSendMail}
            className="flex items-center gap-2 rounded-sm border border-sky-600/40 px-5 py-2.5 text-sm font-medium text-sky-700 transition-all duration-300 hover:bg-sky-500/10 dark:border-sky-700/50 dark:text-sky-300 dark:hover:bg-sky-900/30"
          >
            <span>Send Message</span>
            <TbMailForward size={18} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
