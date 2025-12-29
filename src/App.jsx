import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Works from "./Components/Works.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Works />
      <Contact />
    </>
  );
}

export default App;
