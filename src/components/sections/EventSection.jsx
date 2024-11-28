"use client";

import EventCard from "@components/EventCard";

export default function Events() {
    const Events = [
        {
            title: "Event 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum!",
            onClick: "/events/event-one",
            buttonText: "Register",
        },
        {
            title: "Events 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum!",
            onClick: "/events/event-two",
            buttonText: "Register",
        },
        {
            title: "Event 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum!",
            onClick: "/events/event-three",
            buttonText: "Register",
        },
    ];

    return (
        <div className="text-center">

            <h1 className="mb-6">Upcoming Events</h1>
            <div className="flex flex-col items-center justify-center gap-6 px-6">
                {Events.map((Events, index) => (
                    <EventCard
                        key={index}
                        title={Events.title}
                        description={Events.description}
                        onClick={Events.onClick}
                        buttonText={Events.buttonText}
                        className="w-full 2xl:max-w-[50%]"
                    />
                ))}
            </div>
        </div>
    );
}
