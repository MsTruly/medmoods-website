import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Features — MedMoods",
};

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6l-8-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CardIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 14h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M19.5 19.5 15.3 15.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function GridIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="2.5" y="2.5" width="8" height="8" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.5" y="2.5" width="8" height="8" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <rect x="2.5" y="13.5" width="8" height="8" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.5" y="13.5" width="8" height="8" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M12 20s-7-4.5-9.5-9C.7 7.8 2 4.5 5 4c2-.3 3.7.8 4.6 2.4L12 9l1.2-2c.2-.4.5-.8.8-1.1C15.6 4.7 17.2 3.9 19 4.2c3 .5 4.3 3.8 2.5 6.8C19 15.5 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M12 2.8l2.8 5.9 6.4.8-4.7 4.5 1.2 6.4L12 17.3l-5.7 3.1 1.2-6.4-4.7-4.5 6.4-.8L12 2.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5.5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrendIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M3 17l5.5-6 4 3.5L21 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M20.5 3.5c.6 8-3.4 15-13 15.5-3-4.6-2.5-13 13-15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M7.5 19c1-4 4-8.5 10-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BookIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M4 4.5c2.5-1 5.5-1 8 0v15c-2.5-1-5.5-1-8 0v-15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M20 4.5c-2.5-1-5.5-1-8 0v15c2.5-1 5.5-1 8 0v-15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BellIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M6 10.5a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 14.5 6 10.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function UsersIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 19c0-3 2.5-5.5 5.5-5.5S13.5 16 13.5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="17" cy="7" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14.8 13.2c2.7-.3 5 1.7 5.2 4.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function FileIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M6 2.5h8l4.5 4.5V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 2.5V7h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8.5 12.5h7M8.5 15.5h7M8.5 18h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function CompassIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Feature = {
  title: string;
  description: string;
  Icon: (props: { className?: string }) => JSX.Element;
};

const freeFeatures: Feature[] = [
  {
    title: "Anonymous Community Feed",
    description:
      "Share and read real medication and supplement experiences from others. Every post is anonymous.",
    Icon: ShieldIcon,
  },
  {
    title: "Medication Experience Cards",
    description:
      "Create personal cards to track your medications, dosages, duration, and reasons for taking them.",
    Icon: CardIcon,
  },
  {
    title: "Community Search",
    description: "Find posts by medication name, supplement, or keyword.",
    Icon: SearchIcon,
  },
  {
    title: "Browse Medications",
    description:
      "Explore medications and supplements by category and see community insights, side effect reports, and mood trends.",
    Icon: GridIcon,
  },
  {
    title: "Reactions & Comments",
    description: "Engage with posts through reactions and comments.",
    Icon: HeartIcon,
  },
  {
    title: "Interest-Based Personalization",
    description:
      "Choose your medication categories during onboarding to personalize your feed.",
    Icon: StarIcon,
  },
  {
    title: "Med History",
    description:
      "View all your tracked medications in one place with dose changes and side effects.",
    Icon: ClockIcon,
  },
];

const premiumFeatures: Feature[] = [
  {
    title: "Mood & Symptoms Tracker",
    description:
      "Log your mood, anxiety, energy, and sleep daily. See your week at a glance with trends and streaks.",
    Icon: TrendIcon,
  },
  {
    title: "Supplement Log",
    description:
      "Quick-entry daily logging for all your supplements with dosage and frequency tracking.",
    Icon: LeafIcon,
  },
  {
    title: "Private Journal",
    description:
      "Capture thoughts, feelings, and reflections tied to your wellness journey. Optionally link entries to specific medications.",
    Icon: BookIcon,
  },
  {
    title: "Medication Change Timeline",
    description:
      "Visualize your dose changes over time with mood data overlaid, so you can see how changes affected how you felt.",
    Icon: ClockIcon,
  },
  {
    title: "Weekly Summary",
    description:
      "A weekly review of your mood trends, symptoms logged, and community activity around your medications. No AI — just your own data, clearly presented.",
    Icon: TrendIcon,
  },
  {
    title: "Saved Posts",
    description: "Bookmark posts to revisit later.",
    Icon: StarIcon,
  },
  {
    title: "Daily Reminders",
    description:
      "Set a daily notification to remind you to log your mood and supplements.",
    Icon: BellIcon,
  },
  {
    title: "Care Partner Access",
    description:
      "Invite a trusted person (family member, partner, caregiver) to view your medication experience cards with permission controls you set.",
    Icon: UsersIcon,
  },
  {
    title: "PDF Exports",
    description:
      "Generate doctor-ready PDF summaries of your medication experiences to share with your healthcare provider.",
    Icon: FileIcon,
  },
  {
    title: "Journey Insights",
    description:
      "Community-wide trends and insights on your personal Journey screen.",
    Icon: CompassIcon,
  },
];

const comingSoon = [
  "Sign in with Apple",
  "Push notifications for new posts about your medications",
  "Expanded community insights",
];

export default function FeaturesPage() {
  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section className="px-6 pt-20 pb-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-primary-dark tracking-tight">
              Features
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Everything you need to navigate your wellness journey — whether
              you&apos;re tracking medications, sharing experiences, or
              connecting with a community that understands.
            </p>
          </div>
        </section>

        {/* Free Features */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-ink tracking-tight">
                Free Features
              </h2>
              <p className="mt-2 text-muted">
                No account required. Start using MedMoods immediately.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {freeFeatures.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white p-8 shadow-sm border border-ink/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-primary">
                    <Icon />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MedMoods+ Premium */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-ink tracking-tight">
                MedMoods+
              </h2>
              <p className="mt-2 text-muted">
                Deeper tracking, richer insights, and tools to share with your
                care team.
              </p>
              <span className="mt-5 inline-block rounded-full bg-primary px-5 py-2 text-sm font-medium text-white">
                $9.99/month or $39.99/year
              </span>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {premiumFeatures.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-mint/60 p-8 shadow-sm border-l-4 border-primary"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary">
                    <Icon />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="px-6 py-20 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-ink tracking-tight">
              Coming Soon
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              {comingSoon.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-muted/30 px-5 py-2 text-sm text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-3xl rounded-2xl bg-mint p-10 text-center">
            <p className="text-lg font-semibold text-ink">
              Ready to start? Download MedMoods — it&apos;s free.
            </p>
            <Link
              href="/download"
              className="mt-6 inline-block rounded-full bg-primary px-8 py-3 text-white font-medium hover:bg-primary-dark transition-colors"
            >
              Download MedMoods
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
