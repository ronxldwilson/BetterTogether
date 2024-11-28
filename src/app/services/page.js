"use client";

import HeaderSection from "@components/sections/HeaderSection";
import ServiceCard from "@components/ServiceCard";
import FooterSection from "@components/sections/FooterSection";

export default function Services() {
    const services = [
        {
            title: "Bright As You",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum!",
            onClick: "/services/BAY"
        },
        {
            title: "Events",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum!",
            onClick: "/services/events"
        },
        {
            title: "Enterprise",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum!",
            onClick: "/services/enterprise"
        },
    ];

    return (
        <div className="text-center">
            <HeaderSection />

            <h1 className="mb-6">Services</h1>
            <div className="flex flex-col items-center justify-center gap-6 px-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        onClick={service.onClick}
                        className="w-full 2xl:max-w-[50%]"
                    />
                ))}
            </div>
            <FooterSection/>
        </div>
    );
}
