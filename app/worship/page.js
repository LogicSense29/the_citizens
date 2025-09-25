"use client";
import Image from "next/image";
import { BsArrowRight, BsYoutube } from "react-icons/bs";
import { BsCalendar } from "react-icons/bs";

export default function WorshipPageContent() {
  return (
    <section className='w-full min-h-screen '>
      {/* Hero Section */}
      <div
        className='relative min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center'
        style={{
          backgroundImage: "url('/worship-hero-img.png')",
        }}>
        {/* Hero Content */}
        <div className='container mx-auto min-h-screen relative z-20 flex flex-col items-center justify-center w-full pt-[180px] pb-8 px-4 sm:px-6'>
          <h1 className=' leading-none text-4xl sm:text-5xl md:text-6xl text-white font-semibold mb-8 text-center max-w-6xl'>
            At The Citizen’s Place, our worship services are more than just
            gatherings; they are profound encounters with God. Join us for
            worship, fellowship, and a transformative experience.
          </h1>

          {/* hero buttons or actions */}
          <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 w-full mt-6'>
            <button className='w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#006CFF] flex items-center justify-center gap-2 rounded '>
              <p className='text-base sm:text-xl'>Join us online</p>
              <BsArrowRight className='text-white text-2xl sm:text-3xl' />
            </button>
          </div>
        </div>
      </div>
      {/* Other Sections */}
      <div
        className='bg-cover bg-center'
        style={{
          backgroundImage: "url('/worship-bg-img.png')",
        }}>
        {/* Sunday Service section  */}
        <div className='container pt-8 sm:py-12 px-4'>
          <div className='bg-white p-4 sm:p-8 py-12 sm:py-20 min-h-[300px] h-auto rounded-xl my-8 mx-auto '>
            <div
              className='min-h-[600px] h-auto flex flex-col md:flex-row items-center justify-start bg-cover relative rounded-xl w-full bg-right md:bg-center'
              style={{
                backgroundImage: "url('/worship-sec1-img.png')",
              }}>
              {/* Shadowy overlay covering half the background (right side) */}
              <div className='absolute top-0 left-0 h-full w-1/2 bg-black/60 rounded-xl pointer-events-none shadow-[60px_0_80px_-20px_rgba(0,0,0,0.7)]'></div>

              {/* Text Overlay */}
              <div className='relative z-10 flex flex-col gap-4 sm:gap-6 px-4 sm:px-8 py-8 rounded-xl w-full md:w-1/2 items-start text-left shadow-lg'>
                <h2 className='text-white text-2xl sm:text-4xl md:text-6xl font-bold leading-tight mb-2'>
                  Sunday Service
                </h2>
                <p className='text-accent text-4xl sm:text-6xl md:text-7xl font-extrabold mb-2'>
                  6:00 PM EST
                </p>
                <p className='text-white text-lg sm:text-xl md:text-2xl font-medium mb-6'>
                  Join us for worship, fellowship, and a life-changing encounter
                  every Sunday evening!
                </p>

                {/* buttons or actions */}
                <div className='flex flex-col sm:flex-row justify-start gap-4 sm:gap-8 w-full mt-6'>
                  <button className='w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#006CFF] flex items-center justify-center gap-2 rounded '>
                    <p className='text-base sm:text-xl'>Directions</p>
                    <BsArrowRight className='text-white text-2xl sm:text-3xl' />
                  </button>
                  <button className='w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#0E0E0E] flex items-center justify-center gap-2 rounded'>
                    <BsYoutube className='text-white text-2xl sm:text-3xl' />
                    <p className='text-base sm:text-xl'>Watch Online</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Weekly Service Section */}
        <div className='container w-full h-auto py-8 sm:py-12 md:mb-8 px-4 '>
          <div className='flex flex-col md:flex-row w-full justify-between items-start gap-8 md:gap-0'>
            {/* Text on the left */}
            <div className='md:w-2/5 w-full flex flex-col justify-start items-start'>
              <h2 className='text-[#006CFF] text-2xl sm:text-4xl md:text-6xl font-bold text-start mb-4 sm:mb-6 max-w-3xl'>
                Weekly Service
              </h2>
              <p className='text-gray-700 text-base sm:text-lg md:text-xl max-w-sm'>
                Apart from our Sunday services, we meet to pray every Thursdays
                at 9pm EST
              </p>
              <button className='w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#0E0E0E] flex items-center justify-center gap-2 rounded mt-8 md:mt-[80px]'>
                <BsCalendar className='text-white text-2xl sm:text-3xl' />
                <p className='text-base sm:text-xl'>Add to Schedule</p>
              </button>
            </div>
            {/* Image on the right */}
            <div className='md:w-3/5 w-full flex justify-center items-center'>
              <Image
                src='/worship-sec2-img.png'
                alt='Weekly Service'
                className='mb-4 w-full h-auto rounded-lg'
                width={800}
                height={400}
              />
            </div>
          </div>
        </div>
        {/* Vigil Service Section */}
        <div className='container w-full h-auto py-8 sm:py-12 mb-8 px-4'>
          <div className='flex flex-col-reverse md:flex-row w-full justify-between items-start gap-8'>
            {/* Image on the left */}
            <div className='md:w-3/5 w-full flex justify-center items-center'>
              <Image
                src='/worship-sec4-img.png'
                alt='Weekly Service'
                className='mb-4 w-full h-auto rounded-lg object-fill'
                width={800}
                height={400}
              />
            </div>
            {/* Text on the right */}
            <div className='md:w-2/5 w-full flex flex-col justify-start items-start'>
              <h2 className='text-[#000] text-2xl sm:text-4xl md:text-6xl font-bold text-start mb-4 sm:mb-6 max-w-lg'>
                Join our monthly 5-hour prayer vigil! Every 3rd Friday, 10pm-3am
                EST. Online and onsite options are available
              </h2>
              <button className='w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#0E0E0E] flex items-center justify-center gap-2 rounded mt-4 md:mt-[20px]'>
                <BsCalendar className='text-white text-2xl sm:text-3xl' />
                <p className='text-base sm:text-xl'>Add to Schedule</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
