"use client";

import { TypeAnimation } from "react-type-animation";

export default function Typewriter() {
  return (
    <div className="role">
      <TypeAnimation
        sequence={[
          "Frontend Developer", 2000,
          "React Developer", 2000,
          "Next.js Developer", 2000,
          "Three.js Developer", 2000,
          "Creative Coder", 2000,
        ]}
        wrapper="span"
        speed={40}
        repeat={Infinity}
      />
    </div>
  );
}