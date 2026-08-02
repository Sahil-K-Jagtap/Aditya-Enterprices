import type { ReactNode } from "react";
import { motion, type MotionValue, type MotionStyle } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: MotionStyle;
  y?: MotionValue<number>;
  opacity?: MotionValue<number>;
}

export function GlassCard({ children, className = "", style, y, opacity }: GlassCardProps) {
  return (
    <motion.div
      style={{ y, opacity, ...style }}
      className={`rounded-3xl border border-white/10 bg-black/70 p-8 shadow-2xl shadow-black backdrop-blur-3xl ${className}`}
    >
      {children}
    </motion.div>
  );
}