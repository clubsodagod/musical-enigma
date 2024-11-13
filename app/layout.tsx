import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppProvider from "./_context/AppContext";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Maliek Davis",
  description: "The Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <AppProvider>
        <AppRouterCacheProvider
          options={{ key: 'css', enableCssLayer: true }}
        >
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </body>
        </AppRouterCacheProvider>

      </AppProvider>

    </html>
  );
}
