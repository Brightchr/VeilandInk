import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import HeroSection from "./components/sections/HeroSection";
import About from "./components/sections/About";
import Gallery from "./components/sections/Gallery";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Welcome from "./components/sections/Welcome"; // Import Welcome Page

function App() {
    return (
        <div className="bg-black text-gray-300">
            <Routes>
                {/* Welcome Page Route */}
                <Route path="/" element={<Welcome />} />

                {/* Main Home Page Route */}
                <Route
                    path="/home"
                    element={
                        <>
                            <Navbar />
                            <HeroSection />
                            <About />
                            <Gallery />
                            <Services />
                            <Testimonials />
                            <Contact />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
