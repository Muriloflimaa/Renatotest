/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                verde: '#1af38c',
            },
        },
    },
    plugins: [require('daisyui')],
}
