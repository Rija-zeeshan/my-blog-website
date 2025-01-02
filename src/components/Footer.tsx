import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-1 mx-auto flex items-center sm:flex-row flex-col">
        {/* Logo Section */}
        <a className="flex title-font font-serif items-center md:justify-start justify-center text-gray-900">
          <Image
            src="https://www.shutterstock.com/image-vector/r-logo-vector-template-design-260nw-796633093.jpg"
            alt="RijaZeeshan Logo for Branding"
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
          <span className="ml-3 text-xl">RijaZeeshan</span>
        </a>

        {/* Copyright Section */}
        <p className="text-sm text-gray-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 DynamicBlog —{' '}
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-900 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @ Quater 2
          </a>
        </p>

        {/* Social Media Icons Section */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {/* Facebook Icon */}
          <a
            href="https://facebook.com"
            className="text-blue-500"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          {/* Twitter Icon */}
          <a
            href="https://twitter.com"
            className="ml-3 text-sky-500"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>

          {/* Instagram Icon */}
          <a
            href="https://instagram.com"
            className="ml-3 text-pink-500"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com"
            className="ml-3 text-blue-700"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
