"use client";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer className="footer">

      <h2
        className="textGlow"
        style={{
          fontSize: "34px",
          marginBottom: "18px",
        }}
      >
        Anant Salotri
      </h2>

      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto 30px",
          color: "#9e9e9e",
          lineHeight: "1.8",
        }}
      >
        Frontend Developer passionate about building
        modern, animated and immersive web experiences
        using React, Next.js and Three.js.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          fontSize: "26px",
          marginBottom: "35px",
        }}
      >
        <a
  href="https://github.com/krxshnaxxd"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
>
  <FaGithub />
</a>

<a
  href="https://www.linkedin.com/in/anantsalotri07/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <FaLinkedin />
</a>

        
        
      </div>

      <p>

        © {new Date().getFullYear()} Anant Salotri

Built with ❤️ using React • Next.js • Three.js

      </p>

    </footer>

  );

}