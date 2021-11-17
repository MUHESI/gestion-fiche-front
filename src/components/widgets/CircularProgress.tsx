import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <span
      //   className={classes.root}
      style={{
        display: "flex",
      }}
    >
      {/* <CircularProgress /> */}
      <CircularProgress />
    </span>
  );
}
