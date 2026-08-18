import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Download MedMoods",
};

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6l-8-3Z"
        stroke="#2D7A77"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="#2D7A77" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartPulseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 20s-7-4.5-9.5-9C.7 7.8 2 4.5 5 4c2-.3 3.7.8 4.6 2.4L12 9l1.2-2c.2-.4.5-.8.8-1.1C15.6 4.7 17.2 3.9 19 4.2c3 .5 4.3 3.8 2.5 6.8C19 15.5 12 20 12 20Z"
        stroke="#2D7A77"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M5 12h3l1.5-3 2 5 1.5-3h5" stroke="#2D7A77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="3" stroke="#2D7A77" strokeWidth="1.6" />
      <path d="M2.5 19c0-3 2.5-5.5 5.5-5.5S13.5 16 13.5 19" stroke="#2D7A77" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="17" cy="7" r="2.4" stroke="#2D7A77" strokeWidth="1.4" />
      <path d="M14.8 13.2c2.7-.3 5 1.7 5.2 4.8" stroke="#2D7A77" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const features = [
  {
    title: "Anonymous & Free",
    description: "No account required. Share and browse experiences without revealing your identity.",
    Icon: ShieldIcon,
  },
  {
    title: "Track Your Wellness",
    description: "Log medications, mood, symptoms, and supplements all in one place.",
    Icon: HeartPulseIcon,
  },
  {
    title: "Community Support",
    description: "Read real experiences from others on similar medications and supplements.",
    Icon: PeopleIcon,
  },
];

export default function DownloadPage() {
  return (
    <>
      <NavBar />
      <main>
        <section className="px-6 pt-20 pb-16 text-center">
          <div className="mx-auto max-w-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="MedMoods app icon"
              width={112}
              height={112}
              className="mx-auto h-28 w-28 rounded-3xl shadow-md sm:h-32 sm:w-32"
            />

            <h1 className="mt-8 text-4xl sm:text-5xl font-bold text-primary-dark tracking-tight">
              Take control of your wellness journey
            </h1>

            <p className="mt-6 text-lg text-muted leading-relaxed">
              MedMoods is a free, anonymous community for sharing real medication and
              supplement experiences. Track your medications, log your mood, and
              connect with others who understand.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="w-64 select-none rounded-xl bg-muted/15 px-6 py-3.5 text-sm font-medium text-muted cursor-not-allowed sm:w-56"
              >
                Coming Soon on iOS
              </button>
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="w-64 select-none rounded-xl bg-muted/15 px-6 py-3.5 text-sm font-medium text-muted cursor-not-allowed sm:w-56"
              >
                Coming Soon on Android
              </button>
            </div>

            <p className="mt-6 text-sm text-muted">
              Want to try MedMoods now? The web version is available at no cost.
            </p>
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
