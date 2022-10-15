import React from "react";
import Navbar from "../Components/Navbar";
import classes from "./Harmonicity.module.css";
import HarmonicityDesktopHome from "../assets/images/harmonicity/harmonicity-desktop-home.png";
import HarmonicityDesktopTheory from "../assets/images/harmonicity/harmonicity-desktop-theory.png";
import HarmonicityDesktopDrone from "../assets/images/harmonicity/harmonicity-desktop-drone.png";
import HarmonicityDesktopNFT from "../assets/images/harmonicity/harmonicity-desktop-nft.png";
import WorkCard from "../UI/WorkCard";
import HarmonicityMobileHome from "../assets/images/harmonicity-iphone-main.png";
import HarmonicityMobileTheory from "../assets/images/harmonicity/mobile/harmonicity-mobile-theory.png";
import HarmonicityMobileDrone from "../assets/images/harmonicity/mobile/harmonicity-mobile-drone.png";
import HarmonicityMobileNFT from "../assets/images/harmonicity/mobile/harmonicity-mobile-nft.png";
import HarmonicityMobileContact from "../assets/images/harmonicity/mobile/harmonicity-mobile-contact.png";
import HarmonicityMobileNavbar from "../assets/images/harmonicity/mobile/harmonicity-mobile-navbar.png";
import Spacer from "../Components/Spacer";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../Components/MobileNavbar";

const Harmonicity = () => {
  const isMobile = useMediaQuery({query: "(max-width: 960px)"});
  return (
    <div className={classes.container}>

      {!isMobile && <Navbar />}
      {isMobile && <MobileNavbar />}
      <Spacer spacerTitle="Harmonicity" />
      <img src={HarmonicityDesktopHome} className={classes.img} />
      <div className={classes.case}>
        <h1 className={classes.caseTitle}>Idea</h1>
        <p className={classes.caseEntry}>
          Harmonicity started as an idea to build a music player web app in
          combination with informational pages. The UX and build decisions were
          centered around the fundamental concept of Harmonicity: to bring the
          primordial roots of music to the modern audience. This resulted in a
          minimal yin-yang color design, timeless fonts, and a layout that
          echoes modern art galleries
        </p>
      </div>
      <img src={HarmonicityDesktopTheory} className={classes.img} />
      <WorkCard className={classes.gradient}>
        <div className={classes.topRow}>
          <img src={HarmonicityMobileHome} className={classes.mobileImg} />
          <img src={HarmonicityMobileTheory} className={classes.mobileImg} />
          <img src={HarmonicityMobileDrone} className={classes.mobileImg} />
        </div>
        <div className={classes.bottomRow}>
          <img src={HarmonicityMobileNFT} className={classes.mobileImg} />
          <img src={HarmonicityMobileContact} className={classes.mobileImg} />
          <img src={HarmonicityMobileNavbar} className={classes.mobileImg} />
        </div>
      </WorkCard>
      <div className={classes.case}>
        <h1 className={classes.caseTitle}>Mobile Adaptation</h1>
        <p className={classes.caseEntry}>
          From a design and build perspective, the desktop space that
          accommodated the modern gallery layout no longer worked on condensed
          mobile screens. The solution for this was to make the layout even more
          minimal. Since music is the primary driver of Harmonicity, I decided
          to make the player as the home page, and to reduce clutter further, I
          opted for a blank background. The expanded nabber is reminiscent of
          the fretboard of a guitar
        </p>
      </div>
      <img src={HarmonicityDesktopDrone} className={classes.img} />
      <div className={classes.case}>
        <h1 className={classes.caseTitle}>Build Reflections</h1>
        <p className={classes.caseEntry}>
          In all, Harmonicity helped me gain insight into utilizing audio for
          web, using the Web Audio API, as well as gave me more clarity into
          organizing React components and using React Hooks like useState and
          useEffect within a React App
        </p>
      </div>
      <img src={HarmonicityDesktopNFT} className={classes.img} />
    </div>
  );
};

export default Harmonicity;
