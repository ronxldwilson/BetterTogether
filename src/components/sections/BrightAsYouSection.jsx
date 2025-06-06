
import Accordian from "@components/Accordian"
import Frame from "@components/Frame"

const faqs = [
    {
        heading: "Therapy",
        content: "Therapy offers a safe space to explore your thoughts, heal, and grow because you deserve to feel your best.",
    },
    {
        heading: "Fitness",
        content: "Embrace the power of movement to uplift your mental health getting active can reduce stress, boost your mood, and leave you feeling more resilient every day!",
    },
    {
        heading: "Nutrition",
        content: "Nourish your mind and body with balanced nutrition discover how the right foods can boost your mood",
    },
    {
        heading: "Psychiatric Care",
        content: "Professional psychiatric care is a powerful tool for mental wellness find balance and the right support when you need it.",
    },
    {
        heading: "Community",
        content: "Join our mental wellness community and connect with others on the journey to better well-being let’s grow, support, and thrive together!",
    },
];

const BrightAsYouSection = () => {
    return (
        <div className="text-center sm:py-6">

            <h2>Bright As You</h2>

            <div className="w-full flex justify-center">
                <p className="p-3 px-14 xl:w-1/2 text-center ">
                    At Better Together, we don’t believe in short term solutions, but sustainable ones. The Bright As You Program brings a holistic balance between the mental, emotional, and physical.
                </p>
            </div>
            <a href="/services/BAY">
            <button className=""> Know More</button>
            </a>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-16">
                {/* Accordion Section */}
                <div className="p-4 lg:p-10 w-full lg:w-auto">
                    <Accordian faqs={faqs} />
                </div>

                {/* Image Section */}
                <div className="flex justify-center items-center px-4 lg:px-10 w-full lg:w-auto order-last lg:order-none">
                    <Frame path="/images/frame-.gif"/>
                </div>
            </div>



        </div>
    )
}

export default BrightAsYouSection;
