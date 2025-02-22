import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-lg z-50">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
                {/* Logo */}
                <Link
                    to="hero"
                    smooth={true}
                    duration={800}
                    className="text-white text-3xl font-serif tracking-wide cursor-pointer"
                >
                    VEIL & INK
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-gray-300 text-lg uppercase">
                    {["Home", "Gallery", "About", "Services", "Testimonials", "Contact"].map((item) => (
                        <Link
                            key={item}
                            to={item.toLowerCase()}
                            smooth={true}
                            duration={800}
                            offset={-70}
                            className="cursor-pointer hover:text-white transition-all duration-300"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white text-3xl"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md py-4"
                    >
                        <div className="flex flex-col items-center space-y-4">
                            {["Home", "Gallery", "About", "Services", "Testimonials", "Contact"].map((item) => (
                                <Link
                                    key={item}
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={800}
                                    offset={-70}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white text-lg cursor-pointer hover:text-gray-300"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
