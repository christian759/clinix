/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'display': ['Manrope', 'sans-serif'],
            },
            colors: {
                // Kyealta Reference Palette
                primary: {
                    DEFAULT: '#34D399', // Mint Green (Primary Accent)
                    50: '#ECFDF5', // Light Mint Background
                    100: '#D1FAE5',
                    200: '#A7F3D0',
                    300: '#6EE7B7',
                    400: '#34D399',
                    500: '#10B981', // Emerald
                    600: '#059669',
                    900: '#064E3B',
                },
                accent: {
                    purple: '#E0E7FF', // For pastel cards
                    blue: '#E0F2FE',   // For pastel cards
                    yellow: '#FEF3C7', // For pastel cards
                },
                dark: {
                    DEFAULT: '#050505', // Almost Black
                    Surface: '#121212',
                },
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2.5rem',
                'blob': '3rem', // For the hero container
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                'soft': '0 20px 40px -10px rgba(0, 0, 0, 0.05)',
            }
        },
    },
    plugins: [],
}
