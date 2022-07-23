import { useState } from "react";
import cx from "classnames";
import Text from "./text/text";
import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Spline from "@splinetool/react-spline";

import logo from "../../assets/img/hero/text.svg";

import classes from "./hero.module.scss";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cx(classes.wrapper, open && classes.fixed)}>
      <div className={classes.container}>
        <div className={classes.navbar}>
          <div className={classes.logo}>
            <img src={logo} alt="img not found" />
            <div className={classes.btn} onClick={() => setOpen(!open)}>
              {open ? <AiOutlineClose /> : <AiOutlineAlignRight />}
            </div>
          </div>
          <div className={cx(classes.nav, open && classes.active)}>
            <ul>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">My Experience</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.hero}>
          <div className={classes.left}>
            <h1>My name is Xushnudbek.</h1>
            <div className={classes.text_wrap}>
              <h1 className={classes.text}>
                I am a <Text />
              </h1>
              <h1 className={classes.text}> Developer</h1>
            </div>
            <button className={classes.btn}>Contact</button>
          </div>
          <div className={classes.right}>
            {/* <div className={classes.rocket_1}>
              <Spline scene="https://prod.spline.design/Q60MvKMpYjjytv3x/scene.splinecode" />
            </div>
            <div className={classes.rocket_2}>
              <Spline scene="https://prod.spline.design/JK1Kh-y13ZDjbsH3/scene.splinecode" />
            </div> */}
            {/* <div className={classes.rocket_3}>
              <Spline scene="https://prod.spline.design/JK1Kh-y13ZDjbsH3/scene.splinecode" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
