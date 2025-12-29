import { useState, useEffect, useRef } from "react";

import "../App.css";

import GradientButton from "./GradientButton.jsx";
import FloatingLines from "./FloatingLines/FloatingLines.jsx";
import { motion } from "motion/react";

import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import Bg from "../assets/images/contactbg.mov";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  return (
    <>
      <section className="contact" id="contact">
        <div className="gradient"></div>
        <video autoPlay loop playsInline muted>
          <source src={Bg} />
        </video>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="pill"
        >
          <p>Available for Internship</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1>Always learning. Always building.</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="deets"
        >
          <div className="socials">
            <a href="https://instagram.com/alfermercado" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://github.com/alferrr" target="_blank">
              <FaGithubSquare />
            </a>

            <a
              href="https://www.linkedin.com/in/alfer-brent-mercado-094b88206/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="line"></div>

          <div className="phone">
            <FaPhoneAlt />
            +63 976 368 9315
          </div>
        </motion.div>
      </section>
    </>
  );
}
