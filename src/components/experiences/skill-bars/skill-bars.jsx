import classes from "./skill-bars.module.scss";

const SkillBars = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Skill</h1>
      <div className={classes.container}>
        <div className={classes.card}>
          <div className={classes.title}>HTML</div>
          <div className={classes.description}>90%</div>
          <div className={classes.body}></div>
        </div>
        <div className={classes.card}>
          <div className={classes.title}>CSS</div>
          <div className={classes.description}>90%</div>
          <div className={classes.body}></div>
        </div>
        <div className={classes.card}>
          <div className={classes.title}>SASS</div>
          <div className={classes.description}>90%</div>
          <div className={classes.body}></div>
        </div>
        <div className={classes.card}>
          <div className={classes.title}>JavaScript</div>
          <div className={classes.description}>85%</div>
          <div className={classes.body}></div>
        </div>
        <div className={classes.card}>
          <div className={classes.title}>TypeScript</div>
          <div className={classes.description}>80%</div>
          <div className={classes.body}></div>
        </div>
        <div className={classes.card}>
          <div className={classes.title}>React js</div>
          <div className={classes.description}>85%</div>
          <div className={classes.body}></div>
        </div>
        <div className={classes.card}>
          <div className={classes.title}>Redux</div>
          <div className={classes.description}>80%</div>
          <div className={classes.body}></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBars;
