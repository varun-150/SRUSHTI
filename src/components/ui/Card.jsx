import React from 'react';
import './Card.css';

export const Card = ({ title, description, children, footer, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {children}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};
