import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const PageLayout = ({ children }) => {
  const location = useLocation();
  const isCinematicRoute = location.pathname === '/register';

  return (
    <div className="page-layout">
      {!isCinematicRoute && <Navbar />}
      <main className="main-content">
        {children}
      </main>
      {!isCinematicRoute && <Footer />}
    </div>
  );
};
