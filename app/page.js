"use client";
import Image from "next/image";
import { BsArrowRight, BsYoutube } from "react-icons/bs";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {

    // Parallax for image panel
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    // Animation variants
    const fadeInUp = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
    };
    const fadeInRight = {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
    };
    const staggerContainer = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
    };

  return (
    <section className='w-full min-h-screen bg-[#0A0D11]'>

      {/* ── KINETIC SPLIT HERO ── */}
      <div ref={heroRef} className='relative min-h-screen w-full overflow-hidden flex'>

        {/* LEFT CONTENT PANE */}
        <div className='relative z-20 flex flex-col justify-center w-full lg:w-[58%] min-h-screen px-6 sm:px-12 lg:px-20 pt-32 pb-16'>

          {/* Ambient blue glow */}
          <div className='absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#006CFF]/10 rounded-full blur-[120px] pointer-events-none' />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className='relative z-10 max-w-2xl'
          >
            {/* Overline */}
            <motion.div variants={fadeInUp} className='flex items-center gap-3 mb-8'>
              {/* <span className='block w-8 h-px bg-[#006CFF]' /> */}
              <span className='text-[#006CFF] text-xs font-black uppercase tracking-[0.25em]'>
                The Citizens Place Church
              </span>
            </motion.div>

            {/* Display headline — solid + stroke mix */}
            <motion.h1 variants={fadeInUp} className='font-black leading-[0.95] mb-8'>
              <span className='block text-[clamp(2.8rem,6.0vw,5.0rem)] text-white'>
                We Connect
              </span>
              <span className='block text-[clamp(2.8rem,6.0vw,5.0rem)] text-white'>
                Creation to
              </span>
              <span className='block text-[clamp(2.8rem,6.5vw,5.5rem)]'>
                <span className='text-white'>the </span><span style={{ WebkitTextStroke: "2px #006CFF", color: "transparent", letterSpacing: "-0.02em" }}>CREATOR</span>
              </span>
            </motion.h1>

            {/* Editorial metadata strip */}
            <motion.div
              variants={fadeInUp}
              className='flex items-center gap-5 mb-10 text-gray-500 text-xs font-bold uppercase tracking-widest'
            >
              <span className='block w-px h-8 bg-white/10' />
              <span>Sundays &middot; 6:00 PM EST</span>
              <span className='block w-px h-8 bg-white/10' />
              <span className='hidden sm:block'>Washington, DC</span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className='flex flex-col sm:flex-row gap-4'>
              <a
                href="/im-new"
                className='group inline-flex items-center gap-3 px-8 py-4 bg-[#006CFF] hover:bg-[#0055cc] text-white font-bold rounded-md shadow-lg shadow-blue-500/20 transition-all duration-300'
              >
                I&apos;m New Here
                <BsArrowRight className='text-lg transition-transform duration-300 group-hover:translate-x-1' />
              </a>
              <a
                href="https://www.youtube.com/@ThecitizensplaceTV"
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-bold rounded-md backdrop-blur-md transition-all duration-300'
              >
                <BsYoutube className='text-lg text-red-400' />
                Watch Online
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll cue — animated pulse line */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className='absolute bottom-10 left-6 sm:left-12 lg:left-20 flex flex-col items-center gap-2'
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className='w-px h-14 bg-gradient-to-b from-[#006CFF] to-transparent'
            />
          </motion.div> */}
        </div>

        {/* RIGHT IMAGE PANE — diagonal clip, desktop only */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
          className='hidden lg:block absolute right-0 top-0 bottom-0 w-[48%] overflow-hidden'
          style={{ clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <motion.div style={{ y: imageY }} className='absolute inset-0 scale-110'>
            <Image
              src='/sings-citizens.jpg'
              alt='The Citizen Church Hero'
              fill
              className='object-cover object-[10%_15%]'
              priority
            />
          </motion.div>
          {/* Vignette toward diagonal cut */}
          <div className='absolute inset-0 bg-gradient-to-r from-[#0A0D11]/60 via-transparent to-transparent' />
          {/* Bottom fade */}
          <div className='absolute inset-0 bg-gradient-to-t from-[#0A0D11]/40 via-transparent to-transparent' />
          {/* Top fade — so nav text reads clearly over the image */}
          <div className='absolute inset-0 bg-gradient-to-b from-[#0A0D11]/70 via-transparent to-transparent' />
          {/* Right edge fade — cleans up behind the nav CTA */}
          <div className='absolute inset-0 bg-gradient-to-l from-[#0A0D11]/50 via-transparent to-transparent' />
          {/* Blue accent line on the cut edge */}
          <div className='absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#006CFF]/70 to-transparent' />
          {/* Vertical editorial label */}
          <div className='absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3'>
            <span className='block w-px h-12 bg-white/20' />
            <span
              className='text-white/30 text-[10px] font-black uppercase tracking-[0.3em]'
              style={{ writingMode: "vertical-rl" }}
            >
              The Citizens Place &middot; Washington DC
            </span>
            <span className='block w-px h-12 bg-white/20' />
          </div>
        </motion.div>

        {/* MOBILE BACKGROUND (< lg) */}
        <div className='lg:hidden absolute inset-0 z-0'>
          <Image
            src='/sings-citizens.jpg'
            alt='Pastors Yinka and Nike Oladeru'
            fill
            className='object-cover object-top'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0A0D11]' />
        </div>

        {/* Grain texture overlay — CSS only, no extra deps */}
        <div
          className='absolute inset-0 z-10 pointer-events-none opacity-[0.03]'
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundSize: "128px 128px",
          }}
        />
      </div>

      {/* Other Sections */}
      <div className='bg-[#0A0D11] py-12 sm:py-20 min-h-[400px] h-auto relative'>
        {/* <div className=''>
          <div className="absolute top-[-40px] sm:top-[-50px] w-full max-w-2xl sm:max-w-3xl left-0 sm:left-1/2 translate-x-0 sm:-translate-x-1/2 flex flex-col justify-center text-center items-center bg-[url('/top-qoute-text.svg')] bg-no-repeat bg-cover bg-center z-20"> */}
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
            {/* <Image
              src='/top-qoute.svg'
              alt='Quotation background'
              width={800}
              height={200}
              className='object-contain w-full h-auto invisible'
            /> */}
            {/* <div className="z-20">
            <p className='relative z-25 text-black text-lg sm:text-2xl max-w-3xl pt-[40px] sm:pt-[80px]'>
              At the Citizens Place Church, our mandate is to connect people back to God, help believers grow in Christ, and build a family of faith that replicates heaven here on earth.
            </p>
            <h2 className='relative z-25 text-black font-bold text-xl sm:text-3xl max-w-3xl'>
              Philippians 3:20
            </h2>
          </div> */}
          {/* </div>
        </div> */}
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
