import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-gradient-line"></div>
      
      <div className="footer-content">
        <div className="footer-manifesto">
          <h3>SRUSHTI<span className="brand-accent">.</span></h3>
          <p>
            An execution-first platform designed for absolute focus and creator discipline. 
            We build the systems that shape the modern web.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Ecosystem</h4>
          <ul>
            <li><Link to="/courses">Curriculum</Link></li>
            <li><Link to="/dashboard">Workspace</Link></li>
            <li><Link to="/about">Philosophy</Link></li>
            <li><Link to="/">Engine</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Engineering</h4>
          <ul>
            <li><a href="https://github.com" target="_blank" rel="noreferrer">Open Source</a></li>
            <li><Link to="/contact">Architecture Docs</Link></li>
            <li><Link to="/contact">System Status</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://x.com" target="_blank" rel="noreferrer">X (Twitter)</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><Link to="/contact">Support</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Srushti Technologies. All rights reserved.</p>
        <p>Crafted with extreme discipline.</p>
      </div>
    </footer>
  );
};
