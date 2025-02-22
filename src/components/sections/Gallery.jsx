import { motion } from "framer-motion";

const Gallery = () => {
    return (
        <section id="gallery" className="parallax-section gallery-section py-20 text-center relative">
            <div className="overlay mix-blend-multiply"></div>
            <div className="fade-top"></div>
            <div className="fade-bottom"></div>

            <h2 className="text-5xl font-cinzel text-white relative z-10">Sacred Ink</h2>
            <p className="text-gray-300 relative z-10">A collection of ethereal artistry.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-8 relative z-10">
                {[
                    "/tat1.jpg",
                    "/tat3.jpg",
                    "/tat4.jpg"
                ].map((img, index) => (
                    <motion.div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(180, 159, 204, 0.6)" }}
                    >
                        <img
                            src={img}
                            alt="Tattoo Art"
                            className="w-full h-80 object-cover transition-transform duration-300 hover:scale-110"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
