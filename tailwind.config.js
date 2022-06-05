module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel1: "#E0D8B0",
        pastel2: "#C1F4C5",
        pastel3: "#FFF1BD",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
