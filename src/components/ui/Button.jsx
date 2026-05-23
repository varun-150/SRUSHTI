import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Button.css';

export const Button = ({
  children,
  variant = 'primary', // primary, secondary, accent, ghost
  size = 'md', // sm, md, lg
  to,
  href,
  icon: Icon,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const classes = `btn btn-${variant} btn-${size} ${className}`;

  const content = (
    <>
      {Icon && <Icon size={18} className="btn-icon" />}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} style={{ textDecoration: 'none' }}>
        <motion.div 
          className={classes} 
          whileTap={{ scale: 0.98 }} 
          transition={{ duration: 0.1, ease: "easeOut" }} 
          {...props}
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none' }}>
        <motion.div 
          className={classes} 
          whileTap={{ scale: 0.98 }} 
          transition={{ duration: 0.1, ease: "easeOut" }} 
          {...props}
        >
          {content}
        </motion.div>
      </a>
    );
  }

  return (
    <motion.button 
      className={classes}
      onClick={onClick}
      type={type}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      {...props}
    >
      {content}
    </motion.button>
  );
};
