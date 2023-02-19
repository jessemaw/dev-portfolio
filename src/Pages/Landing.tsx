import React from "react";
import HomeContent from "../Components/HomeContent";
import classes from "./Landing.module.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Landing = () => {
    const isMobile = useMediaQuery({query: "(max-width: 960px)"});
    return <div className={classes.container}>
    <header className={classes.titleContainer}>
    <div className={classes.line}>
    <a href="mailto: jessecmaw@gmail.com" className={classes.link}>
    <MailOutlineIcon style={{fontSize: 40, color: "#0290E4"}} />
    </a>
    <h1 className={classes.title}>Hi,</h1>
    </div>
    <div className={classes.line}>
    <a href="https://www.linkedin.com/in/jessemaw" className={classes.link}>
    <LinkedInIcon style={{fontSize: 40, color: "#0290E4"}} />
    </a>
    <h1 className={classes.title}>I'm Jesse</h1>
    </div>
    <div className={classes.line}>
    <a href="https://github.com/jessemaw" className={classes.link}>
    <GitHubIcon style={{fontSize: 40, color: "#0290E4"}} />
    </a>
    <h1 className={classes.title}>I like to BUIDL</h1>
    </div>
    </header>
    <div className={classes.body}>
    <HomeContent />
    </div>
    {isMobile && <div className={classes.buttonContainer}>
    <Link to="/about"><button className={classes.topBtn}>ABOUT</button></Link>
    <Link to="/work"><button className={classes.bottomBtn}>WORK</button></Link>
    </div>
    }
  </div>
}

export default Landing;