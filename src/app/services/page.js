"use client";

import HeaderSection from "@components/sections/HeaderSection";
import ServiceCard from "@components/ServiceCard";
import FooterSection from "@components/sections/FooterSection";

export default function Services() {
    const services = [
        {
            title: "Bright As You",
            description: "The BAY program is a 6 week long program that is based on 5 important pillars and offers a holistic wellness plan to empower you for the journey ahead",
            onClick: "/services/BAY",
            buttonText: "Know More",
        },
        {
            title: "Events",
            description: "We regularly host community events, both free and paid, designed to help you connect with others and remind you that you are not alone on this journey",
            onClick: "/services/events",
            buttonText: "Register Now ",
        },
        {
            title: "Enterprise",
            description: "We offer custom solutions for enterprises, to inquire more about the services we offer reach out to us via mail at queries.bettertogether@gmail.com",
            onClick: "/contact",
            buttonText: "Contact Us",
        },
    ];

    return (
        <div className="">
            <HeaderSection />

            <h2 className=" text-4xl mb-4 text-center">Services</h2>
            <div className="flex flex-col items-center justify-center gap-6 px-6 pb-6">
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
