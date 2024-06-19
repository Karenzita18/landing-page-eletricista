import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'sans': ['Gotham Pro', 'sans-serif'],
        'gotham': ['Gotham Pro', 'sans-serif'],
        'barcelay': ['Barcelay', 'serif'],
      },
      colors: {
				brand: {
					100: "#1B325F",
					200: "#FFB100",
					300: "#7B7B7B",
					400: "#000000"
				},
			},
    },
  },
  plugins: [],
};
export default config;