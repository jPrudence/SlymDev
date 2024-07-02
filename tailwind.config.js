/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                secondary: "var(--color-secondary)",
                grey: {
                    900: "#25213E",
                    800: "#514f5f",
                    600: "#7E7D84",
                    500: "#8C8D90",
                    400: "#a7a7a5",
                },
            },
            boxShadow: {
                card: "0px 0px 24px rgba(0, 0, 0, 0.03)",
            },
            width: {
                30: "7.5rem",
                95: "23.75rem",
            },
            fontSize: {
                tiny: "0.625rem",
            },
            lineHeight: {
                4.5: "1.125rem",
            },
            letterSpacing: {
                1: "0.063rem",
                0.01: "0.01rem",
                0.031: "0.031rem",
                0.009: "0.009rem",
            },
            borderRadius: {
                "5lg": "2.5rem",
            },
        },
    },
    plugins: [],
};
