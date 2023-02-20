import React from "react";
import classes from "./Xen.module.css";
import Spacer from "../Components/Spacer";
import Navbar from "../Components/Navbar";
import MobileNavbar from "../Components/MobileNavbar";
import { useMediaQuery } from "react-responsive";
import WorkCard from "../UI/WorkCard";
import XenClipWebM from "../assets/images/xen-app-demonstration.webm";
import XenClipMp4 from "../assets/images/xen-app-demonstration.mp4";

const Xen = () => {
    const isMobile = useMediaQuery({query: "(max-width: 960px)"});
    return <div className={classes.container}>
    {!isMobile && <Navbar />}
    {isMobile && <MobileNavbar />}
    <Spacer spacerTitle="XEN" />
    <WorkCard className={classes.gradient}>
        <div className={classes.videoContainer}>
        <video className={classes.video} controls playsInline preload="none">
            <source src={XenClipMp4} type="video/mp4" />
            <source src={XenClipWebM} type="video/webm" />
        </video>
        </div>
    </WorkCard>
    <div className={classes.case}>
        <h1 className={classes.caseTitle}>Product</h1>
        <p className={classes.caseEntry}>
          This is Xen, a fully functional crypto exchange built using the 
          Internet Computer Blockchain (ICP). Coded with Motoko, ICP's native smart
          contract language, users can receive free Xen tokens from
          the faucet, check their wallet balance, and send tokens to any ICP
          wallet. The backend ensures that users can only receive one free faucet
          transaction.
        </p>
      </div>
    </div>
}

export default Xen;