import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Salary Reality Check: Can Your Paycheck Survive These? 💸",
  description:
    "Drop your monthly salary and get INSTANT TRUTH about what you can actually afford - from iPhones to Ferraris! Prepare for laughs 😂 or tears 😭",
  keywords: [
    "salary check",
    "affordability game",
    "luxury item calculator",
    "reality check tool",
    "can I afford meme",
    "financial roast",
    "viral money quiz",
  ].join(", "),
  openGraph: {
    title: "I Let a Website Roast My Salary - Here's What Happened 🍿",
    description:
      "From 'Maybe' to 'Never in This Lifetime' - See How Your Income Stacks Against Crazy Purchases!",
    url: "https://yourdomain.com/salary-reality-check",
    images: [
      {
        url: "https://yourdomain.com/og-salary-roast.png",
        alt: "Funny comparison showing iPhone = Maybe, Porsche = NOPE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tag Someone Who Needs This Financial Wake-Up Call 🔔",
    description:
      "Just input salary → Get brutally honest answers about what you can afford. Share your results! 😈",
    images: ["https://yourdomain.com/twitter-salary-meme.jpg"],
  },
};

// Add this fun copy to your UI

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="border-2 justify-center 2xl:ml-70 2xl:mr-70 bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
