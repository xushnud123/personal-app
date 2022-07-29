import Spline from "@splinetool/react-spline";

// Projects img
import famic from "assets/img/projects/Screen Shot 2022-07-26 at 20.34.52.png";
import comfi from "assets/img/projects/Screen Shot 2022-07-27 at 00.58.39.png";
import travel from "assets/img/projects/travel.png";
import qrcode from "assets/img/projects/qrcode.png";
import wat from "assets/img/projects/water.png";
import game from "assets/img/projects/game.png";

// Projects data

export const projectsData = [
  {
    img: famic,
    name: "Famic",
    description:
      "Famic helps you find instagram advertising client and blogger.",
    link: "https://www.famic.io/",
  },
  {
    img: comfi,
    name: "Comfi",
    description: "Comfi provides installment payment services to companies.",
    link: "https://comfi.app/",
  },
  {
    img: travel,
    name: "WindTravels",
    description: "About the countries and tickets offered by travel agencies.",
    link: "https://travel-app-two.vercel.app/",
  },
  {
    img: qrcode,
    name: "QrCodeGenerator",
    description:
      "QrCodeGenerator allows customers to transfer links to their pages or personal phone numbers to qr code form.",
    link: "https://qr-code-inky.vercel.app/",
  },
  {
    img: wat,
    name: "Weather",
    description:
      "You can get real-time weather information anywhere in the world.",
    link: "https://weater-to-do-list-shoping-card.vercel.app/",
  },
  {
    img: game,
    name: "Game",
    description: "A 2-player game about who gets to 100.",
    link: "https://draw-game.vercel.app/",
  },
];

// Experiences skillBars data

export const skillBarsData = [
  {
    name: "HTML",
    procent: "90%",
  },
  {
    name: "CSS",
    procent: "90%",
  },
  {
    name: "SCSS",
    procent: "90%",
  },
  {
    name: "JavaScript",
    procent: "85%",
  },
  {
    name: "TypeScript",
    procent: "80%",
  },
  {
    name: "React",
    procent: "85%",
  },
  {
    name: "Redux",
    procent: "80%",
  },
];

// accordion
export const experienceData = [
  {
    name: "HTML",
    ul: (
      <ul>
        <li>Custom fills and gradients.</li>
        <li>Enhancing links and metadata.</li>
        <li>Cascading style sheets.</li>
        <li>Inline, internal and external styles.</li>
      </ul>
    ),
    img: (
      <Spline scene="https://prod.spline.design/5AXAgaNWFIGhpINN/scene.splinecode" />
    ),
  },
  {
    name: "Css (library:Scss)",
    ul: (
      <ul>
        <li>CSS: I know how to create beautiful typography in CSS.</li>
        <li>Create modern layouts using Grid and Flexbox.</li>
        <li>
          Create new projects in plain, vanilla CSS without using templates,
          frames or plugins.
        </li>
        <li>Media Query skills for responsive screens.</li>
        <li>
          Scss: Knowledge of SASS basics: variables, nesting, mixins,
          extensions, functions, placeholder selectors, etc...
        </li>
      </ul>
    ),
    img: (
      <Spline scene="https://prod.spline.design/GESuEuytA1uXKWx9/scene.splinecode" />
    ),
  },
  {
    name: "JavaScript",
    ul: (
      <ul>
        <li>
          Ability to perform mathematical calculations using literals and
          arithmetic operators Ability to use variables, I have the skills to
          reuse code using functions.
        </li>
        <li>
          ES6 Features Skills - Module, let, const, Arrow Function and Template
          String Literals.
        </li>
        <li>
          Learn to work with Numbers, Strings, Arrays and Dates HTML and CSS
          manipulation skills using the Document Object Model (DOM).
        </li>
        <li>
          Skills to perform data retrieval from the network using JSON,
          XMLHttpRequest and Fetch, I know the basics of HTTP protocol and HTTP
          method types.
        </li>
      </ul>
    ),
    img: (
      <Spline scene="https://prod.spline.design/QyhWXG48HgkeHmcq/scene.splinecode" />
    ),
  },
  {
    name: "React js",
    ul: (
      <ul>
        <li>Modern JavaScript features</li>
        <li>Skills to create reusable parts</li>
        <li>
          Skills for working with tables and lists with paging, sorting and
          searching
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
    ),
    img: (
      <Spline scene="https://prod.spline.design/uiqTdTXC2WFXL-2b/scene.splinecode" />
    ),
  }
];
