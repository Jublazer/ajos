import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [
//     require('daisyui'),
//   ],
// };
// export default config;


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3498db",
          secondary: "#2ecc71",
          accent: "#f39c12",
          neutral: "#95a5a6",
          "base-100": "#ffffff",
          info: "#3b82f6",
          success: "#22c55e",
          warning: "#fbbf24",
          error: "#ef4444",
        },
      },
      {
        dark: {
          primary: "#3498db",
          secondary: "#2ecc71",
          accent: "#f39c12",
          neutral: "#1f2937",
          "base-100": "#111827",
          info: "#3b82f6",
          success: "#22c55e",
          warning: "#fbbf24",
          error: "#ef4444",
        },
      },
    ],
    darkTheme: "dark", // Default dark theme
  }
}

