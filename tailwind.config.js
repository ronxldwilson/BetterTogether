/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BriemHand: ['BriemHand', 'sans-serif'], // Ensure this matches your font setup
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-wheat': '#F5DEB3',
        'custom-green': '#3B5249',
        'custom-mint': '#EBFBFF',
        'custom-misty-rose': '#FFE4E1',
        'custom-pink': '#C08497',
        'custom-red': '#CE2D4F',
        'custom-light-pink': '#FFF3F3',
      },
      keyframes: {
        slideInHeading: {
          '0%': { transform: 'translateX(-100%) rotate(-15deg)', opacity: '1' }, 
          // '25%': { transform: 'translateX(-75%) rotate(10deg)', opacity: '0.5' }, 
          '50%': { transform: 'translateX(-50%) rotate(-10deg)', opacity: '1' }, 
          // '75%': { transform: 'translateX(-25%) rotate(5deg)', opacity: '0.9' }, 
          '100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
        },
        slideInPara: {
          '0%': { transform: 'translateX(-100%) rotate(10deg)', opacity: '1' }, 
          // '25%': { transform: 'translateX(-75%) rotate(-15deg)', opacity: '0.4' }, 
          '50%': { transform: 'translateX(-50%) rotate(8deg)', opacity: '1' }, 
          // '75%': { transform: 'translateX(-25%) rotate(-5deg)', opacity: '0.8' }, 
          '100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
        },
        slideInButton: {
          '0%': { transform: 'translateX(-100%) rotate(-5deg)', opacity: '1' }, 
          // '25%': { transform: 'translateX(-75%) rotate(20deg)', opacity: '0.3' }, 
          '50%': { transform: 'translateX(-50%) rotate(-15deg)', opacity: '1' }, 
          // '75%': { transform: 'translateX(-25%) rotate(10deg)', opacity: '0.8' }, 
          '100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
        },
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slideInHeading: 'slideInHeading 0.8s ', 
        slideInPara: 'slideInPara 0.8s ', 
        slideInButton: 'slideInButton 0.8s ', 
        scroll: "scroll 30s linear infinite",
      },
    },
  },
  plugins: [],
};
