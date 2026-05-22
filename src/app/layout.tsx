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
    "MS Align CS @ Northeastern '26. Building privacy-first AI from first principles. Based in the Bay Area.",
  metadataBase: new URL("https://dkoike.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daiki Koike",
    description:
      "Engineer and entrepreneur. Physics → CS. Building privacy-first AI.",
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
