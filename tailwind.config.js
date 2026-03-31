/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#7C3AED",
                white: {
                    DEFAULT: "#fff",
                    100: "#f5f5f5",
                    200: "#e5e5e5",
                },
                gray: {
                    100: "#878787",
                    200: "#878787",
                },
                dark: {
                    100: "#181c2e",
                },
                error: "#EF4444",
                success: "#22C55E",
            },
            fontFamily: {
                'freepixel': ['FreePixel', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
