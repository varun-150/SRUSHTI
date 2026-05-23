import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import './Auth.css';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Authenticating...', { email, password });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-background"></div>
      
      <motion.div 
        className="auth-card"
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="auth-header">
          <h1 className="auth-title">Workspace Authentication</h1>
          <p className="auth-subtitle">
            Secure access to your execution environment.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email address</label>
            <input 
              type="email" 
              id="email"
              className="form-input" 
              placeholder="creator@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="password">Security Token</label>
            <input 
              type="password" 
              id="password"
              className="form-input" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button variant="primary" type="submit" style={{ marginTop: 'var(--space-4)' }}>
            Authenticate
          </Button>
        </form>

        <div className="auth-footer">
          <p>New to Srushti? <Link to="/register" className="auth-link">Initialize workspace</Link></p>
        </div>
      </motion.div>
    </div>
  );
};
