import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section id="hero" className="parallax-section hero-section h-screen flex flex-col items-center justify-center text-center relative">
            <div className="overlay mix-blend-multiply"></div>
            <div className="fade-bottom"></div>
            <motion.h1
                className="text-7xl font-cinzel text-white tracking-wider z-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Veil & Ink
            </motion.h1>

            <motion.p
                className="text-lg text-gray-300 mt-4 z-10 tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                Rituals etched into flesh, an offering of permanence.
            </motion.p>

            <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(180, 159, 204, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-[#5F5879] rounded-md shadow-lg transition-all duration-300 hover:bg-[#6D4F91] focus:ring-2 focus:ring-[#B49FCC] z-20 relative"
            >
                Begin the Ritual
            </motion.button>
        </section>
    );
};

export default HeroSection;
