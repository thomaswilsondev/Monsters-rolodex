/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "12px",
      },
      padding: {
        "10px": "10px",
        "25px": "25px",
      },
      width: {
        200: "100rem",
      },
    },
  },
  plugins: [],
};
