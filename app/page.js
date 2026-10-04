"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { BsArrowRight, BsYoutube } from "react-icons/bs";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  "/sings-citizens.jpg",
  "/hero-pastor.jpg",
  "/home-1.jpg",
  "/nikeandmember.jpg"
];

export default function Home() {

    const [current, setCurrent] = useState(0);

    // Auto slide every 4 seconds
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(timer);
    }, []);

    // Animation Variants
    const fadeInUp = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2
        }
      }
    };

  return (
    <section className='w-full min-h-screen bg-[#0A0D11]'>
      {/* Hero Section */}
      <div className='relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden'>
        {/* Background Images with Zoom Effect */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current ? "opacity-100 scale-110" : "opacity-0 scale-100"
            }`}
          >
            <Image
              src={img}
              alt="Hero Background"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0A0D11] z-10'></div>
        
        {/* Hero Content */}
        <motion.div 
          className='container mx-auto min-h-screen relative z-20 flex flex-col items-center justify-center w-full pt-[180px] pb-8 px-4 sm:px-6'
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h4 variants={fadeInUp} className='text-accent font-bold text-sm sm:text-xl mb-4 leading-none text-center tracking-wider uppercase'>
            Welcome to The Citizens Place Church
          </motion.h4>
          <motion.h1 variants={fadeInUp} className='leading-tight text-4xl sm:text-6xl md:text-8xl text-white font-bold mb-6 text-center max-w-5xl drop-shadow-2xl'>
            You are only a visitor once at{" "}<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300'>The Citizens Place Church!</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className='text-lg sm:text-xl text-gray-200 mb-10 text-center max-w-2xl leading-relaxed'>
            Each encounter is more than a visit, it’s a step towards becoming family, regardless of your journey.
          </motion.p>
          {/* hero buttons or actions */}
          <motion.div variants={fadeInUp} className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full lg:mb-6'>
            <motion.a href="/im-new"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-full sm:w-auto px-8 py-4 sm:py-5 bg-[#006CFF] hover:bg-[#0055cc] flex items-center justify-center gap-3 rounded-md shadow-lg shadow-blue-500/30 transition-colors'
            >
              <p className='text-lg sm:text-xl font-medium text-white'>I am new</p>
              <BsArrowRight className='text-white text-2xl' />
            </motion.a>
            <motion.a target="_blank" href="https://www.youtube.com/@ThecitizensplaceTV"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-full sm:w-auto px-8 py-4 sm:py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center gap-3 rounded-md transition-colors'
            >
              <BsYoutube className='text-white text-2xl' />
              <p className='text-lg sm:text-xl font-medium text-white'>Watch Online</p>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      {/* Other Sections */}
      <div className='bg-[#0A0D11] py-12 sm:py-20 min-h-[400px] h-auto relative'>
        <div className=''>
          <div className="absolute top-[-40px] sm:top-[-50px] w-full max-w-2xl sm:max-w-3xl left-0 sm:left-1/2 translate-x-0 sm:-translate-x-1/2 flex flex-col justify-center text-center items-center bg-[url('/top-qoute-text.svg')] bg-no-repeat bg-cover bg-center z-20">
            {/* <div className='absolute bg-black rounded-[61px] top-[-50px] w-full max-w-2xl sm:max-w-3xl left-1/2 -translate-x-1/2 flex flex-col p-6 sm:p-20 justify-center text-center items-center'></div> */}
            {/* <div className='absolute -top-[0px] left-[20px] sm:left-[50px] w-[80px] sm:w-[120px] h-[60px] sm:h-[100px] bg-black rounded-b-full'></div>
          <div className='absolute -top-[0px] left-[80px] sm:left-[120px] w-[80px] sm:w-[120px] h-[60px] sm:h-[100px] bg-white rounded-l-full'></div>
          <p className='relative z-25 text-black text-lg sm:text-2xl max-w-3xl pt-[40px] sm:pt-[80px]'>
            But we are different, because our citizenship is in heaven. And from
            there we eagerly await the coming of the savior, the Lord Jesus
            Christ;
          </p>
          <h2 className='relative z-25 text-black font-bold text-xl sm:text-3xl max-w-3xl'>
            Philippians 3:20
          </h2> */}
            <Image
              src='/top-qoute.svg'
              alt='Quotation background'
              width={800}
              height={200}
              className='object-contain w-full h-auto invisible'
            />
            {/* <div className="z-20">
            <p className='relative z-25 text-black text-lg sm:text-2xl max-w-3xl pt-[40px] sm:pt-[80px]'>
              At the Citizens Place Church, our mandate is to connect people back to God, help believers grow in Christ, and build a family of faith that replicates heaven here on earth.
            </p>
            <h2 className='relative z-25 text-black font-bold text-xl sm:text-3xl max-w-3xl'>
              Philippians 3:20
            </h2>
          </div> */}
          </div>
        </div>
        {/* Left Blur */}
        <div className='absolute top-0 left-0 w-[200px] sm:w-[500px] h-[200px] sm:h-[500px] bg-[#006CFF]/10 rounded-full blur-[80px] sm:blur-[200px]' />
        {/* Right Blur */}
        <div className='absolute top-0 right-0 w-[200px] sm:w-[500px] h-[200px] sm:h-[500px] bg-[#006CFF]/20 rounded-full blur-[80px] sm:blur-[200px]' />
        {/* Mission Section */}
        <div
          className='bg-[#0A0D11] om-con mt-[120px] sm:mt-[350px] container min-h-[400px] h-auto flex items-center justify-center bg-cover bg-center relative rounded-xl px-4'
          style={{
            backgroundImage: "url('/mission-image.png')",
          }}>
          {/* Overlay using ::before */}
          <div className='absolute inset-0 bg-black opacity-50'></div>
          {/* Ensure content is above the overlay */}
          <div className='relative z-10 text-center flex flex-col gap-4 sm:gap-6 px-2'>
            <h2 className='text-accent text-2xl sm:text-4xl font-bold'>
              Our Mission
            </h2>
            <p className='text-white text-base sm:text-2xl max-w-3xl mx-auto'>
              At the Citizens Place Church, our mandate is to connect people back to God, help believers grow in Christ, and build a family of faith that replicates heaven here on earth.
            </p>
            <h2 className='text-white text-xl sm:text-4xl font-bold'>
              Philippians 3:20
            </h2>
          </div>
        </div>
      </div>
      {/* Our Messages Section */}
      <div className='bg-[#eaf3ff]'>
        <div className='container w-full h-auto py-6 sm:py-8 md:py-12 pb-8 px-2 sm:px-4'>
          <h2 className='text-black text-xl sm:text-2xl md:text-4xl font-bold text-start mb-4 sm:mb-6'>
            Our Messages
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between'>
            {/* Message Cards */}
            {/* p-3 sm:p-4 md:p-6 m-1 sm:m-2 md:m-4 */}
            <div className='bg-[#eaf3ff] rounded-lg '>
              <div className='relative'>
                <Image
                  src='https://img.youtube.com/vi/GvhVBmrj4oo/0.jpg'
                  alt='YouTube Video Thumbnail for THE EXPERIENCE OF THE HOLY SPIRIT'
                  className='mb-4 w-full h-auto'
                  width={400}
                  height={200}
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <a
                    href='https://youtu.be/GvhVBmrj4oo?si=cKeZyIRse47Zz-fh'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image
                      src='/yt-logo-icon.svg'
                      alt='YouTube Play Icon'
                      className='w-8 h-8 sm:w-10 sm:h-10 md:w-15 md:h-15 text-white'
                      width={50}
                      height={50}
                    />
                  </a>
                </div>
              </div>
              <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-700'>
                CHRIST IS RISEN
              </h3>
              <p className='text-gray-700 text-sm sm:text-base md:text-lg'>
                Kindly subscribe to our YouTube channel.
              </p>
              <p className='text-gray-500 text-xs sm:text-sm md:text-base'>
                12th January 2025
              </p>
            </div>
            {/* 2nd card  */}
            <div className='bg-[#eaf3ff] rounded-lg'>
              <div className='relative'>
                <Image
                  src='https://img.youtube.com/vi/Qmd2EdWwPqo/0.jpg'
                  alt='HOLY SPIRIT: PREDICTABLE OUTCOME'
                  className='mb-4 w-full h-auto'
                  width={400}
                  height={200}
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <a
                    href='https://youtu.be/Qmd2EdWwPqo?si=7bg2QZePG4qAsrHy'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image
                      src='/yt-logo-icon.svg'
                      alt='YouTube Play Icon'
                      className='w-8 h-8 sm:w-10 sm:h-10 md:w-15 md:h-15 text-white'
                      width={50}
                      height={50}
                    />
                  </a>
                </div>
              </div>
              <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-700'>
                THE GREAT OUTPOUR 4
              </h3>
              <p className='text-gray-700 text-sm sm:text-base md:text-lg'>
                Kindly subscribe to our YouTube channel.
              </p>
              <p className='text-gray-500 text-xs sm:text-sm md:text-base'>
                29th March 2026
              </p>
            </div>
            {/* 3rd card  */}
            <div className='bg-[#eaf3ff] rounded-lg'>
              <div className='relative'>
                <Image
                  src={'https://img.youtube.com/vi/xlUc1o9p9Xs/hqdefault.jpg' || '/messages-img.png'}
                  alt='THE VIOCE OF A TRIUMPH'
                  className='mb-4 w-full h-auto'
                  width={400}
                  height={200}
                  unoptimized 
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <a
                    href='https://youtu.be/xlUc1o9p9Xs?si=Jbcz3XEDBMP3bZVz'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image
                      src='/yt-logo-icon.svg'
                      alt='YouTube Play Icon'
                      className='w-8 h-8 sm:w-10 sm:h-10 md:w-15 md:h-15 text-white'
                      width={50}
                      height={50}
                    />
                  </a>
                </div>
              </div>
              <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-700'>
                THE GREAT OUTPOUR 3
              </h3>
              <p className='text-gray-700 text-sm sm:text-base md:text-lg'>
                Kindly subscribe to our YouTube channel.
              </p>
              <p className='text-gray-500 text-xs sm:text-sm md:text-base'>
                22nd March 2026
              </p>
            </div>
          </div>
          <div className='w-full flex justify-center mt-6'>
            <a href="/messages" className='w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#006CFF] flex items-center justify-center gap-2 rounded-md'>
              <p className='text-base sm:text-xl'>View all messages</p>
              <BsArrowRight className='text-white text-2xl sm:text-3xl' />
            </a>
          </div>
        </div>
      </div>
      {/* Songs Section  */}
      <div className='bg-[#eaf3ff]'>
        <div className='container w-full h-auto py-6 sm:py-8 md:py-12 pb-8 px-2 sm:px-4'>
          <h2 className='text-black text-xl sm:text-2xl md:text-4xl font-bold text-start mb-4 sm:mb-6'>
            Nike Oladeru's Songs
          </h2>
          {/* <Image
            src="/nike-songs-img.png"
            alt="Nike Oladeru Songs"
            className="mb-4 w-full h-auto rounded-lg"
            width={1200}
            height={400}
          /> */}
          <iframe
            src='https://open.spotify.com/embed/artist/0blRm7CgmB26Fv6zZg6A0F?utm_source=generator'
            width='100%'
            height='380'
            frameborder='0'
            allowtransparency='true'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'></iframe>
          {/* <iframe
            data-testid='embed-iframe'
            style={{borderRadius:'12px'}}
            src='https://open.spotify.com/embed/artist/0blRm7CgmB26Fv6zZg6A0F?utm_source=generator'
            width='100%'
            height='352'
            frameBorder='0'
            allowFullScreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'></iframe> */}
        </div>
      </div>
      {/* Prayer request Section  */}
      <div className='bg-[#eaf3ff]'>
        <div className='container w-full h-auto py-6 sm:py-8 md:py-12 pb-8 px-2 sm:px-4'>
          <h2 className='text-black text-xl sm:text-3xl md:text-6xl font-bold text-center mt-8 mb-12 pb-12 sm:mb-6 max-w-7xl mx-auto'>
            Whether you are going through a difficult season,{" "}
            <span className='text-accent'>have a prayer request</span>, need
            guidance, or simply want someone to connect with, we are here to
            support and encourage you.
          </h2>
          <div className='w-full flex justify-center mt-12'>
            <a href="/contact" className='w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#006CFF] flex items-center justify-center gap-2 rounded-md'>
              <p className='text-base sm:text-xl text-white'>Prayer Request</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
