import React from "react";
import classes from "./LetsTalkModal.module.css";

const LetsTalkModal = () => {
  return (
    <div className={classes.overlay}>
      <div className={classes.container}>
        <h1 className={classes.formTitle}>Let's Talk</h1>
      </div>
    </div>
  );
};

export default LetsTalkModal;
