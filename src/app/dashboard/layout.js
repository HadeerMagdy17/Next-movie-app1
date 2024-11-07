// src/app/dashboard/layout.js
import React from 'react';
import MasterLayout from '../layoutComponents/Layouts/MasterLayout/layout.js';


export default function DashboardLayout({ children }) {
  return <MasterLayout>{children}</MasterLayout>;
}
