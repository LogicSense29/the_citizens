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
              className='flex items-center gap-5 mb-10 text-gray-400 sm:text-gray-500 text-xs font-bold uppercase tracking-widest'
            >
              <span className='block w-px h-8 bg-white/20 sm:bg-white/10' />
              <span>Sundays &middot; 6:00 PM EST</span>
              <span className='block w-px h-8 bg-white/20 sm:bg-white/10' />
              <span className='hidden sm:block'>Washington, DC</span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className='flex flex-col sm:flex-row gap-4 items-start'>
              <a
                href="/im-new"
                className='group inline-flex items-center gap-3 px-8 py-4 bg-[#006CFF] hover:bg-[#0055cc] text-white font-bold rounded-md shadow-lg shadow-blue-500/20 transition-all duration-300 sm:w-fit'
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

      {/* ── MISSION STATEMENT SECTION ── */}
      <section className='relative w-full bg-[#0A0D11] overflow-hidden'>

        {/* hairline divider from hero */}
        <div className='w-full h-px bg-white/5' />

        <div className='container mx-auto px-6 sm:px-12 lg:px-20 py-24 sm:py-32 relative'>

          {/* Atmospheric outline number — watermark layer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className='absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block'
            aria-hidden='true'
          >
            <span
              className='text-[22vw] font-black leading-none'
              style={{
                WebkitTextStroke: '1px rgba(0,108,255,0.12)',
                color: 'transparent',
                letterSpacing: '-0.05em',
              }}
            >
              PHIL 3:20
            </span>
          </motion.div>

          {/* Ambient glow */}
          <div className='absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#006CFF]/8 rounded-full blur-[160px] pointer-events-none' />

          {/* Content */}
          <div className='relative z-10 max-w-3xl'>

            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className='flex items-center gap-3 mb-10'
            >
              {/* <span className='block w-8 h-px bg-[#006CFF]' /> */}
              <span className='text-[#006CFF] text-xs font-black uppercase tracking-[0.25em]'>
                Our Mission
              </span>
            </motion.div>

            {/* Mission statement — mixed weight typography */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <h2 className='font-black leading-[1.05] mb-10 text-[clamp(2rem,4.5vw,3.75rem)]'>
                <span className='text-white/40 font-light'>At the Citizens Place,</span>
                <br />
                <span className='text-white'>our mandate is to connect</span>
                <br />
                <span className='text-white'>people back to </span>
                <span
                  style={{ WebkitTextStroke: '1.5px #006CFF', color: 'transparent' }}
                >
                  God.
                </span>
                <br />
                <span className='text-white/60 font-light text-[clamp(1.4rem,3vw,2.5rem)]'>
                  {/* help believers grow in Christ, and build */}
                  Our citizenship is in heaven.
                </span>
                <br />
                <span className='text-white/60 font-light text-[clamp(1.4rem,3vw,2.5rem)]'>
                  {/* a family of faith that replicates heaven */}
                  We eagerly await a Savior from there,
                </span>
                <br />
                <span className='text-white/60 font-light text-[clamp(1.4rem,3vw,2.5rem)]'>
                  {/* here on earth. */}
                  the Lord Jesus Christ.
                  {/* But our citizenship is in heaven. And we eagerly await a Savior from there, the Lord Jesus Christ */}
                </span>
              </h2>
            </motion.div>

            {/* Scripture citation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className='flex items-center gap-4'
            >
              <span className='block w-6 h-px bg-[#006CFF]/60' />
              <span className='text-white/30 text-xs font-black uppercase tracking-[0.3em]'>
                Philippians 3:20
              </span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── ATMOSPHERE STRIP ── */}
      <div className='relative w-full h-[55vh] overflow-hidden'>
        <Image
          src='/sings-citizens.jpg'
          alt='The Citizens Place Church community in worship'
          fill
          className='object-cover object-center'
          priority={false}
        />
        {/* Dark gradient — heavy fade top and bottom so image fully dissolves into surrounding sections */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#0A0D11] via-transparent to-[#0A0D11]' />
        {/* Extra mid-blend — softens the centre so it doesn't feel like a hard photo box */}
        <div className='absolute inset-0 bg-[#0A0D11]/20' />

        {/* Small caption bottom-right */}
        <div className='absolute bottom-6 right-6 sm:right-10 flex items-center gap-3'>
          <span className='block w-6 h-px bg-white/30' />
          <span className='text-white/40 text-[10px] font-black uppercase tracking-[0.25em]'>
            The Citizens Place · Washington DC
          </span>
        </div>
      </div>

      {/* ── OUR MESSAGES SECTION ── */}

      <section className='relative w-full bg-[#0A0D11] overflow-hidden'>
        <div className='w-full h-px bg-white/5' />

        <div className='container mx-auto px-6 sm:px-12 lg:px-20 py-24 sm:py-32'>

          {/* Section header row */}
          <div className='flex items-end justify-between mb-14'>
            <div>
              <div className='flex items-center gap-3 mb-4'>
                {/* <span className='block w-8 h-px bg-[#006CFF]' /> */}
                <span className='text-[#006CFF] text-xs font-black uppercase tracking-[0.25em]'>
                  Latest
                </span>
              </div>
              <h2 className='text-white font-black text-[clamp(2rem,4vw,3.5rem)] leading-none'>
                Our Messages
              </h2>
            </div>
            <a
              href='/messages'
              className='group hidden sm:inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300'
            >
              View all
              <BsArrowRight className='text-sm transition-transform duration-300 group-hover:translate-x-1' />
            </a>
          </div>

          {/* Cards grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {/* Card 1 */}
            <motion.a
              href='https://youtu.be/GvhVBmrj4oo?si=cKeZyIRse47Zz-fh'
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }}
              whileHover={{ y: -6 }}
              className='group block bg-white/5 border border-white/8 rounded-2xl overflow-hidden hover:border-[#006CFF]/40 transition-all duration-500'
            >
              <div className='relative aspect-video overflow-hidden'>
                <Image
                  src='https://img.youtube.com/vi/GvhVBmrj4oo/maxresdefault.jpg'
                  alt='CHRIST IS RISEN'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  unoptimized
                />
                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500' />
                {/* Play button */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-12 h-12 rounded-full bg-[#006CFF] flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 shadow-xl shadow-blue-500/40'>
                    <BsArrowRight className='text-white text-base ml-0.5' />
                  </div>
                </div>
              </div>
              <div className='p-6'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='block w-px h-3 bg-[#006CFF]/50' />
                  <span className='text-white/30 text-[10px] font-black uppercase tracking-[0.25em]'>12 Jan 2025</span>
                </div>
                <h3 className='text-white font-bold text-lg leading-snug group-hover:text-[#006CFF] transition-colors duration-300'>
                  Christ Is Risen
                </h3>
              </div>
            </motion.a>

            {/* Card 2 */}
            <motion.a
              href='https://youtu.be/Qmd2EdWwPqo?si=7bg2QZePG4qAsrHy'
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              whileHover={{ y: -6 }}
              className='group block bg-white/5 border border-white/8 rounded-2xl overflow-hidden hover:border-[#006CFF]/40 transition-all duration-500'
            >
              <div className='relative aspect-video overflow-hidden'>
                <Image
                  src='https://img.youtube.com/vi/Qmd2EdWwPqo/maxresdefault.jpg'
                  alt='THE GREAT OUTPOUR 4'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  unoptimized
                />
                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500' />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-12 h-12 rounded-full bg-[#006CFF] flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 shadow-xl shadow-blue-500/40'>
                    <BsArrowRight className='text-white text-base ml-0.5' />
                  </div>
                </div>
              </div>
              <div className='p-6'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='block w-px h-3 bg-[#006CFF]/50' />
                  <span className='text-white/30 text-[10px] font-black uppercase tracking-[0.25em]'>29 Mar 2026</span>
                </div>
                <h3 className='text-white font-bold text-lg leading-snug group-hover:text-[#006CFF] transition-colors duration-300'>
                  The Great Outpour 4
                </h3>
              </div>
            </motion.a>

            {/* Card 3 */}
            <motion.a
              href='https://youtu.be/xlUc1o9p9Xs?si=Jbcz3XEDBMP3bZVz'
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              whileHover={{ y: -6 }}
              className='group block bg-white/5 border border-white/8 rounded-2xl overflow-hidden hover:border-[#006CFF]/40 transition-all duration-500'
            >
              <div className='relative aspect-video overflow-hidden'>
                <Image
                  src='https://img.youtube.com/vi/xlUc1o9p9Xs/maxresdefault.jpg'
                  alt='THE GREAT OUTPOUR 3'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  unoptimized
                />
                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500' />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-12 h-12 rounded-full bg-[#006CFF] flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 shadow-xl shadow-blue-500/40'>
                    <BsArrowRight className='text-white text-base ml-0.5' />
                  </div>
                </div>
              </div>
              <div className='p-6'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='block w-px h-3 bg-[#006CFF]/50' />
                  <span className='text-white/30 text-[10px] font-black uppercase tracking-[0.25em]'>22 Mar 2026</span>
                </div>
                <h3 className='text-white font-bold text-lg leading-snug group-hover:text-[#006CFF] transition-colors duration-300'>
                  The Great Outpour 3
                </h3>
              </div>
            </motion.a>

          </div>

          {/* Mobile view all */}
          <div className='mt-10 flex sm:hidden justify-center'>
            <a
              href='/messages'
              className='group inline-flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-[#006CFF] text-white text-xs font-black uppercase tracking-[0.2em] rounded-md transition-all duration-300'
            >
              View all messages
              <BsArrowRight className='text-sm transition-transform duration-300 group-hover:translate-x-1' />
            </a>
          </div>

        </div>
      </section>





      {/* ── MUSIC SECTION ── */}
      <section className='relative w-full bg-[#0A0D11] overflow-hidden'>
        <div className='w-full h-px bg-white/5' />

        <div className='absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#1DB954]/4 rounded-full blur-[180px] pointer-events-none' />

        <div className='container mx-auto px-6 sm:px-12 lg:px-20 py-24 sm:py-32 relative z-10'>
          <div className='flex flex-col lg:flex-row items-center gap-16'>

            {/* Left — Spotify embed */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className='w-full lg:w-[55%] rounded-2xl overflow-hidden border border-white/8 shadow-2xl flex-shrink-0'
            >
              <iframe
                src='https://open.spotify.com/embed/artist/0blRm7CgmB26Fv6zZg6A0F?utm_source=generator&theme=0'
                width='100%'
                height='380'
                frameBorder='0'
                allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                loading='lazy'
              />
            </motion.div>

            {/* Right — context */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className='w-full lg:w-[45%] flex flex-col gap-6'
            >
              {/* Overline */}
              <div className='flex items-center gap-3'>
                {/* <span className='block w-8 h-px bg-[#1DB954]' /> */}
                <span className='text-[#1DB954] text-xs font-black uppercase tracking-[0.25em]'>
                  Discography
                </span>
              </div>

              {/* Heading — same mixed weight as rest of page */}
              <h2 className='font-black leading-[0.95] text-[clamp(2rem,4vw,3.2rem)]'>
                <span className='text-white/40 font-light text-[clamp(1.2rem,2.5vw,2rem)]'>Music by</span>
                <br />
                <span className='text-white'>Nike Oladeru</span>
              </h2>

              <p className='text-white/40 text-base leading-relaxed max-w-sm'>
                Pastor Nike is a gospel recording artist whose music carries
                the presence of God. Immerse yourself in her worship and
                discover her latest releases.
              </p>

              {/* Spotify badge */}
              <div className='flex items-center gap-3'>
                <svg className='w-4 h-4 flex-shrink-0' viewBox='0 0 24 24' fill='#1DB954'>
                  <path d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z'/>
                </svg>
                <span className='text-white/25 text-xs font-bold uppercase tracking-widest'>
                  Available on all streaming platforms
                </span>
              </div>

              {/* CTA */}
              <a
                href='/nike-oladeru'
                className='group inline-flex items-center gap-3 px-8 py-4 border border-white/10 hover:border-[#006CFF] hover:bg-[#006CFF] text-white font-bold rounded-md transition-all duration-300 w-fit mt-2'
              >
                Full Profile
                <BsArrowRight className='text-sm transition-transform duration-300 group-hover:translate-x-1' />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── ATMOSPHERE STRIP 2 ── */}
      {/* <div className='relative w-full h-[50vh] overflow-hidden'>
        <Image
          src='/nikeandmember.jpg'
          alt='The Citizens Place Church community'
          fill
          className='object-cover object-center'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-[#0A0D11] via-transparent to-[#00153D]' />
        <div className='absolute inset-0 bg-[#0A0D11]/20' />
        <div className='absolute bottom-6 right-6 sm:right-10 flex items-center gap-3'>
          <span className='block w-6 h-px bg-white/30' />
          <span className='text-white/40 text-[10px] font-black uppercase tracking-[0.25em]'>
            The Citizens Place · Washington DC
          </span>
        </div>
      </div> */}
      <section className='relative w-full bg-[#00153D] overflow-hidden'>
        <div className='w-full h-px bg-white/8' />

        {/* Center glow — softer, warmer */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#006CFF]/20 rounded-full blur-[160px] pointer-events-none' />
        {/* Subtle top edge fade from previous section */}
        <div className='absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0D11]/60 to-transparent pointer-events-none' />

        {/* Atmospheric watermark — HOPE */}
        <div className='absolute -bottom-7 sm:-bottom-20 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none select-none' aria-hidden='true'>
          <span
            className='font-black leading-none'
            style={{
              fontSize: 'clamp(10rem, 35vw, 32rem)',
              WebkitTextStroke: '1px rgba(255,255,255,0.04)',
              color: 'transparent',
              letterSpacing: '-0.05em',
            }}
          >
            HOPE
          </span>
        </div>

        <div className='container mx-auto px-6 sm:px-12 lg:px-20 py-24 sm:py-32 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className='flex flex-col items-center text-center'
          >
            <div className='flex items-center gap-3 mb-10'>
              {/* <span className='block w-8 h-px bg-white/30' /> */}
              <span className='text-white/100 text-xs font-black uppercase tracking-[0.25em]'>
                We&apos;re here
              </span>
              {/* <span className='block w-8 h-px bg-white/30' /> */}
            </div>

            {/* Diamond staircase — converges to center line, opens back out */}
            <div className='flex flex-col items-center space-y-1 mb-10'>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className='text-white/25 font-light text-[clamp(1.1rem,2.5vw,2rem)] leading-snug'
              >
                Whatever you&apos;re going through —
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className='text-white font-black text-[clamp(1.4rem,3.2vw,2.8rem)] leading-snug'
              >
                we see you. we&apos;re here.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
                className='font-black text-[clamp(1.8rem,4.5vw,4rem)] leading-none'
                style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.9)', color: 'transparent' }}
              >
                you&apos;re not alone.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
                className='text-white/25 font-light text-[clamp(1.1rem,2.5vw,2rem)] leading-snug'
              >
                we are here to walk with you.
              </motion.p>

            </div>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              href='/contact'
              className='group inline-flex items-center gap-3 px-8 py-4 bg-[#006CFF] hover:bg-[#0055cc] text-white font-bold rounded-md shadow-lg shadow-blue-500/20 transition-all duration-300 mb-8'
            >
              Prayer Request
              <BsArrowRight className='text-lg transition-transform duration-300 group-hover:translate-x-1' />
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className='flex items-center gap-3'
            >
              {/* <span className='block w-6 h-px bg-white/20' /> */}
              <span className='text-white/30 text-[10px] font-black uppercase tracking-[0.3em]'>
                Cast all your anxiety on him — 1 Peter 5:7
              </span>
              {/* <span className='block w-6 h-px bg-white/20' /> */}
            </motion.div>

          </motion.div>
        </div>
      </section>


    </section>
  );
}