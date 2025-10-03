import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YAH Admin Dashboard",
  description: "Administrative panel for YAH Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
