import { useState } from "react";
import cx from "classnames";
import classes from "./experiences.module.scss";
import SkillBars from "./skill-bars/skill-bars";
import Experience from "./experience/experience";

const Experiences = () => {
  const [active, setActive] = useState(true);

  return (
    <div className={classes.wrapper} id="experience">
      <div className={classes.rows}>
        <h1 className={classes.title}>my experience</h1>
      </div>
      <div className={classes.switch}>
        <div
          className={cx(classes.card, active && classes.active)}
          onClick={() => setActive(!active)}
        >
          <h1 className={classes.title}>Procent</h1>
        </div>
        <div
          className={cx(classes.card, !active && classes.active)}
          onClick={() => setActive(!active)}
        >
          <h1 className={classes.title}>detailed</h1>
        </div>
      </div>
      {active ? <SkillBars /> : <Experience />}
    </div>
  );
};

export default Experiences;
