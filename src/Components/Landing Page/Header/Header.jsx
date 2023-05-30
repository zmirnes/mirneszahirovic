import React from "react";
import classes from "./Header.module.css";
import logo from "./../../../assets/logo.svg";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img src={logo} alt="Logo" className={classes.logo} />
      </div>
      <NavLinks />
      <button className={classes.headerCTA}>Let's Talk</button>
    </header>
  );
};

export default Header;
