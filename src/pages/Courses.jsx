import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import { Button } from '../components/ui/Button';
import './Courses.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

const pathways = [
  {
    id: 'python',
    title: 'Python Builder Track',
    duration: '12 Weeks',
    price: '₹299',
    desc: 'Master backend architecture, data pipelines, and algorithm design through rigorous production-level projects.',
    milestones: ['Data Structures', 'Async IO', 'FastAPI Microservices', 'CI/CD Pipelines']
  },
  {
    id: 'webdev',
    title: 'Web Creation Track',
    duration: '8 Weeks',
    price: '₹599',
    desc: 'Build the foundational layout, logic, and interactivity of the modern web. Focus on pure architectural HTML and Vanilla JS.',
    milestones: ['HTML/CSS Architecture', 'Vanilla JS Logic', 'DOM Manipulation', 'Responsive Systems']
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Launch Track',
    duration: '16 Weeks',
    price: '₹1,199',
    desc: 'Build scalable, production-ready web platforms from scratch. Integrate front-end frameworks with high-performance backends.',
    milestones: ['React/Next.js', 'PostgreSQL', 'Redis Caching', 'System Design']
  },
  {
    id: 'ai-data',
    title: 'AI & Data Science Track',
    duration: '14 Weeks',
    price: '₹899',
    desc: 'Train models, process massive datasets, and deploy ML infrastructure to edge environments.',
    milestones: ['Pandas/NumPy', 'PyTorch Foundation', 'LLM Integration', 'Model Deployment']
  },
  {
    id: 'game-design',
    title: 'Game Design Track',
    duration: '10 Weeks',
    price: '₹699',
    desc: 'Architect immersive interactive environments and real-time game physics from the ground up.',
    milestones: ['Entity Component Systems', 'Game Loops', 'Collision Detection', 'State Management']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Systems',
    duration: '8 Weeks',
    price: '₹499',
    desc: 'Craft premium interfaces with deep emotional resonance. Master design tokens, motion, and interaction patterns.',
    milestones: ['Design Tokens', 'Figma Prototyping', 'Motion Design', 'Accessibility']
  },
  {
    id: 'creative',
    title: 'Creative Engineering',
    duration: '10 Weeks',
    price: '₹599',
    desc: 'Blend mathematics and code to build immersive 3D web experiences optimized for performance.',
    milestones: ['WebGL', 'Three.js', 'Shader Programming', 'Performance Tuning']
  }
];

export const Courses = () => {
  const navigate = useNavigate();

  const handleInitialize = (courseName) => {
    navigate('/register', { state: { courseName } });
  };

  return (
    <div className="courses-wrapper">
      <motion.div 
        className="courses-header"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="courses-title">Curriculum Architecture.</h1>
        <p className="courses-subtitle">
          Execution environments designed for mastering production engineering. 
          No isolated tutorials. Just pure architectural implementation.
        </p>
      </motion.div>

      <div className="pathways-grid">
        {pathways.map((pathway, index) => {
          const isFlagship = pathway.id === 'fullstack';
          return (
            <motion.div 
              key={pathway.id}
              className={`pathway-card ${isFlagship ? 'pathway-flagship' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="pathway-info">
                <h3>{pathway.title}</h3>
                <div className="pathway-meta">
                  <span>{pathway.duration}</span>
                  <span>•</span>
                  <span>{pathway.price}</span>
                </div>
                <p>{pathway.desc}</p>
              </div>
              
              <div className="pathway-milestones" style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                {pathway.milestones.map((milestone, mIndex) => (
                  <span key={mIndex} className="milestone-tag">{milestone}</span>
                ))}
              </div>
              
              <div className="pathway-action" style={{ marginTop: 'auto' }}>
                <Button 
                  variant={isFlagship ? "primary" : "secondary"} 
                  size="sm" 
                  icon={ArrowRight}
                  onClick={() => handleInitialize(pathway.title)}
                >
                  Initialize Pathway
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        className="bundle-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
      >
        <Layers size={32} color="var(--color-text-secondary)" style={{ marginBottom: 'var(--space-4)' }} />
        <h2 className="bundle-title">Full Summer Bundle</h2>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-4xl)', color: 'var(--color-accent-blue)', marginBottom: 'var(--space-4)' }}>₹2,499</div>
        <p className="bundle-desc">
          Gain unrestricted access to all current and future engineering pathways, integrated directly into your creator workspace.
        </p>
        <Button variant="primary" onClick={() => handleInitialize('Full Summer Bundle')}>
          Initialize Full Access
        </Button>
      </motion.div>
    </div>
  );
};
