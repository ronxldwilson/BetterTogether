import DropdownInput from "@components/DropdownInput";

const ContactUsSection = () => {
    const optionsList = ["Option 1", "Option 2", "Option 3", "Option 4"];

    return (
        <div className="text-center">
            <h2>Contact Us</h2>
            <p>Have Questions? We’re an email away! <br /> <br />

                Reach us at queries.bettertogether@gmail.com for questions, queries, or collaborations. <br /> <br />

                Or send us a message on our social media!</p>

            <form action="" className="space-y-4 p-6 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md">
                {/* First Name */}
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Email */}
                <input
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Dropdown */}
                <div>
                    <DropdownInput options={optionsList} />
                </div>

                

                {/* Your Question */}
                <textarea
                    placeholder="Your Question"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                ></textarea>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full px-4 py-2  text-white rounded-md transition duration-300"
                >
                    Submit
                </button>
            </form>


        </div>
    )
}

export default ContactUsSection;
