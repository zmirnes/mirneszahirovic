import React from "react";
import classes from "./LandingPage.module.css";
import Header from "../../Components/Landing Page/Header/Header";
import Hero from "../../Components/Landing Page/Hero/Hero";
import Works from "../../Components/Landing Page/Works/Works";
import LogosTrack from "../../Components/Landing Page/Logos Track/LogosTrack";

const LandingPage = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Hero />
      <Works />
    </div>
  );
};

export default LandingPage;
