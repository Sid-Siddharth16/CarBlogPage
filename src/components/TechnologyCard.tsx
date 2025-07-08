import React from "react";
import Image, { StaticImageData } from "next/image";
import author from "../assests/author-pfp.jpg";

interface TechnologyCardProps {
  imageSrc: StaticImageData | string;
  imageAlt?: string;
  authorName: string;
  // authorAvatar: string;
  readTime?: string;
  description?: string;
}

export default function TechnologyCard({
  imageSrc,
  imageAlt = "Technology image",
  authorName,
  // authorAvatar,
  readTime = "3 min read",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}: TechnologyCardProps) {
  return (
    <div className="bg-[#F4F0F8] rounded-lg shadow-md overflow-hidden flex flex-col w-full max-w-xs mx-auto h-[20rem] sm:h-[38rem] 2xl:h-[30rem] 2xl:w-[400px]  transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <div className="relative w-full h-40 sm:h-56 2xl:h-72 pt-2 sm:pt-4 2xl:pt-4 flex justify-center items-center">
        <div className="relative max-w-[200px] sm:max-w-[150px] 2xl:max-w-[290px] w-full h-full p-4 sm:p-4 2xl:p-3">
          <Image src={imageSrc} alt={imageAlt} fill className="object-contain" />
        </div>
      </div>
      <div className="p-3 sm:p-4 2xl:p-8 flex-1 flex flex-col justify-between">
        <p className="text-[#2B2C34] text-base sm:text-xl 2xl:text-2xl font-semibold mb-2 sm:mb-4 2xl:mb-6 justify-center">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <Image
              src={author}
              alt={authorName}
              width={28}
              height={28}
              className="rounded-full object-cover sm:w-8 sm:h-8 2xl:w-12 2xl:h-12"
            />
            <span className="ml-2 sm:ml-3 2xl:ml-5 font-semibold text-gray-900 text-xs sm:text-sm 2xl:text-lg">
              {authorName}
            </span>
          </div>
          <span className="text-[#2B2C34] text-xs sm:text-sm 2xl:text-base whitespace-nowrap" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {readTime}
          </span>
        </div>
      </div>
    </div>
  );
}
