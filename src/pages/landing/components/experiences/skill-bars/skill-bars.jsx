import { skillBarsData } from "modules/landing/constants";
import classes from "./skill-bars.module.scss";

const SkillBars = () => {

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Skill</h1>
      <div className={classes.container}>
        {skillBarsData.map((item, index) => (
          <div key={index} className={classes.card}>
            <div className={classes.title}>{item.name}</div>
            <div className={classes.description}>{item.procent}</div>
            <div className={classes.body}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBars;
