import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} MedMoods. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <Link href="/about" className="text-muted hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/terms" className="text-muted hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-muted hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/community-guidelines" className="text-muted hover:text-primary transition-colors">
            Community Guidelines
          </Link>
        </div>
      </div>
    </footer>
  );
}
