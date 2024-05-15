import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: `%s - Pixel`,
  },
  description: "Pixel",
};

export default function CreatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} relative flex h-screen w-screen flex-col bg-background md:items-center md:justify-center md:bg-transparent overflow-hidden antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <p>Creator Navigation</p>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
