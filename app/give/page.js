"use client";

import React from "react";
import { BsArrowRight, BsYoutube } from "react-icons/bs";
import { FaCashRegister, FaCcStripe, FaPaypal } from "react-icons/fa";

function GivePageContent() {
  return (
    <div>
      {" "}
      {/* Hero Section */}
      <div
        className="relative min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/give-hero-img.png')",
        }}
      >
        {/* Hero Content */}
        <div className="container mx-auto min-h-screen relative z-20 flex flex-col items-center justify-center w-full pt-[180px] pb-8 px-4 sm:px-6">
          <h1 className="leading-none text-4xl sm:text-6xl md:text-8xl text-white font-semibold mb-4 text-center max-w-4xl">
            Become a Kingdom Partner
          </h1>
          <p className="text-base sm:text-lg text-white mb-6 text-center max-w-2xl">
            Through your generosity, we are empowered to expand the Kingdom of
            God by building the church, supporting those in need, and sharing
            the life-changing message of Jesus with the world.
          </p>
          {/* hero buttons or actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 w-full">
            <button className="w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#006CFF] flex items-center justify-center gap-2 rounded">
              <p className="text-base sm:text-xl">View Projects</p>
              <BsArrowRight className="text-white text-2xl sm:text-3xl" />
            </button>
            <button className="w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#0E0E0E] flex items-center justify-center gap-2 rounded">
              <p className="text-base sm:text-xl">Give to Mission</p>
            </button>
          </div>
        </div>
      </div>
      {/* Salvation Prayer Section */}
      <div
        className="w-full bg-transparent bg-cover bg-center py-12 sm:py-20"
        style={{
          backgroundImage: "url('/give-section-bg.png')",
        }}
      >
        <div className="container text-center w-full h-auto py-8 sm:py-12 pb-8 px-4">
          <h1 className=" text-4xl font-bold">
            THITHES, OFFERINGS & OTHER INITIATIVES
          </h1>
          {/* icons and details flexbox and button  */}
          <div className="">
            <div className="flex gap-12 items-center justify-center mt-12">
              {/* card  */}
              <div className="border border-yellow-400 rounded-tl-lg rounded-tr-lg rounded-bl-3xl rounded-br-3xl mb-6 p-12 text-white flex items-center">
                <div>
                  <div className="flex justify-center items-center gap-4 mb-2">
                    <FaCcStripe className="text-purple-600 w-6 h-6 rounded-full p-1 border-2 border-purple-600" />
                    <p>Zelle</p>
                  </div>
                  <p>@thecitizensplace</p>
                </div>
              </div>

              <div className="border border-yellow-400 rounded-tl-lg rounded-tr-lg rounded-bl-3xl rounded-br-3xl mb-6 p-12 text-white flex items-center">
                <div>
                  <div className="flex justify-center items-center gap-4 mb-2">
                    <FaCcStripe className="text-purple-600 w-6 h-6 rounded-full p-1 border-2 border-purple-600" />
                    <p>Zelle</p>
                  </div>
                  <p>@thecitizensplace</p>
                </div>
              </div>

              <div className="border border-yellow-400 rounded-tl-lg rounded-tr-lg rounded-bl-3xl rounded-br-3xl mb-6 p-12 text-white flex items-center">
                <div>
                  <div className="flex justify-center items-center gap-4 mb-2">
                    <FaCcStripe className="text-purple-600 w-6 h-6 rounded-full p-1 border-2 border-purple-600" />
                    <p>Zelle</p>
                  </div>
                  <p>@thecitizensplace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GivePageContent;
