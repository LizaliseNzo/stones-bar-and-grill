import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: `url('/images/gallery/homepage_hero.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-white"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-3 py-1 bg-terra-800/90 rounded-sm text-white text-sm tracking-wide mb-4"
          >
            CASUAL DINING & OUTDOOR EXPERIENCE
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6"
          >
            Good food, good times at Wise Crax
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl"
          >
            Enjoy our casual outdoor dining experience with friends and family. Quality food, refreshing drinks, and a relaxed atmosphere.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/menu" className="btn-primary">
              View Our Menu
            </Link>
            <Link to="/reservation" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">
              Book a Table
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
        <span className="text-white text-sm font-light mb-2">Scroll</span>
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
