import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nico Balbontin - Designer & Storyteller",
  description:
    "I am a designer with a strong interest in visual storytelling with years of experience working both with agencies and start-ups.",
  metadataBase: new URL("https://www.nbalbontin.com"),
  openGraph: {
    title: "Nico Balbontin - Designer & Storyteller",
    description:
      "Portfolio of Nico Balbontin — UX/UI designer based in Amsterdam.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:top-4 focus:left-4 focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:rounded"
        >
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
