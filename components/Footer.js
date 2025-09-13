"use client";
import { FaAngleRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className='bg-[#1A1A1A] text-white py-8'>
      <div className='container mx-auto px-4 flex flex-col gap-8'>
        <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8'>
          {/* Navigation Section */}
          <div className='flex flex-col space-y-4'>
            <a
              href='#'
              className='hover:text-gray-300 flex items-center justify-between'>
              About
              <FaAngleRight className='' />
            </a>
            <a
              href='#'
              className='hover:text-gray-300 flex items-center justify-between'>
              Worship
              <FaAngleRight className='' />
            </a>
            <a
              href='#'
              className='hover:text-gray-300 flex items-center justify-between'>
              Messages
              <FaAngleRight className='' />
            </a>
            <a
              href='#'
              className='hover:text-gray-300 flex items-center justify-between'>
              I'm new
              <FaAngleRight className='' />
            </a>
            <a
              href='#'
              className='hover:text-gray-300 flex items-center justify-between'>
              Give
              <FaAngleRight className='' />
            </a>
            <a
              href='#'
              className='hover:text-gray-300 flex items-center justify-between'>
              Contact us
              <FaAngleRight className='' />
            </a>
          </div>
          {/* Newsletter Section */}
          <div className='flex flex-col space-y-4 w-full md:w-auto'>
            <h3 className='text-lg font-semibold'>Join our newsletter</h3>
            <p className='text-gray-400'>Stay connected and informed:</p>
            <div className='flex flex-col sm:flex-row gap-2 w-full'>
              <input
                type='email'
                placeholder='Enter your email'
                className='px-4 py-2 rounded-lg bg-white text-black w-full sm:w-64'
              />
              <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto'>
                Sign me up
              </button>
            </div>
          </div>
        </div>
        {/* Social Media Section */}
        <div className='flex flex-wrap justify-center md:justify-end gap-4 border-t-2 border-b-2 border-gray-400 py-6'>
          <a
            href='#'
            className='text-gray-400 hover:text-white'
            aria-label='Twitter'>
            <FaTwitter className='w-6 h-6' />
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-white'
            aria-label='Instagram'>
            <FaInstagram className='w-6 h-6' />
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-white'
            aria-label='Facebook'>
            <FaFacebook className='w-6 h-6' />
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-white'
            aria-label='LinkedIn'>
            <FaLinkedin className='w-6 h-6' />
          </a>
        </div>
      </div>
      {/* Horizontal Line */}
      <div className='my-8 mx-4'></div>
      {/* Copyright Section */}
      <div className='text-center text-gray-400'>
        <p>{`© All rights reserved. ${year}, thecitizensplace`}</p>
      </div>
    </footer>
  );
}
