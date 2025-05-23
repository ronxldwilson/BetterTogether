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
                        <div className="drop-shadow-sm">

                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full p-4 flex items-center justify-between bg-[#e6f9fc] hover:bg-[#d6f0f5]`}
                            >
                                <span className="text-base text-black ">{faq.heading}</span>
                                {openIndex === index ? (
                                    <MinusIcon className="bg-white rounded-full w-6 text-black" />
                                ) : (
                                    <PlusIcon className=" bg-custom-green rounded-full w-6 text-white " />
                                )}
                            </button>
                            <div
                                className={`transition-all duration-150 ${openIndex === index ? "max-h-96 px-3" : "max-h-0"
                                    }   text-gray-800 max-w`}
                            >
                                <div className="flex ">
                                    <div className="bg-red-50 p-6 mx-2  drop-shadow-lg rounded-tl-none rounded-tr-none rounded-2xl ">
                                        <p
                                            className="text-base"
                                            dangerouslySetInnerHTML={{ __html: faq.content }}
                                        />

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
