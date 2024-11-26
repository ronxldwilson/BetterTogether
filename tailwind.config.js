/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-wheat': '#F5DEB3',
        'custom-green': '#3B5249',
        'custom-mint': '#EBFBFF',
        'custom-misty-rose': '#FFE4E1',
        'custom-pink': '#C08497',
        'custom-red': '#CE2D4F',
      },
    },
  },
  plugins: [],
};
