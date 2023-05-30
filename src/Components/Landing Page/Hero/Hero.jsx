import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={classes.container}>
      <h1 className={classes.title}>Mirnes Zahirović</h1>
      <h2 className={classes.subtitle}>Frontend Web Developer.</h2>
      <h3 className={classes.jobDesc}> Developing impressive digital experiences through frontend web development.</h3>
      <div className={classes.actions}>
        <button>Let's Talk</button>
        <button>Download CV</button>
      </div>
    </section>
  );
};

export default Hero;
