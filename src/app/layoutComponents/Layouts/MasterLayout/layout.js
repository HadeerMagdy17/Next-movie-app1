// components/layouts/MasterLayout.js
import Footer from '@/app/components/Footer/Footer';
import NavBar from '@/app/components/NavBar/NavBar';
import React from 'react';

export default function MasterLayout({ children }) {
  return (
    <div className="master-layout">
      <NavBar/>  
      <main>{children}</main>
      <Footer/>
    </div>
  );
}
