import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedMoods Tracker — Medication, Mood & Wellness Tracking",
  description:
    "Track medications, moods, reminders, and journals. Share what matters. Stay in control.",
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
