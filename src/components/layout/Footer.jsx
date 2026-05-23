import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>SRUSHTI<span className="brand-accent">.</span></h3>
          <p>An execution-first platform designed for absolute focus and creator discipline.</p>
        </div>
        
        <div className="footer-links">
          <h4>Platform</h4>
          <ul>
            <li><Link to="/courses">Curriculum</Link></li>
            <li><Link to="/about">Philosophy</Link></li>
            <li><Link to="/login">Workspace</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://x.com" target="_blank" rel="noreferrer">X (Twitter)</a></li>
            <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Srushti Technologies. All rights reserved.</p>
        <p>Crafted with discipline.</p>
      </div>
    </footer>
  );
};
