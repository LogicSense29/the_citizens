"use client";
import Image from "next/image";
import { BsArrowRight, BsYoutube, BsCalendar, BsGoogle } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SERVICES, generateGoogleLink, downloadICS } from "@/lib/calendar";

const CalendarDropdown = ({ service, dark = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-3 rounded-md font-bold transition-all shadow-xl active:scale-95 ${
          dark 
            ? "bg-[#0F172A] hover:bg-[#1E293B] text-white" 
            : "bg-white hover:bg-slate-100 text-slate-900 border-2 border-[#0F172A]"
        }`}
      >
        <BsCalendar className="text-lg" />
        Add to Schedule
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute left-0 bottom-full mb-2 sm:bottom-auto sm:top-full sm:mt-2 w-full sm:w-48 bg-white rounded-md shadow-2xl border border-slate-100 z-50 overflow-hidden"
          >
            <a 
              href={generateGoogleLink({ ...SERVICES[service], id: service })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-slate-700 transition-colors border-b border-slate-50"
            >
              <BsGoogle className="text-blue-500" />
              <span>Google Calendar</span>
            </a>
            <button 
              onClick={() => downloadICS({ ...SERVICES[service], id: service })}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-slate-700 transition-colors"
            >
              <BsCalendar className="text-slate-600" />
              <span>iCal / Outlook</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function WorshipPage() {
  return (
    <main className='w-full min-h-screen bg-[#F8FAFC]'>
      {/* Hero Section */}
      <section className='relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden'>
        {/* Background with parallax-ready design */}
        <div 
          className='absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105'
          style={{ backgroundImage: "url('/worship-hero-img.png')" }}
        />
        {/* Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10' />
        
        {/* Hero Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className='container mx-auto relative z-20 flex flex-col items-center justify-center w-full pt-[120px] pb-12 px-4 sm:px-6'
        >
          <motion.div variants={fadeInUp} className="mb-6">
                {/* <span className="bg-blue-600/20 backdrop-blur-md border border-blue-400/30 text-blue-100 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                    Experience Presence
                </span> */}
          </motion.div>
          <motion.h1 variants={fadeInUp} className='leading-[1.1] text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 text-center max-w-5xl drop-shadow-2xl'>
            More Than a Gathering, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">A Divine Encounter</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-blue-50/80 mb-10 text-center max-w-3xl leading-relaxed">
            At The Citizen’s Place, our worship services are profound encounters with God. 
            Join us for a transformative journey in fellowship and worship.
          </motion.p>

          <motion.div variants={fadeInUp} className='flex flex-col sm:flex-row justify-center gap-6 w-full max-w-md'>
            <button className='w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#006CFF] hover:bg-blue-700 text-white flex items-center justify-center gap-3 rounded-md shadow-xl shadow-blue-600/20 transiton-all duration-300 active:scale-95 group'>
              <span className='text-lg font-bold'>Join us online</span>
              <BsArrowRight className='text-2xl group-hover:translate-x-1 transition-transform' />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <div className="bg-white relative z-20 -mt-10 rounded-t-[40px] pt-20 pb-20 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]">
        
        {/* Sunday Service Feature */}
        <div className='container mx-auto px-4 mb-32'>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className='bg-slate-900 rounded-[32px] overflow-hidden relative'
          >
            {/* Background Image with Overlay */}
            <div 
              className='absolute inset-0 bg-cover bg-center md:bg-right'
              style={{ backgroundImage: "url('/worship-sec1-img.png')" }}
            />
            <div className='absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10' />

            <div className='relative z-20 flex flex-col justify-center gap-6 px-8 sm:px-16 py-16 sm:py-24 w-full lg:w-3/5'>
              <div className="w-12 h-1 bg-blue-500 mb-2"></div>
              <h2 className='text-white text-4xl sm:text-6xl font-bold leading-tight'>
                Sunday <br /> Service
              </h2>
              <div className="flex flex-col gap-1">
                <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">Time</span>
                <p className='text-white text-4xl sm:text-6xl font-extrabold'>
                  6:00 PM EST
                </p>
              </div>
              <p className='text-slate-300 text-lg sm:text-xl max-w-md leading-relaxed mb-4'>
                Start your week with an atmospheric encounter of worship, fellowship, and the living Word.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 w-full'>
                <CalendarDropdown service="SUNDAY_SERVICE" />
                <button className='flex-1 sm:flex-none px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center gap-3 rounded-md font-bold transition-all'>
                  <BsYoutube className='text-xl' />
                  Watch Online
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Weekly & Vigil Services - Alternating Layout */}
        <div className="container mx-auto px-4 space-y-32">
          
          {/* Weekly Service */}
          <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20'>
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               className='lg:w-1/2 w-full order-2 lg:order-1'
            >
              <div className="inline-block bg-blue-50 text-blue-600 text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                 Thursday Mid-Week
              </div>
              <h2 className='text-[#0F172A] text-4xl sm:text-5xl font-bold mb-6'>
                Weekly Prayer <span className="text-blue-600">&</span> Word
              </h2>
              <p className='text-slate-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg'>
                Fuel your spiritual fire mid-week. Every Thursday, we gather to intercede and dive deeper into revelations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-10">
                 <div className="flex flex-col gap-1">
                    <span className="text-slate-400 text-xs font-bold uppercase">Schedule</span>
                    <p className="text-[#0F172A] font-bold text-xl">Every Thursday</p>
                 </div>
                 <div className="flex flex-col gap-1 border-l border-slate-200 sm:pl-8">
                    <span className="text-slate-400 text-xs font-bold uppercase">Time</span>
                    <p className="text-[#0F172A] font-bold text-xl">9:00 PM EST</p>
                 </div>
              </div>

              <CalendarDropdown service="WEEKLY_PRAYER" dark />
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className='lg:w-1/2 w-full order-1 lg:order-2 relative group'
            >
              <div className="absolute inset-0 bg-blue-600 translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 rounded-3xl z-0 transition-transform group-hover:translate-x-3 group-hover:translate-y-3 sm:group-hover:translate-x-6 sm:group-hover:translate-y-6" />
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
                <Image
                    src='/worship-sec2-img.png'
                    alt='Weekly Service'
                    className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105'
                    width={800}
                    height={500}
                />
              </div>
            </motion.div>
          </div>

          {/* Vigil Service */}
          <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20'>
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className='lg:w-1/2 w-full relative group'
            >
              <div className="absolute inset-0 bg-blue-600 -translate-x-2 translate-y-2 sm:-translate-x-4 sm:translate-y-4 rounded-3xl z-0 transition-transform group-hover:-translate-x-3 group-hover:translate-y-3 sm:group-hover:-translate-x-6 sm:group-hover:translate-y-6" />
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
                <Image
                    src='/worship-sec4-img.png'
                    alt='Vigil Service'
                    className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105'
                    width={800}
                    height={500}
                />
              </div>
            </motion.div>

            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               className='lg:w-1/2 w-full'
            >
              <div className="inline-block bg-blue-50 text-blue-600 text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                 Monthly Encounter
              </div>
              <h2 className='text-[#0F172A] text-4xl sm:text-5xl font-bold mb-6 leading-tight'>
                5-Hour Prayer Vigil
              </h2>
              <p className='text-slate-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg'>
                Join our powerhouse monthly vigil. A dedicated time of intense prayer, deep worship, and spiritual breakthrough.
              </p>

              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 mb-10 bg-slate-50 p-6 rounded-2xl">
                 <div className="flex flex-col gap-1">
                    <span className="text-slate-400 text-xs font-bold uppercase">Schedule</span>
                    <p className="text-[#0F172A] font-bold text-lg">Every 3rd Friday</p>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-slate-400 text-xs font-bold uppercase">Time</span>
                    <p className="text-[#0F172A] font-bold text-lg">10:00 PM - 3:00 AM</p>
                 </div>
                 <div className="flex flex-col gap-1 sm:col-span-2 border-t border-slate-200 pt-4">
                    <span className="text-slate-400 text-xs font-bold uppercase">Options</span>
                    <p className="text-[#0F172A] font-bold text-lg">Online & Onsite available</p>
                 </div>
              </div>

              <CalendarDropdown service="VIGIL" />
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}
