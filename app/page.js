"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { BsArrowRight, BsYoutube } from "react-icons/bs";

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-[#0A0D11]">
      {/* Hero Section */}
      <div
        className="relative min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/home.jpg')",
        }}
      >
        {/* Hero Content */}
        <div className="container mx-auto min-h-screen relative z-20 flex flex-col items-center justify-center w-full pt-[180px] pb-8 px-4 sm:px-6">
          <h4 className="text-black font-bold text-2xl sm:text-3xl mb-3 leading-none text-center">
            Welcome to The Citizen's Place Church
          </h4>
          <h1 className="leading-none text-4xl sm:text-6xl md:text-8xl text-white font-semibold mb-4 text-center max-w-4xl">
            You're Not Just a Visitor - You're a Citizen
          </h1>
          <p className="text-base sm:text-lg text-white mb-6 text-center max-w-2xl">
            At The Citizen’s Place, we believe that each encounter is more than
            a visit— it’s a step towards becoming family. Regardless of your
            background or life journey.
          </p>
          {/* hero buttons or actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 w-full">
            <button className="w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#006CFF] flex items-center justify-center gap-2 rounded">
              <p className="text-base sm:text-xl">I am new</p>
              <BsArrowRight className="text-white text-2xl sm:text-3xl" />
            </button>
            <button className="w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#0E0E0E] flex items-center justify-center gap-2 rounded">
              <BsYoutube className="text-white text-2xl sm:text-3xl" />
              <p className="text-base sm:text-xl">Watch Online</p>
            </button>
          </div>
        </div>
      </div>
      {/* Other Sections */}
      <div className="bg-[#0A0D11] py-12 sm:py-20 min-h-[400px] h-auto relative">
        <div className="absolute bg-white rounded-[61px] top-[-50px] w-full max-w-2xl sm:max-w-3xl left-1/2 -translate-x-1/2 flex flex-col p-6 sm:p-20 justify-center text-center items-center">
          <div className="absolute -top-[0px] left-[20px] sm:left-[50px] w-[80px] sm:w-[120px] h-[60px] sm:h-[100px] bg-black rounded-b-full"></div>
          <div className="absolute -top-[0px] left-[80px] sm:left-[120px] w-[80px] sm:w-[120px] h-[60px] sm:h-[100px] bg-white rounded-l-full"></div>
          <p className="relative z-25 text-black text-lg sm:text-2xl max-w-3xl pt-[40px] sm:pt-[80px]">
            But we are different, because our citizenship is in heaven. And from
            there we eagerly await the coming of the savior, the Lord Jesus
            Christ;
          </p>
          <h2 className="relative z-25 text-black font-bold text-xl sm:text-3xl max-w-3xl">
            Philippians 3:20
          </h2>
        </div>
        {/* Left Blur */}
        <div className="absolute top-0 left-0 w-[200px] sm:w-[500px] h-[200px] sm:h-[500px] bg-[#006CFF]/10 rounded-full blur-[80px] sm:blur-[200px]" />
        {/* Right Blur */}
        <div className="absolute top-0 right-0 w-[200px] sm:w-[500px] h-[200px] sm:h-[500px] bg-[#006CFF]/20 rounded-full blur-[80px] sm:blur-[200px]" />
        {/* Mission Section */}
        <div
          className="bg-[#0A0D11] mt-[120px] sm:mt-[350px] container min-h-[400px] h-auto flex items-center justify-center bg-cover bg-center relative rounded-xl px-4"
          style={{
            backgroundImage: "url('/mission-image.png')",
          }}
        >
          {/* Overlay using ::before */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Ensure content is above the overlay */}
          <div className="relative z-10 text-center flex flex-col gap-4 sm:gap-6 px-2">
            <h2 className="text-accent text-2xl sm:text-4xl font-bold">
              Our Mission
            </h2>
            <p className="text-white text-base sm:text-2xl max-w-3xl mx-auto">
              But we are different, because our citizenship is in heaven. And
              from there we eagerly await the coming of the savior, the Lord
              Jesus Christ;
            </p>
            <h2 className="text-white text-xl sm:text-4xl font-bold">
              Phillipians 3:20
            </h2>
          </div>
        </div>
      </div>
      {/* Conviction Section */}
      <div className="container bg-[#0a0d11] w-full h-auto py-8 sm:py-12 mb-8 px-4">
        <h2 className="text-accent text-2xl sm:text-4xl font-bold text-center">
          Our Convictions
        </h2>
        <p className="text-white text-base sm:text-2xl max-w-3xl mx-auto text-center mt-4 sm:mt-6">
          While our approach remains contemporary, our beliefs stand the test of
          time. Our methods may grow, but these core beliefs will forever remain
          the foundation of LifePoints.
        </p>
        <Accordion
          type="single"
          collapsible
          className="w-full mt-3"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className=" text-2xl">
              Do we believe in Trinity?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className=" text-[1rem]">
                Our flagship product combines cutting-edge technology with sleek
                design. Built with premium materials, it offers unparalleled
                performance and reliability.
              </p>
              <p className=" text-[1rem]">
                Key features include advanced processing capabilities, and an
                intuitive user interface designed for both beginners and
                experts.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className=" text-2xl">
              Do we believe in Trinity?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className=" text-[1rem]">
                We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days.
              </p>
              <p className=" text-[1rem]">
                All orders are carefully packaged and fully insured. Track your
                shipment in real-time through our dedicated tracking portal.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className=" text-2xl">
              Do we believe in Trinity?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className=" text-[1rem]">
                We stand behind our products with a comprehensive 30-day return
                policy. If you&apos;re not completely satisfied, simply return
                the item in its original condition.
              </p>
              <p className=" text-[1rem]">
                Our hassle-free return process includes free return shipping and
                full refunds processed within 48 hours of receiving the returned
                item.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* Our Messages Section */}
      <div className="bg-[#eaf3ff]">
        <div className="container w-full h-auto py-6 sm:py-8 md:py-12 pb-8 px-2 sm:px-4">
          <h2 className="text-black text-xl sm:text-2xl md:text-4xl font-bold text-start mb-4 sm:mb-6">
            Our Messages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Message Cards */}
            <div className="bg-[#eaf3ff] rounded-lg p-3 sm:p-4 md:p-6 m-1 sm:m-2 md:m-4">
              <div className="relative">
                <Image
                  src="/messages-img.png"
                  alt="Message Image 1"
                  className="mb-4 w-full h-auto"
                  width={400}
                  height={200}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/yt-logo-icon.svg"
                      alt="YouTube Play Icon"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-15 md:h-15 text-white"
                      width={50}
                      height={50}
                    />
                  </a>
                </div>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-700">
                CULTIVATING OWNERSHIP MENTALITY
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                Kindly subscribe to our YouTube channel.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                18th January 2025
              </p>
            </div>
            {/* 2nd card  */}
            <div className="bg-[#eaf3ff] rounded-lg p-3 sm:p-4 md:p-6 m-1 sm:m-2 md:m-4">
              <div className="relative">
                <Image
                  src="/messages-img.png"
                  alt="Message Image 1"
                  className="mb-4 w-full h-auto"
                  width={400}
                  height={200}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/yt-logo-icon.svg"
                      alt="YouTube Play Icon"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-15 md:h-15 text-white"
                      width={50}
                      height={50}
                    />
                  </a>
                </div>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-700">
                CULTIVATING OWNERSHIP MENTALITY
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                Kindly subscribe to our YouTube channel.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                18th January 2025
              </p>
            </div>
            {/* 3rd card  */}
            <div className="bg-[#eaf3ff] rounded-lg p-3 sm:p-4 md:p-6 m-1 sm:m-2 md:m-4">
              <div className="relative">
                <Image
                  src="/messages-img.png"
                  alt="Message Image 1"
                  className="mb-4 w-full h-auto"
                  width={400}
                  height={200}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/yt-logo-icon.svg"
                      alt="YouTube Play Icon"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-15 md:h-15 text-white"
                      width={50}
                      height={50}
                    />
                  </a>
                </div>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-700">
                CULTIVATING OWNERSHIP MENTALITY
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                Kindly subscribe to our YouTube channel.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                18th January 2025
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center mt-6">
            <button className="w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#006CFF] flex items-center justify-center gap-2 rounded">
              <p className="text-base sm:text-xl">View all messages</p>
              <BsArrowRight className="text-white text-2xl sm:text-3xl" />
            </button>
          </div>
        </div>
      </div>
      {/* Songs Section  */}
      <div className="bg-[#eaf3ff]">
        <div className="container w-full h-auto py-6 sm:py-8 md:py-12 pb-8 px-2 sm:px-4">
          <h2 className="text-black text-xl sm:text-2xl md:text-4xl font-bold text-start mb-4 sm:mb-6">
            Nike Oladeru's Songs
          </h2>
          <Image
            src="/nike-songs-img.png"
            alt="Nike Oladeru Songs"
            className="mb-4 w-full h-auto rounded-lg"
            width={1200}
            height={400}
          />
        </div>
      </div>
      {/* Prayer request Section  */}
      <div className="bg-[#eaf3ff]">
        <div className="container w-full h-auto py-6 sm:py-8 md:py-12 pb-8 px-2 sm:px-4">
          <h2 className="text-black text-xl sm:text-3xl md:text-6xl font-bold text-center mt-8 mb-12 pb-12 sm:mb-6 max-w-7xl mx-auto">
            Whether you're dealing with challenges,{" "}
            <span className="text-accent"> have prayer requests</span>, need
            guidance or just want to connect, we are here and eager to help with
            it.
          </h2>
          <div className="w-full flex justify-center mt-12">
            <button className="w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#006CFF] flex items-center justify-center gap-2 rounded">
              <p className="text-base sm:text-xl">Prayer Request</p>
            </button>
          </div>
        </div>
      </div>
      {/* About Founder Section */}

      <div className="bg-[#eaf3ff]">
        <div className="container w-full h-auto py-6 sm:py-8 md:py-12 pb-8 px-2 sm:px-4">
          <Image
            src="/img-founder.png"
            alt="About Founder"
            className="mb-4 w-full h-auto rounded-lg"
            width={1200}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
