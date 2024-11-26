"use client";
import React, { useState } from "react";

function Accordian({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-xs mx-auto mt-8">
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-xl shadow-md"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full p-4 text-left font-medium bg-custom-mint hover:bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            {faq.heading}
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ${
                                openIndex === index ? "max-h-40 p-4" : "max-h-0"
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
