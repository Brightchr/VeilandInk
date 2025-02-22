import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const Welcome = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener("timeupdate", () => {
                if (video.currentTime >= video.duration - 0.1) {
                    video.currentTime = 0.1; // Rewind slightly before restarting
                }
            });
        }
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover filter grayscale opacity-50"
                src="/welcome-intro.mp4"
                autoPlay
                loop
                muted
                playsInline
            />


            {/* Dark Overlay for Better Readability */}
            <div className="absolute inset-0 bg-[rgba(95,88,121,0.1)]"></div>

            {/* Welcome Content */}
            <motion.div
                className="relative z-10 text-center text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-7xl font-cinzel tracking-wide">
                    Veil & Ink
                </h1>
                <p className="text-lg text-gray-300 mt-4 tracking-wide italic font-cinzel">
                    "Step into the sacred. A ritual of permanence awaits."
                </p>

                {/* Enter the Ritual Button */}
                <motion.button
                    className=" font-cinzel mt-10 px-6 py-3 text-lg font-semibold text-white bg-[#5F5879] rounded-md shadow-lg transition-all duration-300 hover:bg-[#6D4F91] hover:shadow-xl focus:ring-2 focus:ring-[#B49FCC]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/home")}
                >
                    Enter the Ritual
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Welcome;
