import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import cx from "classnames";
import Accordion from "./components/Accordion";
import classes from "./experience..module.scss";

const Experience = () => {
  const [open, setOpen] = useState();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.cards}>
            <div className={classes.card}>
              <div className={classes.left}>
                <Spline scene="https://prod.spline.design/5AXAgaNWFIGhpINN/scene.splinecode" />
              </div>
              <div className={classes.right} onClick={() => setOpen(!open)}>
                <h1>HTML</h1>
                <p className={cx(open && classes.active)}>
                  Hypertext Markup Language, a standardized system for tagging
                  text files to achieve font, colour, graphic, and hyperlink
                  effects on World Wide Web pages.
                </p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.left}>
                <Spline scene="https://prod.spline.design/GESuEuytA1uXKWx9/scene.splinecode" />
              </div>
              <div className={classes.right}>
                <h1>Css (library:Scss)</h1>
                <p>
                  Css: I know how to create beautiful typography in CSS, create
                  modern layouts using Grid and Flexbox, create new projects in
                  plain, vanilla CSS without using templates, frames or plugins,
                  and Media Query skills for responsive screens.
                  <br />
                  Scss: Knowledge of SASS basics: variables, nesting, mixins,
                  extensions, functions, placeholder selectors, etc...
                </p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.left}>
                <Spline scene="https://prod.spline.design/QyhWXG48HgkeHmcq/scene.splinecode" />
              </div>
              <div className={classes.right}>
                <h1>JavaScript</h1>
                <p>
                  Ability to perform mathematical calculations using literals
                  and arithmetic operators Ability to use variables, I have the
                  skills to reuse code using functions. ES6 Features Skills -
                  Module, let, const, Arrow Function and Template String
                  Literals. Learn to work with Numbers, Strings, Arrays and
                  Dates HTML and CSS manipulation skills using the Document
                  Object Model (DOM), Skills to perform data retrieval from the
                  network using JSON, XMLHttpRequest and Fetch, I know the
                  basics of HTTP protocol and HTTP method types.
                </p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.left}>
                <Spline scene="https://prod.spline.design/uiqTdTXC2WFXL-2b/scene.splinecode" />
              </div>
              <div className={classes.right}>
                <h1>React js</h1>
                <p>
                  Hypertext Markup Language, a standardized system for tagging
                  text files to achieve font, colour, graphic, and hyperlink
                  effects on World Wide Web pages.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.accordions}>
            <Accordion
              title="HTML"
              content="Hypertext Markup Language, a standardized system for tagging
                  text files to achieve font, colour, graphic, and hyperlink
                  effects on World Wide Web pages."
            />
            <Accordion
              title="Css (library:Scss)"
              content="Css: I know how to create beautiful typography in CSS, create
                  modern layouts using Grid and Flexbox, create new projects in
                  plain, vanilla CSS without using templates, frames or plugins,
                  and Media Query skills for responsive screens.
                  <br />
                  Scss: Knowledge of SASS basics: variables, nesting, mixins,
                  extensions, functions, placeholder selectors, etc...."
            />
            <Accordion
              title="JavaScript"
              content="Ability to perform mathematical calculations using literals
                  and arithmetic operators Ability to use variables, I have the
                  skills to reuse code using functions. ES6 Features Skills -
                  Module, let, const, Arrow Function and Template String
                  Literals. Learn to work with Numbers, Strings, Arrays and
                  Dates HTML and CSS manipulation skills using the Document
                  Object Model (DOM), Skills to perform data retrieval from the
                  network using JSON, XMLHttpRequest and Fetch, I know the
                  basics of HTTP protocol and HTTP method types."
            />
            <Accordion
              title="React js"
              content="Hypertext Markup Language, a standardized system for tagging
                  text files to achieve font, colour, graphic, and hyperlink
                  effects on World Wide Web pages."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
