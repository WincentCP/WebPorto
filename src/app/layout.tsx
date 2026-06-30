import type { Metadata } from "next";
import { Inter, Zen_Old_Mincho } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const zenOldMincho = Zen_Old_Mincho({
  variable: "--font-zen",
  subsets: ["latin"],
  weight: "400",
});

const nightWatch = localFont({
  src: "../../public/fonts/TheNightWatch.woff2",
  variable: "--font-nightwatch",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAISEI SADATOKI | Portfolio-V4",
  description:
    "Kaisei Sadatoki — Freelance developer and designer based in Japan, focused on clean, modern, and minimal design with attention to typography, layout, and animation.",
  icons: {
    icon: [
      { url: "/seo/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/seo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/icon.ico", sizes: "any" },
    ],
    apple: { url: "/seo/apple-touch.png", sizes: "180x180" },
  },
  openGraph: {
    title: "KAISEI SADATOKI | Portfolio-V4",
    description:
      "Kaisei Sadatoki — Freelance developer and designer based in Japan, focused on clean, modern, and minimal design with attention to typography, layout, and animation.",
    images: [{ url: "/seo/ogp.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${zenOldMincho.variable} ${nightWatch.variable}`}
    >
      <body>
        {/* SVG filter definitions for ink animation */}
        <svg
          style={{
            position: "absolute",
            width: 0,
            height: 0,
            overflow: "hidden",
          }}
          aria-hidden="true"
        >
          <defs>
            <filter
              id="inkFilter"
              x="-25%"
              y="-50%"
              width="150%"
              height="200%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.035"
                numOctaves={4}
                seed={5}
                result="n"
              />
              <feDisplacementMap
                id="inkDisp"
                in="SourceGraphic"
                in2="n"
                scale={70}
                xChannelSelector="R"
                yChannelSelector="G"
                result="d"
              />
              <feGaussianBlur id="inkBlur" in="d" stdDeviation={10} />
            </filter>
          </defs>
        </svg>

        {children}
      </body>
    </html>
  );
}
