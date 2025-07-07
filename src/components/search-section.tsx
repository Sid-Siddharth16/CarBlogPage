"use client";
import { useState, useMemo } from "react";
import LatestBlogCard from "./LatestBlogCard";
import TrendingBlogCard from "./TrendingBlogCard";
import { Post } from "../types";

export default function BlogSearchSection({ posts, error }: { posts: Post[]; error: string | null }) {
  const [search, setSearch] = useState("");
  const filteredPosts = useMemo(() => {
    if (!search) return posts;
    return posts.filter((post: Post) => post.title.toLowerCase().includes(search.toLowerCase()));
  }, [search, posts]);

  return (
    <div className="mb-12">
      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search blog titles..."
          className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-base"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>Latest</h2>
          {error ? (
            <p className="text-red-500 text-center text-base sm:text-lg">{error}</p>
          ) : !filteredPosts || filteredPosts.length === 0 ? (
            <p className="text-gray-500 text-center text-base sm:text-lg">No blogs available.</p>
          ) : (
            <LatestBlogCard
              author="John Doe"
              date="March 12, 2024"
              title={filteredPosts[0].title}
              excerpt={filteredPosts[0].body.substring(0, 120) + "..."}
              postUrl={`/post/${filteredPosts[0].id}`}
            />
          )}
        </div>
        <div>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Trending Blogs</h2>
            <a href="/allposts" className="text-[#000000] hover:underline font-medium text-base sm:text-lg" style={{ fontFamily: "Poppins,sans-serif" }}>See all</a>
          </div>
          <div>
            {filteredPosts && filteredPosts.length > 3 ? (
              filteredPosts.slice(1, 5).map((post) => (
                <TrendingBlogCard
                  key={post.id}
                  author="John Deo"
                  date="Aug 23, 2023"
                  title={post.title}
                  postUrl={`/post/${post.id}`}
                />
              ))
            ) : (
              <p className="text-gray-500 text-center text-base sm:text-lg">No trending blogs available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 