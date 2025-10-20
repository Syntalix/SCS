"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export default function WordFadeIn({
  words,
  delay = 0.20,
  variants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}) {
  const _words = words.split(" ");

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        "tracking-[-0.02em] text-muted-foreground drop-shadow-sm pb-6 max-w-5xl mx-auto text-center md:text-lg",
        className
      )}
    >
      {_words.map((word, i) => (
        <motion.span key={word} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}
