import React from "react";
import classes from "./LogosTrack.module.css";
import logoPlaceholder from "../../../assets/logoPlaceholder.svg";
const LogosTrack = () => {
  return (
    <section className={classes.logosTrack}>
      <img src={logoPlaceholder} alt="logo" />
      <img src={logoPlaceholder} alt="logo" />
      <img src={logoPlaceholder} alt="logo" />
      <img src={logoPlaceholder} alt="logo" />
    </section>
  );
};

export default LogosTrack;
