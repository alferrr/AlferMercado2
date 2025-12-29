import { useEffect, useRef } from "react";

import "../App.css";
import { motion } from "motion/react";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

import Carousel from "./Carousel/Carousel.jsx";
import FloatingLines from "./FloatingLines/FloatingLines.jsx";
import Contact from "./Contact.jsx";

import Hci from "../assets/images/hci.png";
import Truth from "../assets/images/truth.png";
import Port from "../assets/images/port.jpeg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

export default function Works() {
  const pageRef = useRef(null);
  const workRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top top",
          end: "bottom+=85% top",
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.fromTo(
        workRef.current,
        { yPercent: 0 },
        { yPercent: -100, ease: "none" }
      );
    });

    return () => ctx.revert();
  }, []);

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

          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="container"
          >
            <img src={Hci} alt="" />
            <div className="text">
              <h3>When the Scrolling Stops</h3>
              <p>Parallax Website made with React + GSAP</p>
              <div className="stack">
                <span className="react">React</span>
                <span className="gsap">GSAP</span>
              </div>
              <a href="https://alferrr.github.io/HCI/" target="_blank">
                View Website <IoMdArrowForward className="icon" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="container"
          >
            <img src={Truth} alt="" />
            <div className="text">
              <h3>Truth Matters</h3>
              <p>Fictional campaign website for Purposive Communication</p>
              <div className="stack">
                <span className="react">React</span>
              </div>

              <a href="https://truthmatters-tau.vercel.app" target="_blank">
                View Website <IoMdArrowForward className="icon" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="container"
          >
            <img src={Port} alt="" />
            <div className="text">
              <h3>First Personal Portfolio</h3>
              <p>
                Personal Portfolio that showcases all the topics covered in
                Introduction to Computing
              </p>
              <div className="stack">
                <span className="html">HTML</span>
                <span className="css">CSS</span>
                <span className="js">Javascript</span>
              </div>

              <a href="https://alferrr.github.io/AlferMercado/" target="_blank">
                View Website <IoMdArrowForward className="icon" />
              </a>
            </div>
          </motion.div>
        </main>
      </section>
    </>
  );
}
