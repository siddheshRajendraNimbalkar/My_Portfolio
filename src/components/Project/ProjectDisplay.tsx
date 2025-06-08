'use client'; 

import Image from 'next/image';
import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectDisplay = () => {
  useEffect(() => {
    // Animation for the first project
    gsap.from(".project-1-title", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-1-container",
        start: "top 80%", // When the top of the trigger hits 80% of the viewport
        toggleActions: "play none none none",
      }
    });
    gsap.from(".project-1-detail", {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-1-container",
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });
    gsap.from(".project-1-image", {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-1-container",
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    // Animation for the second project
    gsap.from(".project-2-title", {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-2-container",
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });
    gsap.from(".project-2-detail", {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-2-container",
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });
    gsap.from(".project-2-image", {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-2-container",
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    // Animation for the third project
    gsap.from(".project-3-title", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-3-container",
        start: "top 80%", // When the top of the trigger hits 80% of the viewport
        toggleActions: "play none none none",
      }
    });
    gsap.from(".project-3-detail", {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-3-container",
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });
    gsap.from(".project-3-image", {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-3-container",
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    // Animation for the fourth project
    gsap.from(".project-4-title", {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-4-container",
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });
    gsap.from(".project-4-detail", {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-4-container",
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });
    gsap.from(".project-4-image", {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-4-container",
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });
  }, []);

  return (
    <div id="projects-section" className='bg-[#131313] text-[#ECE7E1] min-h-screen py-16'>
      
      <div className="max-w-6xl pl-4 md:pl-32">
        <div className='flex items-center pt-16 mb-24'>
            <Image src="/star.png" alt="Star" height={50} width={50} className="mr-4" />
            <h2 className='text-4xl font-bold uppercase tracking-wide'>PROJECT </h2>
        </div>  
        <div className="flex flex-col space-y-16">
            {/* First Project */}
            <div className="flex flex-col md:flex-row items-center project-1-container md:gap-8">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h3 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-4 project-1-title">PANGAT (SOCIAL MEDIA)</h3>
                    <p className="text-lg md:text-xl uppercase text-[#ECE7E1] project-1-detail ">NextJS,NextJs-Backend,GoLang</p>
                    <a href="/pangat" className="inline-block bg-[#ECE7E1] text-[#131313] px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#FF5C00] hover:scale-105 mt-4">VIEW MORE</a>
                </div>
                <div className="w-full md:w-1/2 h-64 md:h-96 relative overflow-hidden border border-[#ECE7E1] project-1-image">
                    <Image 
                        src="/create0.png" 
                        alt="Barbara Scefrro Project" 
                        layout="fill" 
                        objectFit="cover" 
                        className="opacity-50 hover:opacity-100 transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>

            {/* Second Project */}
            <div className="flex flex-col md:flex-row-reverse items-center project-2-container md:gap-8">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h3 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-4 project-2-title ">SHOP EASY (ECOMMERCE)</h3>
                    <p className="text-lg md:text-xl uppercase text-[#ECE7E1] project-2-detail ">NextJS,GoLang,With AI</p>
                    <a href="/shopeasy" className="inline-block bg-[#ECE7E1] text-[#131313] px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#FF5C00] hover:scale-105 mt-4">VIEW MORE</a>
                </div>
                <div className="w-full md:w-1/2 h-64 md:h-96 relative overflow-hidden border border-[#ECE7E1] project-2-image">
                    <Image 
                        src="/product1.png" 
                        alt="Beatrice Cartese Project" 
                        layout="fill" 
                        objectFit="cover" 
                        className="opacity-50 hover:opacity-100 transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>

            {/* Third Project */}
            <div className="flex flex-col md:flex-row items-center project-3-container md:gap-8">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h3 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-4 project-3-title ">GO BANK</h3>
                    <p className="text-lg md:text-xl uppercase text-[#ECE7E1] project-3-detail ">GoLang</p>
                    <a href="/bank" className="inline-block bg-[#ECE7E1] text-[#131313] px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#FF5C00] hover:scale-105 mt-4">VIEW MORE</a>
                </div>
                <div className="w-full md:w-1/2 h-64 md:h-96 relative overflow-hidden border border-[#ECE7E1] project-3-image">
                    <Image 
                        src="/Golang.webp" 
                        alt="Project Alpha" 
                        layout="fill" 
                        objectFit="cover" 
                        className="opacity-50 hover:opacity-100 transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>

            {/* Fourth Project */}
            <div className="flex flex-col md:flex-row-reverse items-center project-4-container md:gap-8">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h3 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-4 project-4-title ">BLOGGING WEBSITE</h3>
                    <p className="text-lg md:text-xl uppercase text-[#ECE7E1] project-4-detail  ">ReactJS,HonoJS,CLOUDFLARE</p>
                    <a href="/blogging" className="inline-block bg-[#ECE7E1] text-[#131313] px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#FF5C00] hover:scale-105 mt-4">VIEW MORE</a>
                </div>
                <div className="w-full md:w-1/2 h-64 md:h-96 relative overflow-hidden border border-[#ECE7E1] project-4-image">
                    <Image 
                        src="/blog.png" 
                        alt="Project Beta" 
                        layout="fill" 
                        objectFit="cover" 
                        className="opacity-50 hover:opacity-100 object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay