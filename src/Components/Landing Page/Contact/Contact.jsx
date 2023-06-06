import React from "react";
import classes from "./Contact.module.css";

const Contact = ({ setIsContactFormActive }) => {
  return (
    <section id="contact" className={classes.container}>
      <h1 className={classes.sectionTitle}>
        Ready to make exceptional digital experiences?
      </h1>
      <p
        onClick={() => setIsContactFormActive(true)}
        className={classes.letsTalk}
      >
        Let's talk with me. <span>👆</span>
      </p>
      <div className={classes.quote}>
        Elevate your digital presence with captivating front-end designs that
        leave a lasting impression.
      </div>
      <div className={classes.aboutMe}>
        <span className={classes.myName}>Mirnes Zahirović.</span>
        <span className={classes.adress}>
          Srebrenik, Bosnia and Herzegovina.
        </span>
        <a href="mailto:contact@mirneszahirovic.me" className={classes.email}>
          contact@mirneszahirovic.me
        </a>
      </div>
      <footer>
        <span>
          &copy; All rights reserved.
          <a href="https://mirneszahirovic.netlfiy.app">Mirnes Zahirović.</a>
        </span>
      </footer>
    </section>
  );
};

export default Contact;
