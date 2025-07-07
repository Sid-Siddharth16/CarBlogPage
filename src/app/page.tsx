import BlogCard from "../components/BlogCard";
import { getPosts } from "../api/car-api";
import Link from "next/link";
import Banner from "@/components/Banner";
import TechnologyCard from "@/components/TechnologyCard";
import CategoryCard from '@/components/CategoryCard';
import tech1 from "../assests/tech-card/tech1.png";
import tech2 from "../assests/tech-card/tech2.png";
import tech3 from "../assests/tech-card/tech3.png";
import tech4 from "../assests/tech-card/tech4.png";
import cat1 from "../assests/cat-card/cat1.png";
import cat2 from "../assests/cat-card/cat2.png";
import cat3 from "../assests/cat-card/cat3.png";
import cat4 from "../assests/cat-card/cat4.png";
import TrendingBlogCard from "@/components/TrendingBlogCard";
import LatestBlogCard from "@/components/LatestBlogCard";
import TestimonialsSection from '@/components/TestimonialsSection';

export default async function Home() {
  let posts;
  let error = null; 

  try {
    posts = await getPosts();
  } catch (err) {
    error = "Unable to fetch car blogs. Please try again later.";
  }

  return (
    <div className="">
      <Banner />
      
      <div className="container mx-auto px-2 sm:px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-black mb-5"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Latest
            </h2>
            {error ? (
              <p className="text-red-500 text-center text-base sm:text-lg">
                {error}
              </p>
            ) : !posts || posts.length === 0 ? (
              <p className="text-gray-500 text-center text-base sm:text-lg">
                No blogs available.
              </p>
            ) : (
              <LatestBlogCard
                author="John Doe"
                date="March 12, 2024"
                title={posts[0].title}
                excerpt={posts[0].body.substring(0, 120) + "..."}
                postUrl={`/post/${posts[0].id}`}
              />
            )}
          </div>
          <div>
            <div className="flex justify-between items-center mb-12">
              <h2
                className="text-2xl sm:text-3xl font-bold text-black"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Trending Blogs
              </h2>
              <a
                href="/allposts"
                className="text-[#000000] hover:underline font-medium text-base sm:text-lg"
                style={{ fontFamily: "Poppins,sans-serif" }}
              >
                See all
              </a>
            </div>
            <div>
              {posts && posts.length > 3 ? (
                posts
                  .slice(1, 5)
                  .map((post) => (
                    <TrendingBlogCard
                      key={post.id}
                      author="John Deo"
                      date="Aug 23, 2023"
                      title={post.title}
                      postUrl={`/post/${post.id}`}
                    />
                  ))
              ) : (
                <p className="text-gray-500 text-center text-base sm:text-lg">
                  No trending blogs available.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-2 sm:px-4 mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            New Technology
          </h2>
          <a
            href="/allposts"
            className="text-black hover:underline font-bold text-base sm:text-xl"
          >
            See All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-25">
          <TechnologyCard
            imageSrc={tech1}
            authorName="Alice Smith"
            description="Focuses on local pride and future impact"
          />
          <TechnologyCard
            imageSrc={tech2}
            authorName="Bob Lee"
            description="Highlights local relevance and smart solutions"
          />
          <TechnologyCard
            imageSrc={tech3}
            authorName="Carol King"
            description="Emphasizes user-centric design and practicality"
          />
          <TechnologyCard
            imageSrc={tech4}
            authorName="David Ray"
            description="Boldly proclaims the arrival of the new technology"
          />
        </div>
        
        {/* All Category Section */}
        <div className="container mx-auto px-2 sm:px-4 mb-16 border-t-4 border-[#2325364D] py-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>All Category</h2>
            
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
        <TestimonialsSection />
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            New Technology
          </h2>
          <a
            href="/allposts"
            className="text-black hover:underline font-bold text-base sm:text-xl"
          >
            See All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-25">
          <TechnologyCard
            imageSrc={tech1}
            authorName="Alice Smith"
            description="Focuses on local pride and future impact"
          />
          <TechnologyCard
            imageSrc={tech2}
            authorName="Bob Lee"
            description="Highlights local relevance and smart solutions"
          />
          <TechnologyCard
            imageSrc={tech3}
            authorName="Carol King"
            description="Emphasizes user-centric design and practicality"
          />
          <TechnologyCard
            imageSrc={tech4}
            authorName="David Ray"
            description="Boldly proclaims the arrival of the new technology"
          />
        </div>
      </div>
    </div>
  );
}
