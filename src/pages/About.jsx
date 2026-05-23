import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

export const About = () => {
  return (
    <div className="about-wrapper">
      <motion.div 
        className="about-header"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="about-title">A culture of deep work and execution.</h1>
        <p className="about-subtitle">
          Srushti Technologies is not a standard educational platform. It is a highly intentional creator operating system designed for those who value digital craftsmanship.
        </p>
      </motion.div>

      <div className="philosophy-section">
        <motion.div 
          className="philosophy-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2>Execution over consumption</h2>
          <p>
            The modern web is saturated with endless tutorials and passive content. We believe true engineering mastery is achieved strictly through building, failing, and refining real systems in a production-like environment.
          </p>
        </motion.div>

        <motion.div 
          className="philosophy-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2>Architectural discipline</h2>
          <p>
            We do not teach shortcuts or artificial "startup hacks". We focus on the foundational principles of system design, performance tuning, and scalable architecture used by elite engineering teams globally.
          </p>
        </motion.div>

        <motion.div 
          className="philosophy-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2>Aesthetic restraint</h2>
          <p>
            A premium product is defined by what it omits. Our environment is deliberately stripped of noise, gamification, and false urgency, leaving only a calm, honest workspace optimized for extreme focus.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
