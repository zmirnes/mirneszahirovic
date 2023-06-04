import React from "react";
import classes from "./Works.module.css";
import { motion } from "framer-motion";
import project1 from "../../../assets/projects-thumbs/project1.webp";
import project1Logo from "../../../assets/projects-thumbs/project1-logo.svg";
import githubIcon from "./../../../assets/github.svg";
import newWindowIcon from "../../../assets/newWindowIcon.svg";

const works = [
  {
    id: 0,
    workName: "Work Timesheet",
    workDesc: "Lorem ipsum",
    gitLink: "https://github.com/zmirnes",
    projectLink: "https://sihtarica.netlify.app",
    image: project1,
    projectLogo: project1Logo,
  },
  {
    id: 0,
    workName: "Work Timesheet",
    workDesc: "Lorem ipsum",
    gitLink: "https://github.com/zmirnes",
    projectLink: "https://sihtarica.netlify.app",
    image: project1,
    projectLogo: project1Logo,
  },
  {
    id: 0,
    workName: "Work Timesheet",
    workDesc: "Lorem ipsum",
    gitLink: "https://github.com/zmirnes",
    projectLink: "https://sihtarica.netlify.app",
    image: project1,
    projectLogo: project1Logo,
  },
];

const Works = () => {
  return (
    <section id="works" className={classes.container}>
      <motion.span
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ height: "-100%", once: true }}
        className={classes.preSectionTitle}
      >
        WORKS
      </motion.span>
      <motion.h1
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ height: "-100%", once: true }}
        className={classes.sectionTitle}
      >
        Transforming ideas into reality, coding to create intuitive user experiences.
      </motion.h1>
      <div className={classes.worksGrid}>
        {works.map((work, i) => (
          <motion.div
            key={i}
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: `${i * 0.2}` }}
            className={classes.work}
          >
            <a href={work.projectLink} target="_blank" rel="noreferrer" className={classes.workImageContainer}>
              <div className={classes.projectOverlay}>
                <img src={work.projectLogo} className={classes.overlayLogo} alt="Work Logo" />
                <span>Click or Tap to see live version of this website/app.</span>
              </div>
              <img src={work.image} alt="Work Thumb" className={classes.workImage} />
            </a>
            <div className={classes.aboutWork}>
              <span className={classes.workName}>{work.workName}</span>
              <a className={classes.workLink} href={work.gitLink}>
                <img src={githubIcon} alt="GitHub Code" />
                GitHub
              </a>
              <a className={classes.workLink} href={work.projectLink}>
                <img src={newWindowIcon} alt="View project" />
                Live Preview
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.button initial={{ y: "100%", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className={classes.allWorksBtn}>
        All Works
      </motion.button>
    </section>
  );
};

export default Works;
