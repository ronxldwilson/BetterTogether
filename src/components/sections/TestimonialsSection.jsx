import Testimonial from "@components/Testimonial";

const TestimonialsSection = () => {
    const testimonials = [
        {
            text: "Being part of this community has made me feel that I’m not alone in my struggles and provided me with support when I needed it the most.",
            name: "Mevin",
        },
        {
            text: "Thanks to Better Together, I've learned that it's okay to ask for help and that there are people ready to listen and support me. I no longer feel like I have to face difficulties in silence.",
            name: "Riya",
        },
        {
            text: "For the first time, I felt understood and not alone.",
            name: "Aksa",
        },
    ];

    return (
        <div className="p-10">
            <div className="flex justify-center space-x-4">
                <img src="Vector 2.svg" alt="" className="w-12 md:w-20"/>
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
