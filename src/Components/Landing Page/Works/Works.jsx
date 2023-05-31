import React from "react";
import classes from "./Works.module.css";
import { motion } from "framer-motion";
import project1 from "../../../assets/projects-thumbs/project1.jpg";
import project2 from "../../../assets/projects-thumbs/project2.jpg";
import project3 from "../../../assets/projects-thumbs/project3.jpg";

const works = [
  {
    id: 0,
    workName: "Project #1",
    workDesc: "Lorem Ipsum",
    gitLink: "https://github.com/zmirnes",
    projectLink: "https://mirneszahirovic.me",
    image: project1,
  },
  {
    id: 1,
    workName: "Project #1",
    workDesc: "Lorem Ipsum",
    gitLink: "https://github.com/zmirnes",
    projectLink: "https://mirneszahirovic.me",
    image: project2,
  },
  {
    id: 2,
    workName: "Project #1",
    workDesc: "Lorem Ipsum",
    gitLink: "https://github.com/zmirnes",
    projectLink: "https://mirneszahirovic.me",
    image: project3,
  },
];

const Works = () => {
  return (
    <section id="works" className={classes.container}>
      <motion.h1 initial={{ y: "50%", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className={classes.sectionTitle}>
        My Works
      </motion.h1>
      <motion.p initial={{ y: "50%", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className={classes.sectionDesc}>
        Through my frontend development projects, I transform ideas into reality, utilizing technology and coding to create intuitive user experiences that captivate and engage
        users.
      </motion.p>
      <div className={classes.worksGrid}>
        {works.map((work, i) => (
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: `${i * 0.2}` }}
            className={classes.work}
          >
            <div className={classes.workImageContainer}>
              <img src={work.image} alt="Work Thumb" className={classes.workImage} />
            </div>
            <div className={classes.aboutWork}>
              <span className={classes.workName}>{work.workName}</span>
              <a className={classes.workLink} href={work.gitLink}>
                GitHub
              </a>
              <a className={classes.workLink} href={work.projectLink}>
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
