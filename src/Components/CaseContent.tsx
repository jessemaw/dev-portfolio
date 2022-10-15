import React from "react";
import classes from "./CaseContent.module.css";


type Props = ({
    leftImg: string,
    rightImg: string,
    oneImg?: string,
    caseHeader: string,
    caseText: string
})

const CaseContent: React.FC<Props> = (props) => {
    return <React.Fragment>
    <div className={classes.imageContainer}>
    <img src={props.leftImg} className={classes.desktopImg} />
    <img src={props.rightImg} className={classes.desktopImg} />
  </div>
  <div className={classes.case}>
    <h1 className={classes.caseTitle}>{props.caseHeader}</h1>
    <p className={classes.caseEntry}>
      {props.caseText}
    </p>
  </div>
  </React.Fragment>
}

export default CaseContent;