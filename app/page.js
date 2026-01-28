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
            Welcome to The Citizen's Place Church
          </motion.h4>
          <motion.h1 variants={fadeInUp} className='leading-tight text-4xl sm:text-6xl md:text-8xl text-white font-bold mb-6 text-center max-w-5xl drop-shadow-2xl'>
            You're Not Just a <br /> Visitor -{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300'>You're a Citizen</span>
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
              But we are different, because our citizenship is in heaven. And
              from there we eagerly await the coming of the savior, the Lord
              Jesus Christ;
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
              But we are different, because our citizenship is in heaven. And
              from there we eagerly await the coming of the savior, the Lord
              Jesus Christ;
            </p>
            <h2 className='text-white text-xl sm:text-4xl font-bold'>
              Phillipians 3:20
            </h2>
          </div>
        </div>
      </div>
      {/* Conviction Section */}
      <div className='container bg-[#0a0d11] w-full h-auto py-8 sm:py-12 mb-8 px-4'>
        <h2 className='text-accent text-2xl sm:text-4xl font-bold text-center'>
          Our Convictions
        </h2>
        <p className='text-white text-base sm:text-2xl max-w-3xl mx-auto text-center mt-4 sm:mt-6'>
          While our approach remains contemporary, our beliefs stand the test of
          time. Our methods may grow, but these core beliefs will forever remain
          the foundation of LifePoints.
        </p>
        <Accordion
          type='single'
          collapsible
          className='w-full mt-3'
          defaultValue='item-1'>
                   <AccordionItem value='item-1'>
                     <AccordionTrigger className=' text-2xl'>
                       The Bible
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
       The Bible is the inspired Word of God, the product of holy men of old who spoke and wrote as they were moved by the Holy Spirit. We accept the new covenant, as recorded in the New Testament, as our infallible guide in matters pertaining to conduct and doctrine (2 Tim. 3:16; 1 Thess. 2:13; 2 Peter 1:21).
                       </p>
                     </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value='item-2'>
                     <AccordionTrigger className=' text-2xl'>
                      The External Life and the New Birth
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
       Man’s first step toward salvation is godly sorrow that worketh repentance. The New Birth is necessary to all men, and when experienced, produces eternal life (2 Cor. 7:10; John 3:3–5; 1 John 5:12).
                       </p>
                     </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value='item-3'>
                     <AccordionTrigger className=' text-2xl'>
                       Jesus will Return 
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
       Following the Tribulation, He shall return to earth as King of kings, and Lord of lords, and together with His saints, who shall be kings and priests, He shall reign a thousand years (Rev. 5:10; 20:6).
                       </p>
                     </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value='item-4'>
                     <AccordionTrigger className=' text-2xl'>
                       Baptism in the Holy Spirit
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
                         The Baptism in the Holy Spirit and fire is a gift from God as promised by the Lord Jesus Christ to all believers in this dispensation and is received subsequent to the New Birth. This experience is accompanied by the initial evidence of speaking in other tongues as the Holy Spirit Himself gives utterance (Matt. 3:11; John 14:16-17; Acts 1:8; Acts 2:38-39; Acts 19:1-7; Acts 2:1-4).
                       </p>
                     </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value='item-5'>
                     <AccordionTrigger className=' text-2xl'>
                       Water Baptism
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
                       Baptism in water is by immersion, is a direct commandment of our Lord, and is for believers only. The ordinance is a symbol of the Christian’s identification with Christ in His death, burial, and resurrection (Matt. 28:19; Rom. 6:4; Col. 2:12; Acts 8:36-39). The following recommendation regarding the water baptismal formula is adopted; to wit: “On the confession of your faith in the Lord Jesus Christ, the Son of God, and by His authority, I baptize you in the Name of the Father, and of the Son, and of the Holy Spirit. Amen.”
                       </p>
                     </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value='item-6'>
                     <AccordionTrigger className=' text-2xl'>
                       The Godhead
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
                         Our God is One, but manifested in three Persons—the Father, the Son, and the Holy Spirit, being coequal (Deut. 6:4; Phil. 2:6). God the Father is greater than all; the Sender of the Word (Logos) and the Begetter (John 14:28; John 16:28; John 1:14). The Son is the Word flesh-covered, the One Begotten, and has existed with the Father from the beginning (John 1:1; John 1:18; John 1:14). The Holy Spirit proceeds forth from both the Father and the Son and is eternal (John 14:16; John 15:26).
                       </p>
                     </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value='item-7'>
                     <AccordionTrigger className=' text-2xl'>
                       Man, His Fall, and Redemption
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
                        Man is a created being, made in the likeness and image of God. But through Adam’s transgression and fall, sin came into the world. The Bible says “all have sinned, and come short of the glory of God,” and “There is none righteous, no, not one” (Rom. 3:10; 3:23). Jesus Christ, the Son of God, was manifested to undo the works of the devil, and He gave His life and shed His blood to redeem and restore mankind back to God (Rom. 5:14; 1 John 3:8). Salvation is the gift of God to mankind, separate from works and the Law, and is made operative by grace through faith in Jesus Christ, producing works acceptable to God (Eph. 2:8-10).
                     </p>
                     </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value='item-8'>
                     <AccordionTrigger className=' text-2xl'>
                       Resurrection of the Just
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
                        The angels said to Jesus’ disciples, “This same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.” His coming is imminent. When He comes, “The dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds to meet the Lord in the air” (Acts 1:11; 1 Thess. 4:16-17).
                        </p>
                     </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value='item-9'>
                     <AccordionTrigger className=' text-2xl'>
                       The Second Coming of Jesus
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
                        The angels said to Jesus’ disciples, “This same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.” His coming is imminent. When He comes, “The dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds to meet the Lord in the air” (Acts 1:11; 1 Thess. 4:16-17).
                        </p>
                     </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value='item-10'>
                     <AccordionTrigger className=' text-2xl'>
                 Hell and Eternal Retribution
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
                    The one who physically dies in his sins without accepting Christ is hopelessly and eternally lost in the lake of fire and, therefore, has no further opportunity of hearing the Gospel or repenting. The lake of fire is literal. The terms “eternal” and “everlasting,” used in describing the duration of the punishment of the damned in the lake of fire, carry the same thought and meaning of endless existence as used in denoting the duration of joy and ecstasy of saints in the Presence of God (Heb. 9:27; Rev. 19:20).
                        </p>
                     </AccordionContent>
                   </AccordionItem>
                    <AccordionItem value='item-11'>
                     <AccordionTrigger className=' text-2xl'>
                Sanctification
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
                  The Bible teaches that without holiness no man can see the Lord. We believe in the Doctrine of Sanctification as a definite, yet progressive work of grace, commencing at the time of regeneration and continuing until the consummation of salvation at Christ’s return (Heb. 12:14; 1 Thess. 5:23; 2 Peter 3:18; 2 Cor. 3:18; Phil. 3:12–14; 1 Cor. 1:30).
                        </p>
                     </AccordionContent>
                   </AccordionItem>
                    <AccordionItem value='item-12'>
                     <AccordionTrigger className=' text-2xl'>
                Divine Healing
                     </AccordionTrigger>
                     <AccordionContent className='flex flex-col gap-4 text-balance'>
                       <p className=' text-[1rem]'>
              Healing is for the physical ills of the human body and is brought about by the power of God through the prayer of faith, and by the laying on of hands. It is provided for in the atonement of Christ, and is the privilege of every member of the Church today (James 5:14-15; Mark 16:18; Isa. 53:4-5; Matt. 8:17; 1 Peter 2:24).
                        </p>
                     </AccordionContent>
                   </AccordionItem>
        </Accordion>
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
                  src='https://img.youtube.com/vi/jrZVyuKCIjc/0.jpg'
                  alt='YouTube Video Thumbnail for THE EXPERIENCE OF THE HOLY SPIRIT'
                  className='mb-4 w-full h-auto'
                  width={400}
                  height={200}
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <a
                    href='https://youtu.be/jrZVyuKCIjc?si=a44chjuCwc9_C0Ow'
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
                THE EXPERIENCE OF THE HOLY SPIRIT
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
                  src='https://img.youtube.com/vi/r318EKHXPcA/0.jpg'
                  alt='HOLY SPIRIT: PREDICTABLE OUTCOME'
                  className='mb-4 w-full h-auto'
                  width={400}
                  height={200}
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <a
                    href='https://youtu.be/r318EKHXPcA?si=n4EQs6VLYviqvdMh'
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
                HOLY SPIRIT: PREDICTABLE OUTCOME
              </h3>
              <p className='text-gray-700 text-sm sm:text-base md:text-lg'>
                Kindly subscribe to our YouTube channel.
              </p>
              <p className='text-gray-500 text-xs sm:text-sm md:text-base'>
                4th January 2025
              </p>
            </div>
            {/* 3rd card  */}
            <div className='bg-[#eaf3ff] rounded-lg'>
              <div className='relative'>
                <Image
                  src={'https://img.youtube.com/vi/NPMlEd-MEp8/hqdefault.jpg' || '/messages-img.png'}
                  alt='THE VIOCE OF A TRIUMPH'
                  className='mb-4 w-full h-auto'
                  width={400}
                  height={200}
                  unoptimized 
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <a
                    href='https://youtu.be/NPMlEd-MEp8?si=miVW0UfWz6r15ka_'
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
                THE VIOCE OF A TRIUMPH
              </h3>
              <p className='text-gray-700 text-sm sm:text-base md:text-lg'>
                Kindly subscribe to our YouTube channel.
              </p>
              <p className='text-gray-500 text-xs sm:text-sm md:text-base'>
                28th December 2025
              </p>
            </div>
          </div>
          <div className='w-full flex justify-center mt-6'>
            <button className='w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#006CFF] flex items-center justify-center gap-2 rounded-md'>
              <p className='text-base sm:text-xl'>View all messages</p>
              <BsArrowRight className='text-white text-2xl sm:text-3xl' />
            </button>
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
            Whether you're dealing with challenges,{" "}
            <span className='text-accent'> have prayer requests</span>, need
            guidance or just want to connect, we are here and eager to help with
            it.
          </h2>
          <div className='w-full flex justify-center mt-12'>
            <button className='w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#006CFF] flex items-center justify-center gap-2 rounded-md'>
              <p className='text-base sm:text-xl'>Prayer Request</p>
            </button>
          </div>
        </div>
      </div>
      {/* About Founder Section */}

      <div className='bg-[#0a0d11] mb-10 text-white'>
        <div className='container w-full h-auto py-8 sm:py-8 md:py-12 pb-8 px-5 sm:px-4 space-y-8 lg:space-y-12'>
          <div className='flex flex-col items-center mb-4 sm:mb-12 gap-2'>
            <h2 className='text-accent text-xl sm:text-2xl md:text-4xl font-bold text-center '>
              Meet Our Pastors
            </h2>
            {/* <hr className='w-1/2' /> */}
          </div>
          <div className='flex flex-col lg:flex-row items-stretch justify-between lg:gap-15 gap-10'>
            <div className='flex justify-center flex-1 relative min-h-[500px] lg:min-h-0 w-full group'>
              {/* Stack effect */}
              <div className='absolute inset-0 border-2 border-[#006CFF] translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 rounded-lg z-0 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3 sm:group-hover:translate-x-5 sm:group-hover:translate-y-5'></div>
              <Image
                src='/nike-and-yinka.jpg'
                alt='About Founder'
                fill
                className='rounded-lg object-cover relative z-10 shadow-2xl'
              />
            </div>
            <div className='flex flex-col text-white space-y-6 flex-1 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm justify-center'>
              <div className="w-16 h-1 bg-[#006CFF] mb-2"></div>
              <h2 className='text-xl sm:text-2xl font-bold text-start tracking-wide uppercase'>
                YINKA AND NIKE OLADERU
              </h2>
              <p className='text-justify text-gray-300 leading-relaxed font-light'>
                Pastors Yinka and Nike Oladeru are the dynamic leaders. Married
                in 2012, they share a rich history, having met in college in
                Nigeria. Both alumni of the prestigious Rhema Bible Training
                College, they have been equipped with a strong foundation in
                ministry. With a combined ministerial experience, they have
                served in various capacities, including associate pastors.
                Together, they are devoted parents to their two children.
              </p>
              {/* <p className='text-base sm:text-xl text-gray-700 text-justify'>
                Yinka and Nike Oladeru are passionate lover of God whose sole
                drive is to see a generation of young people consumed with
                hunger for more of Jesus. He consistently desires and pursues a
                deeper walk with the Holy Spirit, which is the inspiration for
                his relentless drive to invest time in communion and prayer.
              </p>

              <p className='text-base sm:text-xl text-gray-700 text-justify'>
                Nike Oladeru has been used by God to bless the body of Christ
                with many songs among which love for God, desire for greater
                light, and revelation of the ways of God are consistent themes.
              </p> */}

              <div className='flex flex-col md:flex-row gap-4 md:gap-16 justify-center md:justify-start pt-4'>
                <Link
                  className='w-full sm:w-[200px] px-6 py-4 sm:py-5 bg-transparent border border-white/20 flex items-center justify-center gap-2 rounded-md hover:bg-[#006CFF] hover:border-[#006CFF] transition-all duration-300 group'
                  href='/about'>
                  <p className='text-base sm:text-xl text-white'>Read bio</p>
                </Link>

                {/* <button className='w-full sm:w-auto px-6 py-4 sm:py-5 bg-black flex items-center justify-center gap-2 rounded'>
                  <p className='text-base sm:text-xl text-white'>
                    Quote by Pastor
                  </p>
                </button> */}
              </div>
            </div>
          </div>

          {/* Pastor Muyiwa */}
          <div className='flex flex-col lg:flex-row-reverse items-stretch justify-between lg:gap-15 gap-10'>
            <div className='flex justify-center flex-1 relative min-h-[500px] lg:min-h-0 w-full group'>
              {/* Stack effect */}
              <div className='absolute inset-0 border-2 border-[#006CFF] translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 rounded-lg z-0 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3 sm:group-hover:translate-x-5 sm:group-hover:translate-y-5'></div>
              <Image
                src='/pastor-muyiwa.png'
                alt='About Founder'
                fill
                className='rounded-lg object-cover relative z-10 shadow-2xl'
              />
            </div>
            <div className='flex flex-col text-white space-y-6 flex-1 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm justify-center'>
              <div className="w-16 h-1 bg-[#006CFF] mb-2"></div>
              <h2 className='text-xl sm:text-2xl font-bold text-start tracking-wide uppercase'>
                PASTOR MUYIWA
              </h2>
              <p className='text-justify text-gray-300 leading-relaxed font-light'>
                Pastors Yinka and Nike Oladeru are the dynamic leaders. Married
                in 2012, they share a rich history, having met in college in
                Nigeria. Both alumni of the prestigious Rhema Bible Training
                College, they have been equipped with a strong foundation in
                ministry. With a combined ministerial experience, they have
                served in various capacities, including associate pastors.
                Together, they are devoted parents to their two children.
              </p>
              {/* <p className='text-base sm:text-xl text-gray-700 text-justify'>
                Yinka and Nike Oladeru are passionate lover of God whose sole
                drive is to see a generation of young people consumed with
                hunger for more of Jesus. He consistently desires and pursues a
                deeper walk with the Holy Spirit, which is the inspiration for
                his relentless drive to invest time in communion and prayer.
              </p>

              <p className='text-base sm:text-xl text-gray-700 text-justify'>
                Nike Oladeru has been used by God to bless the body of Christ
                with many songs among which love for God, desire for greater
                light, and revelation of the ways of God are consistent themes.
              </p> */}

              <div className='flex flex-col md:flex-row gap-4 md:gap-16 justify-center md:justify-start pt-4'>
                <Link
                  className='w-full sm:w-[200px] px-6 py-4 sm:py-5 bg-transparent border border-white/20 flex items-center justify-center gap-2 rounded-md hover:bg-[#006CFF] hover:border-[#006CFF] transition-all duration-300 group'
                  href='/about'>
                  <p className='text-base sm:text-xl text-white'>Read bio</p>
                </Link>

                {/* <button className='w-full sm:w-auto px-6 py-4 sm:py-5 bg-black flex items-center justify-center gap-2 rounded'>
                  <p className='text-base sm:text-xl text-white'>
                    Quote by Pastor
                  </p>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
