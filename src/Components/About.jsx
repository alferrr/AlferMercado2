import React from "react";
import "../App.css";
import { motion } from "motion/react";

import LogoLoop from "./LogoLoop/LogoLoop.jsx";
import Alfer from "../assets/images/Me.JPG";

import { SiC } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";

import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function About() {
  const techLogos = [
    {
      node: <SiC />,
      title: "C",
      href: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
    {
      node: <SiHtml5 />,
      title: "HTML5",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      node: <SiCss3 />,
      title: "CSS3",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      node: <SiJavascript />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      node: <SiBootstrap />,
      title: "Bootstrap",
      href: "https://getbootstrap.com",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    { node: <SiVuedotjs />, title: "Vue", href: "https://vuejs.org/" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  ];
  return (
    <>
      <section className="about" id="about">
        <main>
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text"
          >
            <h1>Meet Alfer</h1>
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <p>
                I am Alfer Mercado, a first-year Information Technology student
                at the University of San Carlos (USC) in Cebu. My focus is on
                web development, where I am dedicated to mastering foundational
                programming and creating functional, well-structured projects. I
                am a curious and proactive learner, consistently seeking new
                challenges and opportunities to apply academic knowledge to
                real-world coding problems. I am ready to learn and eager to
                collaborate.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 0, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="line"></div>

              <LogoLoop
                logos={techLogos}
                speed={40}
                direction="left"
                logoHeight={32}
                gap={60}
                hoverSpeed={10}
                scaleOnHover
                fadeOut
                fadeOutColor="#000000"
                ariaLabel="Skills"
              />

              <div className="line"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <table>
                <tr>
                  <td>College</td>
                  <td>University of San Carlos</td>
                  <td>Current</td>
                </tr>
                <tr>
                  <td>Senior Highschool</td>
                  <td>Indiana Aerospace University</td>
                  <td>2023-2025</td>
                </tr>
                <tr>
                  <td>Junior Highschool</td>
                  <td>University of San Carlos</td>
                  <td>2019-2023</td>
                </tr>
              </table>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="img"
          >
            <img src={Alfer} alt="" />
          </motion.div>
        </main>

        <div className="gradient"></div>
      </section>
    </>
  );
}
