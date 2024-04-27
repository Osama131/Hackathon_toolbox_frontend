import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'media',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/custom_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      filter: {
        'invert': 'invert(1)',
        'hue-rotate': 'hue-rotate(180deg)'
      }
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
