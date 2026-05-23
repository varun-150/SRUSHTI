import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import './Register.css';

export const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract course data from router state if available
  const initialCourse = location.state?.courseName || '';
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    course: initialCourse,
    referral: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Initializing workspace for:', formData);
    // Future integration: send to backend
    alert('Workspace initialization sequence complete.');
  };

  return (
    <div className="register-wrapper">
      <div className="register-left">
        <motion.div 
          className="register-editorial"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Link to="/" className="back-link">
            <ArrowLeft size={16} /> Return to System
          </Link>
          
          <h1 className="editorial-title">Initialize your execution environment.</h1>
          <p className="editorial-desc">
            You are entering a rigorous, project-first ecosystem designed strictly for digital craftsmanship. 
            There are no shortcuts here—only pure engineering discipline.
          </p>

          <div className="editorial-features">
            <div className="feature-row">
              <CheckCircle2 size={20} className="feature-icon" />
              <div>
                <h4>Execution-Based Learning</h4>
                <p>No passive video consumption. Build production systems.</p>
              </div>
            </div>
            <div className="feature-row">
              <CheckCircle2 size={20} className="feature-icon" />
              <div>
                <h4>Senior Code Review</h4>
                <p>Every commit is evaluated against absolute industry standards.</p>
              </div>
            </div>
            <div className="feature-row">
              <CheckCircle2 size={20} className="feature-icon" />
              <div>
                <h4>Project Shipping Workflow</h4>
                <p>Learn to deploy, monitor, and scale real architecture.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="register-right">
        <motion.div 
          className="register-form-container"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="form-header">
            <h2>Workspace Setup</h2>
            <p>Provide your credentials to provision your creator profile.</p>
          </div>

          <form className="setup-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName" className="setup-label">Full Legal Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName"
                  className="setup-input" 
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="setup-label">Primary Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="setup-input" 
                  placeholder="creator@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone" className="setup-label">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  className="setup-input" 
                  placeholder="+91 90000 00000"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="college" className="setup-label">University / Institution</label>
                <input 
                  type="text" 
                  id="college" 
                  name="college"
                  className="setup-input" 
                  placeholder="Engineering College"
                  value={formData.college}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="course" className="setup-label">Selected Pathway</label>
              <select 
                id="course" 
                name="course"
                className="setup-input select-input" 
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select an architectural pathway</option>
                <option value="Python Builder Track">Python Builder Track</option>
                <option value="Web Creation Track">Web Creation Track</option>
                <option value="Full-Stack Launch Track">Full-Stack Launch Track</option>
                <option value="AI & Data Science Track">AI & Data Science Track</option>
                <option value="Game Design Track">Game Design Track</option>
                <option value="UI/UX Systems">UI/UX Systems</option>
                <option value="Creative Engineering">Creative Engineering</option>
                <option value="Full Summer Bundle">Full Summer Bundle</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="referral" className="setup-label">Referral Source</label>
              <input 
                type="text" 
                id="referral" 
                name="referral"
                className="setup-input" 
                placeholder="Twitter, LinkedIn, Friend..."
                value={formData.referral}
                onChange={handleChange}
              />
            </div>

            <div className="form-action">
              <Button type="submit" variant="primary" style={{ width: '100%' }}>
                Initialize Workspace
              </Button>
            </div>
            
            <p className="form-terms">
              By initializing, you agree to our Terms of Architecture and Privacy Protocol.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
