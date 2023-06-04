import React from "react";
import classes from "./NavLinks.module.css";
import { Link } from "react-scroll";

export const navLinks = [
  { to: "home", name: "Home" },
  { to: "services", name: "Services" },
  { to: "works", name: "Works" },
  { to: "contact", name: "Contact" },
];

const NavLinks = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        {navLinks.map((link) => (
          <li key={link.name} className={classes.navListItem}>
            <Link to={link.to} spy={true} smooth={true} offset={-50} duration={100} className={classes.link} activeClass={classes.activeLink}>
              {link.name}
            </Link>
            {link.to !== "contact" && <span>/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
