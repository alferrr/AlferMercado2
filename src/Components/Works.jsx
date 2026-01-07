import { useEffect, useRef } from "react";

import "../App.css";
import { motion } from "motion/react";

import Carousel from "./Carousel/Carousel.jsx";
import FloatingLines from "./FloatingLines/FloatingLines.jsx";
import Contact from "./Contact.jsx";

import Hci from "../assets/images/hci.png";
import Truth from "../assets/images/truth.png";
import Port from "../assets/images/port.jpeg";
import Cvue from "../assets/images/Cvue.png";

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { stack } from "three/tsl";

export default function Works() {
  const projects = [
    {
      id: 1,
      image: Hci,
      title: "When the Scrolling Stops",
      description: "Parallax Website made with React + GSAP",
      stack: ["React", "GSAP"],
      link: "https://alferrr.github.io/HCI/",
    },

    {
      id: 2,
      image: Truth,
      title: "Truth Matters",
      description: "Fictional campaign website for Purposive Communication",
      stack: ["React"],
      link: "https://truthmatters-tau.vercel.app",
    },

    {
      id: 3,
      image: Cvue,
      title: "CVue",
      description:
        "A modern resume builder built with Vue that lets users create professional resumes with real-time preview and instant PDF export.",
      stack: ["Vue"],
      link: "https://cvue-nine.vercel.app/",
    },

    {
      id: 4,
      image: Port,
      title: "First Personal Portfolio",
      description:
        "Personal Portfolio that showcases all the topics covered in Introduction to Computing",
      stack: ["HTML", "CSS", "Javascript"],
      link: "",
    },
  ];
  return (
    <>
      <section>
        <main className="works" id="projects">
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2>My Works</h2>
          </motion.div>

          {projects.map((projects) => (
            <motion.div
              key={projects.id}
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="container"
            >
              <img src={projects.image} alt="" />
              <div className="text">
                <h3>{projects.title}</h3>
                <p>{projects.description}</p>
                <div className="stack">
                  {projects.stack.map((stack) => (
                    <span key={stack} className={stack.toLowerCase()}>
                      {stack}
                    </span>
                  ))}
                </div>

                <a
                  href={projects.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Website <IoMdArrowForward className="icon" />
                </a>
              </div>
            </motion.div>
          ))}
        </main>
      </section>
    </>
  );
}
