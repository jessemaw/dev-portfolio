import React from "react";
import classes from "./MobileFooter.module.css";
import { NavLink } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


type FooterProps = {
    children: React.ReactNode[] | React.ReactNode;
}

const FooterText = ({children}: FooterProps) => {
    return <p className={classes.footer}>{children}</p>
}

const MobileFooter = () => {
    const currentYear = new Date().getFullYear();
    return <footer className={classes.footerContainer}>
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
        <FooterText>Copyright Jesse Maw {currentYear}</FooterText>
    </footer>
}

export default MobileFooter;