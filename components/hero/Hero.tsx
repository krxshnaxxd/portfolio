"use client";

import Scene from "../three/Scene";
import TypeAnimation from "./TypeAnimation";
import HeroAnimation from "../animations/HeroAnimation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <HeroAnimation>
      <section
        id="hero"
        className="hero"
      >
        <div className="heroText">

          <span className="statusBadge">
            🟢 Available for Opportunities
          </span>

          <p className="hello">
            👋 Hello, I'm
          </p>

          <h1>
            Anant Salotri
          </h1>

          <TypeAnimation />

          <p className="desc">
            Building immersive, high-performance web experiences
            with React, Next.js, Three.js, GSAP and TypeScript.
            I love creating modern UI that feels smooth, interactive
            and unforgettable.
          </p>

          <div className="heroButtons">

            <a
              href="#projects"
              className="btn"
            >
              🚀 View Projects
            </a>

            <a
              href="/resume/Anant_Salotri_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn resumeBtn"
            >
              ⬇ Resume
            </a>

          </div>

          <div className="heroSocials">

            <a
              href="https://github.com/krxshnaxxd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/anantsalotri07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="scene">
          <Scene />
        </div>

      </section>
    </HeroAnimation>
  );
}