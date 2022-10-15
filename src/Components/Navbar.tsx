import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
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
        <div className={classes.iconContainer}>
            <a href="mailto: jessecmaw@gmail.com">
          <MailOutlineIcon style={{ fontSize: 28, color: "#0290E4" }} />
          </a>
          <a href="https://www.linkedin.com/in/jessemaw" className={classes.iconSpace}>
          <LinkedInIcon style={{ fontSize: 28, color: "#0290E4" }} />
          </a>
          <a href="https://github.com/jessemaw">
          <GitHubIcon style={{ fontSize: 28, color: "#0290E4" }} />
          </a>
        </div>
      </div>
      <div className={classes.spacer}></div>
    </div>
  );
};

export default Navbar;
