"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [loading, setLoading] = useState(false);

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    try {

      await emailjs.sendForm(

        "YOUR_SERVICE_ID",

        "YOUR_TEMPLATE_ID",

        form,

        "YOUR_PUBLIC_KEY"

      );

      alert("Message Sent Successfully ✅");

      form.reset();

    } catch {

      alert("Failed To Send Message ❌");

    }

    setLoading(false);

  };

  return (

    <section

      id="contact"

      className="section"

    >

      <motion.h2

        className="sectionTitle textGlow"

        initial={{ opacity: 0, y: 40 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: .6 }}

      >

        Contact Me

      </motion.h2>

      <motion.form

        className="contactForm"

        onSubmit={sendEmail}

        initial={{

          opacity: 0,

          y: 50

        }}

        whileInView={{

          opacity: 1,

          y: 0

        }}

        transition={{

          duration: .6

        }}

      >

        <input

          type="text"

          name="user_name"

          placeholder="Your Name"

          required

        />

        <input

          type="email"

          name="user_email"

          placeholder="Your Email"

          required

        />

        <textarea

          name="message"

          placeholder="Your Message"

          required

        />

        <button

          className="btn"

          type="submit"

        >

          {

            loading

              ? "Sending..."

              : "Send Message"

          }

        </button>

      </motion.form>
      <motion.div
  className="contactLinks"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>

  <a
    href="mailto:krishnasharmaxk07@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    📧 Email
  </a>

  <a
    href="https://github.com/krxshnaxxd"
    target="_blank"
    rel="noopener noreferrer"
  >
    💻 GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/anantsalotri07"
    target="_blank"
    rel="noopener noreferrer"
  >
    💼 LinkedIn
  </a>

</motion.div>

    </section>

  );

}