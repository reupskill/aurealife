import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurea — See your future. Then change it.",
  description:
    "One simple blood test shows you how your body is really doing, and how to feel your best for years to come.",
  openGraph: {
    title: "Aurea — See your future. Then change it.",
    description: "We exist to give humanity more healthy years of life.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-full overflow-x-hidden bg-abyss text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
