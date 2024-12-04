"use client";
import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline"; // Ensure to install Heroicons

function Accordian({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-xs mx-auto">
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index  }
                        className="border border-gray-300 rounded-xl shadow-md"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full p-4 text-lg flex items-center justify-between text-left text-black  bg-custom-mint hover:bg-gray-200 rounded-lg "
                        >
                            <span>{faq.heading}</span>
                            {openIndex === index ? (
                                <ChevronUpIcon className="h-5 w-5 text-gray-700" />
                            ) : (
                                <ChevronDownIcon className="h-5 w-5 text-gray-700" />
                            )}
                        </button>
                        <div
                            className={`overflow-hidden transition-all rounded-lg duration-300 ${
                                openIndex === index ? "max-h-56 p-4" : "max-h-0"
                            } bg-custom-wheat text-gray-700`}
                        >
                            <p>{faq.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accordian;
