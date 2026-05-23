import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

export const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Cinematic Hero Section */}
      <section className="hero-section">
        <motion.h1 
          className="hero-title"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Engineering.<br />Without the noise.
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          A pure execution environment for learning architecture, code, and design through real-world implementation. No fake urgency. No artificial metrics. Just deep work.
        </motion.p>
        
        <motion.div 
          className="hero-actions"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <Button variant="primary" size="lg" to="/register">
            Initialize Workspace
          </Button>
          <Button variant="ghost" size="lg" to="/courses" icon={ArrowRight}>
            View Curriculum
          </Button>
        </motion.div>
      </section>

      {/* Execution Pipeline Section */}
      <section className="execution-section">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="section-label">The Methodology</div>
          <h2 className="section-title">The Execution Engine.</h2>
        </motion.div>

        <div className="pipeline-container">
          <div className="pipeline-line"></div>
          {[
            { step: 'Phase 01', title: 'Architectural Requirement', desc: 'Receive a strict system requirement. Read the documentation. Understand the constraints. No tutorials, just raw engineering specifications.' },
            { step: 'Phase 02', title: 'Live Workspace Execution', desc: 'Write the code in your local environment. Push directly to the GitHub repository. Integrate with real CI/CD pipelines.' },
            { step: 'Phase 03', title: 'Senior Code Review', desc: 'Undergo rigorous code review by senior engineers. Re-factor until it meets production standards. The standard is absolute.' },
            { step: 'Phase 04', title: 'Production Ship', desc: 'Deploy the system. Monitor its performance. Add it to your professional portfolio. True mastery is built by shipping.' }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="pipeline-node"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="pipeline-dot"></div>
              <div className="pipeline-content">
                <div className="pipeline-step">{item.step}</div>
                <h3 className="pipeline-title">{item.title}</h3>
                <p className="pipeline-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="founder-section">
        <motion.div
          className="section-header"
          style={{ textAlign: 'left', marginBottom: 'var(--space-12)' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="section-label">Origins</div>
          <h2 className="section-title">Built for the craft.</h2>
        </motion.div>

        <motion.div 
          className="founder-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <p>
            "We grew tired of the modern educational landscape. It felt increasingly artificial—dominated by endless video tutorials, gamified badges, and passive consumption. Students were learning syntax, but entirely failing to grasp system design and production discipline."
          </p>
          <p>
            "Srushti Technologies was built to strip away the noise. We wanted to create an environment that mimics the exact rigor of a high-end engineering team. No training wheels. No fake metrics. Just a calm, highly structured workspace where you are forced to execute."
          </p>
          <p>
            "If you want to master digital craftsmanship, you must build systems that fail, refactor them until they don't, and take pride in the invisible alignment of your code."
          </p>

          <div className="founder-signature">
            <div className="founder-avatar"></div>
            <div>
              <div style={{ color: 'var(--color-text-primary)' }}>The Founding Engineering Team</div>
              <div style={{ fontSize: 'var(--text-xs)' }}>Srushti Technologies</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
