
import Frame from '@components/Frame';
import Image from 'next/image'

const FirstSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-10 px-4">
            {/* Text Section */}
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
                {/* Text Section */}
                <div className="text-center lg:text-left max-w-lg ">
                    <div className="py-4 md:py-10 animate-slideInHeading">
                        <h1 className="">Holistic <br /> Mental Wellness <br /> 
                        <span className='font-BriemHand'>For Everyone</span></h1>
                    </div>

                    <p className="animate-slideInPara">
                        We offer carefully tailored mental wellness programs with expert guidance & community support that take you from surviving to thriving.
                    </p>
                    <a href="https://book.thebettertogether.in/">
                    {/* <a href="#BAY"> */}

                        <button className="my-4 md:my-5 animate-slideInButton">
                            Book Session
                        </button>
                    </a>
                    {/* Image Section */}

                    <Image
                        src="/images/Vector 1.svg"
                        className="hidden xl:block z-10 animate-slideInButton"
                        alt="Company Logo"
                        width={50}
                        height={75}
                        unoptimized
                    />
                </div>
            </div>


            {/* {/* Image Section */}
            <div className="flex justify-center md:py-12">
                <Frame path="/images/image.jpg" />
            </div>
        </div>

    )
}

export default FirstSection;