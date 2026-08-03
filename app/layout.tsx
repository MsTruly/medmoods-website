import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedMoods — Track your medication experiences",
  description:
    "Track your medication experiences. Share what matters. Stay in control.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-mint text-ink antialiased">{children}</body>
    </html>
  );
}
