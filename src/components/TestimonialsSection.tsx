import React from "react";
import Image from "next/image";
import avatar from "../assests/author-pfp.jpg";

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#232536] py-16 px-4 mb-25" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Left: Heading and description */}
        <div className="md:col-span-1">
          <h3 className="uppercase font-semibold text-sm tracking-widest text-white mb-2" style={{ letterSpacing: 2 }}>Testimonials</h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            What people say<br />about our blog
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* Vertical line */}
        <div className="hidden md:block h-58 border-l-2 border-white/20 mx-auto" />
        {/* Right: Testimonial card */}
        <div className="md:col-span-1 flex flex-col gap-6">
          <p className="text-white text-lg sm:text-xl font-medium mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center gap-4">
            <Image src={avatar} alt="Jonathan Vallem" width={56} height={56} className="rounded-full border-2 border-white" />
            <div>
              <div className="font-bold text-white text-base">Jonathan Vallem</div>
              <div className="text-white/70 text-sm">New York, USA</div>
            </div>
            <div className="flex-1" />
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-2 hover:bg-blue-100 transition">
              <span className="sr-only">Previous</span>
              <svg width="20" height="20" fill="none" stroke="#232536" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-[#FF5959] flex items-center justify-center hover:bg-[#ff7676] transition-transform duration-300 hover:scale-110">
              <span className="sr-only">Next</span>
              <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 