import famic from "../../assets/img/projects/Screen Shot 2022-07-26 at 20.34.52.png";
import comfi from "../../assets/img/projects/Screen Shot 2022-07-27 at 00.58.39.png";
import travel from "../../assets/img/projects/travel.png";
import qrcode from "../../assets/img/projects/qrcode.png";
import wat from "../../assets/img/projects/water.png";
import game from "../../assets/img/projects/game.png";

import classes from "./projects.module.scss";

const data = [
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

const Projects = () => {
  return (
    <div className={classes.wrapper} id='projects'>
      <div className={classes.container}>
        <div className={classes.rows}>
          <h1 className={classes.title}>Projects</h1>
        </div>
        <div className={classes.row}>
          {data.map((item, index) => (
            <div key={index} className={classes.card}>
              <div className={classes.wrap}>
                <div className={classes.header}>
                  <img src={item.img} alt="img not found" />
                  <div className={classes.links}>
                    <a href={item.link}>Link</a>
                  </div>
                </div>
                <div className={classes.body}>
                  <div className={classes.name_wrap}>
                    <h1 className={classes.title}>{item.name}</h1>
                  </div>
                  <p className={classes.description}>
                    <span>Target:</span> {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
