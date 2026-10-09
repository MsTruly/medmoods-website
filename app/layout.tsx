import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedMoods — Medication Experiences, Wellness & Support",
  description:
    "Track medications, experiences, reminders, and wellness. Share what matters. Stay in control.",
  icons: {
    icon: "/brand-icon.svg",
    shortcut: "/brand-icon.svg",
    apple: "/brand-icon.svg",
  },
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
