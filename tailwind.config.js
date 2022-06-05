module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
<<<<<<< HEAD
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
=======
    colors: {
      mainColor: "#CE9461",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    boxShadow: {
      neu: ["10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff"],
    },
    extend: {},
  },
  plugins: [],
>>>>>>> 9eb9c4971535842eca2cc4534d9a0a1f91819865
};
