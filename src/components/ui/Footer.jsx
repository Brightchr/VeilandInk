import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative w-full bg-[rgba(0,0,0,0.4)] backdrop-blur-md text-gray-300 py-8 mt-20">
            <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-3xl font-serif text-white tracking-wide transition-all hover:text-[#B49FCC]"
                >
                    VEIL & INK
                </Link>

                {/* Navigation Links */}
                <nav className="flex space-x-8 text-gray-400 text-sm mt-4">
                    <Link to="/" className="hover:text-[#B49FCC] transition-all">Home</Link>
                    <Link to="/gallery" className="hover:text-[#B49FCC] transition-all">Gallery</Link>
                    <Link to="/services" className="hover:text-[#B49FCC] transition-all">Services</Link>
                    <Link to="/contact" className="hover:text-[#B49FCC] transition-all">Contact</Link>
                </nav>

                {/* Copyright Text */}
                <div className="text-center text-gray-500 text-sm mt-4">
                    &copy; {new Date().getFullYear()} Veil & Ink. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
