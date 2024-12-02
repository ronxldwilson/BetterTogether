import MeetTeamSection from "@components/sections/MeetTeamSection";
import HeaderSection from "@components/sections/HeaderSection";
import FooterSection from "@components/sections/FooterSection";

export default function About() {
  return (
    <div>
      <HeaderSection />
      <div className="text-center py-8 px-4">
        {/* Vision Section */}
        <div className="w-full flex flex-col items-center mb-8">
          <h2 className="mb-4">Our Vision</h2>
          <p className="p-3 px-6 xl:w-1/2 text-gray-700 leading-relaxed">
            At Better Together, we envision a world where mental well-being is
            nurtured through vibrant communities, where individuals support and
            learn from one another&apos;s experiences, fostering a culture of
            understanding and resilience.
          </p>
        </div>

        {/* Mission Section
        <div className="w-full flex flex-col items-center mb-8">
          <h2 className="mb-4">Our Mission</h2>
          <p className="p-3 px-6 xl:w-1/2 text-gray-700 leading-relaxed">
            Our mission is to create resiliency in communities rooted in mental
            health and well-being, fostering a transformative shift in how
            society perceives and addresses mental health.
          </p>
        </div> */}

        {/* Story Section */}
        <div className="w-full flex flex-col items-center">
          <h2 className="mb-4">Our Story</h2>
          <p className="p-3 px-6 xl:w-1/2 text-gray-700 leading-relaxed">
            Better Together began as an informal online gathering of a group of
            friends with the intention to support each other in navigating their
            personal struggles. It has now become a bigger dream that extends
            to more people, more stories, and more lives.
          </p>
          <p className="p-3 px-6 xl:w-1/2 text-gray-700 leading-relaxed">
            We believe in helping individuals struggling with their mental
            health tackle their challenges with the comfort and strength of a
            dedicated team and a nurturing community to bring about lasting
            change. This led to the idea of holistic mental health care focusing
            on various verticals like Nutrition, Fitness, Therapy, Psychiatric
            Care, and Community.
          </p>
        </div>
      </div>

      <MeetTeamSection />
      <FooterSection />
    </div>
  );
}
