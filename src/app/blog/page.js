"use client";
import Link from "next/link";
import blogs from "../../../data/blogs";
import HeaderSection from "@components/sections/HeaderSection";
import FooterSection from "@components/sections/FooterSection";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaEllipsisH } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function BlogList() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [activeBlogSlug, setActiveBlogSlug] = useState(""); // Track which blog's social links are open

  // Set the current URL on the client-side only
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleToggleSocialLinks = (slug) => {
    setActiveBlogSlug(activeBlogSlug === slug ? "" : slug); // Toggle the active blog's social links
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderSection />
      <main className="container mx-auto px-4 py-10">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
          Blog List
        </h1>
        <div className="flex flex-col gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col p-2 md:flex-row"
            >
              {/* Image Section */}
              {blog.image && (
                <div className="md:w-1/3">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
                  />
                </div>
              )}

              {/* Content Section */}
              <div className="flex-1 px-6 py-2 flex flex-col justify-between">
                <div>
                  <Link href={`/blog/${blog.slug}`} className="hover:text-blue-500 cursor-pointer">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      {blog.title}
                    </h2>
                    {/* Show 125 characters on smaller devices and 250 on larger devices */}
                    <p className="text-gray-700 text-sm mb-6">
                      {blog.content.substring(0, 125)}{/* Show 50 characters on small devices */}
                      <span className="md:hidden">...</span>
                      <span className="hidden md:inline">
                        {blog.content.substring(50, 250)} {/* Show up to 250 characters on larger devices */}
                      </span>F
                    </p>
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={blog.author.image}
                      alt={blog.author.name}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-gray-900 font-medium">{blog.author.name}</p>
                      <p className="text-gray-500  text-sm">{blog.author.subtitle}</p> {/* Display Subtitle */}
                    </div>


                  </div>

                  {/* Social Share Section */}
                  <div className="flex justify-end  relative">
                    {currentUrl && (
                      <>
                        {/* For smaller screens, show ellipsis */}
                        <button
                          className="rotate-90 md:hidden bg-white text-gray-700"
                          onClick={() => handleToggleSocialLinks(blog.slug)}
                        >
                          <FaEllipsisH size={20} />
                        </button>

                        {/* Social Links (Dropdown for mobile) */}
                        {activeBlogSlug === blog.slug && (
                          <div className="absolute top-full flex right-0 bg-white shadow-md rounded-md p-4 space-x-4 md:static md:flex md:space-x-3 md:p-0">
                            <a
                              href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${blog.title}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-600"
                            >
                              <FaTwitter size={20} />
                            </a>
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:text-blue-800"
                            >
                              <FaFacebookF size={20} />
                            </a>
                            <a
                              href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${blog.title}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:text-blue-800"
                            >
                              <FaLinkedinIn size={20} />
                            </a>
                            <a
                              href={`https://www.instagram.com/?url=${currentUrl}`}  // Open Instagram's website to share the URL (manual post sharing)
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-700"
                            >
                              <FaInstagram size={20} />
                            </a>
                          </div>
                        )}

                        {/* For larger screens, display social links directly */}
                        <div className="hidden md:flex space-x-3">
                          <a
                            href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${blog.title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                          >
                            <FaTwitter size={20} />
                          </a>
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-800"
                          >
                            <FaFacebookF size={20} />
                          </a>
                          <a
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${blog.title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-800"
                          >
                            <FaLinkedinIn size={20} />
                          </a>
                          <a
                            href={`https://www.instagram.com/?url=${currentUrl}`}  // Open Instagram's website to share the URL (manual post sharing)
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-700"
                          >
                            <FaInstagram size={20} />
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main >
      <FooterSection />
    </div >
  );
}
