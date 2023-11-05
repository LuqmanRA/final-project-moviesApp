'use client';

import { Carousel } from "flowbite";
import Image from "next/image";
import Hunter from "@/assets/hunterx.jpeg"
import Attack from "@/assets/attack.png"
import Fullmetal from "@/assets/fullmetal.jpg"

export default function SlidingInterval() {
  return (
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      
      <div className="relative h-56 overflow-hidden md:h-96">
        {/* Item 1 */}
        <a href="/anime/11061">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            src={Hunter}
            className="absolute block w-full h-52 sm:h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            width={350}
            height={350}
          />
        </div>
        </a>
        {/* Item 2 */}
        <a href="/anime/51535">
        <div className="hidden duration-700 ease-in-out" data-carousel-item="">
          <Image
            src={Attack}
            className="absolute block w-full h-52 sm:h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            width={350}
            height={350}
          />
        </div>
        </a>
        {/* Item 3 */}
        <a href="/anime/5114">
        <div className="hidden duration-700 ease-in-out" data-carousel-item="">
          <Image
            src={Fullmetal}
            className="absolute block w-full h-52 sm:h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            width={350}
            height={350}
          />
        </div>
        </a>
      </div>
      
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to={0}
        />
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to={1}
        />
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to={2}
        />
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev=""
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next=""
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
    

  )
}