import Link from "next/link";
import Logo from "@/components/Logo";

export default function NavBar() {
  return (
    <header className="bg-white/80 backdrop-blur border-b border-primary/10 sticky top-0 z-10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo size={28} />
          <span className="font-semibold text-ink text-lg">MedMoods</span>
        </Link>
        <nav className="flex gap-6 text-sm text-muted">
          <Link href="/features" className="hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}
