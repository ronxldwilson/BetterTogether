"use client";
import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline"; // Ensure to install Heroicons

function Accordion({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-sm mx-auto">
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="overflow-hidden"
                    >
                        <div className="drop-shadow-lg"> 

                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full p-4 flex items-center justify-between bg-[#e6f9fc] hover:bg-[#d6f0f5]`}
                            >
                                <span className="text-xl text-black mx-3">{faq.heading}</span>
                                {openIndex === index ? (
                                    <MinusIcon className="h-5 w-5 text-gray-700" />
                                ) : (
                                    <PlusIcon className="h-5 w-5 text-gray-700" />
                                )}
                            </button>
                            <div
                                className={`transition-all duration-300 ${openIndex === index ? "max-h-96 px-3" : "max-h-0"
                                    }   text-gray-800 max-w`}
                            >
                                <div className="flex ">
                                    <div className="bg-[#fcecc7] p-6 mx-5 drop-shadow-lg rounded-tl-none rounded-tr-none rounded-2xl ">
                                        <p className="text-xl">{faq.content}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accordion;
