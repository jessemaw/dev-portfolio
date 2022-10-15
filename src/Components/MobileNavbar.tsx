import React from "react";
import classes from "./MobileNavbar.module.css";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.topLine}>
        <div className={classes.nameContainer}>
          <h2 className={classes.name}>
            <NavLink to="/">JESSE MAW</NavLink>
          </h2>
        </div>
        <div className={classes.pages}>
          <p className={classes.about}>
            <NavLink to="/about" className={({ isActive }) =>
                isActive ? classes.aboutActive : undefined
              }>About</NavLink>
          </p>
          <p className={classes.work}>
          <NavLink to="/work" className={({ isActive }) =>
                isActive ? classes.workActive : undefined
              }>
            Work
          </NavLink>
          </p>
        </div>
      </div>
      <div className={classes.spacer}></div>
    </div>
  );
};

export default MobileNavbar;