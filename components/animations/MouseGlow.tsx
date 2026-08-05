"use client";

import { motion, useMotionValue } from "framer-motion";

export default function MouseGlow() {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      className="mouseGlow"
      onMouseMove={(e) => {
        x.set(e.clientX - 150);
        y.set(e.clientY - 150);
      }}
      style={{
        x,
        y,
      }}
    />
  );
}