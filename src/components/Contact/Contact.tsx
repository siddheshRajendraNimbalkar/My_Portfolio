'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Download, Sparkles, ArrowRight } from "lucide-react";

const ContactPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const socialLinks = [
    {
      href: "https://github.com/siddheshRajendraNimbalkar",
      icon: Github,
      label: "GitHub",
      color: "#333"
    },
    {
      href: "https://www.linkedin.com/in/siddhesh-nimbalkar-43728229b/",
      icon: Linkedin,
      label: "LinkedIn",
      color: "#0077b5"
    },
    {
      href: "https://x.com/Siddhesh_Dev_",
      icon: Twitter,
      label: "Twitter",
      color: "#1da1f2"
    }
  ];

  return (
    <div 
      id="contact-section" 
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center relative overflow-hidden px-4"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-white/10 to-gray-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: '10%',
            top: '20%'
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-gray-600/20 to-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{
            right: '15%',
            bottom: '25%'
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 relative max-w-4xl mx-auto"
      >
        {/* Floating Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium">Available for new projects</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Transform Your Vision
            </span>
            <motion.div 
              className="text-4xl md:text-6xl mt-2 relative"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="bg-gradient-to-r from-gray-400 via-white to-gray-600 bg-clip-text text-transparent bg-300% animate-gradient">
                Into Digital Reality
              </span>
            </motion.div>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-12 text-white/70 font-light leading-relaxed"
        >
          Creating stunning websites that capture your unique story
          <br />
          <span className="text-white">with cutting-edge technology</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.button
            className="group relative bg-gradient-to-r from-[#a8e6cf] to-[#64b3f4] text-black py-4 px-8 rounded-2xl font-bold text-lg shadow-2xl overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(168, 230, 207, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: isHovered ? '100%' : '-100%' }}
              transition={{ duration: 0.6 }}
            />
            <a 
              href="/Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 relative z-10"
            >
              <Download className="w-5 h-5" />
              Download Resume
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 10px 30px rgba(255,255,255,0.1)'
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <social.icon 
                size={28} 
                className="text-white group-hover:text-[#a8e6cf] transition-colors relative z-10" 
              />
              
              {/* Tooltip */}
              <motion.div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                initial={{ y: 5 }}
                whileHover={{ y: 0 }}
              >
                {social.label}
              </motion.div>
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#a8e6cf]/20 to-[#64b3f4]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                layoutId={`glow-${index}`}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-white/50 font-light"
        >
          <p>Let's build something extraordinary together</p>
        </motion.div>
      </motion.div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }
        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;