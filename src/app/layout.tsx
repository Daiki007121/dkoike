import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daiki Koike — Engineer & Entrepreneur",
  description:
    "Engineer and entrepreneur solving social problems with technology and the power of the market. MS in CS @ Northeastern '26, building privacy-first AI.",
  metadataBase: new URL("https://dkoike.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daiki Koike",
    description:
      "Engineer and entrepreneur. Physics → CS. Solving social problems with technology and the power of the market.",
    url: "https://dkoike.com",
    siteName: "Daiki Koike",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daiki Koike",
    description: "Engineer and entrepreneur. Physics → CS.",
    // TODO: add `creator: "@handle"` once Daiki has a Twitter/X account
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
