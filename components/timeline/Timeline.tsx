"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Started Web Development",
    desc: "Started learning HTML, CSS and JavaScript."
  },
  {
    year: "2025",
    title: "React & Next.js",
    desc: "Built modern web applications using React and Next.js."
  },
  {
    year: "2026",
    title: "3D Portfolio",
    desc: "Created an immersive portfolio using Three.js, GSAP and Framer Motion."
  },
  {
    year: "Next Goal 🚀",
    title: "Frontend Internship",
    desc: "Looking for opportunities to build impactful products."
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="section">

      <h2 className="sectionTitle textGlow">
        My Journey
      </h2>

      <div className="timeline">

        {timeline.map((item, index) => (

          <motion.div
            key={index}
            className="timelineItem"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
          >

            <div className="timelineDot"></div>

            <div className="timelineContent">

              <span>{item.year}</span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}