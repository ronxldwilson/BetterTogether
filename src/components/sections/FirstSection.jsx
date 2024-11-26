
const FirstSection = () => {
    return (
        <div className="flex flex-col sm:py-2 lg:flex-row justify-center items-center lg:items-start lg:gap-10 px-4">
            {/* Text Section */}
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
                {/* Text Section */}
                <div className="text-center lg:text-left max-w-lg ">
                    <div className="py-10 animate-slideInHeading">
                        <h1 className="">Holistic <br /> Mental Wellness <br /> For Everyone</h1>
                    </div>

                    <p className="animate-slideInPara">
                        We offer carefully tailored mental wellness programs with expert guidance & community support that take you from surviving to thriving.
                    </p>
                    <button className="my-5 animate-slideInButton">
                        Know More
                    </button>
                    {/* Image Section */}
                    <img
                        className=" hidden xl:block z-10"
                        src="Vector 1.svg"
                        alt=""
                    />



                </div>
            </div>
            {/* Image Section */}
            <div className="flex justify-center mt-6 lg:mt-0">
                <img src="placeholder.jpg" alt="Placeholder Image" className="w-full lg:w-auto max-w-md" />
            </div>
        </div>

    )
}

export default FirstSection;