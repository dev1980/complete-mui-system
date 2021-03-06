import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    width: "320px",
    height: "100%",
    position: "absolute",
    left: "0px",
    backgroundColor: "#253053;",
  },
});

export default function SideMenu() {
  const classes = useStyles();
  return <div className={classes.sideMenu}></div>;
}
