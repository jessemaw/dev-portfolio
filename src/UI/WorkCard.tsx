import React from "react";
import classes from "./WorkCard.module.css";

type Props = ({
    className?: string,
    children?: React.ReactNode
})

const WorkCard: React.FC<Props> = (props) => {
    return <div className={`${props.className} ${classes.card}` }>
    {props.children}
    </div>
}

export default WorkCard;