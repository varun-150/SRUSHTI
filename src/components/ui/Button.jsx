import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  variant = 'primary', // primary, secondary, accent, ghost
  size = 'md', // sm, md, lg
  to,
  href,
  icon: Icon,
  className = '',
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
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};
