'use client'

import { Github, Linkedin } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap';

const Navebar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.from(".navebar-container", { opacity: 0, duration: 0.8, ease: "power3.out" });
    gsap.from(".navebar-logo", { opacity: 0, x: -20, duration: 0.8, ease: "power3.out", delay: 0.2 });
    gsap.from(".navebar-social a", { opacity: 0, x: 20, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0.6 });

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
        {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-[#ECE7E1]/50 transition-shadow duration-300 ${scrolled ? 'shadow-xl' : ''} navebar-container`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div
                className="text-xl font-serif font-bold text-[#ECE7E1] cursor-pointer navebar-logo"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Studio
              </div>
              <div className="flex space-x-6 navebar-links">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <span
                    key={item}
                    className="text-sm lowercase tracking-wide text-[#ECE7E1] hover:text-white transition-all duration-300 relative group cursor-pointer"
                    onClick={() => {
                      if (item === 'About') {
                        document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                      } else if (item === 'Home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else if (item === 'Projects') {
                        document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
                      } else if (item === 'Contact') {
                        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4 navebar-social">
              <a href="https://github.com/siddheshRajendraNimbalkar" target="_blank" rel="noopener noreferrer" className="text-[#ECE7E1] hover:text-white transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/siddhesh-nimbalkar-43728229b/" target='_blank' className="text-[#ECE7E1] hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navebar
