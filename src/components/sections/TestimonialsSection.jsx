import Testimonial from "@components/Testimonial";

const TestimonialsSection = () => {
    const testimonials = [
        {
            text: "This service has changed my life for the better. Highly recommended!",
            name: "John Doe",
        },
        {
            text: "The support and guidance I received were exceptional.",
            name: "Jane Smith",
        },
        {
            text: "A truly holistic approach to mental wellness. I'm thriving now!",
            name: "Alex Johnson",
        },
    ];

    return (
        <div>
            <div className="flex justify-center space-x-4">
                <img src="Vector 2.svg" alt="" />
                <h2 className="text-center mb-6">Testimonials</h2>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 p-6">
                {testimonials.map((testimonial, index) => (
                    <Testimonial key={index} text={testimonial.text} name={testimonial.name} />
                ))}
            </div>
        </div>
    );
};


export default TestimonialsSection;
