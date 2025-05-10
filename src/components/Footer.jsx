import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { ShieldCheck } from 'lucide-react'; // For "QuantumShield" logo/icon

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative w-full text-white py-12 px-6 md:px-20 overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-[#121212] border-t border-gray-800 z-10"
    >
      {/* SVG Grid Background */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#888" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Name & Audit */}
        <div className="text-center md:text-left">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold tracking-wide">
            Designed & Built by <span className="text-purple-500 animate-pulse">Ziad</span>
          </h2>
          <p className="text-gray-400 font-sora text-sm mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Security Note */}
          <div className="flex items-center gap-2 mt-4 text-sm text-white/70 hover:text-white transition duration-300">
            <ShieldCheck className="text-cyan-400 w-5 h-5" />
            <span className="font-sora">Secured by <span className="text-cyan-400 font-bold">QuantumShield</span></span>
          </div>
        </div>

        {/* Right: Socials */}
        <div className="flex gap-6 text-lg items-center">
          <a
            href="mailto:ziad75022@gmail.com"
            className="text-gray-300 hover:text-purple-400 transition-all duration-300"
            target="_blank" rel="noopener noreferrer"
            style={{ textShadow: '0 0 8px #8b5cf6' }}
          >
            <FaEnvelope className="text-2xl hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/ziadwagih"
            className="text-gray-300 hover:text-purple-400 transition-all duration-300"
            target="_blank" rel="noopener noreferrer"
            style={{ textShadow: '0 0 8px #8b5cf6' }}
          >
            <FaLinkedin className="text-2xl hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://github.com/ziadwagih"
            className="text-gray-300 hover:text-purple-400 transition-all duration-300"
            target="_blank" rel="noopener noreferrer"
            style={{ textShadow: '0 0 8px #8b5cf6' }}
          >
            <FaGithub className="text-2xl hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Pulse Bar */}
      <div className="mt-10 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
    </motion.footer>
  );
};

export default Footer;
