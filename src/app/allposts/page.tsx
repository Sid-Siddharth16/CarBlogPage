"use client";
import { useEffect, useState } from "react";
import { getPosts, getUser } from "@/api/car-api";
import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/Banner";
import tech1 from '@/assests/tech-card/tech1.png';
import tech2 from '@/assests/tech-card/tech2.png';
import tech3 from '@/assests/tech-card/tech3.png';
import tech4 from '@/assests/tech-card/tech4.png';
import tech5 from '@/assests/tech-card/tech5.png';
import tech6 from '@/assests/tech-card/tech6.png';
import tech7 from '@/assests/tech-card/tech7.png';
import authorPfp from '@/assests/author-pfp.jpg';
import { useSearchParams, useRouter } from "next/navigation";
import { Post, User } from "@/types";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AllPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [authors, setAuthors] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user } = useAuth();
  const search = (searchParams!.get("search") || "").toLowerCase();
  const POSTS_PER_PAGE = 5;
  const [page, setPage] = useState(1);

  // Check authentication on component mount
  useEffect(() => {
    if (!user) {
      toast.error("Please login to see all blogs!");
      router.push("/login");
      return;
    }
  }, [user, router]);

  // Static categories/tags for demo
  const allTags = ["SUV", "EV", "Luxury", "Sedan", "Hybrid", "Sports", "Family"];

  // Helper to assign random tags to a post
  function getRandomTags() {
    const shuffled = allTags.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * 2) + 1); // 1-2 tags
  }

  useEffect(() => {
    if (!user) return; // Don't fetch data if not authenticated

    async function fetchData() {
      const fetchedPosts: Post[] = await getPosts();
      const filtered = search
        ? fetchedPosts.filter((post: Post) => post.title.toLowerCase().includes(search))
        : fetchedPosts;
      const startIdx = (page - 1) * POSTS_PER_PAGE;
      const postsToShow = filtered.slice(startIdx, startIdx + POSTS_PER_PAGE);
      setPosts(postsToShow);
      const fetchedAuthors: User[] = await Promise.all(
        postsToShow.map((post: Post) => getUser(post.userId.toString()))
      );
      setAuthors(fetchedAuthors);
      setLoading(false);
    }
    fetchData();
  }, [search, page, user]);

  const staticImages = [tech1, tech2, tech3, tech4, tech5, tech6, tech7];

  // Helper for static ratings/likes
  function getStaticRating(idx: number) {
    return 3 + (idx % 3); // 3, 4, or 5 stars
  }
  function getStaticLikes(idx: number) {
    return 100 + idx * 7;
  }

  // If not authenticated, show loading or redirect
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <Banner />
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 text-[#232536]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          All posts
        </h1>
        <div className="w-full h-px bg-gray-300 mb-6 sm:mb-10" />
        <div className="flex flex-col gap-6 sm:gap-8">
          {loading ? (
            <p className="text-gray-500 text-center text-base sm:text-lg">Loading...</p>
          ) : posts.length === 0 ? (
            <p className="text-gray-500 text-center text-base sm:text-lg">No blogs found.</p>
          ) : posts.map((post, idx) => {
            const tags = getRandomTags();
            const rating = getStaticRating(idx);
            const likes = getStaticLikes(idx);
            return (
              <div
                key={post.id}
                className="post-hover-fade group flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full cursor-pointer p-3 sm:p-5 rounded-xl bg-white"
              >
                {/* Image */}
                <div className="relative w-full sm:w-[180px] md:w-[260px] h-[180px] sm:h-[260px] flex-shrink-0 mb-3 sm:mb-0">
                  <Image
                    src={staticImages[idx % staticImages.length]}
                    alt={post.title}
                    fill
                    className="object-cover w-full h-full p-2 rounded-lg"
                    sizes="(max-width: 640px) 100vw, 260px"
                  />
                </div>
                {/* Content */}
                <div className="fade-content flex-1 flex flex-col gap-1 justify-center hover:text-[#232536]">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#232536] mb-1 sm:mb-2 leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {post.title}
                  </h2>
                  <div className="flex gap-2 mb-2 flex-wrap">
                    {tags.map(tag => (
                      <span
                        key={tag}
                        className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full transition-colors duration-200 group-hover:bg-red-500 group-hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Ratings and Likes */}
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                      ))}
                      <span className="ml-1 text-xs text-gray-500">{rating}.0</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                      <span className="text-xs text-gray-500">{likes}</span>
                    </div>
                  </div>
                  {/* Meta info */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                      <Image src={authorPfp} alt="author" width={40} height={40} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex flex-col ml-2">
                      <span className="font-semibold text-[#232536] mb-0.5 text-xs sm:text-base" style={{fontFamily : "Plus Jakarta Sans, sans-serif"}}>{authors[idx]?.name || 'Unknown'}</span>
                      <span className="flex items-center text-[#2B2C34] mb-0.5 gap-2 sm:gap-3 text-xs sm:text-sm" style={{fontFamily : "Plus Jakarta Sans, sans-serif"}}>
                        Jan 10, 2024
                        <span className="mx-1">•</span>
                        3 min read
                      </span>
                    </div>
                  </div>
                  <p className="text-[#232536] text-xs sm:text-sm mb-2 sm:mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {post.body.substring(0, 120)}...
                  </p>
                  <Link
                    href={`/post/${post.id}`}
                    className="inline-block p-2 rounded-md font-bold text-xs sm:text-[14px] leading-[21px] w-full sm:w-[140px] h-[38px] sm:h-[40px] text-center align-middle bg-[#FF5959] text-white group-hover:bg-[#FF5959] group-hover:text-[#ffffff] group-hover:border group-hover:border-[#FF5959] transition-colors duration-200 border-0" style={{fontFamily : "Poppins , sans-serif"}}  
                  >
                    Read full article...
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold disabled:opacity-50"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold disabled:opacity-50"
            onClick={() => setPage(page + 1)}
            disabled={posts.length < POSTS_PER_PAGE}
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
