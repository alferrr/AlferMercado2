import React from "react";
import "../App.css";
import { motion } from "motion/react";
import SplitText from "./SplitText/SplitText.jsx";

import GradientButton from "./GradientButton.jsx";
import Snowfall from "react-snowfall";

import Plasma from "./Plasma/Plasma.jsx";
import FloatingLines from "./FloatingLines/FloatingLines.jsx";

import Logo from "../assets/images/favicon1.png";

export default function Hero() {
  return (
    <>
      <section className="hero" id="hero">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={[10, 15, 20]}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          linesGradient={["#ffffff", "#121212"]}
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
            <SplitText
              text="Alfer Brent Mercado"
              className="h1"
              delay={100}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40, filter: "blur(5px)" }}
              to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
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
