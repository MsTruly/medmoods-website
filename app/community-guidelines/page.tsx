import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Community Guidelines — MedMoods",
};

export default function CommunityGuidelinesPage() {
  return (
    <>
      <NavBar />
      <main className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-ink">Community Guidelines</h1>

          <p className="mt-6 text-muted leading-relaxed">
            MedMoods is a safe, anonymous community for sharing real
            medication and supplement experiences. These guidelines help keep
            our community supportive and trustworthy.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">1. What MedMoods Is For</h2>
          <ul className="mt-3 space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-primary">
            <li>Sharing personal experiences with medications and supplements</li>
            <li>Supporting others through honest, anonymous posts</li>
            <li>Tracking your own wellness journey privately</li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-ink">2. Community Rules</h2>
          <ul className="mt-3 space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-primary">
            <li>Be respectful and supportive of others' experiences</li>
            <li>Share only your own personal experiences — not medical advice</li>
            <li>Do not recommend, prescribe, or tell others what medications to take or stop taking</li>
            <li>Keep posts anonymous — do not share personal identifying information (yours or others')</li>
            <li>No promotional content, spam, or advertising</li>
            <li>No hateful, discriminatory, or harassing language</li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-ink">3. Content Moderation</h2>
          <ul className="mt-3 space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-primary">
            <li>All posts are reviewed by our automated moderation system before appearing in the community feed</li>
            <li>Posts that contain harmful content, medical advice, or policy violations are flagged for review</li>
            <li>Content that may indicate self-harm is handled with care — we may provide supportive resources</li>
            <li>Users can report any post by tapping the flag icon</li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-ink">4. What Gets Removed</h2>
          <ul className="mt-3 space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-primary">
            <li>Medical advice or recommendations to start/stop medications</li>
            <li>Personal attacks or harassment</li>
            <li>Spam, advertising, or promotional content</li>
            <li>Content that reveals personal identifying information</li>
            <li>Content promoting self-harm or dangerous behavior</li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-ink">5. Your Privacy</h2>
          <ul className="mt-3 space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-primary">
            <li>All posts are anonymous — no names, emails, or personal information are displayed</li>
            <li>You can use MedMoods without creating an account</li>
            <li>
              Read our full{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>{" "}
              at medmoods.com/privacy
            </li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-ink">6. Contact Us</h2>
          <p className="mt-3 text-muted leading-relaxed">
            Questions about these guidelines? Reach us at{" "}
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
