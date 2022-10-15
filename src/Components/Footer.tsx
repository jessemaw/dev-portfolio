import React from "react";
import classes from "./Footer.module.css";


type FooterProps = {
    children: React.ReactNode[] | React.ReactNode;
}

const FooterText = ({children}: FooterProps) => {
    return <p className={classes.footer}>{children}</p>
}

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return <footer className={classes.footerContainer}>
        <FooterText>Copyright Jesse Maw {currentYear}</FooterText>
    </footer>
}

export default Footer;