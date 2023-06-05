import classes from "./Hero.module.css";
import playVideo from "./../../../assets/playVideoBtn.svg";
import { motion } from "framer-motion";

const Hero = ({ setIsContactFormActive }) => {
  return (
    <section id="home" className={classes.container}>
      <div className={classes.background}></div>
      <div className={classes.whoAmI}>
        <motion.h1
          id="name"
          className={classes.title}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Mirnes Zahirović
        </motion.h1>
        <motion.h2
          className={classes.subtitle}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Frontend Web Developer.
        </motion.h2>
        <motion.h3
          className={classes.jobDesc}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Developing impressive digital experiences through frontend web
          development.
        </motion.h3>
        <motion.div
          className={classes.actions}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <button
            onClick={() => {
              setIsContactFormActive(true);
            }}
          >
            Let's Talk
          </button>
          <button>Download CV</button>
        </motion.div>
      </div>
      <motion.div
        className={classes.videoContainer}
        initial={{ y: "-50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className={classes.playBtnContainer}>
          <img
            src={playVideo}
            alt="Play Introducing Video"
            className={classes.playBtn}
          />
        </div>
        <span>INTRODUCING VIDEO</span>
      </motion.div>
    </section>
  );
};

export default Hero;
