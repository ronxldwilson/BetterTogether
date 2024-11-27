import HeaderSection from "@components/sections/HeaderSection"
import FirstSection from "@components/sections/FirstSection"
import BrightAsYouSection from "@components/sections/BrightAsYouSection"
import MeetTeamSection from "@components/sections/MeetTeamSection"
import TestimonialsSection from "@components/sections/TestimonialsSection"
import FAQSection from "@components/sections/FAQSection"
import NewsletterSection from "@components/sections/NewsletterSection"
import ContactUsSection from "@components/sections/ContactUsSection"
import FooterSection from "@components/sections/FooterSection"


export default function Home() {
  return (
    <>
      <HeaderSection />
      <FirstSection />

      <BrightAsYouSection />

      <MeetTeamSection />

      <TestimonialsSection />

      <FAQSection />

      <NewsletterSection />

      <ContactUsSection />

      <FooterSection />
    </>
  );
}
