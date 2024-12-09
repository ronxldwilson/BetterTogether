import Link from 'next/link';
import { FaTwitter, FaLinkedinIn, FaLink, FaEllipsisH } from 'react-icons/fa';

export function socialShare({
  showSocialLinks,
  handleToggleSocialLinks,
  currentUrl = '',
  blogTitle = '',
  handleCopyToClipboard,
  blog = {}
}) {
  const { slug = '', title = '' } = blog; // Safely access blog properties

  return (
    <div className="flex justify-end relative">
      {/* Toggle Button */}
      <button
        className="rotate-90 shadow-none md:hidden bg-white text-gray-700"
        onClick={handleToggleSocialLinks}
        aria-label="Toggle social share links"
      >
        <FaEllipsisH size={20} />
      </button>

      {/* Social Links - Mobile View */}
      {showSocialLinks && (
        <div className="absolute top-full flex right-0 bg-white shadow-md rounded-md p-4 space-x-4 md:static md:flex md:space-x-3 md:p-0">
          <SocialIcon
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(blogTitle)}`}
            ariaLabel="Share on Twitter"
            color="text-blue-500 hover:text-blue-600"
            icon={<FaTwitter size={20} />}
          />
          <SocialIcon
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}/${slug}&title=${encodeURIComponent(title)}`}
            ariaLabel="Share on LinkedIn"
            color="text-blue-700 hover:text-blue-800"
            icon={<FaLinkedinIn size={20} />}
          />
          {/* <button
            onClick={() => handleCopyToClipboard && handleCopyToClipboard(`${currentUrl}/${slug}`)}
            className="text-gray-600 hover:text-purple-300 bg-white cursor-pointer"
            aria-label="Copy link to clipboard"
          >
            <FaLink size={20} />
          </button> */}
        </div>
      )}

      {/* Social Links - Desktop View */}
      <div className="hidden md:flex space-x-3">
        <SocialIcon
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(blogTitle)}`}
          ariaLabel="Share on Twitter"
          color="text-blue-500 hover:text-blue-600"
          icon={<FaTwitter size={20} />}
        />
        <SocialIcon
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}/${slug}&title=${encodeURIComponent(title)}`}
          ariaLabel="Share on LinkedIn"
          color="text-blue-700 hover:text-blue-800"
          icon={<FaLinkedinIn size={20} />}
        />
        {/* <button
          onClick={() => handleCopyToClipboard && handleCopyToClipboard(`${currentUrl}/${slug}`)}
          className="text-gray-600 hover:text-purple-300 bg-white p-0 m-0 shadow-none cursor-pointer"
          aria-label="Copy link to clipboard"
        >
          <FaLink size={20} />
        </button> */}
      </div>
    </div>
  );
}

// Reusable Social Icon Component
function SocialIcon({ href, ariaLabel, color, icon }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={color}
      aria-label={ariaLabel}
    >
      {icon}
    </Link>
  );
}
