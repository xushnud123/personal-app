import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import cx from "classnames";
import Accordion from "./components/Accordion";
import classes from "./experience.module.scss";

const Experience = () => {
  const [open, setOpen] = useState();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1>Detailed</h1>
        <div className={classes.row}>
          <div className={classes.cards}>
            <div className={classes.card}>
              <div className={classes.left}>
                <Spline scene="https://prod.spline.design/5AXAgaNWFIGhpINN/scene.splinecode" />
              </div>
              <div className={classes.right} onClick={() => setOpen(!open)}>
                <h1>HTML</h1>
                <ul>
                  <li>Custom fills and gradients.</li>
                  <li>Enhancing links and metadata.</li>
                  <li>Cascading style sheets.</li>
                  <li>Inline, internal and external styles.</li>
                </ul>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.left}>
                <Spline scene="https://prod.spline.design/GESuEuytA1uXKWx9/scene.splinecode" />
              </div>
              <div className={classes.right}>
                <h1>Css (library:Scss)</h1>
                <ul>
                  <li>
                    CSS: I know how to create beautiful typography in CSS.
                  </li>
                  <li>Create modern layouts using Grid and Flexbox.</li>
                  <li>
                    Create new projects in plain, vanilla CSS without using
                    templates, frames or plugins.
                  </li>
                  <li>Media Query skills for responsive screens.</li>
                  <li>
                    Scss: Knowledge of SASS basics: variables, nesting, mixins,
                    extensions, functions, placeholder selectors, etc...
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.left}>
                <Spline scene="https://prod.spline.design/QyhWXG48HgkeHmcq/scene.splinecode" />
              </div>
              <div className={classes.right}>
                <h1>JavaScript</h1>
                <ul>
                  <li>
                    Ability to perform mathematical calculations using literals
                    and arithmetic operators Ability to use variables, I have
                    the skills to reuse code using functions.
                  </li>
                  <li>
                    ES6 Features Skills - Module, let, const, Arrow Function and
                    Template String Literals.
                  </li>
                  <li>
                    Learn to work with Numbers, Strings, Arrays and Dates HTML
                    and CSS manipulation skills using the Document Object Model
                    (DOM).
                  </li>
                  <li>
                    Skills to perform data retrieval from the network using
                    JSON, XMLHttpRequest and Fetch, I know the basics of HTTP
                    protocol and HTTP method types.
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.left}>
                <Spline scene="https://prod.spline.design/uiqTdTXC2WFXL-2b/scene.splinecode" />
              </div>
              <div className={classes.right}>
                <h1>React js</h1>
                <ul>
                  <li>Modern JavaScript features</li>
                  <li>Skills to create reusable parts</li>
                  <li>
                    Skills for working with tables and lists with paging,
                    sorting and searching
                  </li>
                  <li>Skills to create forms with validation</li>
                  <li>Skills to implement routing with React Router</li>
                  <li>Skills for calling HTTP services with Axios</li>
                  <li>Skills to implement authentication and authorization</li>
                  <li>Effective error management and logging</li>
                  <li>All about function components and hooks</li>
                  <li>Sharing data using React Context</li>
                  <li>Write clean, maintainable code like a pro</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.accordions}>
            <Accordion
              title="HTML"
              content="<ul>
                  <li>Custom fills and gradients.</li>
                  <li>Enhancing links and metadata.</li>
                  <li>Cascading style sheets.</li>
                  <li>Inline, internal and external styles.</li>
                </ul>"
            />
            <Accordion
              title="Css (library:Scss)"
              content=" <ul>
                  <li>
                    CSS: I know how to create beautiful typography in CSS.
                  </li>
                  <li>Create modern layouts using Grid and Flexbox.</li>
                  <li>
                    Create new projects in plain, vanilla CSS without using
                    templates, frames or plugins.
                  </li>
                  <li>Media Query skills for responsive screens.</li>
                  <li>
                    Scss: Knowledge of SASS basics: variables, nesting, mixins,
                    extensions, functions, placeholder selectors, etc...
                  </li>
                </ul>"
            />
            <Accordion
              title="JavaScript"
              content="<ul>
                  <li>
                    Ability to perform mathematical calculations using literals
                    and arithmetic operators Ability to use variables, I have
                    the skills to reuse code using functions.
                  </li>
                  <li>
                    ES6 Features Skills - Module, let, const, Arrow Function and
                    Template String Literals.
                  </li>
                  <li>
                    Learn to work with Numbers, Strings, Arrays and Dates HTML
                    and CSS manipulation skills using the Document Object Model
                    (DOM).
                  </li>
                  <li>
                    Skills to perform data retrieval from the network using
                    JSON, XMLHttpRequest and Fetch, I know the basics of HTTP
                    protocol and HTTP method types.
                  </li>
                </ul>"
            />
            <Accordion
              title="React js"
              content="
             <ul>
                  <li>Modern JavaScript features</li>
                  <li>Skills to create reusable parts</li>
                  <li>
                    Skills for working with tables and lists with paging,
                    sorting and searching
                  </li>
                  <li>Skills to create forms with validation</li>
                  <li>Skills to implement routing with React Router</li>
                  <li>Skills for calling HTTP services with Axios</li>
                  <li>Skills to implement authentication and authorization</li>
                  <li>Effective error management and logging</li>
                  <li>All about function components and hooks</li>
                  <li>Sharing data using React Context</li>
                  <li>Write clean, maintainable code like a pro</li>
                </ul>"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
