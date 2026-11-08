import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "VJCC – Vandana Jain Culinary Classes | Dubai's Premier Culinary Institute",
  description:
    "KHDA-approved culinary institute in Dubai. 86+ certified courses in cooking, baking & international cuisines. Learn from award-winning chef Vandana Jain with 28+ years of expertise.",
  keywords: ["culinary school dubai", "cooking classes dubai", "KHDA approved culinary", "Vandana Jain chef", "baking courses dubai"],
  openGraph: {
    title: "VJCC – Dubai's Premier Culinary Institute",
    description: "86+ KHDA-certified courses in cooking, baking & international cuisines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
