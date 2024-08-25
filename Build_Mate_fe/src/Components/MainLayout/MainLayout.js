import React from 'react';
import AdSidebar from '../AdSidebar/AdSidebar';
import './MainLayout.css'; // Optional: For additional styling

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="content-area">
        {children}
      </div>
      <AdSidebar />
    </div>
  );
};

export default MainLayout;
