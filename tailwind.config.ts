import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fundusnap color palette from Flutter app
        "angel-blue": "rgb(157, 197, 224)",
        "venice-blue": "rgb(11, 83, 130)",
        "bleached-cedar": "rgb(36, 31, 49)",
        "fundusnap-gray": "rgb(151, 150, 150)",
        "fundusnap-white": "rgb(246, 248, 249)",
        "pale-carmine": "rgb(172, 63, 63)",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-fundusnap": "linear-gradient(135deg, rgb(157, 197, 224) 0%, rgb(11, 83, 130) 100%)",
        "gradient-card": "linear-gradient(135deg, rgb(120, 170, 200) 0%, rgb(60, 110, 140) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
