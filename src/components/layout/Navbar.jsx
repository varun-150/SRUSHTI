import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          SRUSHTI<span className="brand-accent">.</span>
        </Link>
        
        <div className="navbar-links">
          <Link to="/courses" className="nav-link">Curriculum</Link>
          <Link to="/about" className="nav-link">Philosophy</Link>
          <Link to="/login" className="nav-link">Workspace</Link>
        </div>
        
        <div className="navbar-actions">
          <Button variant="ghost" size="sm" to="/login">Log In</Button>
          <Button variant="primary" size="sm" to="/register">Start Executing</Button>
        </div>
      </nav>
    </header>
  );
};
