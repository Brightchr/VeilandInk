import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="parallax-section about-section py-20 text-center relative">
            <div className="overlay mix-blend-multiply"></div>
            <div className="fade-top"></div>
            <div className="fade-bottom"></div>

            <h2 className="text-5xl font-cinzel text-white relative z-10">The Vessel</h2>

            <motion.div
                className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto z-10 relative mt-8 px-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Artist Image */}
                <img
                    src="/Sleep-Token-Logo.jpg"
                    alt="Tattoo Artist"
                    className="w-64 h-64 object-cover rounded-full shadow-lg border-2 border-[#5F5879] mx-auto md:mx-0"
                />

                {/* Artist Bio */}
                <div className="md:ml-8 mt-6 md:mt-0 text-left text-gray-300">
                    <p className="text-lg italic">
                        "The flesh is a canvas. My ink is the ritual, the story, the offering."
                    </p>

                    <p className="text-lg mt-4">
                        With over **X years** of experience in tattoo artistry, I blend sacred symbolism
                        with intricate linework, crafting designs that resonate beyond the skin. My work
                        is deeply inspired by **ritual, mythology, and the unseen forces** that shape our
                        existence.
                    </p>

                    <p className="text-lg mt-4">
                        Each tattoo is a **collaboration of intent and intuition**, a moment preserved in
                        ink—whether it's the delicate strokes of **fine line** work, the bold shadows of
                        **dark realism**, or the ancient sigils of **mystical symbolism**.
                    </p>

                    <p className="text-lg mt-4">
                        The process is sacred, an offering—every client, every piece, a step deeper into
                        the unknown.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
