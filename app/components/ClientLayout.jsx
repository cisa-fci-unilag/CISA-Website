"use client"
import React from 'react';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

export function ClientLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}