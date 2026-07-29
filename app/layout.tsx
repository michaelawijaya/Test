import type { Metadata } from "next";
import { Ubuntu, Nunito_Sans, League_Spartan } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/app/LayoutShell";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // all available weights
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"], // all available weights
});

const leagueSpartan = League_Spartan({
  variable: "--font-league",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // all available weights
});

export const metadata: Metadata = {
  title: "Open House Fasilkom UI 2026 Recruitment",
  description: "A recruitment platform for Open House Fasilkom UI 2026",
  icons: {
    icon: "/design-system/logo-no-bg.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" &&
          process.env.UMAMI_SCRIPT_SOURCE &&
          process.env.UMAMI_WEBSITE_ID && (
            <script
              defer
              src={process.env.UMAMI_SCRIPT_SOURCE}
              data-website-id={process.env.UMAMI_WEBSITE_ID}
            ></script>
          )}
      </head>
      <body
        className={`${ubuntu.variable} ${nunitoSans.variable} ${leagueSpartan.variable} antialiased`}
      >
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
