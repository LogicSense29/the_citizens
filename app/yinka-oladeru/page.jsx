"use client";
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { BsInstagram, BsTwitter, BsFacebook, BsYoutube, BsSpotify, BsMusicNoteBeamed, BsArrowRight, BsQuote } from "react-icons/bs";

const socialLinks = [
  { icon: <BsInstagram />, href: "#", label: "Instagram" },
  { icon: <BsTwitter />, href: "#", label: "Twitter" },
  { icon: <BsFacebook />, href: "#", label: "Facebook" },
  { icon: <BsYoutube />, href: "#", label: "YouTube" },
];

const galleryImages = [
  "/oladeru-b.jpg",
  "/pastor-rectangle.svg",
  "/home-1.jpg",
  "/oladeru.jpg",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function YinkaOladeruPage() {
  return (
    <main className="bg-[#0A0D11] min-h-screen text-white overflow-hidden">
        
        {/* Cinematic Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-24">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/oladeru-b.jpg" 
                    alt="Background" 
                    fill 
                    className="object-cover opacity-30 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D11] via-transparent to-[#0A0D11]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Visual Side */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="absolute inset-0 bg-blue-600/20 translate-x-4 translate-y-4 rounded-3xl -z-10 blur-2xl" />
                        <div className="relative aspect-[4/4] w-full max-w-md mx-auto rounded-[40px] overflow-hidden border border-white/10 shadow-2xl -rotate-2">
                            <Image 
                                src="/oladeru-b.jpg" 
                                alt="Yinka Oladeru" 
                                fill 
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="lg:w-1/2 text-center lg:text-left"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2  py-2 rounded-full mb-6">
                            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Lead Pastor</span>
                        </motion.div>
                        
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-black mb-6 leading-tight">
                            Yinka <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Oladeru</span>
                        </motion.h1>
                        
                        <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-light">
                            A dynamic leader and passionate teacher of the Word, dedicated to raising a generation consumed with hunger for Jesus.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <div className="flex gap-4 justify-center md:justify-left">
                                {socialLinks.map((social, index) => (
                                    <a 
                                        key={index}
                                        href={social.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-md hover:bg-blue-600 hover:border-blue-600 transition-all text-xl"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:block"
            >
                <div className="w-px h-16 bg-gradient-to-b from-blue-600 to-transparent" />
            </motion.div>
        </section>

        {/* Ministry & Bio Section */}
        <section id="ministry" className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 backdrop-blur-sm relative"
                    >
                        <BsQuote className="absolute top-10 right-10 text-6xl text-blue-600/20" />
                        
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 border-l-4 border-blue-600 pl-6">
                            A Vision for <br /> Transformation
                        </h2>
                        
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                            <p>
                                Yinka Oladeru is a passionate lover of God whose sole drive is to see a generation of young people consumed with hunger for more of Jesus. He consistently desires and pursues a deeper walk with the Holy Spirit, which is the inspiration for his relentless drive to invest time in communion and prayer.
                            </p>
                            <p>
                                Married to Nike Oladeru since 2012, they have been a powerful team in ministry, serving together with a shared vision for transformation. Both alumni of the Rhema Bible Training College, they have been equipped with a strong foundation in ministry.
                            </p>
                            <p>
                                With a wealth of ministerial experience, Yinka has served in various capacities, bringing a unique blend of spiritual depth and practical leadership. He is a devoted father to two beautiful children, balancing his calling with a deep commitment to family.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Messages Section - Placeholder for now */}
        <section className="py-24 bg-[#0F172A]/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="flex items-center justify-center gap-3 text-blue-400 mb-4">
                            <span className="font-bold uppercase tracking-widest text-sm">Teachings</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Latest <span className="text-blue-500">Messages</span></h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Explore powerful insights and biblical teachings that transform lives.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholder for YouTube Embeds or Message Cards */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-64 flex items-center justify-center text-gray-500">
                        Message Content Container
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-64 flex items-center justify-center text-gray-500">
                        Message Content Container
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-64 flex items-center justify-center text-gray-500">
                        Message Content Container
                    </div>
                </div>
            </div>
        </section>

        {/* Premium Gallery Section */}
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end sm:mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-bold">Gallery</h2>
                        <p className="text-gray-500">Moments from <br className='sm:hidden'/> the Journey</p>
                    </div>
                    <Link href="#top" className="text-blue-500 flex items-center gap-2 hover:gap-4 transition-all">
                        Back to top <BsArrowRight />
                    </Link>
                </div>

                {/* Desktop Grid / Mobile Stack Toggle */}
                <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {galleryImages.map((src, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group overflow-hidden rounded-2xl aspect-[3/4] bg-white/5 border border-white/10"
                        >
                            <Image 
                                src={src} 
                                alt={`Gallery image ${index + 1}`} 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-sm font-bold tracking-widest uppercase">Yinka Oladeru</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Swipe Stack */}
                <div className="sm:hidden relative h-[500px] w-full mt-8 flex items-center justify-center">
                    <SwipeStack images={galleryImages} />
                </div>
            </div>
        </section>
    </main>
  );
}

// Swipe Stack Component for Mobile
const SwipeStack = ({ images }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    
    const handleSwipe = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const stackSize = 3;
    const stack = [];
    for (let i = 0; i < stackSize; i++) {
        stack.push((currentIndex + i) % images.length);
    }

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center px-6">
            <AnimatePresence mode='popLayout'>
                {stack.reverse().map((imageIndex, i) => {
                    const position = stackSize - 1 - i;
                    const isTop = position === 0;
                    const src = images[imageIndex];

                    return (
                        <motion.div
                            key={src}
                            style={{ 
                                zIndex: 20 - position,
                                position: 'absolute'
                            }}
                            initial={false}
                            animate={{ 
                                scale: 1 - position * 0.08, 
                                opacity: 1 - (position * 0.25), 
                                y: position * -25, 
                                rotate: position * (i % 2 === 0 ? 2 : -2),
                                zIndex: 20 - position 
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            exit={{ x: 500, opacity: 0, rotate: 20, transition: { duration: 0.4 } }}
                            drag={isTop ? "x" : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(e, info) => {
                                if (Math.abs(info.offset.x) > 100) {
                                    handleSwipe();
                                }
                            }}
                            className="w-full h-[450px] max-w-[320px] rounded-[32px] overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0A0D11] touch-none"
                        >
                            <Image 
                                src={src} 
                                alt="Gallery image" 
                                fill 
                                className="object-cover pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent pointer-events-none" />
                            <div className="absolute bottom-8 left-8 pointer-events-none">
                                <p className="text-white font-black uppercase tracking-[0.2em] text-xs mb-1">Yinka Oladeru</p>
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Swipe to discover</p>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
            
            <button 
                onClick={() => setCurrentIndex(0)}
                className="absolute bottom-0 text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors"
            >
                Reset Stack
            </button>
        </div>
    );
};
