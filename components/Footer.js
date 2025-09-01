"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-8">
      <div className="container mx-auto px-4 flex flex-col justify-between items-start gap-8">
        <div className="w-full flex justify-between">
          {" "}
          {/* Navigation Section */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Worship
            </a>
            <a href="#" className="hover:text-gray-300">
              Messages
            </a>
            <a href="#" className="hover:text-gray-300">
              I'm new
            </a>
            <a href="#" className="hover:text-gray-300">
              Give
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact us
            </a>
          </div>
          {/* Newsletter Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Join our newsletter</h3>
            <p className="text-gray-400">Stay connected and informed:</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-white text-black w-full md:w-64"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Sign me up
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Section (placeholder icons) */}
        <div className="flex space-x-4 justify-end">
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Twitter</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 2.6 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Instagram</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.322 3.608 1.297.975.975 1.235 2.242 1.297 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.322 2.633-1.297 3.608-.975.975-2.242 1.235-3.608 1.297-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.322-3.608-1.297-.975-.975-1.235-2.242-1.297-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.322-2.633 1.297-3.608.975-.975 2.242-1.235 3.608-1.297 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.67.014-4.95.072-1.315.064-2.574.342-3.548 1.316C2.36 2.436 1.682 3.695 1.618 4.95c-.058 1.28-.072 1.69-.072 4.95 0 3.259.014 3.67.072 4.95.064 1.315.342 2.574 1.316 3.548s2.233 1.252 3.548 1.316c1.28.058 1.691.072 4.95.072s3.67-.014 4.95-.072c1.315-.064 2.574-.342 3.548-1.316.975-.975 1.252-2.233 1.316-3.548.058-1.28.072-1.691.072-4.95s-.014-3.67-.072-4.95c-.064-1.315-.342-2.574-1.316-3.548s-2.233-1.252-3.548-1.316c-1.28-.058-1.691-.072-4.95-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 110 7.998zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 100-2.881z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Facebook</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.255-2.396-1.858-2.396-1.605 0-2.142 1.085-2.142 2.396v5.604h-3v-11h3v1.542c.413-.639 1.165-1.858 2.884-1.858 2.102 0 3.116 1.377 3.116 4.027v6.289z"></path>
            </svg>
          </a>
        </div>
      </div>
      {/* Horizontal Line */}
      <div className="border-t border-gray-600 my-8 mx-4"></div>
      {/* Copyright Section */}
      <div className="text-center text-gray-400">
        <p>© All rights reserved. 2024, thecitizensplace</p>
      </div>
    </footer>
  );
}
