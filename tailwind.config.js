/**@type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatAcross: {
          "0%": { transform: "translateX(-10%) translateY(0) rotate(0deg)" },
          "50%": {
            transform: "translateX(50vw) translateY(20vh) rotate(180deg)",
          },
          "100%": {
            transform: "translateX(110vw) translateY(0) rotate(360deg)",
          },
        },
      },
      animation: {
        floatAcross: "floatAcross 10s linear infinite",
      },
      colors: {
        primary: "#49504C",
        secondary: "#5C9DF5",
        brandOrange: "#E1781F",
        brandBlue: "#5C9DF5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
