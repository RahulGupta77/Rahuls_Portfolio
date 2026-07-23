"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaRocket } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { personalData } from "@/utils/data/personal-data";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";

const socials = [
  { href: personalData.linkedIn, icon: BiLogoLinkedin, label: "LinkedIn" },
  { href: personalData.github, icon: IoLogoGithub, label: "GitHub" },
  { href: personalData.twitter, icon: FaXTwitter, label: "Twitter" },
  { href: personalData.leetcode, icon: SiLeetcode, label: "LeetCode" },
];

export default function Contact() {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-8 rounded-2xl bg-surface pb-4 pt-8"
    >
      <SectionHeading
        icon={FaRocket}
        title="Let's Build Something Amazing"
        centered
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto mb-10 max-w-2xl text-center text-lg text-muted-foreground"
      >
        Have a project in mind or just want to say hello? I&apos;m always eager
        for innovative work and open to collaborating with others.
      </motion.p>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
        <ContactForm />

        <div className="flex flex-col gap-8 lg:pt-4">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-foreground"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-600 dark:text-sky-400">
              <FiMapPin className="h-5 w-5" />
            </span>
            <span>{personalData.address}</span>
          </motion.div>

          <div className="flex items-center gap-4">
            {socials.map(({ href, icon: Icon, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/30 bg-surface text-foreground transition-colors hover:bg-sky-500/10 hover:text-sky-600 dark:hover:text-sky-400"
                >
                  <Icon size={22} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
