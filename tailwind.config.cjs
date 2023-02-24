/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,tsx}"],
    theme: {
        extend: {
            colors: {
                "input-error": "hsl(0, 100%, 66%)",

                "grayish-violet": {
                    200: "hsl(270, 3%, 87%)",
                    400: "hsl(279, 6%, 55%)",
                    900: "hsl(278, 68%, 11%)",
                },
            },
            fontFamily: {
                sans: ["Space Grotesk"],
            },
            backgroundImage: {
                "active-input-border":
                    "linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))",
            },
        },
        screens: {
            mobile: "375px",
            desktop: "1440px",
        },
    },
    plugins: [],
};
