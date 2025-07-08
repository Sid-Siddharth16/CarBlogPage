import React from "react";
import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
  image: StaticImageData | string;
  title: string;
  description: string;
}

export default function CategoryCard({ image, title, description }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center bg-[#F4F0F8] rounded-xl p-6 w-full max-w-xs sm:max-w-[255px] mx-auto shadow-sm  transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <div className="w-20 h-20 mb-4 rounded-full overflow-hidden flex items-center justify-center bg-white">
        <Image src={image} alt={title} width={80} height={80} className="object-cover" />
      </div>
      <div className="font-bold text-base sm:text-lg md:text-xl text-center mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</div>
      <div className="text-[#000000] text-center text-xs sm:text-sm md:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>{description}</div>
    </div>
  );
}
