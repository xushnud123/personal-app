import { useState, useEffect } from "react";
import cx from "classnames";

import {
  Navbar,
  Hero,
  About,
  Experiences,
  Projects,
  Contact,
} from "./components";

import classes from "./landing.module.scss";

const Landing = () => {
  const [open, setOpen] = useState();
  const [scrollDirection, setScrollDirection] = useState(false);

  useEffect(() => {
    const updateScrollDirection = () =>
      window.scrollY > 0 ? setScrollDirection(true) : setScrollDirection(false);

    window.addEventListener("scroll", () => updateScrollDirection()); // add event listener
    return () => {
      window.removeEventListener("scroll", () => updateScrollDirection()); // clean up
    };
  }, [scrollDirection]);

  return (
    <div className={cx(classes.wrapper)}>
      <div className={cx(classes.row, scrollDirection && classes.active)}>
        <Navbar open={open} onOpen={setOpen} active={scrollDirection} />
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
