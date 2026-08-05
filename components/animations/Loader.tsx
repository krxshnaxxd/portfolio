"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2300);

    return () => clearTimeout(timer);

  }, []);

  return (

    <AnimatePresence>

      {loading && (

        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .8 }}
        >

          <motion.div

            className="loaderContent"

            initial={{
              opacity: 0,
              scale: .9
            }}

            animate={{
              opacity: 1,
              scale: 1
            }}

            transition={{
              duration: .8
            }}

          >

            <motion.div

              animate={{
                rotate: [0, 4, -4, 0],
                y: [0, -6, 0],
                scale: [1, 1.03, 1]
              }}

              transition={{
                duration: 3,
                repeat: Infinity
              }}

            >

              <Image
                src="/logo/avatar.png"
                alt="Avatar"
                width={120}
                height={120}
                priority
                className="loaderAvatar"
              />

            </motion.div>
<motion.h1

  className="loaderTitle"

  animate={{
    opacity:[.4,1,.4],
    scale:[1,1.05,1]
  }}

  transition={{
    duration:1.5,
    repeat:Infinity
  }}

>

  LWKY HYPING UP ⚡

</motion.h1>

            <motion.p

              className="loaderSubtitle"

              initial={{
                opacity: 0,
                y: 15
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                delay: .4
              }}

            >

              Crafting immersive digital experiences.

            </motion.p>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}