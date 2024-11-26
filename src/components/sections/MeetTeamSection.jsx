import ProfileCard from "@components/FounderCard";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const MeetTeamSection = () => {
    return (
        <div>
            <div className="text-center">
                <h1>Meet the Team</h1>
                <p>We rally behind the name of our organization. We are here to break the stigma around mental health and provide individuals with tools and support on their healing journey. </p>

            </div>
            <div className="flex justify-center">

                <ProfileCard
                    image="/images/Naomi.png"
                    name="Naomi"
                    title="Founder & CEO"
                    icons={[
                        { icon: <FaFacebook size={20} />, link: "https://www.facebook.com" },
                        { icon: <FaTwitter size={20} />, link: "https://www.twitter.com" },
                        { icon: <FaInstagram size={20} />, link: "https://www.instagram.com" },
                    ]}
                />
                <ProfileCard
                    image="/images/Issac.png"
                    name="Issac"
                    title="Director & COO"
                    icons={[
                        { icon: <FaFacebook size={20} />, link: "https://www.facebook.com" },
                        { icon: <FaTwitter size={20} />, link: "https://www.twitter.com" },
                        { icon: <FaInstagram size={20} />, link: "https://www.instagram.com" },
                    ]}
                />
                <ProfileCard
                    image="/images/Ron.png"
                    name="Ron"
                    title="Co-Founder & CTO"
                    icons={[
                        { icon: <FaFacebook size={20} />, link: "https://www.facebook.com" },
                        { icon: <FaTwitter size={20} />, link: "https://www.twitter.com" },
                        { icon: <FaInstagram size={20} />, link: "https://www.instagram.com" },
                    ]}
                />

            </div>
        </div>
    )

};

export default MeetTeamSection;
