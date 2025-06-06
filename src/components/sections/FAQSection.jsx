import Accordian from "@components/Accordian"
import Image from 'next/image'

const faqsCol1 = [
    {
        heading: "What is Bright As You (BAY) program?",
        content: "Bright As You is our holistic mental health program where each client is supported by a team of professionals over a period of 6 weeks in order to help them begin and sustain their journey.",
    },
    {
        heading: "What is the eligibility criteria for BAY program?",
        content: "Anyone above the age of 18, who is willing to seek help is eligible for BAY!",
    },
    {
        heading: "What services come under the BAY program",
        content: "BAY is a comprehensive mental health and wellness program built on five pillars: Therapy, Fitness, Nutrition, Psychiatric Care, and Community Support.",
    },
    {
        heading: "How often do you hold community events?",
        content: "We hold events every two weeks, some of them are paid and others are free to join. Participants of the BAY Program have a year of access to these events for free.",
    }
];

const faqsCol2 = [
    {
        heading: "How can I book a session with a professional?",
        content: 'To book a session with a professional, simply visit <a class="underline" href="https://book.thebettertogether.in" target="_blank" rel="noopener noreferrer">book.thebettertogether.in</a> and pick a time that works for you. Our process is quick, easy, and designed to help you find the right support.',
    },    
    {
        heading: "Are your services online or in-person?",
        content: "Right now we are online, but we are working to bring our services to you in person soon",
    },
    {
        heading: "How can I contact customer support?",
        content: "You can reach out to us on our socials or send us an email on queries.bettertogether@gmail.com",
    },
    {
        heading: "Do you offer solutions for enterprises?",
        content: "Yes, We offer custom solutions for enterprises, kindly contact us or visit the enterprise section of this page. We would have an introductory call to know your needs and then proceed from there.",
    }
];

const FAQSection = () => {
    return (
        <div className="text-center p-6">
            <div className="flex justify-center space-x-4 mb-8">
                <h2 className="">Frequently Asked Questions</h2>
                <Image
                    src="/images/Vector 3.svg"
                    alt=""
                    width={100}
                    height={100}
                    className="w-8 h-8 md:pt-2 md:w-12 md:h-12" />
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
