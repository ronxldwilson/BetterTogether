import Accordian from "@components/Accordian"

const faqsCol1 = [
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
    }
];

const faqsCol2 = [
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
    }
];

const FAQSection = () => {
    return (
        <div className="text-center p-6">
            <div className="flex justify-center space-x-4 mb-8">
                <h2 className="">Frequently Asked Questions</h2>
                <img src="Vector 3.svg" alt="" />
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
                {/* Accordion Column 1 */}
                <div className="w-full max-w-md">
                    <Accordian faqs={faqsCol1} />
                </div>

                {/* Accordion Column 2 */}
                <div className="w-full max-w-md">
                    <Accordian faqs={faqsCol2} />
                </div>
            </div>
        </div>

    )
}

export default FAQSection;
