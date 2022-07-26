import famic from "../../assets/img/projects/Screen Shot 2022-07-26 at 20.34.52.png";
import comfi from '../../assets/img/projects/Screen Shot 2022-07-27 at 00.58.39.png'
import travel from '../../assets/img/projects/travel.png'
import qrcode from '../../assets/img/projects/qrcode.png'
import wather from '../../assets/img/projects/water.png'
import game from '../../assets/img/projects/game.png'

import classes from "./projects.module.scss";

const Projects = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.rows}>
          <h1 className={classes.title}>Projects</h1>
        </div>
        <div className={classes.row}>
        <div className={classes.card}>
          <div className={classes.wrap}>
            <div className={classes.header}>
              <img src={famic} alt="img not found" />
              <div className={classes.links}>
                <a href="https://www.famic.io/">Link</a>
              </div>
            </div>
            <div className={classes.body}>
              <div className={classes.name_wrap}>
                {/* <h2 className={classes.name}>Name:</h2> */}
                <h1 className={classes.title}>Famic</h1>
              </div>
              <p className={classes.description}>
                <span>Target:</span> Famic helps you find instagram advertising
                client and blogger.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.wrap}>
            <div className={classes.header}>
              <img src={comfi} alt="img not found" />
              <div className={classes.links}>
                <a href="https://comfi.app/">Link</a>
              </div>
            </div>
            <div className={classes.body}>
              <div className={classes.name_wrap}>
                {/* <h2 className={classes.name}>Name:</h2> */}
                <h1 className={classes.title}>Comfi</h1>
              </div>
              <p className={classes.description}>
                <span>Target:</span> Comfi provides installment payment services
                to companies
              </p>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.wrap}>
            <div className={classes.header}>
              <img src={travel} alt="img not found" />
              <div className={classes.links}>
                <a href="https://travel-app-two.vercel.app/">Link</a>
              </div>
            </div>
            <div className={classes.body}>
              <div className={classes.name_wrap}>
                {/* <h2 className={classes.name}>Name:</h2> */}
                <h1 className={classes.title}>WindTravels</h1>
              </div>
              <p className={classes.description}>
                <span>Target:</span> About the countries and tickets offered by
                travel agencies
              </p>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.wrap}>
            <div className={classes.header}>
              <img src={qrcode} alt="img not found" />
              <div className={classes.links}>
                <a href="https://qr-code-inky.vercel.app/">Link</a>
              </div>
            </div>
            <div className={classes.body}>
              <div className={classes.name_wrap}>
                {/* <h2 className={classes.name}>Name:</h2> */}
                <h1 className={classes.title}>QrCodeGenerator</h1>
              </div>
              <p className={classes.description}>
                <span>Target:</span> QrCodeGenerator allows customers to
                transfer links to their pages or personal phone numbers to qr
                code form
              </p>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.wrap}>
            <div className={classes.header}>
              <img src={wather} alt="img not found" />
              <div className={classes.links}>
                <a href="https://weater-to-do-list-shoping-card.vercel.app/">
                  Link
                </a>
              </div>
            </div>
            <div className={classes.body}>
              <div className={classes.name_wrap}>
                {/* <h2 className={classes.name}>Name:</h2> */}
                <h1 className={classes.title}>Weather</h1>
              </div>
              <p className={classes.description}>
                <span>Target:</span> You can get real-time weather information
                anywhere in the world
              </p>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.wrap}>
            <div className={classes.header}>
              <img src={game} alt="img not found" />
              <div className={classes.links}>
                <a href="https://draw-game.vercel.app/">Link</a>
              </div>
            </div>
            <div className={classes.body}>
              <div className={classes.name_wrap}>
                {/* <h2 className={classes.name}>Name:</h2> */}
                <h1 className={classes.title}>Game</h1>
              </div>
              <p className={classes.description}>
                <span>Target:</span> A 2-player game about who gets to 100 first
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
