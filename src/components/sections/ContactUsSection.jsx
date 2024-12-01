"use client"
import { useState } from "react";
import DropdownInput from "@components/DropdownInput";


const ContactUsSection = () => {
    const optionsList = ["I am a registered client and I need support","I have a question about the service", "I am a therapist interested in joining", "I have a business-related inquiry", "I'm interested in Better Together for my organization"];

    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type_of_query: optionsList[0],
        question: "",
    });

    const [error, setError] = useState(""); // State for error messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDropdownChange = (selectedOption) => {
        setFormData((prev) => ({ ...prev, type_of_query: selectedOption.toSring() })); // Update 'type_of_query' field
    };
    

    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.question) {
            setError("Please fill in all required fields.");
            return false;
        }
        // Optionally, check if email is valid (basic regex validation)
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(formData.email)) {
            setError("Please enter a valid email address.");
            return false;
        }

        setError(""); // Clear the error message if the form is valid
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form
        if (!validateForm()) {
            return; // Stop if form is invalid
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            // Handle success (e.g., clear form or show a success message)
            alert("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                type_of_query: optionsList[0],
                question: "",
            });
            console.log("formData: " +  formData)
        } catch (error) {
            console.error("Error sending message:", error);
            alert("There was an issue sending your message. Please try again.");
        }
    };

    return (
        <div className="text-center ">
            <h2>Contact Us</h2>
            <p>
                Have Questions? We’re an email away! <br /> <br />
                Reach us at queries.bettertogether@gmail.com for questions,
                queries, or collaborations. <br /> <br />
                Or send us a message on our social media!
            </p>

            {error && <p className="text-red-500">{error}</p>} {/* Show error message if validation fails */}

            <form
                onSubmit={handleSubmit}
                className="space-y-4 p-6 max-w-lg mx-auto rounded-lg "
            >
                {/* Name */}
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Dropdown */}
                <div>
                    <DropdownInput
                        options={optionsList}
                        onChange={handleDropdownChange}
                        value={formData.type_of_query} // Ensure this matches the correct key in the state
                    />
                </div>

                {/* Your Question */}
                <textarea
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    placeholder="Your Question"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                ></textarea>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white rounded-md transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactUsSection;
