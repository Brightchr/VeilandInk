import { motion } from "framer-motion";

// Function for smooth scrolling
const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        window.scrollTo({ top: section.offsetTop - 70, behavior: "smooth" });
    }
};

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-black text-gray-300 font-cinzel"
        >
            {/* 🖤 Hero Section */}
            <section
                id="hero"
                className="h-screen flex flex-col items-center justify-center text-center relative bg-cover bg-center"
                style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?dark,abstract')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <motion.h1
                    className="text-6xl font-cinzel tracking-wide text-white z-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Veil & Ink
                </motion.h1>
                <p className="text-lg text-gray-400 mt-4 z-10">
                    Tattoos that tell a sacred story.
                </p>
                <motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px #8B0000" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection("gallery")}
                    className="mt-6 px-8 py-3 text-lg bg-red-700 text-white rounded-full shadow-lg hover:bg-red-600 transition z-10"
                >
                    Enter the Ritual
                </motion.button>
            </section>

            {/* 🎭 Gallery Section */}
            <section id="gallery" className="py-20 bg-gray-900 text-center">
                <h2 className="text-5xl font-cinzel text-white">Sacred Ink</h2>
                <p className="text-gray-400">A collection of my ethereal tattoo art.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-8">
                    {[
                        "https://source.unsplash.com/400x400/?tattoo",
                        "https://source.unsplash.com/400x400/?ink",
                        "https://source.unsplash.com/400x400/?blackwork"
                    ].map((img, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #8B0000" }}
                        >
                            <img
                                src={img}
                                alt="Tattoo Art"
                                className="w-full h-80 object-cover transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg">Ritual Piece</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 🔥 About Section */}
            <section id="about" className="py-20 bg-black text-center">
                <h2 className="text-5xl font-cinzel text-white">The Vessel</h2>
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="https://source.unsplash.com/300x300/?mystic"
                        alt="Tattoo Artist"
                        className="w-56 h-56 object-cover rounded-full shadow-lg mb-6 md:mb-0 md:mr-6 border-2 border-red-700"
                    />
                    <p className="text-lg text-gray-400">
                        A vessel for artistic expression. My tattoos transcend the skin—each line, a prayer; each shade, a memory.
                    </p>
                </motion.div>
            </section>

            {/* ⏳ Contact Section */}
            <section id="contact" className="py-20 bg-gray-900 text-center">
                <h2 className="text-5xl font-cinzel text-white">Join the Ritual</h2>
                <p className="text-lg text-gray-400">Let’s create something eternal.</p>
                <form className="max-w-lg mx-auto space-y-4 mt-6">
                    <input className="block w-full p-3 border border-red-700 rounded bg-gray-800 text-white placeholder-gray-500" type="text" placeholder="Your Name" required />
                    <input className="block w-full p-3 border border-red-700 rounded bg-gray-800 text-white placeholder-gray-500" type="email" placeholder="Your Email" required />
                    <textarea className="block w-full p-3 border border-red-700 rounded bg-gray-800 text-white placeholder-gray-500" placeholder="Your Message" required />
                    <button className="px-8 py-3 bg-red-700 text-white rounded-full shadow-lg hover:shadow-red-500 transition">
                        Send Prayer
                    </button>
                </form>
            </section>
        </motion.div>
    );
};

export default Home;
