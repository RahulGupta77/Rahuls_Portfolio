"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { personalData } from "@/utils/data/personal-data";

const socials = [
  { title: "LinkedIn", url: personalData.linkedIn, icon: BsLinkedin, color: "text-blue-500 hover:text-blue-600" },
  { title: "GitHub", url: personalData.github, icon: BsGithub, color: "text-foreground hover:text-muted-foreground" },
  { title: "Twitter", url: personalData.twitter, icon: FaTwitterSquare, color: "text-sky-500 hover:text-sky-600" },
  { title: "LeetCode", url: personalData.leetcode, icon: SiLeetcode, color: "text-orange-500 hover:text-orange-600" },
];

export default function HeroSection() {
  return (
    <div
      id="about"
      className="mb-16 flex flex-col items-center gap-8 lg:flex-row lg:items-start"
    >
      {/* Avatar column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="flex flex-col items-center lg:items-start"
      >
        <div className="mb-6 overflow-hidden rounded-full ring-2 ring-border">
          <Image
            src={personalData.profile}
            alt={personalData.name}
            width={168}
            height={168}
            priority
            className="h-40 w-40 object-cover sm:h-44 sm:w-44"
            style={{ filter: `brightness(${personalData.profileBrightness})` }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mb-4 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <FiMapPin className="h-4 w-4" />
          {personalData.address}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex w-full items-center justify-between gap-4 px-1"
        >
          {socials.map(({ title, url, icon: Icon, color }, index) => (
            <motion.a
              key={title}
              title={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: 5, scale: 0.2 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.15, y: -2 }}
              className={color}
            >
              <Icon className="h-7 w-7" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Text column */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex-1 text-center lg:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-2 text-4xl font-bold tracking-tight text-foreground lg:text-5xl"
        >
          {personalData.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-4 text-xl text-muted-foreground"
        >
          {personalData.designation}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="max-w-2xl text-lg leading-relaxed text-foreground/80"
        >
          {personalData.description}
        </motion.p>

        <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start">
          <motion.div
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <Link
              href="#contact"
              className="flex items-center rounded-sm border border-sky-600/40 px-4 py-2 text-sky-700 transition-all duration-300 hover:bg-sky-500/10 dark:border-sky-700/50 dark:text-sky-300 dark:hover:bg-sky-900/30"
            >
              <FiMail className="mr-2 h-4 w-4" />
              <span>Work With Me</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
