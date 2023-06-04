import React from "react";
import classes from "./LetsTalkModal.module.css";
import closeModal from "./../../../assets/closeModal.svg";

const LetsTalkModal = () => {
  return (
    <div className={classes.overlay}>
      <div className={classes.container}>
        <img src={closeModal} alt="Close" className={classes.closeBtn} />
        <h1 className={classes.formTitle}>Let's Talk</h1>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <textarea cols="30" rows="10" placeholder="Your message"></textarea>
        </form>
      </div>
    </div>
  );
};

export default LetsTalkModal;
