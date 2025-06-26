'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const items = [
      ".about-heading", ".about-paragraph-1", ".about-paragraph-2",
      ".tech-stack-heading", ".tech-stack-list",
      ".current-focus-heading", ".current-focus-list",
      ".about-paragraph-3"
    ];
    items.forEach((cls, i) => {
      gsap.from(cls, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: i * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });
  }, []);

  return (
    <div id="about-section" className="min-h-screen bg-[#FF5C00] flex flex-col sm:flex-row items-start justify-start relative about-section">
      {/* Left Sidebar (Hidden on small screens) */}
      <div className="hidden sm:block w-16">
        <div className="h-full flex flex-col items-center justify-between py-12">
          <div className="w-px h-[70vh]" />
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 w-full sm:ml-16 p-6 sm:p-16 relative bg-[#131313]"
        style={{
          clipPath:
            'polygon(0 0, 0.5% 2.5%, 0% 5%, 0.5% 7.5%, 0% 10%, 0.5% 12.5%, 0% 15%, 0.5% 17.5%, 0% 20%, 0.5% 22.5%, 0% 25%, 0.5% 27.5%, 0% 30%, 0.5% 32.5%, 0% 35%, 0.5% 37.5%, 0% 40%, 0.5% 42.5%, 0% 45%, 0.5% 47.5%, 0% 50%, 0.5% 52.5%, 0% 55%, 0.5% 57.5%, 0% 60%, 0.5% 62.5%, 0% 65%, 0.5% 67.5%, 0% 70%, 0.5% 72.5%, 0% 75%, 0.5% 77.5%, 0% 80%, 0.5% 82.5%, 0% 85%, 0.5% 87.5%, 0% 90%, 0.5% 92.5%, 0% 95%, 0.5% 97.5%, 0% 100%, 100% 100%, 100% 0%)'
        }}
      >
        <Image
          src="/art.png"
          alt="Background Flower"
          width={500}
          height={500}
          className="hidden absolute md:block top-5 right-4 w-40 h-40 sm:w-64 sm:h-64 object-cover z-0"
        />

        <h2 className="text-4xl sm:text-5xl font-bold text-[#ECE7E1] mb-6 about-heading relative z-10">
          About
        </h2>

        <p className="text-lg sm:text-2xl text-[#ECE7E1] max-w-xl about-paragraph-1 relative z-10 mb-4">
          Hi! I'm Nimbalkar Siddhesh, a Full-Stack Developer from
          <span className='bg-indigo-600 rounded-sm pr-1 uppercase'>📍Pune Maharashtra India</span> 
          with a strong focus on backend engineering and real-time systems.
        </p>

        <h3 className="text-3xl sm:text-4xl font-bold text-[#F49533] mb-4 tech-stack-heading relative z-10">
          🔧 Tech I Work With
        </h3>

        {/* Specialized Section */}
        <div className="bg-[#272626] p-4 rounded-lg border-l-4 border-[#FF5C00] text-[#ECE7E1] shadow-md space-y-3 mb-6">
           <p className="text-lg leading-relaxed">
    <span className="font-semibold text-[#FF5C00] text-2xl sm:text-xl block">
      I specialize in
    </span>
    <span className="flex flex-wrap items-center gap-2 mt-3">
      <span className="bg-[#ECE7E1] text-[#131313] px-3 py-1 rounded-lg text-sm font-medium">
        GoLang
      </span>
      <span className="bg-[#ECE7E1] text-[#131313] px-3 py-1 rounded-lg text-sm font-medium">
        Next JS
      </span>
      <span className="bg-[#ECE7E1] text-[#131313] px-3 py-1 rounded-lg text-sm font-medium">
        MERN Stack
      </span>
    </span>
    <span className="block mt-4">
      and I love building powerful APIs, distributed systems, and intuitive UIs.
    </span>
  </p>
          
        </div>

        <div className="space-y-2 text-[#ECE7E1] text-sm sm:text-base tech-stack-list relative z-10">
          <p><span className="font-bold">Languages:</span> <span className="flex flex-wrap gap-2 mt-1">{['Go', 'JavaScript', 'TypeScript', 'Python', 'C', 'Java'].map((lang) => (
            <span key={lang} className="bg-[#ECE7E1] text-[#131313] px-2 py-1 rounded">{lang}</span>
          ))}</span></p>

          <p><span className="font-bold">Frameworks:</span> <span className="flex flex-wrap gap-2 mt-1">{["Node.js", "Express.js", "Hono.js", "React.js", "Next.js"].map((fw) => (
            <span key={fw} className="bg-[#ECE7E1] text-[#131313] px-2 py-1 rounded">{fw}</span>
          ))}</span></p>

          <p><span className="font-bold">Databases:</span> <span className="flex flex-wrap gap-2 mt-1">{["MongoDB", "PostgreSQL", "MySQL", "Redis"].map((db) => (
            <span key={db} className="bg-[#ECE7E1] text-[#131313] px-2 py-1 rounded">{db}</span>
          ))}</span></p>

          <p><span className="font-bold">Tools:</span> <span className="flex flex-wrap gap-2 mt-1">{["AWS", "Docker", "Kubernetes", "gRPC", "GraphQL", "Prisma", "SQLC"].map((tool) => (
            <span key={tool} className="bg-[#ECE7E1] text-[#131313] px-2 py-1 rounded">{tool}</span>
          ))}</span></p>

          <p><span className="font-bold">Other:</span> <span className="flex flex-wrap gap-2 mt-1">{["WebSockets", "JWT", "CI/CD", "Tailwind", "Git", "GitHub", "Linux"].map((item) => (
            <span key={item} className="bg-[#ECE7E1] text-[#131313] px-2 py-1 rounded">{item}</span>
          ))}</span></p>
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold text-[#F49533] mt-10 mb-4 current-focus-heading relative z-10">🚀 WORK</h3>

        <ul className="list-disc pl-5 space-y-6 text-[#ECE7E1] current-focus-list relative z-10 text-sm sm:text-base">
          <li>
            <span className="font-semibold text-white">Kavita Metal</span> – June 2025 – Present<br />
            <span className="italic text-sm">Freelance Developer</span>
          </li>
          <li>
            <span className="font-semibold text-white">MOCOTHRIFT</span> – Mar 2024 – May 2024<br />
            <span className="italic text-sm">Freelance Backend + Fullstack Developer</span>
          </li>
          <li>
            <span className="font-semibold text-white">Portfolio Website</span> – Dec 2022<br />
            <span className="italic text-sm">Freelance</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
