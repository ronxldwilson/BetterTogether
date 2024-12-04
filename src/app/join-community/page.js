import HeaderSection from '@components/sections/HeaderSection'
import FooterSection from '@components/sections/FooterSection'
import Image from 'next/image'
import { FaInstagram, FaWhatsapp,FaLinkedin } from 'react-icons/fa'

export default function JoinCommunity () {
  return (
    <div className=''>
      <HeaderSection />
      <div className='text-center py-4'>
        <h1 className='py-5 text-2xl font-bold'>Join Better Together</h1>
        <p className='mb-5 text-lg'>Follow us on our socials</p>
        <div className='flex justify-center space-x-4 mb-8'>
          <a
            href='https://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
          >
            <FaInstagram size={30} className='hover:text-pink-500' />
          </a>

          <a
            href='https://www.linkedin.com/company/better-together-wellness/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
          >
            <FaLinkedin size={30} className='hover:text-blue-600' />
          </a>
          
          <a
            href='https://chat.whatsapp.com/EucNi5Yunol5g5fycsIvlu'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='WhatsApp'
          >
            <FaWhatsapp size={30} className='hover:text-green-500' />
          </a>
        </div>
        <a
          href='https://chat.whatsapp.com/EucNi5Yunol5g5fycsIvlu'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='WhatsApp'
        >
          <div className='flex justify-center'>
            <Image
              src='/images/WAQRcode.png'
              alt='Community Image'
              className='rounded-lg w-[80%] sm:max-w-md md:max-w-lg lg:max-w-lg'
              width={400}
              height={400}
            />
          </div>
        </a>
      </div>
      <FooterSection />
    </div>
  )
}
