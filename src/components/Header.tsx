"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../assests/logo.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search.trim()) {
      router.push(`/allposts?search=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#232536] text-white p-4 sm:p-6 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div className="flex w-full justify-between items-center sm:w-auto gap-4">
          <Link href="/" className="flex items-center gap-2 sm:gap-4">
            <Image
              src={logo}
              alt="Car Blog"
              className="rounded-[50%]"
              width={40}
              height={40}
            />
            <h1 className="text-lg xs:text-xl sm:text-2xl font-bold ml-2">Car Blog</h1>
          </Link>
          <button
            className="sm:hidden p-2 focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="flex items-center w-full sm:w-auto gap-5 justify-end">
          <div className="hidden sm:block ml-10 max-w-lg w-96">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search blog titles..."
              className="w-full px-4 py-2 rounded-lg bg-white text-black border border-gray-400 placeholder-gray-700 shadow focus:outline-none focus:border-blue-500 text-base"
            />
          </div>
          <nav
            className={`w-full sm:w-auto ${menuOpen ? "block" : "hidden"} sm:block mt-2 sm:mt-0`}
          >
            <ul className="flex flex-col sm:flex-row items-center sm:space-x-10 space-y-2 sm:space-y-0 text-base xs:text-lg sm:text-xl sm:mr-3">
              <li>
                <Link
                  href="/"
                  className="relative px-2 py-1 transition-all duration-300 ease-in-out hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="relative px-2 py-1 transition-all duration-300 ease-in-out hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="relative px-2 py-1 transition-all duration-300 ease-in-out hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/allposts"
                  className="relative px-2 py-1 transition-all duration-300 ease-in-out hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <button className="p-2 sm:p-[5px] bg-white text-[#333] text-sm sm:text-[17px] font-bold rounded-[5px] font-poppins h-[40px] sm:h-[50px] w-[100px] sm:w-[152px] transition-all duration-300 hover:bg-gray-200 hover:scale-105">
                  Subscribe
                </button>
              </li>
            </ul>
          </nav>
        </div>
        {menuOpen && (
          <div className="block sm:hidden w-full mt-2">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search blog titles..."
              className="w-full px-4 py-2 rounded-lg bg-white text-black border border-gray-400 placeholder-gray-700 shadow focus:outline-none focus:border-blue-500 text-base"
            />
          </div>
        )}
      </div>
    </header>
  );
}
