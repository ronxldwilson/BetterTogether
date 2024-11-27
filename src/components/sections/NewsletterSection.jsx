const NewsletterSection = () => {
    return (
        <div className="text-center p-6 ">
            <h2 className="text-2xl font-bold mb-4">Subscribe To Our Newsletter</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Input Field */}
                <input
                    className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    placeholder="Enter your email"
                />

                {/* Subscribe Button */}
                <button className="px-6 py-2 500 text-white rounded-md transition duration-300">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default NewsletterSection;
