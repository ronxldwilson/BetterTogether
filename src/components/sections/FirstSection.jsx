
const FirstSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-10 p-4">
            {/* Text Section */}
            <div className="text-center lg:text-left max-w-lg">
                <h1 className="">Holistic <br /> Mental Wellness</h1>
                <h1> For Everyone</h1>
                <p>
                    We offer carefully tailored mental wellness programs with expert guidance & community support that take you from surviving to thriving.
                </p>
                <button className="">
                    Know More
                </button>
            </div>

            {/* Image Section */}
            <div className="flex justify-center mt-6 lg:mt-0">
                <img src="placeholder.jpg" alt="Placeholder Image" className="w-full lg:w-auto max-w-md" />
            </div>
        </div>

    )
}

export default FirstSection;