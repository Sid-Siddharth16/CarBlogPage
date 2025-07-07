import React from "react";
import hero from "../assests/hero-img.jpg";
import Image from "next/image";

export default function () {
  return (
    <div className="bg-[#232536] w-full mb-20 p-0 overflow-hidden">
      <div className="relative w-full h-72 sm:h-96 md:h-[40rem] overflow-hidden left-0 flex items-center justify-center">
        <Image
          src={hero}
          alt="Hero image of cars"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="bg-opacity-50 p-2 xs:p-4 sm:p-10 rounded-lg max-w-full sm:max-w-xl ml-0 sm:ml-8 text-white w-auto sm:w-auto mx-2 sm:mx-0 break-words">
            <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-2 sm:mb-4 break-words">
              Your Journey
              <br />
              Your Car
              <br />
              Your Way
            </h1>
            <p className="mb-4 sm:mb-6 text-xs xs:text-sm sm:text-base md:text-lg font-light break-words">
              Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi
              elementum vel euismod aliquam. Amet ultrices neque augue
              consectetur purus phasellus. Ullamcorper lorem montes varius amet
              vestibulum tellus facilisis consequat pretium. Et faucibus laoreet
              molestie diam semper fames diam eget.
            </p>
            <button className="bg-[#FF5959] hover:bg-red-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-8 rounded-lg text-base sm:text-lg flex items-center gap-2 transition-all">
              Subscribe
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10.5l7.5 2.5L21 3m0 0l-7.5 19.5L3 10.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
