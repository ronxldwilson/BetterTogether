"use client";
import { useState, useEffect } from "react";
import blogs from "data/blogs";
import HeaderSection from "@components/sections/HeaderSection";
import FooterSection from "@components/sections/FooterSection";
import Image from "next/image";

export default function BlogDetails({ params }) {
  const [slug, setSlug] = useState(null);

  // Unwrap the params using useEffect
  useEffect(() => {
    async function getParams() {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    }
    getParams();
  }, [params]);

  // Wait for params to load
  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-2xl text-gray-700">Loading...</p>
      </div>
    );
  }

  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-2xl text-gray-700">Blog not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HeaderSection />
      <div className="container mx-auto px-4 py-10 lg:px-20">
        <article className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-6">
            <h2 className="text-gray-900 mb-4">{blog.title}</h2>
            <div className="flex items-center">
              <Image
                src={blog.author.image}
                alt={blog.author.name}
                width="200"
                height="200"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-lg font-medium text-gray-800">{blog.author.name}</p>
                <p className="text-sm text-gray-500">{blog.author.subtitle}</p> {/* Display Subtitle */}
              </div>
            </div>
          </header>
          <hr className="mb-6 border-gray-300" />
          <div className="text-justify text-gray-800 px-20 leading-relaxed">
            <p>{blog.content}</p>
          </div>
        </article>
      </div>
      <FooterSection />
    </div>
  );
}
