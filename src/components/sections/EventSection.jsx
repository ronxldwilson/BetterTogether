"use client";

import EventCard from "@components/EventCard";
import NewsletterSection from "./NewsletterSection";

export default function Events() {
  const Events = [
    {
      title: "Event 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum!",
      onClick: "/events/event-one",
      buttonText: "Register",
    },
    {
      title: "Events 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum!",
      onClick: "/events/event-two",
      buttonText: "Register",
    },
    {
      title: "Event 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum!",
      onClick: "/events/event-three",
      buttonText: "Register",
    },
  ];

  return (
    <div className="text-center">
      <h2 className="mb-6 text-4xl">Upcoming Events</h2>
      {/* <div className="flex flex-col items-center justify-center gap-6 mb-6 px-6 pb-6">
        {Events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            onClick={event.onClick}
            buttonText={event.buttonText}
            className="w-full 2xl:max-w-[50%]"
          />
        ))}
      </div> */}
      <InCaseOfNoEvents />
    </div>
  );
}

function InCaseOfNoEvents() {
  const passText =
    "We don't have any upcoming events. Subscribe to our Newsletter to be notified first about our any upcoming events.";
  return (
    <div>
      <NewsletterSection passText={passText} defaultTitle={false}/>
    </div>
  );
}
