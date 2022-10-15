import React from "react";
import WorkCard from "../UI/WorkCard";
import classes from "./MobileProject.module.css";


type Props = ({
    leftSrc?: string,
    middleSrc?: string,
    rightSrc?: string,
    title: string,
    description: string,
    gradient: string
})

const MobileProject: React.FC<Props> = (props) => {
    return <WorkCard className={`${props.gradient} ${classes.background}`}>
        <div className={classes.box}>
        <div className={classes.titleContainer}>
            <h2 className={classes.title}>{props.title}</h2>
            <p className={classes.description}>{props.description}</p>
        </div>
        </div>
        <div className={classes.mobileBox}>
        <div className={classes.phoneMain}>
            <img src={props.leftSrc} className={classes.phone} />
            </div> 
        <div className={classes.phoneContainer}>
            <img src={props.middleSrc} className={classes.phone} />
            </div> 
        <div className={classes.phoneContainer}>
            <img src={props.rightSrc} className={classes.phone} />
            </div> 
        </div>
    </WorkCard>
}

export default MobileProject;