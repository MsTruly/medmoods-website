import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Features — MedMoods",
};

export default function FeaturesPage() {
  return (
    <>
      <NavBar />
      <main className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-ink">Features</h1>
          <p className="mt-6 text-muted leading-relaxed">
            Everything you need to navigate your wellness journey — whether
            you're tracking medications, sharing experiences, or connecting
            with a community that understands.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">Free Features</h2>
          <p className="mt-2 text-sm text-muted">
            No account required. Start using MedMoods immediately.
          </p>
          <ul className="mt-4 space-y-3 text-muted leading-relaxed list-disc pl-5 marker:text-primary">
            <li>
              <span className="font-semibold text-ink">Anonymous Community Feed</span>{" "}
              — Share and read real medication and supplement experiences from
              others. Every post is anonymous.
            </li>
            <li>
              <span className="font-semibold text-ink">Medication Experience Cards</span>{" "}
              — Create personal cards to track your medications, dosages,
              duration, and reasons for taking them.
            </li>
            <li>
              <span className="font-semibold text-ink">Community Search</span> — Find
              posts by medication name, supplement, or keyword.
            </li>
            <li>
              <span className="font-semibold text-ink">Browse Medications</span> —
              Explore medications and supplements by category and see
              community insights, side effect reports, and mood trends.
            </li>
            <li>
              <span className="font-semibold text-ink">Reactions & Comments</span> —
              Engage with posts through reactions and comments.
            </li>
            <li>
              <span className="font-semibold text-ink">Interest-Based Personalization</span>{" "}
              — Choose your medication categories during onboarding to
              personalize your feed.
            </li>
            <li>
              <span className="font-semibold text-ink">Med History</span> — View all
              your tracked medications in one place with dose changes and side
              effects.
            </li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-ink">MedMoods+ Premium</h2>
          <p className="mt-2 text-sm text-muted">
            Deeper tracking, richer insights, and tools to share with your
            care team.
          </p>
          <ul className="mt-4 space-y-3 text-muted leading-relaxed list-disc pl-5 marker:text-primary">
            <li>
              <span className="font-semibold text-ink">Mood & Symptoms Tracker</span>{" "}
              — Log your mood, anxiety, energy, and sleep daily. See your week
              at a glance with trends and streaks.
            </li>
            <li>
              <span className="font-semibold text-ink">Supplement Log</span> —
              Quick-entry daily logging for all your supplements with dosage
              and frequency tracking.
            </li>
            <li>
              <span className="font-semibold text-ink">Private Journal</span> —
              Capture thoughts, feelings, and reflections tied to your
              wellness journey. Optionally link entries to specific
              medications.
            </li>
            <li>
              <span className="font-semibold text-ink">Medication Change Timeline</span>{" "}
              — Visualize your dose changes over time with mood data
              overlaid, so you can see how changes affected how you felt.
            </li>
            <li>
              <span className="font-semibold text-ink">Weekly Summary</span> — A
              weekly review of your mood trends, symptoms logged, and
              community activity around your medications. No AI — just your
              own data, clearly presented.
            </li>
            <li>
              <span className="font-semibold text-ink">Saved Posts</span> — Bookmark
              posts to revisit later.
            </li>
            <li>
              <span className="font-semibold text-ink">Daily Reminders</span> — Set a
              daily notification to remind you to log your mood and
              supplements.
            </li>
            <li>
              <span className="font-semibold text-ink">Care Partner Access</span> —
              Invite a trusted person (family member, partner, caregiver) to
              view your medication experience cards with permission controls
              you set.
            </li>
            <li>
              <span className="font-semibold text-ink">PDF Exports</span> — Generate
              doctor-ready PDF summaries of your medication experiences to
              share with your healthcare provider.
            </li>
            <li>
              <span className="font-semibold text-ink">Journey Insights</span> —
              Community-wide trends and insights on your personal Journey
              screen.
            </li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-ink">Coming Soon</h2>
          <ul className="mt-4 space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-primary">
            <li>Sign in with Apple</li>
            <li>Push notifications for new posts about your medications</li>
            <li>Expanded community insights</li>
          </ul>

          <div className="mt-14 rounded-2xl bg-mint p-8 text-center">
            <p className="text-lg font-semibold text-ink">
              Ready to start? Download MedMoods — it's free.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
