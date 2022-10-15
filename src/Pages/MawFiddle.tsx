import React from "react";
import Navbar from "../Components/Navbar";
import classes from "./MawFiddle.module.css";
import MawFiddleHome from "../assets/images/maw-fiddle/maw-fiddle-desktop-home.png";
import MawFiddleMusic from "../assets/images/maw-fiddle/maw-fiddle-desktop-music.png";
import MawFiddleInstruction from "../assets/images/maw-fiddle/maw-fiddle-desktop-instruction.png";
import MawFiddleContact from "../assets/images/maw-fiddle/maw-fiddle-desktop-contact.png";
import MawFiddleMobileHome from "../assets/images/maw-fiddle-iphone-home.png";
import MawFiddleMobileMusic from "../assets/images/maw-fiddle/mobile/maw-fiddle-mobile-music.png";
import MawFiddleMobileInstruction from "../assets/images/maw-fiddle/mobile/maw-fiddle-mobile-instruction.png";
import MawFiddleMobileNewsletter from "../assets/images/maw-fiddle/mobile/maw-fiddle-mobile-newsletter.png";
import MawFiddleMobileContact from "../assets/images/maw-fiddle/mobile/maw-fiddle-mobile-contact.png";
import MawFiddleMobileNavbar from "../assets/images/maw-fiddle/mobile/maw-fiddle-mobile-navbar.png";
import WorkCard from "../UI/WorkCard";
import Spacer from "../Components/Spacer";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../Components/MobileNavbar";

const MawFiddle = () => {
    const isMobile = useMediaQuery({query: "(max-width: 960px)"});
    return <div className={classes.container}>
    {!isMobile && <Navbar />}
    {isMobile && <MobileNavbar />}
    <Spacer spacerTitle="Maw Fiddle" />
      <img src={MawFiddleHome} className={classes.img} />
        <img src={MawFiddleMusic} className={classes.img} />
        <WorkCard className={classes.gradient}>
            <div className={classes.topRow}>
                <img src={MawFiddleMobileHome} className={classes.mobileImg} />
                <img src={MawFiddleMobileNavbar} className={classes.mobileImg} />
                <img src={MawFiddleMobileMusic} className={classes.mobileImg} />
            </div>
            <div className={classes.bottomRow}>
                <img src={MawFiddleMobileInstruction} className={classes.mobileImg} />
                <img src={MawFiddleMobileNewsletter} className={classes.mobileImg} />
                <img src={MawFiddleMobileContact} className={classes.mobileImg} />
            </div>
        </WorkCard>
        <img src={MawFiddleInstruction} className={classes.img} />
        <img src={MawFiddleContact} className={classes.img} />
    </div>
}

export default MawFiddle;