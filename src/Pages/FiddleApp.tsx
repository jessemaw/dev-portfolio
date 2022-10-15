import React from "react";
import Navbar from "../Components/Navbar";
import classes from "./FiddleApp.module.css";
import FiddleDesktopWelcome from "../assets/images/fiddle/fiddle-welcome-desktop.png";
import FiddleObjectives from "../assets/images/fiddle/fiddle-objectives.png";
import FiddleDesign from "../assets/images/fiddle/fiddle-design-guidelines.png";
import FiddleStyle from "../assets/images/fiddle/fiddle-writing-style.png";
import FiddleLo from "../assets/images/fiddle/fiddle-lo-fi.png";
import FiddleMid from "../assets/images/fiddle/fiddle-mid-fi.png";
import FiddleUserFlow from "../assets/images/fiddle/fiddle-user-flow.png";
import FiddleUserTest from "../assets/images/fiddle/fiddle-feedback.png";
import FiddleMobileMockups from "../assets/images/fiddle/fiddle-mobile-mockups.png";
import FiddleDesktopMockups from "../assets/images/fiddle/fiddle-desktop-mockups.png";
import CaseContent from "../Components/CaseContent";
import Spacer from "../Components/Spacer";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../Components/MobileNavbar";

const FiddleApp = () => {
  const isMobile = useMediaQuery({query: "(max-width: 960px)"});
  return (
    <div className={classes.container}>
      {!isMobile && <Navbar />}
      {isMobile && <MobileNavbar />}
      <Spacer spacerTitle="Fiddle App" />
      <CaseContent
        leftImg={FiddleDesktopWelcome}
        rightImg={FiddleObjectives}
        caseHeader="Brand"
        caseText="As an oldtime fiddle player, I observed that there aren’t many options
          for learning traditional songs and techniques. It turned out that
          other fellow fiddle players felt the same way. Most players learn from
          old, grainy recordings or from fleeting musical gatherings. Fiddle
          developed into an idea to create a modern way (mobile app) to learn
          oldtime music so that you can learn anytime, anywhere."
      />
      <CaseContent
        leftImg={FiddleDesign}
        rightImg={FiddleStyle}
        caseHeader="Style Guide"
        caseText="Tradition is a major part of oldtime music, so in developing the style guide, I focused my efforts on mostly muted colors. The green color for the logo was chosen to convey a message of friendliness and encouragement for students. The fiddle logo initially started as a cartoonish artsy look, but it didn’t feel right, so in order to keep in line with the modern traditional goals, I ended up tracing the outline of one of my favorite violins and simplifying the details into a vector logo using the Sketch app. I wanted the imagery to complement the colors while having character themselves, as media is a major part of any modern learning platform. The writing style was developed to be positive and engaging so that “Fiddle” would appeal to people of many ages and backgrounds."
      />
      <CaseContent
        leftImg={FiddleLo}
        rightImg={FiddleMid}
        caseHeader="Wireframing"
        caseText="For the low-fidelity wireframing, I elected to use Balsamiq. While I appreciated getting to know a new design tool, it would have saved me time to use my usual method, pen and paper. I like pen and paper for low-fi wireframing to brainstorm ideas quickly and not think too much. Time away from the screen in this industry is valuable. Mid-fidelity wireframes are used to finalize the layout that I want and get the “look” I’m going for without the distraction of color or media. At this stage I work a lot with grids and pay extra attention to shapes, spacing, and hierarchy."
      />
      <CaseContent
        leftImg={FiddleUserFlow}
        rightImg={FiddleUserTest}
        caseHeader="User Flow & Testing"
        caseText="The user flow is usually my first deliverable. I develop user flows for all of my design projects. This stage always helps me develop more clarity on the evolution of a user’s experience when they open my designs. Being pressed for time, I didn’t conduct as many user tests as I would have liked. However, I was very pleased with the feedback I received. No critiques were made about the design or layout. For this test, I created a prototype in InVision, a very useful prototyping tool that I use frequently."
      />
      <CaseContent leftImg={FiddleMobileMockups} rightImg={FiddleDesktopMockups} caseHeader="Mockups" caseText="Overall I was happy with the mockups and the final results, especially considering the 4-week time constraint. I think the clean minimal layout and spacing combined with the muted color palette achieved the design goal of fusing tradition with modernism." />
    </div>
  );
};

export default FiddleApp;
