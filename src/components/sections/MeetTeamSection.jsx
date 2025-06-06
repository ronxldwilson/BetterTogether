import ProfileCard from "@components/FounderCard";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram,FaGithub } from "react-icons/fa";

const MeetTeamSection = () => {
  return (
    <div>
      <div className="text-justify">
        <h2 className="text-center">Meet the Team</h2>

        <div className="w-full flex justify-center">
          <p className="pt-3 pb-8 px-6 xl:w-1/2 text-justify leading-relaxed">
          We rally behind the name of our organization. We are here to break the stigma around mental health and provide individuals with tools and support on their healing journey. 
          </p>
        </div>

      </div>
      <div className="flex flex-wrap justify-center gap-4 pb-8 sm:gap-6">
        <ProfileCard
          image="/images/Naomi.jpg"
          name="Naomi"
          title="Founder & CEO"
          icons={[
            { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/naomi-susan/" },
            { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/naomi_susan_" },
          ]}
          />
        <ProfileCard
          image="/images/Issac.jpg"
          name="Issac"
          title="Director & COO"
          icons={[
            { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/issac-paul-151096/" },
            { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/izach.paul/" },
          ]}
          />
        <ProfileCard
          image="/images/Ron.jpg"
          name="Ron"
          title="Co-Founder & CTO"
          icons={[

            { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/ronxldwilson" },
            { icon: <FaTwitter size={20} />, link: "https://www.twitter.com/ronxldwilson" },
            // { icon: <FaGithub size={20} />, link: "https://www.github.com/ronxldwilson" },
            { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/ronxldwilson" },
          ]}
        />
      </div>

    </div>
  )

};

export default MeetTeamSection;
