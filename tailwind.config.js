/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0f", // Very dark blue/black
                surface: "#12121a", // Slightly lighter for cards
                primary: "#00ff9d", // Neon Green
                secondary: "#00d2ff", // Neon Blue
                alert: "#ff003c", // Neon Red
                warning: "#ffaa00",
                muted: "#4b5563",
                "grid-line": "#1f2937",
            },
            fontFamily: {
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 3s linear infinite',
            },
        },
    },
    plugins: [],
}
