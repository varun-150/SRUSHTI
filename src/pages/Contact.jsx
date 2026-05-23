import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

const faqs = [
  {
    question: "Do you offer enterprise or team workspaces?",
    answer: "Yes. Our ecosystem scales for engineering teams looking to standardize their architectural practices. Contact us via the form for deployment details."
  },
  {
    question: "How does the execution tracking work?",
    answer: "The platform integrates directly with your GitHub workflows. Milestones are tracked via actual code commits and PR merges, ensuring your progress represents real engineering output rather than passive video consumption."
  },
  {
    question: "Are there any hidden subscription tiers?",
    answer: "No. We believe in absolute transparency. Your workspace initialization grants full access to the core engineering pathways."
  }
];

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button 
        className="faq-question" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {faq.question}
        <ChevronDown size={20} className="faq-icon" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="faq-answer"
          >
            <div className="faq-answer-inner">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="contact-wrapper">
      <motion.div 
        className="contact-header"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="contact-title">Connect with us.</h1>
        <p className="contact-subtitle">
          Direct communication for technical inquiries, workspace support, and enterprise deployments.
        </p>
      </motion.div>

      <div className="contact-grid">
        <motion.div 
          className="contact-form-section"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name</label>
              <input type="text" id="name" className="form-input" placeholder="Jane Doe" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input type="email" id="email" className="form-input" placeholder="jane@example.com" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea id="message" className="form-input" placeholder="How can we assist you?" required></textarea>
            </div>
            <Button variant="primary" type="submit" icon={Send} style={{ marginTop: 'var(--space-2)' }}>
              Send Message
            </Button>
          </form>
        </motion.div>

        <motion.div 
          className="faq-section"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <h3>Common Inquiries</h3>
          <div>
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
