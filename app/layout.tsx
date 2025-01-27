import { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const Courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: { default: "Code2Steps", template: "C2S | %s" },
  description: "Website Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Courier.className}>{children}</body>
    </html>
  );
}
