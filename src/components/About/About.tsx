'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Animations for the About section content
    gsap.from(".about-heading", { opacity: 0, y: 50, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".about-section", start: "top 80%", toggleActions: "play none none none" } });
    gsap.from(".about-paragraph-1", { opacity: 0, y: 50, duration: 1, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: ".about-section", start: "top 80%", toggleActions: "play none none none" } });
    gsap.from(".about-paragraph-2", { opacity: 0, y: 50, duration: 1, delay: 0.4, ease: "power3.out", scrollTrigger: { trigger: ".about-section", start: "top 80%", toggleActions: "play none none none" } });
    gsap.from(".tech-stack-heading", { opacity: 0, y: 50, duration: 1, delay: 0.6, ease: "power3.out", scrollTrigger: { trigger: ".about-section", start: "top 80%", toggleActions: "play none none none" } });
    gsap.from(".tech-stack-list", { opacity: 0, y: 50, duration: 1, delay: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".about-section", start: "top 80%", toggleActions: "play none none none" } });
    gsap.from(".current-focus-heading", { opacity: 0, y: 50, duration: 1, delay: 1.0, ease: "power3.out", scrollTrigger: { trigger: ".about-section", start: "top 80%", toggleActions: "play none none none" } });
    gsap.from(".current-focus-list", { opacity: 0, y: 50, duration: 1, delay: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".about-section", start: "top 80%", toggleActions: "play none none none" } });
    gsap.from(".about-paragraph-3", { opacity: 0, y: 50, duration: 1, delay: 1.4, ease: "power3.out", scrollTrigger: { trigger: ".about-section", start: "top 80%", toggleActions: "play none none none" } });
  }, []);

  return (
    <div id="about-section" className="min-h-screen bg-[#FF5C00] flex items-center justify-center relative about-section">
      {/* Left Column  */}
      <div className="absolute left-0 top-0 h-full w-24 bg-black border-r border-[#ECE7E1] relative hidden sm:block">
        <div className="h-full flex flex-col items-center justify-between py-12">
          <div className="flex flex-col items-center space-y-4">
            {/* Up Arrows */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L6 10H18L12 4Z" fill="#ECE7E1" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L6 10H18L12 4Z" fill="#ECE7E1" />
            </svg>
          </div>
          {/* Line with arrow */}
          <div className="flex flex-col items-center">
            <div className="w-px h-[70vh] "></div> {/* Vertical line */}

          </div>
          <div className="flex flex-col items-center space-y-4">
            {/* Down Arrows */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20L18 14H6L12 20Z" fill="#ECE7E1" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20L18 14H6L12 20Z" fill="#ECE7E1" />
            </svg>
          </div>
        </div>
        {/* Circles in the middle of the left column (absolute positioned relative to parent) */}
        <div className="absolute inset-x-0 mx-auto top-1/2 transform -translate-y-1/2 z-10 w-16">
          <div className="flex flex-col space-y-6">
            <div className="w-16 h-16 rounded-full border border-[#ECE7E1] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20" stroke="#ECE7E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12H20" stroke="#ECE7E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="w-16 h-16 rounded-full border border-[#ECE7E1] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20" stroke="#ECE7E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12H20" stroke="#ECE7E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="flex-1 bg-[#131313] ml-0 sm:ml-24 h-full p-16 flex flex-col justify-center relative" style={{
        clipPath: 'polygon(0 0, 0.5% 2.5%, 0% 5%, 0.5% 7.5%, 0% 10%, 0.5% 12.5%, 0% 15%, 0.5% 17.5%, 0% 20%, 0.5% 22.5%, 0% 25%, 0.5% 27.5%, 0% 30%, 0.5% 32.5%, 0% 35%, 0.5% 37.5%, 0% 40%, 0.5% 42.5%, 0% 45%, 0.5% 47.5%, 0% 50%, 0.5% 52.5%, 0% 55%, 0.5% 57.5%, 0% 60%, 0.5% 62.5%, 0% 65%, 0.5% 67.5%, 0% 70%, 0.5% 72.5%, 0% 75%, 0.5% 77.5%, 0% 80%, 0.5% 82.5%, 0% 85%, 0.5% 87.5%, 0% 90%, 0.5% 92.5%, 0% 95%, 0.5% 97.5%, 0% 100%, 100% 100%, 100% 0%)'
      }}>
        <Image src="/art.png" alt="Background Flower" height={500} width={500} className="absolute top-9 right-8 h-70 w-70 object-cover z-0" />
        <h2 className="text-5xl md:text-6xl font-bold text-[#ECE7E1] mb-8 leading-tight relative z-10 about-heading" style={{ fontFamily: 'Inter, sans-serif' }}>
          About
        </h2>
        <p className="text-2xl leading-relaxed text-[#ECE7E1] max-w-xl relative z-10 about-paragraph-1" style={{ fontFamily: 'Inter, sans-serif' }}>
          Hi! I'm Siddhesh Nimbalkar, a passionate and curious Full-Stack Developer from India with a strong focus on backend engineering, scalable systems, and real-time applications.
        </p>
        <br /><br />
        <p className="text-lg leading-relaxed text-red-600 max-w-xl mb-4 relative z-10 about-paragraph-2" style={{ fontFamily: 'Inter, sans-serif' }}>
          I specialize in Golang, Node.js, and the MERN stack, and I love building powerful APIs, distributed systems, and intuitive UIs. With over 3.5 years of hands-on learning and projects, I enjoy solving complex problems and crafting clean, maintainable code.
        </p>

        <h3 className="text-4xl font-bold text-[#F49533] mb-4 relative z-10 tech-stack-heading" style={{ fontFamily: 'Inter, sans-serif' }}>
          🔧 Tech I Work With
        </h3>
        <ul className="text-lg leading-relaxed text-[#ECE7E1] max-w-xl list-disc list-inside mb-4 relative z-10 tech-stack-list" style={{ fontFamily: 'Inter, sans-serif' }}>

          <span className="font-bold">Languages:</span>
          {['Go', 'JavaScript', 'TypeScript', 'Python', 'C', 'Java'].map((item, index) => (
            <span key={index} className="px-4 bg-[#ECE7E1] text-[#131313] ml-1">{item}</span>
          ))}
          <br />
          <span className="font-bold">Frameworks:</span>
          {["Node.js", "Express.js", "Hono.js", "React.js", "Next.js"].map((item, index) => (
            <span key={index} className="px-4 bg-[#ECE7E1] text-[#131313] ml-1">{item}</span>
          ))}
          <br />
          <span className="font-bold">Databases:</span>
          {["MongoDB", "PostgreSQL", "MySQL", "Redis"].map((item, index) => (
            <span key={index} className="px-4 bg-[#ECE7E1] text-[#131313] ml-1">{item}</span>
          ))}

          <br />
          <span className="font-bold">Tools:</span>
          {["AWS", "Docker", "Kubernetes", "gRPC", "GraphQL", "Prisma", "SQLC"].map((item, index) => (
            <span key={index} className="px-4 bg-[#ECE7E1] text-[#131313] ml-1">{item}</span>
          ))}
          <br />
          <span className="font-bold">Other:</span>
          {["WebSockets", "JWT", "CI/CD", "Tailwind", "Git", "GitHub", "Linux"].map((item, index) => (
            <span key={index} className="px-4 bg-[#ECE7E1] text-[#131313] ml-1">{item}</span>
          ))}
        </ul>

        <h3 className="text-4xl font-bold text-[#F49533] mb-4 relative z-10 current-focus-heading" style={{ fontFamily: 'Inter, sans-serif' }}>
          🚀 WORK
        </h3>

        <ul className="text-lg leading-relaxed text-[#ECE7E1] max-w-xl list-disc list-inside mb-4 relative z-10 current-focus-list" style={{ fontFamily: 'Inter, sans-serif' }}>
          <li>
            <span className="font-semibold text-white">Kavita Metal</span> – June 2025 – Present<br />
            <span className="italic text-sm">Freelance Developer</span><br />
            
          </li>
          <br />
          <li>
            <span className="font-semibold text-white">MOCOTHRIFT</span> – Mar 2024 – May 2024<br />
            <span className="italic text-sm">Freelance Backend + Fullstack Developer</span><br />
            
          </li>
          <br />
          <li>
            <span className="font-semibold text-white">Portfolio Website</span> – Dec 2022<br />
            <span className="italic text-sm">Freelance</span><br />
            
          </li>
        </ul>



      </div>


    </div>
  );
};

export default About;
