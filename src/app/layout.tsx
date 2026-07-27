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
  title: "Vigneshwaran G | Full Stack Developer & UI/UX Designer",
  description:
    "Personal portfolio of Vigneshwaran G, a BCA student specializing in full-stack web applications, native Android development, and intuitive UI/UX design.",
  keywords: [
    "Vigneshwaran G",
    "Portfolio",
    "Full Stack Developer",
    "UI/UX Designer",
    "Android Developer",
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
