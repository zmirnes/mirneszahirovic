import React from "react";
import classes from "./Services.module.css";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className={classes.container}>
      <motion.span
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ height: "-100%", once: true }}
        className={classes.preSectionTitle}
      >
        SERVICES
      </motion.span>
      <motion.h1
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ height: "-100%", once: true }}
        className={classes.sectionTitle}
      >
        Enhancing User Experiences Through Front-End Web Development
      </motion.h1>
      <div className={classes.boxesContainer}>
        <div className={classes.box}>
          <motion.h3 initial={{ y: "100%", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ height: "-100%", once: true }}>
            What I can do for you
          </motion.h3>
          <motion.p
            initial={{ y: "2rem", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ height: "-100%", once: true }}
            className={classes.boxDesc}
          >
            As a front-end web developer, my aim is to craft exceptional user experiences that leave a lasting impression. I offer a range of services tailored to meet your web
            development needs:
          </motion.p>
          <ul>
            <motion.li initial={{ y: "2rem", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ height: "-100%", once: true }}>
              Design Strategy
            </motion.li>
            <motion.li initial={{ y: "2rem", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: "0.3" }} viewport={{ height: "-100%", once: true }}>
              Web and Mobile Design
            </motion.li>
            <motion.li initial={{ y: "2rem", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: "0.6" }} viewport={{ height: "-100%", once: true }}>
              Front-end Development
            </motion.li>
          </ul>
        </div>
        <div className={classes.box}>
          <motion.h3 initial={{ y: "100%", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ height: "-100%", once: true }}>
            Programming Languages
          </motion.h3>
          <motion.p
            initial={{ y: "2rem", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ height: "-100%", once: true }}
            className={classes.boxDesc}
          >
            To ensure optimal development outcomes, I am highly proficient in the following programming languages and libraries:
          </motion.p>
          <ul>
            <motion.li initial={{ y: "2rem", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ height: "-100%", once: true }}>
              HTML & CSS
            </motion.li>
            <motion.li initial={{ y: "2rem", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ height: "-100%", once: true }}>
              JavaScript
            </motion.li>
            <motion.li initial={{ y: "2rem", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} viewport={{ once: true, height: "-100%" }}>
              React.js
            </motion.li>
          </ul>
        </div>
        <div className={classes.box}>
          <motion.h3 initial={{ y: "100%", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ height: "-100%", once: true }}>
            What you can expect
          </motion.h3>
          <motion.p
            initial={{ y: "2rem", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ height: "-100%", once: true }}
            className={classes.boxDesc}
          >
            As your front-end web developer, I am committed to delivering nothing short of excellence. Here's what you can anticipate from our collaboration:
          </motion.p>
          <ul>
            <motion.li initial={{ y: "2rem", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ height: "-100%", once: true }}>
              Clean and Efficient Code
            </motion.li>
            <motion.li initial={{ y: "2rem", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ height: "-100%", once: true }}>
              Responsive and User-Friendly Designs
            </motion.li>
            <motion.li initial={{ y: "2rem", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} viewport={{ height: "-100%", once: true }}>
              Easy Maintenance and Updates
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
