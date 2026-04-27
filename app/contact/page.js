"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend, FiClock } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

function ContactPageContent() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <main className="bg-[#0A0D11] min-h-screen text-white overflow-hidden">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/contact-hero-img.png" 
            alt="Hero Background" 
            fill 
            className="object-cover opacity-20 scale-110 blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D11] via-transparent to-[#0A0D11]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* <motion.span variants={fadeInUp} className="inline-block text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4">
              Get In Touch
            </motion.span> */}
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-8xl font-black mb-6 leading-tight"
            >
              Let's Start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Conversation.</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Whether you have a question, a prayer request, or want to partner with us, we're here to listen and support you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Interaction Section */}
      <section className="relative z-20 -mt-10 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
            
            {/* Contact Info Sidebar */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:w-1/3 space-y-6"
            >
              <ContactInfoCard 
                icon={<FiPhone className="text-blue-500" />}
                title="Call Us"
                detail="+1 (202) 652-5667"
                sub="Mon-Fri, 9am - 5pm"
              />
              {/* <ContactInfoCard 
                icon={<FiMail className="text-cyan-400" />}
                title="Email Us"
                detail="info@citizensplace.com"
                sub="Online Support 24/7"
              /> */}
              <ContactInfoCard 
                icon={<FiMapPin className="text-blue-400" />}
                title="Visit Us"
                detail="4420 Connecticut Avenue NW"
                sub="Washington, DC 20008"
              />
              <ContactInfoCard 
                icon={<FiClock className="text-blue-500" />}
                title="Service Times"
                detail="Sundays: 6:00 PM EST"
                // sub="Wednesdays: 6:00 PM"
              />
            </motion.div>

            {/* Glassmorphism Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-2/3"
            >
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 blur-[100px] -z-10" />

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">First Name</label>
                      <Input
                        name="firstname"
                        placeholder="John"
                        value={form.firstname}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 rounded-2xl h-14 px-6 focus:ring-blue-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Last Name</label>
                      <Input
                        name="lastname"
                        placeholder="Doe"
                        value={form.lastname}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 rounded-2xl h-14 px-6 focus:ring-blue-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 rounded-2xl h-14 px-6 focus:ring-blue-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Phone Number</label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+1 ..."
                        value={form.phone}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 rounded-2xl h-14 px-6 focus:ring-blue-500/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Your Message</label>
                    <Textarea
                      name="message"
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 rounded-2xl min-h-[150px] p-6 focus:ring-blue-500/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-12 h-16 bg-white text-black font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-3 group shadow-xl"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && <FiSend className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                  </Button>

                  <AnimatePresence>
                    {status === "success" && (
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-400 text-sm font-bold flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                        Thank you! Your message has been sent successfully.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] w-full rounded-[40px] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 group"
          >
            <Image 
              src="/contact-location-map-img.png" 
              alt="Location Map" 
              fill 
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" />
                    <div className="relative w-6 h-6 bg-blue-600 border-4 border-white rounded-full shadow-2xl" />
                </div>
            </div>
            
            <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-3xl max-w-sm">
                <h4 className="font-black uppercase tracking-widest text-xs text-blue-400 mb-2">Our Sanctuary</h4>
                <p className="text-white text-sm leading-relaxed">Join us for worship at our physical location. Everyone is welcome to experience the power of community.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const ContactInfoCard = ({ icon, title, detail, sub }) => (
  <motion.div 
    variants={fadeInUp}
    className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all duration-500 group"
  >
    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 transition-colors duration-500">
      {icon}
    </div>
    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-2">{title}</h3>
    <p className="text-xl font-bold mb-1">{detail}</p>
    <p className="text-sm text-gray-400 font-light">{sub}</p>
  </motion.div>
);

export default ContactPageContent;
