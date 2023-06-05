import React from "react";
import classes from "./LetsTalkModal.module.css";
import closeModal from "./../../../assets/closeModal.svg";
import { AnimatePresence, motion } from "framer-motion";

const LetsTalkModal = ({ isContactFormActive, setIsContactFormActive }) => {
  return (
    isContactFormActive && (
      <div className={classes.overlay}>
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={classes.container}
          >
            <img
              src={closeModal}
              alt="Close"
              className={classes.closeBtn}
              onClick={() => {
                setIsContactFormActive(false);
              }}
            />
            <h1 className={classes.formTitle}>Let's Talk</h1>
            <form className={classes.form}>
              <input
                className={classes.input}
                type="text"
                placeholder="Your Name"
              />
              <input
                className={classes.input}
                type="text"
                placeholder="Your Email"
              />
              <textarea
                className={classes.textArea}
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>
              <button className={classes.sendBtn}>Send Message</button>
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
    )
  );
};

export default LetsTalkModal;
