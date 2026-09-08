import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpaceBackground from "@/components/SpaceBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vigneshwaran G | AI Full Stack Developer & Agentic AI Engineer",
  description:
    "Portfolio of Vigneshwaran G — AI Full Stack Developer & Agentic AI Engineer building autonomous agents, AI-powered applications, and high-performance web systems.",
  keywords: [
    "Vigneshwaran G",
    "AI Full Stack Developer",
    "Agentic AI Engineer",
    "Autonomous AI Agents",
    "Full Stack Developer",
    "UI/UX Designer",
    "Next.js",
    "TypeScript",
    "Python",
    "Bengaluru",
  ],
  authors: [{ name: "Vigneshwaran G" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans selection:bg-green-500 selection:text-black">
        <SpaceBackground />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
