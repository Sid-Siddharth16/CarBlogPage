import React from "react";
import latest_car from '../assests/latest_car.png';
import Image from "next/image";
import Link from "next/link";

interface LatestBlogCardProps {
  author: string;
  date: string;
  title: string;
  excerpt: string;
  postUrl: string;
}

export default function LatestBlogCard({ author, date, title, excerpt, postUrl }: LatestBlogCardProps) {
  return (
    <div className="rounded-xl p-4 sm:p-6 flex flex-col gap-2 w-full max-w-xl mx-auto">
      <Image
        src={latest_car}
        alt={title}
        className="w-full sm:w-220 h-48 sm:h-80 object-cover rounded-lg mb-5" 
      />
      <div className="flex items-center gap-2 text-xs sm:text-sm ">
        <span className="text-[#FF6666]">By {author}</span>
        <span className="text-[#4C4C4C]">| {date}</span>
      </div>
      <div className="font-bold text-lg sm:text-xl md:text-2xl " style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{title}</div>
      <div className="text-[#6D6E76] text-sm sm:text-base mb-4" style={{ fontFamily: 'Inter' }}>{excerpt}</div>
      <Link
        href={postUrl}
        className="bg-[#FF5959] text-white font-medium py-3 sm:py-4 px-8 sm:px-15 rounded-lg w-fit text-sm sm:text-base"
        style={{ fontFamily: 'Inter' }}
      >
        Read more
      </Link>
    </div>
  );
} 