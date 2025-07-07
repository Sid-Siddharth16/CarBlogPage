"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Post, User } from "@/types";
import { getPost, getUser } from "@/api/car-api";
import CarSpecs from "@/components/CarSpecs";
import Image from "next/image";
import carImg from "@/assests/images/images/car-img.jpg";
import CategoryCard from "@/components/CategoryCard";
import cat1 from "../../../assests/cat-card/cat1.png";
import cat2 from "../../../assests/cat-card/cat2.png";
import cat3 from "../../../assests/cat-card/cat3.png";
import cat4 from "../../../assests/cat-card/cat4.png";

export default function BlogDetailPage() {
  const params = useParams() || {};
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [author, setAuthor] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostAndAuthor = async () => {
      try {
        setLoading(true);
        const postId = params.id as string;

        // Fetch the post
        const postData = await getPost(postId);
        setPost(postData);

        // Fetch the author
        const authorData = await getUser(postData.userId.toString());
        setAuthor(authorData);
      } catch (err) {
        setError("Failed to load post");
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchPostAndAuthor();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Post Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              {error || "The post you are looking for does not exist."}
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 pt-6 sm:pt-10 pb-10 sm:pb-16">
      {/* Back to Home Button */}
      <button
        onClick={() => router.push("/")}
        className="mb-4 sm:mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors font-semibold text-sm sm:text-base"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </button>
      {/* Main Blog Image */}
      <div className="w-full h-48 sm:h-[340px] md:h-[520px] overflow-hidden mb-6 sm:mb-8 shadow-lg rounded-xl">
        <Image
          src={carImg}
          alt="Car"
          className="object-cover w-full h-full"
          priority
        />
      </div>
      {/* Blog Card */}
      <article className="rounded-2xl px-4 sm:px-8 py-6 sm:py-10 mb-8 sm:mb-10">
        {/* Blog Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#232536] mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {post.title}
        </h1>
        {/* Author and Meta Info */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6 text-xs sm:text-base">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-base sm:text-lg">
            {author?.name?.charAt(0).toUpperCase()}
          </div>
          <span className="font-semibold text-[#232536]">{author?.name}</span>
          <span className="mx-1 sm:mx-2 text-[#6D6E76]">|</span>
          <span className="text-[#232536]">Jan 10, 2024</span>
          <span className="mx-1 sm:mx-2 text-[#6D6E76]">|</span>
          <span className="text-[#232536]">3 Min Read</span>
        </div>
        {/* Description (bold, large) */}
        <p className="text-base sm:text-lg font-medium text-[#6D6E76] mb-6 sm:mb-8">
          {post.body}
        </p>
      </article>
      {/* Car Specs Section */}
      <div className="rounded-2xl px-4 sm:px-8 py-6 sm:py-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#232536] mb-4 sm:mb-6">
          Car Specifications
        </h2>
        <CarSpecs
          modelYear={post.id % 2 === 0 ? "2024" : "2025"}
          fuelType={
            post.id % 3 === 0
              ? "Hybrid"
              : post.id % 3 === 1
              ? "Electric"
              : "Gasoline"
          }
          topSpeed={`${180 + post.id * 5} mph`}
          price={`$${45000 + post.id * 2000}`}
        />
      </div>
      {/* All Category Heading */}
      <h2 className="text-xl sm:text-2xl font-bold text-[#232536] mt-10 sm:mt-12 mb-4 sm:mb-6 text-center">All Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <CategoryCard
          image={cat1}
          title="Car Reviews"
          description="Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egendrerit in."
        />
        <CategoryCard
          image={cat2}
          title="Maintenance Tips"
          description="Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egendrerit in."
        />
        <CategoryCard
          image={cat3}
          title="Car Modifications"
          description="Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egendrerit in."
        />
        <CategoryCard
          image={cat4}
          title="Driving Tips"
          description="Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egendrerit in."
        />
      </div>
    </div>
  );
}
