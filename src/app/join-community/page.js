import HeaderSection from "@components/sections/HeaderSection";
import FooterSection from "@components/sections/FooterSection";

import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function JoinCommunity() {
    return (
        <div className="">
            <HeaderSection />
            <div className="text-center py-4">
                <h1 className="py-5 text-2xl font-bold">Join Better Together</h1>
                <p className="mb-5 text-lg">Follow us on our socials</p>
                <div className="flex justify-center space-x-4 mb-8">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook size={30} className="hover:text-blue-600" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter size={30} className="hover:text-blue-400" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram size={30} className="hover:text-pink-500" />
                    </a>
                    <a href="https://wa.me/<YOUR_PHONE_NUMBER>" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <FaWhatsapp size={30} className="hover:text-green-500" />
                    </a>
                </div>
                <div className="flex justify-center">
                    <img
                        src="/WAQRcode.png"
                        alt="Community Image"
                        className="rounded-lg w-[80%] sm:max-w-md md:max-w-lg lg:max-w-lg"
                    />
                </div>
            </div>
            <FooterSection />
        </div>
    );
}
