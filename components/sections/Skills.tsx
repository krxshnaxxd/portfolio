"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiThreedotjs,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    icon: <FaReact />,
    name: "React",
  },

  {
    icon: <SiNextdotjs />,
    name: "Next.js",
  },

  {
    icon: <SiTypescript />,
    name: "TypeScript",
  },

  {
    icon: <SiJavascript />,
    name: "JavaScript",
  },

  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
  },

  {
    icon: <SiThreedotjs />,
    name: "Three.js",
  },

  {
    icon: <FaNodeJs />,
    name: "Node.js",
  },

  {
    icon: <SiMongodb />,
    name: "MongoDB",
  },

  {
    icon: <FaGithub />,
    name: "GitHub",
  },
];

export default function Skills() {

  return (

    <section
      id="skills"
      className="section"
    >

      <motion.h2

        className="sectionTitle textGlow"

        initial={{ opacity: 0, y: 50 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: .6 }}

      >

        Skills

      </motion.h2>

      <div className="skillsGrid">

        {

          skills.map((skill, index) => (

            <motion.div

              key={index}

              className="skillCard"

              initial={{

                opacity: 0,

                y: 40

              }}

              whileInView={{

                opacity: 1,

                y: 0

              }}

              transition={{

                duration: .5,

                delay: index * .08

              }}

              whileHover={{

                y: -10,

                scale: 1.05

              }}

            >

              <div className="skillIcon">

                {skill.icon}

              </div>

              <span>

                {skill.name}

              </span>

            </motion.div>

          ))

        }

      </div>

    </section>

  );

}