import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'media',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,md}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {
      filter: ['dark'], // This enables the `dark:` variant for the `filter` utilities.
    },
  },
  plugins: [],
};
export default config;
