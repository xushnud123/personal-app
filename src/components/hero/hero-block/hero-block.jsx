
import Spline from "@splinetool/react-spline";
import Text from "../text/text";

import classes from './hero-block.module.scss'

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
}
 
export default HeroBlock;