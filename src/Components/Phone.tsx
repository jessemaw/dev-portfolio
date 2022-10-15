import React from "react";
import classes from "./Phone.module.css";
import WorkCard from "../UI/WorkCard";

type Props = ({
    leftSrc?: string,
    title: string,
    description: string,
    gradient: string
})

const Phone: React.FC<Props> = (props) => {
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
        </div>
    </WorkCard>
}

export default Phone;