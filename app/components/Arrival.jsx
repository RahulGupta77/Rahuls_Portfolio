"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { aboutHome } from "@/utils/data/about-home";
import { personalData } from "@/utils/data/personal-data";

const socials = [
  { title: "LinkedIn", url: personalData.linkedIn, icon: BsLinkedin },
  { title: "GitHub", url: personalData.github, icon: BsGithub },
  { title: "Twitter", url: personalData.twitter, icon: FaTwitterSquare },
  { title: "LeetCode", url: personalData.leetcode, icon: SiLeetcode },
];

function ProfilePhoto({ className = "" }) {
  return (
    <div className={`overflow-hidden rounded-full ring-1 ring-border ${className}`}>
      <Image
        src={personalData.profile}
        alt={`${personalData.name}, ${personalData.designation} in Bangalore`}
        width={250}
        height={250}
        priority
        className="h-44 w-44 object-cover sm:h-52 sm:w-52 lg:h-56 lg:w-56"
        style={{
          filter: `brightness(${personalData.profileBrightness})`,
        }}
      />
    </div>
  );
}

function RichParagraph({ parts }) {
  return (
    <p className="text-[15px] leading-[1.75] text-foreground/85 sm:text-base">
      {parts.map((part, i) => {
        if (part.type === "link") {
          return (
            <Link
              key={`${part.value}-${i}`}
              href={part.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline decoration-accent/30 underline-offset-2 transition-opacity hover:opacity-80"
            >
              {part.value}
            </Link>
          );
        }
        if (part.type === "em") {
          return (
            <em
              key={`${part.value}-${i}`}
              className="not-italic font-medium text-foreground"
            >
              {part.value}
            </em>
          );
        }
        return <span key={`t-${i}`}>{part.value}</span>;
      })}
    </p>
  );
}

export default function Arrival() {
  return (
    <section id="arrival" className="relative pt-10 pb-8 sm:pt-14 sm:pb-10">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 max-w-2xl flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            Hey, I am Rahul Gupta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-3 text-base font-medium leading-snug text-muted-foreground sm:text-lg"
          >
            {aboutHome.tagline}
          </motion.p>

          {/* Mobile only: photo between greeting and body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="my-8 flex justify-center sm:hidden"
          >
            <ProfilePhoto />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="mt-6 space-y-4 sm:mt-6"
          >
            {aboutHome.paragraphs.map((p) => (
              <RichParagraph key={p.id} parts={p.parts} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.28 }}
            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3"
          >
            <a
              href={`mailto:${personalData.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              <FiMail className="h-4 w-4 text-icon" />
              {personalData.email}
            </a>
            <span className="hidden text-border sm:inline">·</span>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <Link
                  key={s.title}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.title}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop only: photo on the right, as before */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="hidden flex-shrink-0 sm:block"
        >
          <ProfilePhoto />
        </motion.div>
      </div>
    </section>
  );
}
