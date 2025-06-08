'use client'

import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import OnlyBtn from '@/components/Button/Button';
import { Github, MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';

const frontend = ["AI", "Next JS", "Tailwind Css", "GSAP", "Framer Motio", "Redis", "Type Script", "Shad CN", "React", "Zod", "Axios"];
const backend = ["GoLang", "GRPC", "Gin", "Postgres", "SQLC", "Paseto", "Redis"];

gsap.registerPlugin(ScrollTrigger);

const productDisplayImages = [
    "/product1.png",
    "/product2.png",
    "https://automobilist.com/cdn/shop/products/59008_source_1668180485.jpg?v=1743658118&width=700",
];

const serverManagementImages = [
    "/create1.png",
    "/create0.png",
    "/group1.png",
    "/group0.png"
];

const PangatPage = () => {
    const [showContent, setShowContent] = useState(false);
    const [currentPreMadeBlockImageIndex, setCurrentPreMadeBlockImageIndex] = useState(0);
    const [currentProductImageIndex, setCurrentProductImageIndex] = useState(0);

    useEffect(() => {
        const preMadeBlockInterval = setInterval(() => {
            setCurrentPreMadeBlockImageIndex((idx) => (idx + 1) % serverManagementImages.length);
        }, 2000);

        return () => clearInterval(preMadeBlockInterval);
    }, []);

    useEffect(() => {
        gsap.set(".pangat-intro-image", { scale: 0, y: 0, opacity: 1 });

        const tl = gsap.timeline({
            onComplete: () => {
                setShowContent(true);
            },
        });

        tl.to(".pangat-intro-overlay", {
            y: "0%",
            duration: 1.2,
            ease: "power2.out",
        })
            .to(".pangat-intro-image", {
                scale: 1,
                duration: 1.0,
                ease: "power3.out",
                delay: -0.8,
            }, "<")
            .to(".pangat-intro-overlay", {
                y: "100%",
                duration: 1.2,
                ease: "power2.in",
                delay: 0.6,
            }, ">-0.6")
            .to(".pangat-intro-image", {
                y: "100%",
                opacity: 0,
                duration: 1.2,
                ease: "power2.in",
                delay: -0.8,
            }, "<");
    }, []);

    useEffect(() => {
        if (showContent) {

            gsap.fromTo(
                '.pangat-main-title',
                { opacity: 0, y: 0 },
                { opacity: 1, y: 0, duration: 1.5, ease: 'expo.out' }
            )

            // Animate second title
            gsap.fromTo(
                '.pangat-second-title',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: 'expo.out' }
            )

            // Animate main image wrapper
            gsap.fromTo(
                '.pangat-main-image-wrapper',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: '.pangat-main-image-wrapper',
                        start: 'top 80%',
                    },
                }
            );

            // Animate Real-Time Messaging section
            gsap.fromTo(
                '.real-time-messaging-section',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: '.real-time-messaging-section',
                        start: 'top 80%',
                    },
                }
            );

            // Animate large circular text block
            gsap.fromTo(
                '.circular-text-block',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: '.circular-text-block',
                        start: 'top 80%',
                    },
                }
            );

            // Animate Audio & Video Communication section
            gsap.fromTo(
                '.audio-video-section',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: '.audio-video-section',
                        start: 'top 80%',
                    },
                }
            );

            // Animate Video and Call section
            gsap.fromTo(
                '.video-call-section',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: '.video-call-section',
                        start: 'top 80%',
                    },
                }
            );

        }
    }, [showContent])

    useEffect(() => {
        gsap.to(".product-slider-image", { opacity: 0, duration: 0.5 });
        gsap.to(`.product-slider-image-${currentProductImageIndex}`, { opacity: 1, duration: 0.5 });
    }, [currentProductImageIndex]);

    const nextSlide = () => {
        setCurrentProductImageIndex((prevIndex) => (prevIndex + 1) % productDisplayImages.length);
    };

    const prevSlide = () => {
        setCurrentProductImageIndex((prevIndex) => (prevIndex - 1 + productDisplayImages.length) % productDisplayImages.length);
    };

    return (
        <>
            <div className="relative font-sans min-h-screen bg-[#FFC900] text-black pt-[10vh]">

                <div className="pangat-intro-overlay fixed inset-0 bg-[#FF5C00] z-50 flex items-center justify-center">
                    <Image
                        src="/star.png"
                        alt="Intro Image"
                        width={120}
                        height={120}
                        className="pangat-intro-image"
                        priority
                    />
                </div>
                {showContent && (
                    <main className="flex flex-col items-start px-6 py-16 sm:px-8 md:px-12 lg:px-20 relative z-20 max-w-[90rem] mx-auto">
                        {/* Main Title Section */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-10 leading-none pangat-main-title pr-12">
                            Flexible, beautiful<br />and simple.<span className="text-[#FFFF]"> It's the Semplice way.</span>
                        </h1>


                        {/* Second Section: Drag & Drop Page Builder */}
                        <div className=" mt-[15vh] mb-12 px-4">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black pangat-second-title">
                                ShopEasy
                            </h1>
                            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-zinc-700 font-semibold max-w-3xl mx-auto">
                                A Donation & E-commerce Platform for Colleges and NGOs
                            </p>
                        </div>


                        <OnlyBtn
                            className='bg-blue-700 text-white cursor-pointer h-[60px] mb-5 w-[140px] font-bold border-none flex justify-center items-center gap-2 hover:text-zinc-800'
                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                        >
                            <div>
                                Skill Use
                            </div>
                            <div>
                                <MoveRight size={18} />
                            </div>
                        </OnlyBtn>

                        <div className="w-full relative h-[26rem] sm:h-[30rem] md:h-[34rem] rounded-xl overflow-hidden shadow-2xl pangat-main-image-wrapper mb-14 bg-black">
                            <Image
                                src={'/shop.png'}
                                alt="Page Builder UI"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="transition-opacity duration-700"
                                priority={true}
                            />
                        </div>

                        <div className='flex gap-5'>
                            <a href="https://github.com/siddheshRajendraNimbalkar/collage-project" target='_blank'>
                                <OnlyBtn className='bg-white cursor-pointer h-[60px] w-[120px] font-bold border-none flex justify-center items-center gap-2 hover:text-[#FF5C00]'>
                                    <div>
                                        GITHUB
                                    </div>
                                    <div>
                                        <Github size={18} />
                                    </div>
                                </OnlyBtn>
                            </a>


                        </div>


                    </main>
                )}
            </div>
            <div className='bg-white h-[80vh] w-full flex justify-center items-center p-10 border-b '>
                <div className='bg-[#23A094] p-8 rounded-full shadow-lg text-center border-2 border-black'>
                    <div className='bg-orange-500 p-8 rounded-full shadow-lg text-center border-2 border-black'>
                        <div className='bg-[#FFC900] text-xl px-16 py-12 text-black uppercase rounded-full border-2 shadow-lg circular-text-block'>
                            <p>Shop Easy is a full-stack collaboration and marketplace platform built for college staff and NGOs. It allows verified users to connect, propose partnerships, and exchange resources in a secure, role-based environment. It uses Golang + gRPC + PostgreSQL + Redis on the backend and Next.js + Tailwind CSS on the frontend. A robust JWT auth system and Redis-based rollback logic ensure high reliability in transactions.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features part */}
            <div className=" ">
                <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row ]">

                    <div className="w-full lg:w-1/2 relative bg-[#FC6800] p-6">


                        <Image
                            src="/complete.png"
                            alt="button1"
                            width={600}
                            height={600}
                            className="shadow-md"
                        />

                    </div>

                    {/* Pre-made blocks section */}
                    <div className="w-full lg:w-1/2 bg-[#131313] p-6">
                        <div className='flex justify-center items-center flex-col h-full pl-2'>
                            <div className='flex justify-center items-center flex-col'>
                                <h1 className='text-4xl font-extrabold mb-6 text-white pangat-main-title'>
                                    Dynamic UI, Powered by Animation
                                </h1>
                                <p className='text-lg text-gray-400 mb-8 pangat-second-title'>
                                    Explore fluid animations and interactions that enhance user experience using modern frontend libraries.
                                </p>
                            </div>
                            <div className='w-full flex '>
                                {["GSAP", "Framer Motion", "Tailwind CSS", "Clsx", "Swiper"].map((item, index) => (
                                    <div key={index} className='p-4 bg-white text-black text-xl'>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <img
                        src={"/search.png"}
                        alt='search'
                        className='w-full'
                    />
                    <div className='w-full flex justify-center bg-[#DFDDD0]'>
                        <div className="">
                            <h1 className='text-2xl p-4 font-bold text-[#252A16] bg-[#DFDDD0]'>
                                Search Bar Power By Redis...
                            </h1>
                        </div>
                    </div>
                </div>

                {/* product display section  */}
                <div className="flex flex-col lg:flex-row w-full min-h-screen bg-[#2e2e2e] text-white">
                    {/* Left Column - Image Slider */}
                    <div className="w-full lg:w-1/2 relative flex items-center justify-center overflow-hidden">
                        {productDisplayImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Gallery Slide ${index + 1}`}

                                style={{ objectFit: 'cover' }}
                                className={`absolute product-slider-image product-slider-image-${index}`}
                            />
                        ))}
                        {/* Navigation Arrows */}
                        <div className="absolute inset-0 flex items-center justify-between px-4">
                            <button onClick={prevSlide} className="text-white text-3xl opacity-50 hover:opacity-100 transition-opacity z-10"><ChevronLeft size={48} /></button>
                            <button onClick={nextSlide} className="text-white text-3xl opacity-50 hover:opacity-100 transition-opacity z-10"><ChevronRight size={48} /></button>
                        </div>
                        {/* Pagination Dots */}
                        <div className="absolute bottom-4 flex space-x-2 z-10">
                            {productDisplayImages.map((_, index) => (
                                <span
                                    key={index}
                                    className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${index === currentProductImageIndex ? 'bg-white' : 'bg-white/50'}`}
                                    onClick={() => setCurrentProductImageIndex(index)}
                                ></span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center p-10">
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">GoLang Makes Web Faster.</h2>
                        <p className="text-lg mb-8 max-w-xl">
                            .
                        </p>

                    </div>
                </div>

                {/* skill display section  */}
                <div className='h-[80vh] w-full bg-white flex justify-center items-center p-10  gap-8'>

                    <div className="bg-[#F1F333] p-8 rounded-xl shadow-lg flex flex-col items-start text-white min-h-[40vh] w-[30vw]">

                        <Image
                            src="https://assets.gumroad.com/assets/discover/drawing-9fb474a77e8f85d359ee1b906f46c2f6833696fd9b2acd79b29552d9b7b00781.svg"
                            alt="Pangat Logo"
                            width={100}
                            height={100}
                            className="mb-4"
                        />

                        <h3 className="text-3xl text-black mb-4 font-bold">Front End</h3>

                        <div className="mt-auto">

                            <div className="flex flex-wrap gap-2 pt-[5vh]">

                                {
                                    frontend.map((item, index) => (
                                        <span key={index} className="bg-white text-zinc-800 rounded-full px-4 py-1 text-sm border border-gray-300">
                                            {item}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#FF90E8] p-8 rounded-xl shadow-lg flex flex-col items-start text-white min-h-[40vh] w-[30vw]">

                        <Image
                            src="https://assets.gumroad.com/assets/discover/film-bb2c44fa3a48b6cdaf5fa288c0386e8d17e532909ed54ea987d137092f99c3cc.svg"
                            alt="Pangat Logo"
                            width={100}
                            height={100}
                            className="mb-4"
                        />

                        <h3 className="text-3xl font-bold text-black mb-4">Back End</h3>

                        <div className="mt-auto">

                            <div className="flex flex-wrap gap-2 pt-[5vh]">

                                {
                                    backend.map((item, index) => (
                                        <span key={index} className="bg-white text-gray-800 rounded-full px-4 py-1 text-sm border border-gray-300">
                                            {item}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default PangatPage;