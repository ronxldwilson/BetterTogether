import { FaTwitter, FaLinkedinIn, FaLink,FaEllipsisH } from 'react-icons/fa'

export function socialShare(showSocialLinks, handleToggleSocialLinks, currentUrl, blogTitle, handleCopyToClipboard, blog) {
  return (
    <>
      <div className='flex justify-end relative'>
        <button className='rotate-90 shadow-none md:hidden bg-white text-gray-700' onClick={handleToggleSocialLinks}>
          <FaEllipsisH size={20} />
        </button>

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
              <FaLinkedinIn size={20} />
            </a>
            {/* <a
              onClick={() => handleCopyToClipboard(`${currentUrl}/${blog.slug}`)}
              className='text-gray-600 hover:text-purple-300 cursor-pointer'
            >
              <FaLink size={20} />
            </a> */}
          </div>
        )}

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
            <FaLinkedinIn size={20} />
          </a>
          {/* <a
            onClick={() => handleCopyToClipboard(`${currentUrl}/${blog.slug}`)}
            className='text-gray-600 hover:text-purple-300 cursor-pointer'
          >
            <FaLink size={20} />
          </a> */}
        </div>
      </div>
    </>
  )
}
