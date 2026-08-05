"use client";

import Link from "next/link";
import Image from "next/image";
import useActiveSection from "@/components/hooks/useActiveSection";
export default function Navbar() {

  const active = useActiveSection();

  return (

    <nav className="navbar">

      <Link href="/" className="logo">

        <div className="logoWrapper">

          <Image
            src="/logo/avatar.png"
            alt="Avatar"
            width={52}
            height={52}
            className="logoAvatar"
            priority
          />

          <span className="textGlow">
            HOWDY
          </span>

        </div>

      </Link>

      <div className="links">

        <a
          href="#hero"
          className={active === "hero" ? "active" : ""}
        >
          Home
        </a>

        <a
          href="#about"
          className={active === "about" ? "active" : ""}
        >
          About
        </a>

        <a
          href="#skills"
          className={active === "skills" ? "active" : ""}
        >
          Skills
        </a>

        <a
          href="#projects"
          className={active === "projects" ? "active" : ""}
        >
          Projects
        </a>

        <a
          href="/resume/Anant_Salotri_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        <a
          href="#contact"
          className={active === "contact" ? "active" : ""}
        >
          Contact
        </a>

      </div>

    </nav>

  );
}