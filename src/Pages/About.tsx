import React from "react";
import Navbar from "../Components/Navbar";
import classes from "./About.module.css";
import NFT from "../assets/images/nft-collection.jpg";
import Spacer from "../Components/Spacer";
import Profile from "../Components/About/Profile";
import Skills from "../Components/About/Skills";
import Reading from "../Components/About/Reading";
import MobileNavbar from "../Components/MobileNavbar";
import { useMediaQuery } from "react-responsive";



const About = () => {
  const isMobile = useMediaQuery({query: "(max-width: 960px)"});
  return (
    <div className={classes.container}>
      {isMobile && <MobileNavbar />}
      {!isMobile && <Navbar />}
      <Profile />
      <Spacer spacerTitle="Skills" />
      <Skills />
      <Spacer spacerTitle="Reading List" />
      <Reading />
      <Spacer spacerTitle="NFT Collection" />
      <div className={classes.jpegBox}>
        <img src={NFT} className={classes.nft} />
      </div>
    </div>
  );
};

export default About;
