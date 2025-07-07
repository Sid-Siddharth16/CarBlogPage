import React from "react";
import Link from "next/link";

interface TrendingBlogCardProps {
  author: string;
  date: string;
  title: string;
  postUrl: string;
}

export default function TrendingBlogCard({ author, date, title, postUrl }: TrendingBlogCardProps) {
  return (
    <Link
      href={postUrl}
      className={`group block w-full px-3 sm:px-8 py-3 sm:py-6 mb-2 sm:mb-3 cursor-pointer transition-all text-black hover:bg-[#FF5959] hover:text-white font-poppins`}
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="flex flex-row sm:flex-row items-center gap-1 sm:gap-5 mb-1 text-xs sm:text-sm">
        <span className="text-xs sm:text-base text-[#FF6666] group-hover:text-white" style={{fontFamily : "Poppins,sans-serif"}}>By {author}</span>
        <span className="text-xs sm:text-base text-[#000000] font-bold group-hover:text-white" style={{fontFamily : "Poppins,sans-serif"}}> | </span>
        <span className="text-xs sm:text-base text-[#000000] group-hover:text-white/80" style={{fontFamily : "Poppins,sans-serif"}}>{date}</span>
      </div>
      <div className="font-bold text-sm sm:text-xl md:text-2xl mb-1 sm:mb-2 leading-snug group-hover:text-white" style={{ fontFamily: 'Poppins, sans-serif'}}>{title}</div>
    </Link>
  );
} 