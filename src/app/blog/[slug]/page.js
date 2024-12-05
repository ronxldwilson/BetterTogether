'use client'
import { useState, useEffect } from 'react'
import blogs from 'data/blogs'
import HeaderSection from '@components/sections/HeaderSection'
import FooterSection from '@components/sections/FooterSection'
import Image from 'next/image'
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEllipsisH
} from 'react-icons/fa' // Import icons

export default function BlogDetails ({ params }) {
  const [countSparkles, setCountSparkles] = useState(0) // This will be dynamically fetched from the database
  const [isAnimating, setIsAnimating] = useState(false)

  const [slug, setSlug] = useState(null)

  const [currentUrl, setCurrentUrl] = useState('')
  const [showSocialLinks, setShowSocialLinks] = useState(false) // State to toggle social links

  // Set the slug directly from params
  useEffect(() => {
    setSlug(params.slug)
    setCurrentUrl(window.location.href) // Set current URL when the component is mounted
  }, [params])

  // Wait for params to load
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

    // Remove the animation class after the animation completes
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
    <div className='min-h-screen'>
      <HeaderSection />
      <div className='container mx-auto px-4 py-10 lg:px-20'>
        <article className='bg-white rounded-lg shadow-lg p-8'>
          <header className='mb-6'>
            <div>
              <h2 className='text-gray-900 mb-4'>{blog.title}</h2>
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
                <p className='text-xs md:text-md text-gray-500'>{blog.author.subtitle}</p>
              </div>
            </div>

            <div className=''>
              <div className='flex justify-between items-center mt-5 md:mt-10'>
                <div className='items-center'>
                  <button
                    className={`m-auto p-[20px] clap-button ${
                      isAnimating ? 'animate' : ''
                    }`}
                    onClick={handleClick}
                  >
                    <img
                      src='/images/sparkle-white.svg'
                      width='20'  
                      height='20'
                      alt='Sparkle'
                      className='inline-block rotate-180'
                    />
                    <span className=' text-sm count ml-2'>{countSparkles}</span>
                  </button>
                </div>
                <div className='p-[20px]'>
                  {socialShare(
                    showSocialLinks,
                    handleToggleSocialLinks,
                    currentUrl,
                    blog.title
                  )}
                </div>
              </div>
            </div>
          </header>

          <hr className='mb-6 border-gray-300' />
          <div className='text-left text-gray-800 leading-relaxed'>
            <p>{blog.content}</p>
          </div>
        </article>
      </div>
      <FooterSection />
    </div>
  )
}

function socialShare (
  showSocialLinks,
  handleToggleSocialLinks,
  currentUrl,
  blogTitle
) {
  return (
    <>
      <div className='flex justify-end relative'>
        <button
          className='rotate-90 md:hidden bg-white text-gray-700'
          onClick={handleToggleSocialLinks}
        >
          <FaEllipsisH size={20} />
        </button>

        {/* Show social links if toggled */}
        {showSocialLinks && (
          <div className='absolute top-full flex right-0 bg-white shadow-md rounded-md p-4 space-x-4 md:static md:flex md:space-x-3 md:p-0'>
            <a
              href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${blogTitle}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:text-blue-600'
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-700 hover:text-blue-800'
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${blogTitle}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-700 hover:text-blue-800'
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href={`https://www.instagram.com/?url=${currentUrl}`} // Open Instagram's website to share the URL (manual post sharing)
              target='_blank'
              rel='noopener noreferrer'
              className='text-purple-600 hover:text-purple-700'
            >
              <FaInstagram size={20} />
            </a>
          </div>
        )}

        {/* For larger screens, display social links directly */}
        <div className='hidden md:flex space-x-3'>
          <a
            href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${blogTitle}`}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:text-blue-600'
          >
            <FaTwitter size={20} />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-700 hover:text-blue-800'
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${blogTitle}`}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-700 hover:text-blue-800'
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href={`https://www.instagram.com/?url=${currentUrl}`} // Open Instagram's website to share the URL (manual post sharing)
            target='_blank'
            rel='noopener noreferrer'
            className='text-purple-600 hover:text-purple-700'
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </>
  )
}
