import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — MedMoods",
};

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-ink">About MedMoods</h1>

          <h2 className="mt-10 text-xl font-semibold text-ink">Our Mission</h2>
          <p className="mt-3 text-muted leading-relaxed">
            MedMoods is a safe, anonymous community where people share real
            experiences with medications and supplements. We believe that
            honest, peer-to-peer stories help people feel less alone on their
            wellness journey — whether they're starting a new medication,
            managing side effects, or exploring natural alternatives.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">What We Offer</h2>
          <h3 className="mt-6 text-base font-semibold text-ink">
            Free features (available to everyone, no account required)
          </h3>
          <ul className="mt-3 space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-primary">
            <li>Browse and share anonymous medication and supplement experiences</li>
            <li>Search the community by medication, supplement, or keyword</li>
            <li>React to and comment on posts</li>
            <li>Create personal medication experience cards</li>
            <li>Track medications and view your med history</li>
            <li>Browse medications and see community insights</li>
          </ul>

          <h3 className="mt-6 text-base font-semibold text-ink">
            MedMoods+ premium features
          </h3>
          <ul className="mt-3 space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-primary">
            <li>Mood & Symptoms daily tracker</li>
            <li>Supplement logging</li>
            <li>Private wellness journal</li>
            <li>Medication change timeline</li>
            <li>Weekly wellness summary</li>
            <li>Saved posts</li>
            <li>Daily check-in reminders</li>
            <li>Invite a care partner to view your experience cards</li>
            <li>Export doctor-ready PDF summaries of your medication experiences</li>
            <li>Community insights and trends on your Journey screen</li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-ink">Your Privacy Comes First</h2>
          <p className="mt-3 text-muted leading-relaxed">
            MedMoods is anonymous by design. You never need to create an
            account to use the app. No names, emails, or personal
            information are displayed on posts. Every experience shared is
           anonymous. If you choose to create an account, it's only for
            syncing your data across devices — never for identification.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">How Moderation Works</h2>
          <p className="mt-3 text-muted leading-relaxed">
            Every post is reviewed by our automated moderation system before
            it appears in the community feed. We never allow medical advice,
            personal attacks, or harmful content. Posts that may indicate
            self-harm are handled with care. Learn more in our{" "}
            <a href="/community-guidelines" className="text-primary hover:underline">
              Community Guidelines
            </a>
            .
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">Contact</h2>
          <p className="mt-3 text-muted leading-relaxed">
            Questions, feedback, or concerns? Reach us at{" "}
            <a href="mailto:care@medmoods.com" className="text-primary hover:underline">
              care@medmoods.com
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
