"use client";
import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "md" | "lg";
};

export default function Reveal({ children, variant = "lg", ...props }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: variant == "lg" ? 60 : 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
