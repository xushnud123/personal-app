import React, { useState } from "react";
import { experienceData } from "modules/landing/constants";
import { Accordion } from "components";
import classes from "./experience.module.scss";

const Experience = () => {
  const [open, setOpen] = useState();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1>Detailed</h1>
        <div className={classes.row}>
          <div className={classes.cards}>
            {experienceData.map((item, index) => (
              <div key={index} className={classes.card}>
                <div className={classes.left}>{item.img}</div>
                <div className={classes.right} onClick={() => setOpen(!open)}>
                  <h1>{item.name}</h1>
                  {item.ul}
                </div>
              </div>
            ))}
          </div>
          <div className={classes.accordions}>
            {experienceData.map((item, index) => (
              <Accordion key={index} title={item.name} content={item.ul} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
