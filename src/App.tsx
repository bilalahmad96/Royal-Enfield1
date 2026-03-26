/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar, Footer, CustomCursor, ScrollToTop } from './components/Layout';
import Home from './pages/Home';
import Models from './pages/Models';
import History from './pages/History';
import Showrooms from './pages/Showrooms';
import About from './pages/About';
import Contact from './pages/Contact';

// Page transition wrapper
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PageWrapper key="home"><Home /></PageWrapper>} />
        <Route path="/models" element={<PageWrapper key="models"><Models /></PageWrapper>} />
        <Route path="/history" element={<PageWrapper key="history"><History /></PageWrapper>} />
        <Route path="/showrooms" element={<PageWrapper key="showrooms"><Showrooms /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper key="about"><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper key="contact"><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="preloader"
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-bg-dark z-[10000] flex flex-col items-center justify-center"
        >
          <div className="loader mb-8"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white font-oswald uppercase tracking-[0.5em] text-sm"
          >
            Ride the Legacy
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <Preloader />
        <CustomCursor />
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
