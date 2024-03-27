import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        tgrey1: "rgba(var(--tgrey1), <alpha-value>)",
        lblue1: "rgba(var(--lblue1), <alpha-value>)",
        lblue2: "rgba(var(--lblue2), <alpha-value>)",
        lblue3: "rgba(var(--lblue3), <alpha-value>)",
        lblue4: "rgba(var(--lblue4), <alpha-value>)",
        lblue5: "rgba(var(--lblue5), <alpha-value>)",
        dblue1: "rgba(var(--dblue1), <alpha-value>)",
        dblue2: "rgba(var(--dblue1), <alpha-value>)",
        dgreen2: "rgba(var(--dgreen2), <alpha-value>)",
        dgreen1: "rgba(var(--dgreen1), <alpha-value>)",
        dred2: "rgba(var(--dred2), <alpha-value>)",
        dred1: "rgba(var(--dred1), <alpha-value>)",
        tblack: "rgba(var(--tblack), <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;


