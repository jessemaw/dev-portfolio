import React from "react";
import Navbar from "../Components/Navbar";
import classes from "./Work.module.css";
import Project from "../Components/Project";
import desktopHarmonicityHome from "../assets/images/harmonicity-home-screen.png";
import mobileHarmonicityHome from "../assets/images/harmonicity-iphone-main.png";
import desktopMawFiddleHome from "../assets/images/maw-fiddle-desktop-main.png";
import iphoneMawFiddleHome from "../assets/images/maw-fiddle-iphone-home.png";
import MobileProject from "../Components/MobileProject";
import coobabyPlayer from "../assets/images/coobaby-iphone-player.png";
import coobabyMixer from "../assets/images/coobaby-iphone-mixer.png";
import coobabyTimer from "../assets/images/coobaby-iphone-timer.png";
import FiddleWelcome from "../assets/images/fiddle-app-welcome.png";
import FiddleHome from "../assets/images/fiddle-app-home.png";
import FiddleCart from "../assets/images/fiddle-app-cart.png";
import { Link } from "react-router-dom";
import MobileNavbar from "../Components/MobileNavbar";
import Spacer from "../Components/Spacer";
import { useMediaQuery } from "react-responsive";
import Phone from "../Components/Phone";
import XenScreenShot from "../assets/images/xen-screenshot.png";

const Work = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 960px)" });
  return (
    <div className={classes.container}>
      {isMobile && <MobileNavbar />}
      {!isMobile && <Navbar />}
      <Spacer spacerTitle="Web Dev" />
      {!isMobile && (
        <React.Fragment>
          <Link to="/harmonicity">
            <Project
              desktopSrc={desktopHarmonicityHome}
              mobileSrc={mobileHarmonicityHome}
              title="HARMONICITY"
              description="RESPONSIVE MUSIC PLAYER APP"
              gradient={classes.gradient}
            />
          </Link>
          <Link
            to="/maw-fiddle"
            style={{ textDecoration: "none", color: "none" }}
          >
            <Project
              title="MAW FIDDLE"
              description="RESPONSIVE BIO WEBSITE"
              desktopSrc={desktopMawFiddleHome}
              mobileSrc={iphoneMawFiddleHome}
              gradient={classes.gradient}
            />
          </Link>
          <Spacer spacerTitle="UI Design" />
          <Link to="/fiddle-app">
            <MobileProject
              title="FIDDLE APP"
              description="E-LEARNING MOBILE & WEB APP"
              leftSrc={FiddleWelcome}
              middleSrc={FiddleHome}
              rightSrc={FiddleCart}
              gradient={classes.gradient}
            />
          </Link>
          <Link to="/coobaby">
            <MobileProject
              title="COOBABY"
              description="MOBILE APP FOR IOS & ANDROID"
              leftSrc={coobabyPlayer}
              middleSrc={coobabyMixer}
              rightSrc={coobabyTimer}
              gradient={classes.gradient}
            />
          </Link>
          <Spacer spacerTitle="Web3" />
          <Link
            to="/xen"
            style={{ textDecoration: "none", color: "none" }}
          >
            <Project
              title="XEN APP"
              description="INTERNET COMPUTER CRYPTO EXCHANGE"
              desktopSrc={XenScreenShot}
              gradient={classes.gradient}
            />

          </Link>
          
        </React.Fragment>
      )}
      {isMobile && (
        <React.Fragment>
          <Link to="/harmonicity">
            <Phone
              leftSrc={mobileHarmonicityHome}
              title="HARMONICITY"
              description="RESPONSIVE MUSIC PLAYER APP"
              gradient={classes.gradient}
            />
          </Link>

          <Link to="/maw-fiddle">
            <Phone
              leftSrc={iphoneMawFiddleHome}
              title="MAW FIDDLE"
              description="RESPONSIVE BIO WEBSITE"
              gradient={classes.gradient}
            />
          </Link>

          <Spacer spacerTitle="UI Design" />

          <Link to="/fiddle-app">
            <Phone
              title="FIDDLE APP"
              description="E-LEARNING MOBILE & WEB APP"
              leftSrc={FiddleHome}
              gradient={classes.gradient}
            />
          </Link>

          <Link to="/coobaby">
            <Phone
              title="COOBABY"
              description="MOBILE APP FOR IOS & ANDROID"
              leftSrc={coobabyPlayer}
              gradient={classes.gradient}
            />
          </Link>

          <Spacer spacerTitle="Web3" />

          <Link to="/xen">

          <Phone title="XEN APP" description="ICP CRYPTO EXCHANGE" leftSrc={XenScreenShot} gradient={classes.gradient} />
          </Link>
        </React.Fragment>
      )}
    </div>
  );
};

export default Work;
