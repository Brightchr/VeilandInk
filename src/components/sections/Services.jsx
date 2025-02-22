import { motion } from "framer-motion";

const services = [
    {
        name: "Blackwork",
        icon: "🖤",
        description: "Bold, timeless black ink artistry.",
        details: "Blackwork tattoos focus on heavy contrast and pure black ink, drawing inspiration from tribal patterns, gothic motifs, and sacred geometry."
    },
    {
        name: "Fine Line",
        icon: "🖌",
        description: "Delicate, intricate lines for a subtle elegance.",
        details: "Ideal for minimalistic and detailed designs, fine-line tattooing allows for subtle and elegant body art with minimal skin trauma."
    },
    {
        name: "Dark Realism",
        icon: "🎭",
        description: "Deep shadows, striking contrast, lifelike details.",
        details: "Dark realism captures the eerie, the macabre, and the surreal—perfect for hauntingly beautiful portraits and intricate shading techniques."
    },
    {
        name: "Mystical Symbolism",
        icon: "🔮",
        description: "Sacred markings, runes, and spiritual sigils.",
        details: "From ancient symbols to custom sigils, these tattoos carry deep personal and esoteric meaning, blending art with ritual."
    },
];

const Services = () => {
    return (
        <section className="parallax-section services-section py-20 text-center relative">
            {/* Overlay Effects */}
            <div className="overlay mix-blend-multiply"></div>
            <div className="fade-top"></div>
            <div className="fade-bottom"></div>

            {/* Section Title */}
            <motion.h2
                className="text-5xl font-cinzel text-white relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Ritual Services
            </motion.h2>

            <motion.p
                className="text-lg text-gray-300 mt-4 z-10 tracking-wide max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
            >
                Tattooing is more than ink—it's a sacred process, a transformation. Each design is crafted
                with intent, ensuring every mark is permanent in meaning, not just in form.
            </motion.p>

            {/* Services Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12 px-6 z-20 "
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, staggerChildren: 0.2 } }
                }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="p-6 rounded-lg shadow-lg backdrop-blur-md bg-[rgba(95,88,121,0.3)] transition-all duration-300 hover:scale-105"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
                    >
                        <div className="text-4xl">{service.icon}</div>
                        <h3 className="text-2xl font-cinzel text-white mt-4">{service.name}</h3>
                        <p className="text-gray-300 mt-2">{service.description}</p>
                        <p className="text-sm text-gray-400 mt-4">{service.details}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* What to Expect */}
            <motion.div
                className="max-w-4xl mx-auto mt-20 px-6 text-gray-300 relative z-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <h3 className="text-3xl font-cinzel text-white">What to Expect</h3>
                <p className="mt-4">
                    Your journey begins with a **consultation**, where we discuss your vision, placement, and style.
                    On the day of your session, we start with a stencil to ensure the design aligns perfectly with your body.
                    The process is sacred—each stroke deliberate, each shade intentional.
                </p>
                <p className="mt-4">
                    **Aftercare is crucial.** You'll receive guidance on how to heal your tattoo properly,
                    ensuring its longevity and vibrancy.
                </p>
            </motion.div>

            {/* Book a Consultation Button */}
            <motion.div
                className="mt-12 relative z-[50] pointer-events-auto"
                whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
            >
                <a
                    href="/contact"
                    className="px-6 py-3 text-lg font-semibold text-white bg-[#5F5879] rounded-md shadow-lg transition-all duration-300 hover:bg-[#6D4F91] focus:ring-2 focus:ring-[#B49FCC]"
                >
                    Book a Consultation
                </a>
            </motion.div>

        </section>
    );
};

export default Services;
