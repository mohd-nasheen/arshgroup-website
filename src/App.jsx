import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsAppCTA from "./components/FloatingWhatsAppCTA";
import AnimatedRoute from "./components/AnimatedRoute";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import Estimator from "./pages/Estimator";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  useSmoothScroll();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-black focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />
      <ScrollToTop />

      <main id="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedRoute><Home /></AnimatedRoute>} />
            <Route path="/projects" element={<AnimatedRoute><Projects /></AnimatedRoute>} />
            <Route path="/about" element={<AnimatedRoute><About /></AnimatedRoute>} />
            <Route path="/services" element={<AnimatedRoute><Services /></AnimatedRoute>} />
            <Route path="/estimator" element={<AnimatedRoute><Estimator /></AnimatedRoute>} />
            <Route path="/process" element={<AnimatedRoute><Process /></AnimatedRoute>} />
            <Route path="/contact" element={<AnimatedRoute><Contact /></AnimatedRoute>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingWhatsAppCTA />
    </>
  );
}
