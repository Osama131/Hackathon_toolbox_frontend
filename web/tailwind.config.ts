import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";
import typography from '@tailwindcss/typography';


const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "courtside": "var(--font-courtside)", // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
        "the-hand": "var(--font-the-hand)", // note: the bit that goes inside the var() function is the same variable name we defined in app.tsx
      },
      colors: {
        "accent-navy": "#17376e",
        "accent-orange": "#FFA911",
      },
    },
  },
  variants: {
    extend: {
      filter: ['dark'], // This enables the `dark:` variant for the `filter` utilities.
    },
  },
  plugins: [nextui(), typography()],
};
export default config;
