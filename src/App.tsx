import React from 'react';
import {Route, Routes} from "react-router-dom";
import Landing from './Pages/Landing';
import About from './Pages/About';
import Work from './Pages/Work';
import classes from "./App.module.css";
import Harmonicity from "./Pages/Harmonicity";
import MawFiddle from './Pages/MawFiddle';
import FiddleApp from "./Pages/FiddleApp";
import CooBaby from "./Pages/CooBaby";
import Footer from './Components/Footer';
import { useMediaQuery } from 'react-responsive';
import MobileFooter from './Components/MobileFooter';

function App() {
  const isMobile = useMediaQuery({query: "(max-width: 960px)"});
  return (
    <div className={classes.container}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="harmonicity" element={<Harmonicity />} />
        <Route path="maw-fiddle" element={<MawFiddle />} />
        <Route path="fiddle-app" element={<FiddleApp />} />
        <Route path="coobaby" element={<CooBaby />} />
      </Routes>
      {isMobile && <MobileFooter />}
      {!isMobile && <Footer />}
    </div>
  );
}

export default App;
