import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        size: "",
        description: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                formData,
                "YOUR_PUBLIC_KEY"
            )
            .then(
                () => {
                    setMessage("Your request has been sent! We'll get back to you soon.");
                    setFormData({
                        name: "",
                        email: "",
                        date: "",
                        size: "",
                        description: "",
                    });
                },
                (error) => {
                    setMessage("Something went wrong. Please try again.");
                    console.error("Email error:", error);
                }
            );
    };

    return (
        <section id="contact" className="parallax-section contact-section py-20 text-center relative">
            <div className="overlay mix-blend-multiply"></div>
            <div className="fade-top"></div>
            <div className="fade-bottom"></div>

            <h2 className="text-5xl font-cinzel text-white relative z-10">
                Begin Your Ritual
            </h2>
            <p className="text-lg text-gray-300 mt-4 z-10">
                Fill out the form below to start your tattoo journey.
            </p>

            {/* Form Container - Transparent */}
            <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto mt-8 p-6 rounded-md shadow-lg relative z-10 bg-[rgba(0,0,0,0.3)] backdrop-blur-lg"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                        <label className="block text-white text-left">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-2 bg-transparent text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-[#B49FCC] focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-white text-left">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-2 bg-transparent text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-[#B49FCC] focus:outline-none"
                        />
                    </div>
                </div>

                {/* Date & Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <label className="block text-white text-left">Preferred Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-2 bg-transparent text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-[#B49FCC] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-white text-left">
                            Tattoo Size (Small, Medium, Large)
                        </label>
                        <input
                            type="text"
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-2 bg-transparent text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-[#B49FCC] focus:outline-none"
                        />
                    </div>
                </div>

                {/* Tattoo Description */}
                <div className="mt-4">
                    <label className="block text-white text-left">Tattoo Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full p-3 mt-2 bg-transparent text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-[#B49FCC] focus:outline-none"
                    ></textarea>
                </div>

                {message && <p className="text-green-400 mt-4">{message}</p>}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-[#5F5879] rounded-md shadow-lg transition-all duration-300 hover:bg-[#6D4F91] focus:ring-2 focus:ring-[#B49FCC]"
                >
                    Send Request
                </button>
            </form>
        </section>
    );
};

export default Contact;
