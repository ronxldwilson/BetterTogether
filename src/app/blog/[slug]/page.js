"use client"
import blogs from "data/blogs";
import HeaderSection from "@components/sections/HeaderSection";
import FooterSection from "@components/sections/FooterSection";
import { useEffect } from "react";

export default function BlogDetails({ params }) {
  const { slug } = params;

  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-2xl text-gray-700">Blog not found!</p>
      </div>
    );
  }

  useEffect(() => {
    // Simulate view increment
    const storedViews = localStorage.getItem(slug);
    if (!storedViews) {
      localStorage.setItem(slug, "1");
    } else {
      localStorage.setItem(slug, (parseInt(storedViews) + 1).toString());
    }
  }, [slug]);

  return (
    <div className="min-h-screen">
      <HeaderSection />
      <div className="container mx-auto px-4 py-10 lg:px-20">
        <article className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
            <div className="flex items-center">
              <img
                src={blog.author.image}
                alt={blog.author.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-lg font-medium text-gray-800">{blog.author.name}</p>
                <p className="text-sm text-gray-500">{blog.author.subtitle}</p>  {/* Display Subtitle */}
                {/* <p className="text-sm text-gray-500">Views: {localStorage.getItem(slug)}</p> Show updated views */}
              </div>
            </div>
          </header>
          <hr className="mb-6 border-gray-300" />
          <div className="text-gray-800 text-lg leading-relaxed">
            <p>{blog.content}</p>
          </div>
        </article>
      </div>
      <FooterSection />
    </div>
  );
}
