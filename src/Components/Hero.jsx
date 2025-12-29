import React from "react";
import "../App.css";
import { motion } from "motion/react";

import GradientButton from "./GradientButton.jsx";
import Snowfall from "react-snowfall";

import Plasma from "./Plasma/Plasma.jsx";

import Logo from "../assets/images/favicon1.png";

export default function Hero() {
  return (
    <>
      <section className="hero" id="hero">
        <Plasma
          color="#ffffff"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.5}
          mouseInteractive={true}
          className="herobg"
        />
        <header>
          <img src={Logo} alt="Logo" />
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </header>
        <main>
          <motion.div
            initial={{ opacity: 0, y: 0, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="pill"
          >
            <p>USC IT Student & Aspiring Web Developer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h1>Alfer Brent Mercado</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="p"
          >
            <p>
              USC IT student dedicated to web development. Turning academic
              knowledge into functional, high-quality digital projects.
            </p>
          </motion.div>
        </main>

        <motion.div
          initial={{ opacity: 0, y: 0, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <nav>
            <GradientButton href="#projects">View My Projects</GradientButton>
            <GradientButton href="#projects">
              See My Code | Github
            </GradientButton>
          </nav>
        </motion.div>

        <div className="gradient"></div>
      </section>
    </>
  );
}
