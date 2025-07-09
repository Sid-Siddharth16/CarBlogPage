"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../assests/logo.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getPosts } from "@/api/car-api";
import { Post } from "@/types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch {
        setPosts([]);
      }
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!search) {
      setFilteredPosts([]);
      return;
    }
    setFilteredPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, posts]);

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search.trim()) {
      router.push(`/allposts?search=${encodeURIComponent(search.trim())}`);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#232536] text-white p-4 sm:p-6 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        {/* Mobile header row */}
        <div className="flex w-full items-center justify-between sm:w-auto gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
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
          </div>
          {/* Mobile search icon and hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              className="p-2 focus:outline-none"
              aria-label="Open search"
              onClick={() => setSearchOpen((open) => !open)}
            >
              {/* Search icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <button
              className="p-2 focus:outline-none"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile search input, expands below header row */}
        {searchOpen && (
          <div className="block sm:hidden w-full mt-2 relative order-2">
            <input
              type="text"
              value={search}
              autoFocus
              onChange={e => setSearch(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search blog titles..."
              className="w-full px-4 py-2 rounded-lg bg-white text-black border border-gray-400 placeholder-gray-700 shadow focus:outline-none focus:border-blue-500 text-base"
            />
            {search && filteredPosts.length > 0 && (
              <ul className="absolute left-0 right-0 bg-white text-black rounded-lg shadow-lg mt-1 z-50 max-h-60 overflow-y-auto">
                {filteredPosts.slice(0, 5).map((post) => (
                  <li
                    key={post.id}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer border-b last:border-b-0"
                    onClick={() => {
                      setMenuOpen(false);
                      setSearchOpen(false);
                      setSearch("");
                      router.push(`/post/${post.id}`);
                    }}
                  >
                    {post.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {/* Desktop search bar and nav remain unchanged */}
        <div className="flex items-center w-full sm:w-auto gap-5 justify-end order-3">
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
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="relative px-2 py-1 transition-all duration-300 ease-in-out hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="relative px-2 py-1 transition-all duration-300 ease-in-out hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href={user ? "/allposts" : "#"}
                  className="relative px-2 py-1 transition-all duration-300 ease-in-out hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  onClick={e => {
                    setMenuOpen(false);
                    if (!user) {
                      e.preventDefault();
                      toast.error("Login to see all amazing blogs");
                    }
                  }}
                >
                  Blogs
                </Link>
              </li>
              {user ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="relative px-2 py-1 transition-all duration-300 ease-in-out hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link
                    href="/login"
                    className="relative px-2 py-1 transition-all duration-300 ease-in-out hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
              )}
              <li>
                <button
                  className="p-2 sm:p-[5px] bg-white text-[#333] text-sm sm:text-[17px] font-bold rounded-[5px] font-poppins h-[40px] sm:h-[50px] w-[100px] sm:w-[152px] transition-all duration-300 hover:bg-gray-200 hover:scale-105"
                  onClick={e => {
                    if (!user) {
                      e.preventDefault();
                      toast.error("Login to see all amazing blogs");
                    } else {
                      // Place subscribe logic here if needed
                    }
                  }}
                >
                  Subscribe
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
