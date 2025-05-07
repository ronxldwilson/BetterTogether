import Head from 'next/head'
import HeaderSection from '@components/sections/HeaderSection'
import FirstSection from '@components/sections/FirstSection'
import BrightAsYouSection from '@components/sections/BrightAsYouSection'
import MeetTeamSection from '@components/sections/MeetTeamSection'
import TestimonialsSection from '@components/sections/TestimonialsSection'
import FAQSection from '@components/sections/FAQSection'
import NewsletterSection from '@components/sections/NewsletterSection'
import FooterSection from '@components/sections/FooterSection'
// import ProfessionalSection from '@components/sections/ProfessionalSection'
import ProfileSlider from '../components/ProfileSlider'
import PackagesInfo from '../components/PackagesInfo'


export default function Home () {
  return (
    <>
      <Head>
        <title>Better Together – Therapy, Fitness, Nutrition & Psychiatric Care in India</title>
        <meta
          name='description'
          content='Better Together offers expert therapy, fitness coaching, nutrition guidance, and psychiatric care tailored for individuals in India. Prioritize your mental and physical wellness with our holistic support.'
        />
        <meta
          name='keywords'
          content='therapy in India, online therapy, fitness coaching, nutritionist services, psychiatric care, Better Together, mental health India, wellness platform, fitness and mental health, holistic care, nutrition plans, therapy online'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
      </Head>

      <HeaderSection />
      <FirstSection />
      {/* <ProfessionalSection /> */}
      <ProfileSlider />
      <PackagesInfo/>
      
      {/* <div id='BAY'>
        <BrightAsYouSection />
      </div> */}

      <div className='bg-custom-light-pink p-3'>
        <TestimonialsSection />
        <MeetTeamSection />
      </div>
      <FAQSection />
      <NewsletterSection passText={"Join our Better Together newsletter, curated insights, mental wellness tips, and stories that help you build a healthier, more balanced life."}/>
      <FooterSection />
    </>
  )
}
