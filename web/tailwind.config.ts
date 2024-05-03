import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";


const config: Config = {
  // darkMode: 'class',
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
    },
  },
  variants: {
    extend: {
      filter: ['dark'], // This enables the `dark:` variant for the `filter` utilities.
    },
  },
  plugins: [nextui()],
};
export default config;
