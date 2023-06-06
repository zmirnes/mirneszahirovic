import React, { useRef } from "react";
import classes from "./LetsTalkModal.module.css";
import closeModal from "./../../../assets/closeModal.svg";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const LetsTalkModal = ({ isContactFormActive, setIsContactFormActive }) => {
  const email = useRef();
  const senderName = useRef();
  const senderMessage = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ttteerp",
        "template_xqexj9v",
        e.target,
        "xR9Ej8BdIugXKeNrd"
      )
      .then(
        (result) => {
          console.log("E-pošta je uspješno poslana!", result.text);
          alert("Email successfully sent!");
        },
        (error) => {
          console.error("Došlo je do greške pri slanju e-pošte:", error.text);
          alert("Email have error:", error);
        }
      );

    e.target.reset();
  };

  return (
    isContactFormActive && (
      <div className={classes.overlay}>
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
          <form className={classes.form} onSubmit={sendEmail}>
            <input
              className={classes.input}
              type="text"
              placeholder="Your Name"
              ref={senderName}
              name="name_from"
            />
            <input
              className={classes.input}
              type="text"
              placeholder="Your Email"
              ref={email}
              name="email_from"
            />
            <textarea
              className={classes.textArea}
              cols="30"
              rows="10"
              placeholder="Your message"
              ref={senderMessage}
              name="message"
            ></textarea>
            <button className={classes.sendBtn}>Send Message</button>
          </form>
        </motion.div>
      </div>
    )
  );
};

export default LetsTalkModal;
