"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Stats() {

  return (

    <section className="stats">

      <motion.div
        className="statCard"
        whileHover={{ y: -8 }}
      >
        <h2>
          <CountUp end={1} duration={2} />+
        </h2>
        <p>Projects</p>
      </motion.div>

      <motion.div
        className="statCard"
        whileHover={{ y: -8 }}
      >
        <h2>
          <CountUp end={14} duration={2} />+
        </h2>
        <p>Technologies</p>
      </motion.div>

      <motion.div
        className="statCard"
        whileHover={{ y: -8 }}
      >
        <h2>
          <CountUp end={100} duration={2} />%
        </h2>
        <p>Passion</p>
      </motion.div>

    </section>

  );

}