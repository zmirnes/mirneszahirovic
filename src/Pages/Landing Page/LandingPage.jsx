import React, { useEffect, useState } from "react";
import classes from "./LandingPage.module.css";
import Header from "../../Components/Landing Page/Header/Header";
import Hero from "../../Components/Landing Page/Hero/Hero";
import Works from "../../Components/Landing Page/Works/Works";
import Services from "../../Components/Landing Page/Services/Services";
import Contact from "../../Components/Landing Page/Contact/Contact";
import LetsTalkModal from "../../Components/Landing Page/Contact/LetsTalkModal";

const LandingPage = () => {
  const [isContactFormActive, setIsContactFormActive] = useState(false);

  useEffect(() => {
    isContactFormActive &&
      document.querySelector("body").classList.add(`${classes.disableScroll}`);
    !isContactFormActive &&
      document
        .querySelector("body")
        .classList.remove(`${classes.disableScroll}`);
  }, [isContactFormActive]);

  return (
    <div className={classes.container}>
      <LetsTalkModal
        isContactFormActive={isContactFormActive}
        setIsContactFormActive={setIsContactFormActive}
      />
      <Header setIsContactFormActive={setIsContactFormActive} />
      <Hero setIsContactFormActive={setIsContactFormActive} />
      <Services />
      <Works />
      <Contact setIsContactFormActive={setIsContactFormActive} />
    </div>
  );
};

export default LandingPage;
