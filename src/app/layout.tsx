import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ivoryHAUS | Ambient Music for Sleep, Focus & Meditation",
  description:
    "ivoryHAUS crafts immersive ambient drone music—designed for deep relaxation, sleep, meditation, and focus. Explore serene soundscapes and find your calm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white dark:bg-gray-950">
      <body>{children}</body>
    </html>
  );
}
