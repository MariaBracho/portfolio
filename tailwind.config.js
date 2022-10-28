/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redButton: "#E41937",
        violet_section: "#5C3D99",
        grey_light: "#E0E0E0",
        green_light: "#57CC99",
      },
    },
  },
  plugins: [],
};
