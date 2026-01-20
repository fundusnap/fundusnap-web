import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fundusnap - AI-Powered Diabetic Retinopathy Detection",
  description:
    "Fundusnap helps healthcare professionals detect diabetic retinopathy using AI-powered fundus image analysis. Fast, accurate, and reliable screening for better patient outcomes.",
  keywords: [
    "diabetic retinopathy",
    "fundus imaging",
    "AI diagnosis",
    "eye health",
    "medical AI",
    "retinal screening",
  ],
  authors: [{ name: "Fundusnap" }],
  icons: {
    icon: "/logos/icon.png",
    apple: "/logos/icon.png",
  },
  openGraph: {
    title: "Fundusnap - AI-Powered Diabetic Retinopathy Detection",
    description:
      "Detect diabetic retinopathy with AI-powered fundus image analysis",
    type: "website",
    images: ["/logos/ios-brand.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
