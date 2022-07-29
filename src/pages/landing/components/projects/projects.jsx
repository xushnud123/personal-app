import { projectsData } from "modules/landing/constants";
import Card from "./card";

import classes from "./projects.module.scss";



const Projects = () => {
  return (
    <div className={classes.wrapper} id='projects'>
      <div className={classes.container}>
        <div className={classes.rows}>
          <h1 className={classes.title}>Projects</h1>
        </div>
        <div className={classes.row}>
          {projectsData.map((item, index) => (
            <Card key={index} {...item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
