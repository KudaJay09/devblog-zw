import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Provider } from "../utils/Provider";
import { SanityLive } from "@/sanity/lib/live";
import Footer from "../components/Footer";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevBlog",
  description: "A blog for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} dark:selection:bg-purple-500`}>
        <Provider>
          <Navbar tags />
          <main className="max-w-4xl mx-auto px-6">{children}</main>
          <Footer />
          <SanityLive />
        </Provider>
      </body>
    </html>
  );
}
