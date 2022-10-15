import React from "react";
import classes from "./Reading.module.css";
import Dune from "../../assets/images/dune-cover.jpg";
import Science from "../../assets/images/science-of-can-cover.jpeg";
import Time from "../../assets/images/end-of-time-cover.jpg";

const Reading = () => {
    return <div className={classes.readingBox}>
    <div className={classes.bookContainer}>
      <div className={classes.bookBox}>
        <img src={Dune} className={classes.dune}></img>
        <h3 className={classes.bookTitle}>Dune</h3>
        <p className={classes.author}>Frenk Herbert</p>
      </div>
      <div className={classes.bookBox}>
        <img src={Science} className={classes.dune}></img>
        <h3 className={classes.bookTitle}>The Science of Can & Can't</h3>
        <p className={classes.author}>Chiara Marletto</p>
      </div>
      <div className={classes.bookBox}>
        <img src={Time} className={classes.dune}></img>
        <h3 className={classes.bookTitle}>The End of Time</h3>
        <p className={classes.author}>Julian Barbour</p>
      </div>
    </div>
  </div>
}

export default Reading;