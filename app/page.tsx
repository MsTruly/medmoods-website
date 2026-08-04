import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

function PillIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="9" width="18" height="8" rx="4" transform="rotate(-20 12 13)" stroke="#2D7A77" strokeWidth="1.8" />
      <line x1="10.5" y1="7.5" x2="13.5" y2="16.5" stroke="#2D7A77" strokeWidth="1.8" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="8" r="3" stroke="#2D7A77" strokeWidth="1.8" />
      <circle cx="17" cy="10" r="2.4" stroke="#2D7A77" strokeWidth="1.8" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="#2D7A77" strokeWidth="1.8" />
      <path d="M14.5 19c0-2.2 1.6-4 4-4.2" stroke="#2D7A77" strokeWidth="1.8" />
    </svg>
  );
}

function CareIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 20s-7-4.4-7-9.6C5 7 7 5 9.6 5c1 0 2 .5 2.4 1.4C12.4 5.5 13.4 5 14.4 5 17 5 19 7 19 10.4 19 15.6 12 20 12 20z"
        stroke="#2D7A77"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const features = [
  {
    title: "Track Medications",
    description:
      "Log your experiences, side effects, and dosage changes in one simple, private timeline.",
    Icon: PillIcon,
  },
  {
    title: "Community Support",
    description:
      "Share your journey anonymously and learn from others navigating similar treatments.",
    Icon: CommunityIcon,
  },
  {
    title: "Care Partner Access",
    description:
      "Invite trusted people to view the parts of your journey you choose to share.",
    Icon: CareIcon,
  },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <section className="relative overflow-hidden px-6 pt-20 pb-24 text-center">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-primary-dark tracking-tight">
              MedMoods
            </h1>
            <p className="mt-6 text-lg text-muted">
                          Real Experiences. Real People.
            </p>
            <div className="mt-10">
              <Link
                href="#"
                className="inline-block rounded-full bg-primary px-8 py-3 text-white font-medium hover:bg-primary-dark transition-colors"
              >
                Download the App
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-3">
            {features.map(({ title, description, Icon }) => (
              <div key={title} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint">
                  <Icon />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm text-muted">{description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
