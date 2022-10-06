const necessaryColors =
  require("./app/primitives/typesAndColors.js").typesAndColors;

let safeClasses = [];

for (const color of Object.values(necessaryColors)) {
  let gradientStart300 = `from-${color}-300`;
  let gradientStart500 = `from-${color}-500`;
  let gradientEnd500 = `to-${color}-500`;
  let bg600 = `bg-${color}-600`;
  let bg500 = `bg-${color}-500`;
  let bg700 = `bg-${color}-700`;
  safeClasses.push(
    gradientStart300,
    gradientStart500,
    gradientEnd500,
    bg700,
    bg600,
    bg500
  );
}

module.exports = {
  content: ["./app/views/**/*.{html,ejs,js}"],
  safelist: safeClasses,
  theme: {
    extend: {
      backgroundImage: {
        "poke-pattern": "url(./imgs/poke_bg.png)",
      },
      screens: {
        tablet: { min: "425px", max: "767px" },
        mobileM: { min: "375px", max: "1024px" },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "-system-ui",
          "blinkMacSystemFont",
          "Poppins",
          "Helvetica Neue",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
