import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/Navbar";
import { Foot } from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Syntalix Consultancy Services",
  description:
    "Syntalix Consultancy Services - Professional IT Solutions and Consulting Services",
  keywords:
    "IT consulting, software development, digital solutions, technology consulting, business solutions",
  authors: [{ name: "Syntalix Consultancy Services" }],
  openGraph: {
    title: "Syntalix Consultancy Services",
    description: "Professional IT Solutions and Consulting Services",
    type: "website",
    locale: "en_US",
    siteName: "Syntalix Consultancy Services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#4F46E5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://syntalix.com" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Nav />
          {children}
          <Foot />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
