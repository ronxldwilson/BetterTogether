"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaTwitter,
  FaLinkedinIn,
  FaLink,
  FaEllipsisH
} from "react-icons/fa";
import blogs from "@data/blogs";
import HeaderSection from "@components/sections/HeaderSection";
import FooterSection from "@components/sections/FooterSection";

export default function BlogList() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [activeBlogSlug, setActiveBlogSlug] = useState(""); // Track which blog's social links are open
  const [toastMessage, setToastMessage] = useState(""); // Toast message state

  // Set the current URL on the client-side only
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleToggleSocialLinks = (slug) => {
    setActiveBlogSlug(activeBlogSlug === slug ? "" : slug); // Toggle the active blog's social links
  };

  const handleCopyToClipboard = (text) => {
    let success = false;
  
    // Check for mobile devices based on screen width (adjust the threshold as needed)
    const isMobile = window.innerWidth <= 768; // or use another logic to determine mobile
  
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Use the Clipboard API (modern)
      navigator.clipboard
        .writeText(text)
        .then(() => {
          success = true;
        })
        .catch(() => {
          success = false;
        })
        .finally(() => {
          // Only set the toast message if it's not a mobile device
          if (!isMobile) {
            setToastMessage(success ? "Copied to Clipboard!" : "Failed to copy to clipboard.");
            setTimeout(() => setToastMessage(""), 2000); // Hide the toast after 2 seconds
          }
        });
    } else {
      // Fallback to document.execCommand for unsupported browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        success = true;
      } catch (err) {
        success = false;
      }
      document.body.removeChild(textarea);
  
      // Only set the toast message if it's not a mobile device
      if (!isMobile) {
        setToastMessage(success ? "Copied to Clipboard!" : "Failed to copy to clipboard.");
        setTimeout(() => setToastMessage(""), 2000); // Hide the toast after 2 seconds
      }
    }
  
    setActiveBlogSlug(""); // Close the dropdown on mobile
  };
  
  
  return (
    <div className="bg-gray-100 min-h-screen relative">
      <HeaderSection />
      <main className="container md:w-[60%] mx-auto px-4 py-2 pb-8">
        <h2 className="mb-5 text-center text-2xl">Blog List</h2>
        <div className="flex flex-col gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col p-2 md:flex-row"
            >
              {/* Image Section */}
              {blog.image && (
                <div className="md:w-1/3">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
                  />
                </div>
              )}

              {/* Content Section */}
              <div className="flex-1 px-6 py-2 flex flex-col justify-between">
                <div>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="hover:text-blue-500 cursor-pointer"
                  >
                    <h2 className="md:text-lg text-gray-900 mb-4">{blog.title}</h2>
                    <p className="text-gray-700 text-sm mb-6">
                      {blog.content.substring(0, 140)}
                      <span className="md:hidden">...</span>
                      <span className="hidden md:inline">
                        {blog.content.substring(50, 250)}{" "}
                      </span>
                    </p>
                  </Link>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={blog.author.image}
                      alt={blog.author.name}
                      width={200}
                      height={200}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-gray-900 text-sm font-medium">
                        {blog.author.name}
                      </p>
                      <p className="text-gray-900 text-sm">
                        {blog.author.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Social Share Section */}
                  <div className="flex justify-end relative">
                    {currentUrl && (
                      <>
                        {/* For smaller screens, show ellipsis */}
                        <button
                          className="rotate-90 md:hidden shadow-none bg-white text-gray-700"
                          onClick={() => handleToggleSocialLinks(blog.slug)}
                        >
                          <FaEllipsisH size={20} />
                        </button>

                        {/* Social Links (Dropdown for mobile) */}
                        {activeBlogSlug === blog.slug && (
                          <div className="absolute top-full flex right-0 bg-white shadow-md rounded-md p-4 space-x-4 md:static md:flex md:space-x-3 md:p-0">
                            <a
                              href={`https://twitter.com/intent/tweet?url=${currentUrl}/${blog.slug}&text=${blog.title}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-600"
                            >
                              <FaTwitter size={20} />
                            </a>
                            <a
                              href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}/${blog.slug}&title=${blog.title}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:text-blue-800"
                            >
                              <FaLinkedinIn size={20} />
                            </a>
                            <a
                              onClick={() =>
                                handleCopyToClipboard(
                                  `${currentUrl}/${blog.slug}`,
                                  blog.slug
                                )
                              }
                              className="text-gray-600 hover:text-purple-300 cursor-pointer"
                            >
                              <FaLink size={20} />
                            </a>
                          </div>
                        )}

                        {/* For larger screens, display social links directly */}
                        <div className="hidden md:flex space-x-3">
                          <a
                            href={`https://twitter.com/intent/tweet?url=${currentUrl}/${blog.slug}&text=${blog.title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                          >
                            <FaTwitter size={20} />
                          </a>
                          <a
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}/${blog.slug}&title=${blog.title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-800"
                          >
                            <FaLinkedinIn size={20} />
                          </a>
                          <a
                            onClick={() =>
                              handleCopyToClipboard(
                                `${currentUrl}/${blog.slug}`,
                                blog.slug
                              )
                            }
                            className="text-gray-600 hover:text-purple-300 cursor-pointer"
                          >
                            <FaLink size={20} />
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
      </main>

      {/* Toast Message */}
      {toastMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-2 px-4 rounded shadow-md">
          {toastMessage}
        </div>
      )}

      <FooterSection />
    </div>
  );
}
