'use client'
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react"; 

const ContactPage = () => {
  return (
    <div id="contact-section" className="min-h-screen bg-[#001f1f] text-[#f5f5dc] flex flex-col items-center justify-center relative overflow-hidden px-4">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mt-16"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
        >
          Transform Your Vision
          <motion.span 
            className="block text-[#a8e6cf] mt-2"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Into Digital Reality
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl mb-12 text-[#f5f5dc]/80"
        >
          Creating stunning websites that capture your unique story
        </motion.p>

        <div>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 0 16px #a8e6cf', color: '#001f1f' }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#f5f5dc] text-[#001f1f] py-3 px-8 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow mb-16 focus:outline-none"
          >
            <a href="/My_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Resume
            </a>
          </motion.button>
        </div>

        {/* Contact Info - Social Media Links */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="mx-auto mt-8 flex gap-6 justify-center"
        >
          {/* Social Media Icons */}
          <motion.a
            href="https://github.com/siddheshRajendraNimbalkar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, boxShadow: '0 0 12px #a8e6cf', rotate: -10 }}
            className="text-[#f5f5dc] hover:text-[#a8e6cf] transition-colors"
          >
            <Github size={32} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/siddhesh-nimbalkar-43728229b/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, boxShadow: '0 0 12px #a8e6cf', rotate: 10 }}
            className="text-[#f5f5dc] hover:text-[#a8e6cf] transition-colors"
          >
            <Linkedin size={32} />
          </motion.a>
          <motion.a
            href="https://x.com/Siddhesh_Dev_"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, boxShadow: '0 0 12px #a8e6cf', rotate: 5 }}
            className="text-[#f5f5dc] hover:text-[#a8e6cf] transition-colors"
          >
            <Twitter size={32} />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};


export default ContactPage;
