import React from "react";
import classes from "./NavLinks.module.css";
import { Link } from "react-scroll";

const navLinks = [
  { to: "home", name: "Home" },
  { to: "works", name: "Works" },
  { to: "about-me", name: "About Me" },
];

const NavLinks = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        {navLinks.map((link) => (
          <li key={link.name} className={classes.navListItem}>
            <Link to={link.to} spy={true} smooth={true} offset={-70} duration={100} className={classes.link} activeClass={classes.activeLink}>
              {link.name}
            </Link>
            {link.to !== "about-me" && <span>/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
