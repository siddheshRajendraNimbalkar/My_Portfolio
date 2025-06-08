'use client'

import React from 'react'
import { Github, Linkedin } from 'lucide-react';

const ProjectNave = ({ className }: { className?: string }) => {
  return (
    <div className={`bg-black h-[10vh] flex justify-between items-center ${className}`}>
        <div className="logo text-[#ECE7E1] text-4xl font-bold">
            <a href="/" className="hover:text-[#FF5C00] transition-colors duration-300">SIDDHESH</a>
        </div>
        <div className="social flex space-x-0">
            <a 
              href="https://github.com/siddheshRajendraNimbalkar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-[10vh] w-[10vh] flex items-center justify-center bg-[#131313] border-r border-[#ECE7E1] transition-colors duration-300 group hover:bg-[#ECE7E1]"
            >
              <Github size={32} className="text-[#ECE7E1] group-hover:text-[#131313] transition-colors duration-300"/>
            </a>
            <a 
              href="https://www.linkedin.com/in/siddhesh-nimbalkar-43728229b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-[10vh] w-[10vh] flex items-center justify-center bg-[#FF5C00] transition-colors duration-300 group hover:bg-[#131313]"
            >
              <Linkedin size={32} className="text-[#131313] group-hover:text-[#FF5C00] transition-colors duration-300"/>
            </a>
        </div>
    </div>
  )
}

export default ProjectNave