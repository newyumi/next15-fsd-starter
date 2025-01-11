import type { Metadata } from "next";

import "@/shared/styles/globals.css";
import Header from "@/widgets/header";

export const metadata: Metadata = {
  title: "next15-fsd-starter",
  description: "nestjs 15version, fsd structure, starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
