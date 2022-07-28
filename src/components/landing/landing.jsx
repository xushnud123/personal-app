import { useState, useEffect } from "react";
import cx from "classnames";

import Hero from "../hero/hero";
import About from "../about/about";

import classes from "./landing.module.scss";
import Experiences from "../experiences/experiences";
import Contact from "../contact/contact";
import Projects from "../projects/projects";
import Navbar from "../navbar/navbar";

const Landing = () => {
  const [open, setOpen] = useState();
  const [scrollDirection, setScrollDirection] = useState(false);
  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      scrollY > 0 ? setScrollDirection(true) : setScrollDirection(false);
    };

    window.addEventListener("scroll", () => updateScrollDirection()); // add event listener
    return () => {
      window.removeEventListener("scroll", () => updateScrollDirection()); // clean up
    };
  }, [scrollDirection]);


  return (
    <div className={cx(classes.wrapper, scrollDirection && classes.active)}>
      <div className={cx(classes.row)}>
        <Navbar open={open} onOpen={setOpen} />
      </div>
      <div className={classes.container}>
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Landing;
