import React from "react";
import classes from "./MobileMenu.module.css";
import { motion } from "framer-motion";
import collapseMenu from "../../../assets/collapseMenu.svg";
import { navLinks } from "./NavLinks";
import { Link } from "react-scroll";

const MobileMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div className={`${classes.mobileMenu} ${showMenu && classes.openedMenu}`}>
      <img
        src={collapseMenu}
        alt="Collapse menu"
        className={classes.collapseMenu}
        onClick={() => {
          setShowMenu(false);
        }}
      />
      <ul className={classes.navList}>
        {navLinks.map((link, i) => (
          <motion.li
            key={link.to}
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <Link
              to={link.to}
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
              className={classes.link}
              activeClass={classes.activeLink}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
