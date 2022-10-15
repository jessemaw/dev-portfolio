import React from "react";
import { useState } from "react";
import designSkills from "./designSkills";
import developerSkills from "./developerSkills";
import classes from "./Skills.module.css";

const Skills = () => {
  const [design, setDesign] = useState(true);
  const [developer, setDeveloper] = useState(false);

  const slideHandler = () => {
    setDesign(true);
    setDeveloper(false);
  };

  const devHandler = () => {
    setDeveloper(true);
    setDesign(false);
  };

  const desSkill = designSkills.map((designSkill) => (
    <div className={classes.skill}>
      <p className={classes.skillLabel}>{designSkill}</p>
    </div>
  ));

  const devSkill = developerSkills.map((developerSkill) => (
    <div className={classes.skill}>
      <p className={classes.skillLabel}>{developerSkill}</p>
    </div>
  ));

  return (
    <div className={classes.skillBox}>
      {design && (
        <React.Fragment>
          <div className={classes.box}>
            <div className={classes.titleContainer}>
              <h2 className={classes.title}>DESIGN</h2>
            </div>
          </div>
          <div className={classes.skillContainer}>{desSkill.slice(0, 3)}</div>
          <div className={classes.skillContainer}>{desSkill.slice(3, 6)}</div>
          <div className={classes.skillContainer}>{desSkill.slice(6, 9)}</div>
          <div className={classes.skillContainer}>{desSkill.slice(9, 12)}</div>
        </React.Fragment>
      )}
      {developer && (
        <React.Fragment>
          <div className={classes.box}>
            <div className={classes.titleContainer}>
              <h2 className={classes.title}>DEVELOPER</h2>
            </div>
          </div>
          <div className={classes.skillContainer}>{devSkill.slice(0, 3)}</div>
          <div className={classes.skillContainer}>{devSkill.slice(3, 6)}</div>
          <div className={classes.skillContainer}>{devSkill.slice(6, 9)}</div>
          <div className={classes.skillContainer}>{devSkill.slice(9, 12)}</div>
        </React.Fragment>
      )}
      <span className={classes.toggleContainer}>
        <button
          type="button"
          onClick={slideHandler}
          className={design ? classes.designDot : classes.devDot}
        ></button>
        <button
          type="button"
          onClick={devHandler}
          className={design ? classes.devDot : classes.designDot}
        ></button>
      </span>
    </div>
  );
};

export default Skills;