'use client'
import { useState, useEffect } from 'react'
import blogs from 'data/blogs'
import HeaderSection from '@components/sections/HeaderSection'
import FooterSection from '@components/sections/FooterSection'
import NewsletterSection from '@components/sections/NewsletterSection'
import Image from 'next/image'
import { socialShare } from '@components/socialShare'

export default function BlogDetails({ params }) {
  const [countSparkles, setCountSparkles] = useState(0) // This will be dynamically fetched from the database
  const [isAnimating, setIsAnimating] = useState(false)

  const [slug, setSlug] = useState(null)
  const [currentUrl, setCurrentUrl] = useState('')
  const [showSocialLinks, setShowSocialLinks] = useState(false) // State to toggle social links

  const [toastMessage, setToastMessage] = useState('')
  const [activeBlogSlug, setActiveBlogSlug] = useState('')

  const handleCopyToClipboard = (text) => {
    let success = false;

    const isMobile = window.innerWidth <= 768;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          success = true;
        })
        .catch(() => {
          success = false;
        })
        .finally(() => {
          if (!isMobile) {
            setToastMessage(success ? "Copied to Clipboard!" : "Failed to copy to clipboard.");
            setTimeout(() => setToastMessage(""), 2000); 
          }
        });
    } else {
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
  
      if (!isMobile) {
        setToastMessage(success ? "Copied to Clipboard!" : "Failed to copy to clipboard.");
        setTimeout(() => setToastMessage(""), 2000); 
      }
    }
  
    setActiveBlogSlug(""); // Close the dropdown on mobile
  };

  // Set the slug directly from params
  useEffect(() => {
    setSlug(params.slug)
    setCurrentUrl(window.location.href) // Set current URL when the component is mounted
  }, [params])

  if (!slug) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <p className='text-2xl text-gray-700'>Loading...</p>
      </div>
    )
  }

  const handleClick = () => {
    setCountSparkles(c => c + 1)
    setIsAnimating(true)

    setTimeout(() => setIsAnimating(false), 500) // 500ms is the duration of the animation
  }

  const blog = blogs.find(blog => blog.slug === slug)

  if (!blog) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <p className='text-2xl text-gray-700'>Blog not found!</p>
      </div>
    )
  }

  const handleToggleSocialLinks = () => {
    setShowSocialLinks(prev => !prev)
  }

  return (
    <div className='bg-gray-100 min-h-screen'>
      <HeaderSection />
      <div className='container mx-auto px-4 py-5 lg:px-20'>
        <article className='bg-white rounded-lg shadow-lg px-8 py-8'>
          <header className='mb-6'>
            <div>
              <h2 className='md:text-lg text-gray-900 mb-4'>{blog.title}</h2>
            </div>
            <div className='flex items-center'>
              <Image
                src={blog.author.image}
                alt={blog.author.name}
                width='200'
                height='200'
                className=' w-8 md:w-12 md:h-12 rounded-full mr-4'
              />
              <div>
                <p className=' text-sm md:text-lg font-medium text-gray-800'>
                  {blog.author.name}
                </p>
                <p className='text-xs md:text-md text-gray-500'>
                  {blog.author.subtitle}
                </p>
              </div>
            </div>

            <div className=''>
              <div className='flex justify-between items-center mt-5 md:mt-10'>
                <div className=' flex items-center'>
                  <button
                    className={`m-auto p-2 mr-2 clap-button ${isAnimating ? 'animate' : ''}`}
                    onClick={handleClick}
                  >
                    <img
                      src='/images/sparkle-white.svg'
                      width='20'
                      height='20'
                      alt='Sparkle'
                      className='inline-block rotate-180'
                    />
                    <span className=' text-sm count ml-2 '>{countSparkles}</span>
                  </button>
                  <p>{blog.data_published}</p>
                </div>
                <div className=''>
                  {socialShare(showSocialLinks, handleToggleSocialLinks, currentUrl, blog.title, handleCopyToClipboard)}
                </div>
              </div>
            </div>
          </header>

          <hr className='mb-6 border-gray-300' />

          <div className='text-left leading-relaxed'>
            <div dangerouslySetInnerHTML={{ __html: blog.contentHTML }}></div>
          </div>
        </article>
      </div>
      <NewsletterSection passText={'Subscribe to our newsletter to never miss a new blog!'} defaultTitle={false} />
      <FooterSection />
    </div>
  )
}
