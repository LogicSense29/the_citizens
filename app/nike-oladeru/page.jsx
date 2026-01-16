"use client";
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { BsInstagram, BsTwitter, BsFacebook, BsYoutube, BsSpotify } from "react-icons/bs";

const socialLinks = [
  { icon: <BsInstagram />, href: "https://instagram.com" },
  { icon: <BsTwitter />, href: "https://twitter.com" },
  { icon: <BsFacebook />, href: "https://facebook.com" },
  { icon: <BsYoutube />, href: "https://youtube.com" },
];

const galleryImages = [
  "/nike-oladeru.jpg",
  "/pastor-nike.jpg",
  "/sings-citizens.jpg",
  "/hero-pastor.jpg",
];

export default function NikeOladeruPage() {
  return (
    <div className="bg-[#0A0D11] min-h-screen text-white pt-24 pb-12">
        {/* Hero Section */}
        <section className="container mx-auto px-4 flex flex-col items-center text-center mb-16 pt-[80px]">
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-accent mb-6 shadow-xl shadow-accent/20">
                <Image 
                    src="/nike-oladeru.jpg" 
                    alt="Nike Oladeru" 
                    fill 
                    className="object-cover"
                />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2">Nike Oladeru</h1>
            <p className="text-xl text-gray-400 max-w-2xl italic">"Worship Leader, Songwriter, and Pastor."</p>
            
            {/* Social Links */}
            <div className="flex gap-6 mt-8">
                {socialLinks.map((social, index) => (
                    <a 
                        key={index}
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-2xl md:text-3xl text-gray-400 hover:text-accent transition-colors duration-300"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </section>

        {/* Music Section */}
        <section className="container mx-auto px-4 mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                <BsSpotify className="text-[#1DB954]" /> Latest Release
            </h2>
            <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
                 <iframe
                    src='https://open.spotify.com/embed/artist/0blRm7CgmB26Fv6zZg6A0F?utm_source=generator'
                    width='100%'
                    height='380'
                    frameBorder='0'
                    allowtransparency='true'
                    allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                    loading='lazy'>
                </iframe>
            </div>
        </section>

        {/* Gallery Section */}
        <section className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((src, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-xl aspect-square bg-gray-800">
                        <Image 
                            src={src} 
                            alt={`Gallery image ${index + 1}`} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  );
}
