/**@type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#49504C",
        secondary: "#5C9DF5",
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
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".active-link": {
          borderBottomWidth: "2px",
          borderColor: "#E1781F",
          color: "#5C9DF5",
        },
      });
    },
  ],
};
