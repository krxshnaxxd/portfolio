"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Personal Portfolio",

    description:
      "A futuristic developer portfolio built with Next.js, React, Three.js, GSAP and Framer Motion. Featuring immersive animations, smooth scrolling, custom cursor and modern UI.",

    live: "#", // <-- Vercel deploy hone ke baad yaha apna live link daal dena

    github: "https://github.com/krxshnaxxd",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
    >
      <motion.h2
        className="sectionTitle textGlow"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
      >
        Projects
      </motion.h2>

      <div className="grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{
              opacity: 0,
              y: 60
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: .6,
              delay: index * .15
            }}
            whileHover={{
              y: -12
            }}
          >

            <div className="liveBadge">
              <div className="liveDot"></div>
              Featured Project
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div
              style={{
                display: "flex",
                gap: "15px",
                marginTop: "30px"
              }}
            >

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: "transparent",
                  border: "1px solid #8b5cf6"
                }}
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}