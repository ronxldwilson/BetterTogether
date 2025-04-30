'use client';
import React from "react";

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
  // {
  //   id: 6,
  //   name: "Gufrana Khanam",
  //   title: "Nutritionist",
  //   available: true,
  //   image: "/images/Professionals/default-pic.jpg",
  //   link: "https://book.thebettertogether.in",
  // },
  // Add more as needed
];

export default function ProfileSlider() {
  return (
    <div className="w-full overflow-hidden py-8 bg-gray-50">
      <div className="animate-scroll whitespace-nowrap flex gap-6 px-6">
        {professionals.concat(professionals).map((pro, index) => (
          <div
            key={`${pro.id}-${index}`}
            className="min-w-[250px] max-w-xs bg-white rounded-2xl shadow-md p-4 flex-shrink-0 transition-transform hover:scale-105"
          >
            <img
              src={pro.image}
              alt={pro.name}
              className="w-40 h-40 object-cover rounded-full mb-4 mx-auto"
            />
            <h3 className="text-lg font-semibold">{pro.name}</h3>
            <p className="text-sm text-gray-600">{pro.title}</p>
            <p
              className={`mt-2 text-sm font-medium ${
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
  );
}
