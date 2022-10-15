import React from "react";
import Navbar from "../Components/Navbar";
import classes from "./CooBaby.module.css";
import CooBabyMain from "../assets/images/coobaby/coobaby-main.png";
import CooBabySlideTwo from "../assets/images/coobaby/coobaby-slide-2.png";
import CooBabySlideThree from "../assets/images/coobaby/coobaby-slide-3.png";
import CooBabySlideFour from "../assets/images/coobaby/coobaby-slide-4.png";
import CooBabySlideFive from "../assets/images/coobaby/coobaby-slide-5.png";
import Spacer from "../Components/Spacer";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../Components/MobileNavbar";

const CooBaby = () => {
    const isMobile = useMediaQuery({query: "(max-width: 960px)"});
    return <div className={classes.container}>
        {!isMobile && <Navbar />}
        {isMobile && <MobileNavbar />}
        <Spacer spacerTitle="CooBaby" />
        <img src={CooBabyMain} className={classes.img} />
        <img src={CooBabySlideTwo} className={classes.img} />
        <img src={CooBabySlideThree} className={classes.img} />
        <img src={CooBabySlideFour} className={classes.img} />
        <img src={CooBabySlideFive} className={classes.img} /> </div>

}

export default CooBaby;