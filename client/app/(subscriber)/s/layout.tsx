import SideBar from "@/components/subscriber/side-bar";
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

export default function SubscriberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased font-sans flex h-screen relative flex-col md:flex-row md:overflow-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-20 flex-none lg:w-64 md:border-r">
            <SideBar />
          </div>
          <div className="mt-12 md:mt-0 flex-1 w-full md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl mx-auto">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
