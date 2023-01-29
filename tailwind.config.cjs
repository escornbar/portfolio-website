/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
        screens: {
            "mobile-sm": "320px",
            "mobile-md": "375px",
            "mobile-lg": "425px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        colors: {
            cultured: "#F6F6F6",
            platinum: "#E8E8E8",
            jet: "#333333",
            airblue: "#669BBC",
        },
    },
    plugins: [],
};
