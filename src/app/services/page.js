"use client";

import HeaderSection from "@components/sections/HeaderSection";
import ServiceCard from "@components/ServiceCard";
import FooterSection from "@components/sections/FooterSection";

export default function Services() {
    const services = [
        {
            title: "Bright As You",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum!",
            onClick: "/services/BAY",
            buttonText: "Know More",
        },
        {
            title: "Events",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum!",
            onClick: "/services/events",
            buttonText: "Know More",
        },
        {
            title: "Enterprise",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum!",
            onClick: "",
            buttonText: "Coming Soon",
        },
    ];

    return (
        <div className="">
            <HeaderSection />

            <h2 className=" text-4xl mb-6 text-center">Services</h2>
            <div className="flex flex-col items-center justify-center gap-6 px-6 py-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        buttonText={service.buttonText}
                        onClick={service.onClick}
                        className="w-full 2xl:max-w-[50%]"
                    />
                ))}
            </div>
            <FooterSection/>
        </div>
    );
}
