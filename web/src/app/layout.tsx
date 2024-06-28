import type { Metadata } from "next";
import { Inter } from "next/font/google";

import {Providers} from "./providers";
import "./globals.css";

import localFont from 'next/font/local';

const theHand = localFont({
  src: [
    {
      path: '../../public/fonts/the-hand/The Hand Black.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-the-hand',
});

const courtside = localFont({
  src: [
    {
      path: '../../public/fonts/courtside/Courtside Demo.ttf',
      // weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-courtside',
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hackathon Toolbox",
  description: "Tutorials for tools and technologies used in hackathons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
        <body className={`${inter.className} ${theHand.variable} ${courtside.variable}`}>
          <Providers>
            {children}
          </Providers>
        </body>
    </html>
  );
}
