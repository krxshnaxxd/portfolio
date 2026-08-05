"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="
      fixed
      pointer-events-none
      z-[9999]
      w-8
      h-8
      rounded-full
      bg-purple-500/40
      blur-md
      transition-transform
      duration-75
      "
      style={{
        left: position.x - 16,
        top: position.y - 16,
      }}
    />
  );
}