import HeaderSection from '@components/sections/HeaderSection'
import FirstSection from '@components/sections/FirstSection'
import BrightAsYouSection from '@components/sections/BrightAsYouSection'
import MeetTeamSection from '@components/sections/MeetTeamSection'
import TestimonialsSection from '@components/sections/TestimonialsSection'
import FAQSection from '@components/sections/FAQSection'
import NewsletterSection from '@components/sections/NewsletterSection'
import FooterSection from '@components/sections/FooterSection'
import ProfessionalSection from '@components/sections/ProfessionalSection'

export default function Home () {
  return (
    <>
      <HeaderSection />
      <FirstSection />
      {/* <ProfessionalSection/> */}
      <div id='BAY'>
        <BrightAsYouSection />
      </div>
      <div className='bg-custom-light-pink p-3'>
        <TestimonialsSection />
        <MeetTeamSection />
      </div>
      <FAQSection />
      <NewsletterSection />
      <FooterSection />
    </>
  )
}
