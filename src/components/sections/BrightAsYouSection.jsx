
import Accordian from "@components/Accordian"

const faqs = [
    {
        heading: "Therapy",
        content: "Therapy offers a safe space to explore your thoughts, heal, and grow—because you deserve to feel your best.",
    },
    {
        heading: "Fitness",
        content: "Embrace the power of movement to uplift your mental health—getting active can reduce stress, boost your mood, and leave you feeling more resilient every day!",
    },
    {
        heading: "Nutrition",
        content: "Nourish your mind and body with balanced nutrition—discover how the right foods can boost your mood",
    },
    {
        heading: "Psychiatric Care",
        content: "Professional psychiatric care is a powerful tool for mental wellness—find balance and the right support when you need it.",
    },
    {
        heading: "Community",
        content: "Join our mental wellness community and connect with others on the journey to better well-being—let’s grow, support, and thrive together!",
    },
];

const BrightAsYouSection = () => {
    return (
        <div className="text-center">
            
            <h1>Bright As You</h1>
            <p>We offer carefully tailored mental wellness programs with expert guidance & community support that take you from surviving to thriving.</p>
            <button> Know More</button>

            <div className="flex justify-center">
                <div className="p-10">
                    <Accordian faqs={faqs} />
                </div>

                <div className="flex justify-center items-center">
                    <div>

                    <img src="/placeholder.jpg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BrightAsYouSection;
