import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BROAD",
  description: "Design and Development by Pentagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/uql5ydf.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
