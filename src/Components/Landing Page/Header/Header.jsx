import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import logo from "./../../../assets/logo.svg";
import menu from "../../../assets/menu.svg";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Header = ({ setIsContactFormActive }) => {
  const [sticky, setSticky] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

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

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  return (
    <header className={`${classes.header} ${sticky ? classes.sticky : ""}`}>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className={classes.logoContainer}>
        <img src={logo} alt="Logo" className={classes.logo} />
      </div>
      <NavLinks />
      <button
        className={classes.headerCTA}
        onClick={() => setIsContactFormActive(true)}
      >
        Let's Talk
      </button>
      {sticky && (
        <div
          className={classes.progress}
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      )}
      <img
        src={menu}
        alt="Open menu"
        className={classes.menuBtn}
        onClick={showMenuHandler}
      />
    </header>
  );
};

export default Header;
