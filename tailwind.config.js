/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ["'Cinzel'", "serif"], // Elegant serif font
                sans: ["'Montserrat'", "sans-serif"], // Modern clean font
            },
            colors: {
                veil: "#0A0A0A", // Deep Black
                ink: "#1B1B1B", // Dark Gray
                glow: "#8B0000", // Subtle Red Glow
                mutedWhite: "#EAEAEA", // Soft white text
            },
        },
    },
    plugins: [],
};
