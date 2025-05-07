'use client';
import React, { useRef, useEffect, useState } from "react";

const professionals = [
  {
    id: 1,
    name: "Issac Paul",
    title: "Therapist",
    available: true,
    image: "/images/Professionals/Issac.jpg",
    link: "https://book.thebettertogether.in/issac-paul",
  },
  {
    id: 2,
    name: "Vasundhara Rathore",
    title: "Therapist",
    available: true,
    image: "/images/Professionals/Vasundhara.png",
    link: "https://book.thebettertogether.in/vasundhara-rathore",
  },
  {
    id: 3,
    name: "Amrutha Sandeep",
    title: "Therapist",
    available: true,
    image: "/images/Professionals/Amrutha.png",
    link: "https://book.thebettertogether.in/amrutha-sandeep",
  },
  {
    id: 4,
    name: "John Xavi",
    title: "Fitness Coach",
    available: true,
    image: "/images/Professionals/John.png",
    link: "https://book.thebettertogether.in/john-xavi",
  },
  {
    id: 5,
    name: "Dr U Vivek",
    title: "Psychiatrist",
    available: true,
    image: "/images/Professionals/vivek.png",
    link: "https://book.thebettertogether.in/dr-u-vivek",
  },
];

export default function ProfileSlider() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const startAutoScroll = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
          }
        }
      }, 2000);
    }
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => stopAutoScroll(); // cleanup on unmount
  }, [isHovered]);

  return (
    <div className="relative w-full py-8">
      <div className="max-w-screen-2xl mx-auto">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-6 py-4 scrollbar-hide"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {professionals.map((pro) => (
            <div
              key={pro.id}
              className="min-w-[250px] max-w-xs bg-white rounded-2xl shadow-xl p-4 flex-shrink-0 transition-transform hover:scale-105"
            >
              <img
                src={pro.image}
                alt={pro.name}
                className="w-40 h-40 object-cover rounded-full mb-4 mx-auto"
              />
              <h3 className="text-lg font-semibold text-center">{pro.name}</h3>
              <p className="text-sm text-gray-600 text-center">{pro.title}</p>
              <p
                className={`mt-2 text-sm font-medium text-center ${
                  pro.available ? "text-green-600" : "text-red-500"
                }`}
              >
                {pro.available ? "Available" : "Currently Unavailable"}
              </p>
              <button
                disabled={!pro.available}
                onClick={() => window.open(pro.link, "_blank")}
                className={`mt-4 w-full py-2 rounded-xl font-medium text-white ${
                  pro.available
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Book Call
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
