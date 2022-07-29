import { Link } from "react-scroll";
import Text from "../text/text";

import rocket from 'assets/img/hero/landing-rocket@2x.webp'

import classes from "./hero-block.module.scss";

const HeroBlock = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.hero}>
          <div className={classes.left}>
            <h1>My name is Xushnudbek.</h1>
            <div className={classes.text_wrap}>
              <h1 className={classes.text}>
                I am a <Text />
              </h1>
              <h1 className={classes.text}> Developer</h1>
            </div>
            <Link
              to="contacts"
              spy
              smooth
              offset={0}
              duration={2000}
              type="button"
              className={classes.btn}
            >
              Contact
            </Link>
          </div>
          <div className={classes.right}>
            <img src={rocket} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
