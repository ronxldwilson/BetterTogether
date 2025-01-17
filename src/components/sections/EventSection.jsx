"use client";

import EventCard from "@components/EventCard";
import NewsletterSection from "./NewsletterSection";

export default function Events() {
  const Events = [
    {
      "title": "Thrive: Share Your Story, Find Your Community",
      "description": `Create a piece that represents your journey, then share it with a supportive community eager to connect & engage with your narrative. Use your artwork as a prop to open up, inspire others, and find meaningful connections in a space where creativity and stories come together.
    
    Let's build a community that thrives on sharing, understanding, and artistic expression!`,
      "onClick": "https://lu.ma/ns7uege7",
      "buttonText": "Register & Join Now!"
    }
    
  ];

  return (
    <div className="text-center">
      <h2 className="mb-6 text-4xl">Upcoming Events</h2>
      <div className="flex flex-col items-center justify-center gap-6 mb-6 px-6 pb-6">
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
      </div>
      {/* <InCaseOfNoEvents /> */}
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
