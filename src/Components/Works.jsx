import react from "react";

import "../App.css";

import Hci from "../assets/images/hci.png";
import Truth from "../assets/images/truth.png";

export default function Works() {
  return (
    <>
      <section className="works" id="works">
        <h2>My Works</h2>

        <div className="container">
          <img src={Hci} alt="" />
          <div className="text">
            <h3>When the Scrolling Stops</h3>
            <p>Parallax Website made with React + GSAP</p>
            <div className="stack">
              <span className="react">React</span>
              <span className="gsap">GSAP</span>
            </div>
          </div>
        </div>

        <div className="container">
          <img src={Truth} alt="" />
          <div className="text">
            <h3>Truth Matters</h3>
            <p>Fictional campaign website for Purposive Communication</p>
            <div className="stack">
              <span className="react">React</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
