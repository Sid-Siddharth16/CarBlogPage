"use client"

import React from "react";
import Image from "next/image";
import logo from "../assests/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Footer() {
  const router = useRouter();
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Subscribed successfully!");
    router.push('/');
    e.currentTarget.reset();
  };
  const handlelogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push("/login");  
  }
  return (
    <footer className="bg-[#232536] text-white pt-5 pb-6 px-4 sm:px-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top: Logo and nav */}
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 px-2 sm:px-0">
          <div className="flex items-center gap-3 justify-center md:justify-start md:order-1">
            <Image src={logo} alt="Logo" width={48} height={48} className="rounded-full bg-white p-1" />
            <span className="text-lg sm:text-2xl font-bold tracking-wide">LOGO</span>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-0 md:items-center md:justify-end md:order-2">
            <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm sm:text-base text-white/80 font-medium w-full md:w-auto">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <Link href="/allposts" className="hover:text-white transition">Blogs</Link>
              <Link href="/about" className="hover:text-white transition">About us</Link>
              <Link href="/contact" className="hover:text-white transition">Contact us</Link>
              <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            </nav>
            <button
              onClick={handlelogout}
              className="flex items-center gap-2 bg-[#FF5959] hover:bg-[#ff7676] text-white font-bold px-4 py-2 rounded-lg transition-all text-sm sm:text-base mt-4 md:mt-0 md:ml-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m-6-3h12m0 0l-3-3m3 3l-3 3" />
              </svg>
              Logout
            </button>
          </div>
        </div>
        {/* Newsletter */}
        <div className="w-full flex flex-col mb-8 px-2 sm:px-0">
          <div className="bg-[#292B36] rounded-xl p-6 sm:p-10 w-full max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="mb-2 md:mb-0 w-full md:w-auto text-left self-start">
              <h3 className="text-base sm:text-3xl font-bold mb-2 leading-tight text-white text-left">Subscribe to our news letter to get latest updates and news</h3>
            </div>
            <form className="flex w-full md:w-auto gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="example@email.com"
                className="rounded-lg px-4 py-2 sm:py-3 w-full md:w-80 text-black bg-white border border-gray-300 focus:outline-none focus:border-blue-500 text-sm sm:text-base font-medium shadow-sm"
                required
              />
              <button
                type="submit"
                className="bg-[#FF5959] hover:bg-[#ff7676] text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 transition-all text-sm sm:text-base"
              >
                Subscribe
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5l7.5 2.5L21 3m0 0l-7.5 19.5L3 10.5" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        {/* Contact info and Social icons */}
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 px-2 sm:px-0">
          <div className="text-white/70 text-sm sm:text-base text-center md:text-left">
            Finstreet 118 2561 abctown<br />example@email.com  001 21345 442
          </div>
          <div className="flex justify-center md:justify-end gap-6 text-white/70 text-lg sm:text-2xl mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
