"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="section"
    >
      <motion.h2
        className="sectionTitle textGlow"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr .8fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <motion.div
          className="card"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "32px",
            }}
          >
            Who am I?
          </h3>

         <p>
I&apos;m <b>Anant Salotri</b>, a passionate Frontend Developer
who loves creating modern, interactive and immersive web
experiences.
</p>

          <br />

          <p>
            I mainly work with React, Next.js,
            TypeScript and Three.js to build
            high-quality user interfaces.
          </p>

          <br />

          <p>
            My goal is to create beautiful,
            fast and responsive websites.
          </p>
        </motion.div>

        <motion.div
          className="card glow"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3
            style={{
              marginBottom: "25px",
              fontSize: "28px",
            }}
          >
            Quick Info
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <span>🎓 BCA Student</span>

            <span>📍 India</span>

            <span>💻 Frontend Developer</span>

            <span>⚡ Three.js Enthusiast</span>

            <span>🚀 Learning Full Stack</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}