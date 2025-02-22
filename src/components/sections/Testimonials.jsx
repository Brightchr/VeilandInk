import { motion } from "framer-motion";

const testimonials = [
    {
        text: "The ink is more than just art—it's a transformation.",
        author: "A Devoted Client",
    },
    {
        text: "Each line, each shade—crafted with meaning and purpose.",
        author: "Marked by Fate",
    },
    {
        text: "A ritual of permanence, a memory etched in flesh.",
        author: "Eternal Witness",
    },
    {
        text: "More than a tattoo—it's a passage into something deeper.",
        author: "Bound by Ink",
    },
];

const Testimonials = () => {
    return (
        <section className="parallax-section testimonials-section py-20 text-center relative overflow-hidden">
            <div className="overlay mix-blend-multiply"></div>
            <div className="fade-top"></div>
            <div className="fade-bottom"></div>

            <h2 className="text-5xl font-cinzel text-white relative z-10">
                Whispers of the Marked
            </h2>

            {/* Scrolling Carousel */}
            <div className="relative overflow-x-hidden w-full mt-10 z-10">
                <motion.div
                    className="flex space-x-8 px-10 animate-scroll"
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-[rgba(95,88,121,0.3)] text-white p-6 rounded-md shadow-lg min-w-[300px] md:min-w-[400px] lg:min-w-[500px]"
                            whileHover={{ scale: 1.05 }}
                        >
                            <p className="italic text-lg">"{testimonial.text}"</p>
                            <p className="mt-4 text-gray-300">- {testimonial.author}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
