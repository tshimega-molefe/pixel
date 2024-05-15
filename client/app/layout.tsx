import { ThemeProvider } from "@/components/theme-provider";
import PixelBackground from "@/public/pixel-background.jpg";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: "Pixel",
    template: `%s - Create.`,
  },
  description: "Create.",
};

export default function RootLayout({
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
          <Image
            src={PixelBackground}
            alt="Pixel Background"
            className="hidden sm:flex sm:object-cover sm:object-left-bottom -z-10 brightness-75"
            priority
            fill
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
