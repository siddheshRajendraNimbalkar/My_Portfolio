'use client'
import { useState, useEffect, ReactNode, useCallback, JSX } from 'react';
import { Feather, Instagram, Linkedin } from 'react-feather';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, StickyNote, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface GridState {
  cols: number;
  rows: number;
  colors: string[];
}

interface DarkGridProps {
  children?: ReactNode;
  baseSize?: number;
  maxScale?: number;
}

const generateDarkColor = (): string => {
  const base = 20; // Keep colors dark
  const r = base + Math.floor(Math.random() * 30);
  const g = base + Math.floor(Math.random() * 30);
  const b = base + Math.floor(Math.random() * 30);
  return `rgb(${r},${g},${b})`;
};

function DarkGrid({
  children,
  baseSize = 20,
  maxScale = 1.5
}: DarkGridProps) {
  const [grid, setGrid] = useState<GridState>({ cols: 0, rows: 0, colors: [] });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const calculateDistance = useCallback((indexA: number, indexB: number, cols: number) => {
    const x1 = indexA % cols;
    const y1 = Math.floor(indexA / cols);
    const x2 = indexB % cols;
    const y2 = Math.floor(indexB / cols);
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }, []);

  const getHoverScale = useCallback((index: number) => {
    if (hoveredIndex === null || grid.cols === 0) return 1;
    const distance = calculateDistance(index, hoveredIndex, grid.cols);
    return Math.max(maxScale - distance * 0.2, 1);
  }, [hoveredIndex, grid.cols, calculateDistance, maxScale]);

  useEffect(() => {
    const calculateGrid = () => {
      const gap = 2;
      const cols = Math.floor(window.innerWidth / (baseSize + gap));
      const rows = Math.floor(window.innerHeight / (baseSize + gap));

      setGrid({
        cols,
        rows,
        colors: Array.from({ length: cols * rows }, generateDarkColor)
      });
    };

    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, [baseSize]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${grid.cols}, ${baseSize}px)`,
          gridAutoRows: `${baseSize}px`,
          gap: '2px'
        }}
      >
        {grid.colors.map((color, index) => (
          <div
            key={index}
            className="transition-transform duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              backgroundColor: color,
              transform: `scale(${getHoverScale(index)})`,
              borderRadius: '20%'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
}

const Hero = () => {
  useEffect(() => {
    gsap.from(".hero-heading", { opacity: 0, y: 50, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".hero-section", start: "top 80%", toggleActions: "play none none none" } });
    gsap.from(".hero-sub-section", { opacity: 0, y: 50, duration: 1, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: ".hero-section", start: "top 80%", toggleActions: "play none none none" } });
    gsap.from(".hero-paragraph", { opacity: 0, y: 50, duration: 1, delay: 0.4, ease: "power3.out", scrollTrigger: { trigger: ".hero-section", start: "top 80%", toggleActions: "play none none none" } });
  }, []);

  type SocialItem = {
    icon: JSX.Element;
    text: string;
    link: string;
  };

  const socialItem: SocialItem[] = [
    {
      icon: <Github className="" size={20} />,
      text: 'GitHub',
      link: 'https://github.com/siddheshRajendraNimbalkar',
    },
    {
      icon: <Linkedin className="" size={20} />,
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/siddhesh-nimbalkar-43728229b/',
    },
    {
      icon: <X className="" size={20} />,
      text: 'Twitter',
      link: 'https://x.com/Siddhesh_Dev_',
    },
    {
      icon: <Instagram className="" size={20} />,
      text: 'Instagram',
      link: 'https://www.instagram.com/nimbalkar_siddhesh_/',
    },
    {
      icon: <StickyNote className="" size={20} />,
      text: 'Resume',
      link: '/Nimbalkar_Resume.pdf',
    }
  ]

  return (
    <div className="h-screen w-screen relative hero-section">
      <DarkGrid>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white hero-heading">
            Hi, I'm <span className="italic">Siddhesh</span>
          </h1>
          <div className="flex items-center space-x-4 mt-2 hero-sub-section">
            <Feather className="text-green-400" size={32} />
            <p className="text-xl md:text-2xl text-white font-semibold">
              Software Developer
            </p>
          </div>
          <div className="flex items-center gap-4 ml-6 flex-wrap mt-2">
            {socialItem.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black bg-white rounded-full shadow-lg px-4 py-2 transition-all duration-300 hover:shadow-xl  hover:scale-105 border border-gray-600"
              >
                <div className=" mr-2">{item.icon}</div>
                <span className="text-base font-medium">{item.text}</span>
              </a>
            ))}
          </div>

          <p className="text-lg text-white leading-relaxed max-w-md mt-6 text-center hero-paragraph">
            A passionate software developer focused on creating dynamic, user-centered platforms with real-time features and solid security.
          </p>
        </div>
      </DarkGrid>
    </div>
  );
}

export default Hero;
