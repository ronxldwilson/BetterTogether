import HeaderSection from '@components/sections/HeaderSection'
import FooterSection from '@components/sections/FooterSection'
import Image from 'next/image'
import OrgSocialLinks from '@components/OrgSocialLinks'
import Link from 'next/link'

export default function JoinCommunity () {
  return (
    <div className=''>
      <HeaderSection />
      <div className='text-center py-4'>
        <h1 className='py-5 text-2xl font-bold'>Join Better Together</h1>
        <p className='mb-5 text-lg'>Follow us on our socials</p>

        <div className='flex justify-center mb-5'>
          <div >
            <OrgSocialLinks />
          </div>
        </div>

        <Link
          href='https://www.instagram.com/thebettertogether.in'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='WhatsApp'
        >
          <div className='flex justify-center'>
            <Image
              src='/images/INQR.jpg'
              alt='Community Image'
              className='rounded-2xl w-[80%] sm:max-w-md md:max-w-lg lg:max-w-lg'
              width={300}
              height={300}
            />
          </div>
        </Link>
      </div>
      <FooterSection />
    </div>
  )
}
