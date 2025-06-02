import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google"; // Import Noto Sans
import "./globals.css";

// Initialize Noto Sans with desired subsets and weights
const notoSans = Noto_Sans({
  subsets: ["cyrillic", "latin"], // Include cyrillic subset
  weight: ["400", "700"], // Specify weights you'll use
  variable: "--font-noto-sans", // Define a CSS variable
});

export const metadata: Metadata = {
  title: "MLSRI",
  description: "MLSRI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn"> 
      <body
        className={`${notoSans.variable} antialiased`} // Apply Noto Sans variable
      >
        {children}
      </body>
    </html>
  );
}
