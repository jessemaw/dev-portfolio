import React from "react";
import WorkCard from "../UI/WorkCard";
import classes from "./Project.module.css";


type Props = ({
    desktopSrc?: string,
    mobileSrc?: string,
    title: string,
    description: string,
    gradient: string
})

const Project: React.FC<Props> = (props) => {
    return <WorkCard className={`${props.gradient} ${classes.background}`}>
        <div className={classes.box}>
        <div className={classes.titleContainer}>
            <h2 className={classes.title}>{props.title}</h2>
            <p className={classes.description}>{props.description}</p>
        </div>
        </div>
        <div className={classes.desktopBox}>
        <div className={classes.desktopContainer}>
            <img src={props.desktopSrc} className={classes.desktop} />
        </div>
        <div className={classes.phoneContainer}>
            <img src={props.mobileSrc} className={classes.phone} />
            </div> 
        </div>
    </WorkCard>
}

export default Project;