import React from "react";
import classes from "./Profile.module.css";
import Moody from "../../assets/images/moody.png";

const Profile = () => {
    return <div className={classes.aboutBox}>
        <img src={Moody} className={classes.moody} alt="Profile picture alias" />
        <div className={classes.textBox}>
          <h1 className={classes.about}>
            I'm Jesse <br />A developer / designer <br /> with a love for smooth
            UX and technological possibility
          </h1>
          <p className={classes.blurb}>
            A background in music and arts has awarded me with 20+ years of work
            in creative disciplines. My time currently revolves around front-end
            development and honing my skills in HTML, CSS, and React.js. Most
            recently, I’ve developed a passion for all things Web3, including
            cryptocurrencies, NFTs, DeFi, GameFi, decentralization, and the
            implications of blockchains on day-to-day life. Outside of tech, my
            love of family, music, cooking, and the great outdoors keeps me
            fully occupied.
          </p>
        </div>
      </div>
}

export default Profile;