import { PropaneSharp } from "@mui/icons-material";
import React from "react";
import classes from "./Spacer.module.css";

type Props = {
    spacerTitle: string
}

const Spacer: React.FC<Props> = (props) => {
    return <React.Fragment>
    <div className={classes.title}>
    <h1 className={classes.titleText}>{props.spacerTitle}</h1>
  </div>
  <div className={classes.spacer}></div>
  </React.Fragment>
}

export default Spacer;