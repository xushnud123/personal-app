import Spline from "@splinetool/react-spline";
import classes from "./about.module.scss";

const About = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.left}>
            <div className={classes.spline_1}>
              <Spline scene="https://prod.spline.design/fkTeJ93YL-4AJ7Og/scene.splinecode" />
            </div>
            <div className={classes.spline_3}>
              <Spline scene="https://prod.spline.design/EalkE8Y83C51HwDA/scene.splinecode" />
            </div>
            <div className={classes.spline_2}>
              <Spline scene="https://prod.spline.design/qysRJMoPel1t9HjJ/scene.splinecode" />
            </div>
          </div>
          <div className={classes.right}>
            <h1>My Initial Information</h1>
            <p>
              Hello, my name is Xushnudbek. I have been working as a Frontend
              Developer for more than 1 year. And I tried to master many
              programming technologies in the meantime. Among them, I mastered
              HTML, Css, JavaScript and many other such technologies, in detail
              "My Experience". And with that, I am a student of Tashkent
              University of Information Technologies since 2019. Besides
              programming, I regularly play football and table tennis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
