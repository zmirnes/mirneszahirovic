import React from "react";
import classes from "./AboutMe.module.css";
import { motion } from "framer-motion";
import myImg from "../../../assets/myImg.png";

const AboutMe = () => {
  return (
    <section id="about-me" className={classes.container}>
      <motion.h1 initial={{ y: "50%", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className={classes.sectionTitle}>
        About Me
      </motion.h1>
      <motion.p initial={{ y: "50%", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className={classes.sectionDesc}>
        Dive into my world where creativity meets technology, and discover the story behind my passion for frontend development and creating digital wonders.
      </motion.p>
      <div className={classes.content}>
        <div className={classes.imgContainer}>
          <motion.img initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} src={myImg} alt="Me" />
          <div className={classes.socialLinks}>
            <a href="#linkedin">LinkedIn</a>
            <a href="#linkedin">GitHub</a>
          </div>
        </div>
        <motion.div initial={{ y: "50%", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className={classes.aboutMeText}>
          <h3>Long story short..</h3>
          <p>
            I am a frontend web developer from a small city Srebrenik in Bosnia and Herzegovina. With a passion for creative design and building intuitive user interfaces, my goal
            is to create modern, responsive, and optimized websites that deliver excellent user experiences.
            <br /> <br />
            With experience in HTML, CSS, JavaScript, and React, I have gained a strong understanding of frontend development through various projects and client work. Currently, I
            am also focused on expanding my skills in backend development, learning technologies such as Node.js, Express.js, and MongoDB.
            <br /> <br /> I am ready to take on new challenges and projects. If you would like to work with me or have any questions, please feel free to contact me. I look forward
            to the opportunity to collaborate and create outstanding web solutions together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
