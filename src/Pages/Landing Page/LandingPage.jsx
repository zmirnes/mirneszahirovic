import React from "react";
import classes from "./LandingPage.module.css";
import Header from "../../Components/Landing Page/Header/Header";
import Hero from "../../Components/Landing Page/Hero/Hero";
import Works from "../../Components/Landing Page/Works/Works";
import Services from "../../Components/Landing Page/Services/Services";
import Contact from "../../Components/Landing Page/Contact/Contact";
// import LetsTalkModal from "../../Components/Landing Page/Contact/LetsTalkModal";

const LandingPage = () => {
  return (
    <div className={classes.container}>
      {/* <LetsTalkModal /> */}
      <Header />
      <Hero />
      <Services />
      <Works />
      <Contact />
    </div>
  );
};

export default LandingPage;
