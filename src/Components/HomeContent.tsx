import React from "react";
import classes from "./HomeContent.module.css";
import Hand from "../assets/images/hand-icon.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


const HomeContent = () => {
    return <div className={classes.container}>
        <div className={classes.iconBox}>
            <Link to="/about"><button className={classes.rightButton}>ABOUT</button></Link>
            <img src={Hand} className={classes.rightHand} />
        </div>
        <div className={classes.iconBox}>
            <Link to="/work"><button className={classes.leftButton}>WORK</button></Link>
            <img src={Hand} className={classes.leftHand} />
        </div>
    </div>
}

export default HomeContent;