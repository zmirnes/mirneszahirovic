import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import logo from "./../../../assets/logo.svg";
import menu from "../../../assets/menu.svg";
import NavLinks from "./NavLinks";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrolledHeight = window.pageYOffset;

      const percentage = (scrolledHeight / (fullHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    });
  }, []);

  return (
    <header className={`${classes.header} ${sticky ? classes.sticky : ""}`}>
      <div className={classes.logoContainer}>
        <img src={logo} alt="Logo" className={classes.logo} />
      </div>
      <NavLinks />
      <button className={classes.headerCTA}>Let's Talk</button>
      {sticky && <div className={classes.progress} style={{ width: `${scrollPercentage}%` }}></div>}
      <img src={menu} alt="Open menu" className={classes.menuBtn} />
    </header>
  );
};

export default Header;
