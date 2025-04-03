import { TempoInit } from "./tempo-init";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RevitCAD Converter - Professional CAD to Revit Plugin",
  description:
    "Transform CAD files to native Revit elements with our powerful plugin featuring intelligent geometry conversion and property mapping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempo.new/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        <Providers>
          {children}
          <TempoInit />
        </Providers>
      </body>
    </html>
  );
}
