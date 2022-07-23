import Spline from "@splinetool/react-spline";
import classes from "./about.module.scss";

const About = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.left}>
            {/* <div className={classes.spline_1}>
              <Spline scene="https://prod.spline.design/fkTeJ93YL-4AJ7Og/scene.splinecode" />
            </div>
            <div className={classes.spline_3}>
              <Spline scene="https://prod.spline.design/EalkE8Y83C51HwDA/scene.splinecode" />
            </div>
            <div className={classes.spline_2}>
              <Spline scene="https://prod.spline.design/qysRJMoPel1t9HjJ/scene.splinecode" />
            </div> */}
          </div>
          <div className={classes.right}>
            <div className={classes.card}>
              <h1>My Story</h1>
              <p>
                Hello, my name is Xushnudbek. I was born in 2000 in Bukhara
                region.
                <br />
                After graduating from high school, I studied at Vobkent
                Construction and Vocational College. Finally, in 2019, I entered
                Tashkent University of Information Technologies. After that, my
                programming life began.
              </p>
            </div>
            <div className={classes.card}>
              <h1>My Way of programming</h1>
              <p>
                I became interested in programming after I entered the
                university. And I have been doing it regularly. During this
                time, I completed the courses of several world-famous teachers
                (Mosh Hamadani, Kent C. Dodds, Jonas Schmedtmann). And these
                courses made me Frontend programming made a great contribution
                to my education in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
