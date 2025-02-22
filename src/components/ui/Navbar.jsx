import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav
            className="fixed top-0 left-0 w-full px-6 py-4 backdrop-blur-md shadow-md z-50 transition-all duration-300"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // 👈 Ensures transparency
        >
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-gray-300 text-3xl font-serif tracking-wide transition-all hover:text-gray-100"
                >
                    VEIL & INK
                </Link>

                {/* Nav Links */}
                <div className="space-x-8 text-gray-400 text-lg uppercase tracking-wider">
                    <Link
                        to="/"
                        className="hover:text-gray-100 transition-all duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/gallery"
                        className="hover:text-gray-100 transition-all duration-300"
                    >
                        Gallery
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-gray-100 transition-all duration-300"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-gray-100 transition-all duration-300"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
