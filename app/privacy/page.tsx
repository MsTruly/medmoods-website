import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — MedMoods",
};

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-ink">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted">Effective date: August 3, 2026</p>

          <p className="mt-6 text-muted leading-relaxed">
            This Privacy Policy explains how MedMoods ("we," "us," or "our")
            collects, uses, and protects information when you use the
            MedMoods app and website (the "Service"). We built MedMoods with
            privacy in mind, including the ability to use the app without
            ever sharing your identity.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">1. Information We Collect</h2>
          <p className="mt-3 text-muted leading-relaxed">
            You can use the core features of MedMoods anonymously. Basic
            tracking, journaling, and community participation do not require
            an email address or any other identifying information. If you
            choose to create a full account, we collect the email address you
            provide so we can secure your account and enable features like
            Care Partner invites. We also store the medication entries, mood
            logs, side effect notes, and other content you choose to record
            in the app.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">2. How We Store Your Data</h2>
          <p className="mt-3 text-muted leading-relaxed">
            Your account and medication data are stored in the cloud using
            Supabase, a third-party database and authentication provider.
            Supabase hosts our data on secure infrastructure, and access to
            your data is protected using authentication and access-control
            rules.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">3. We Do Not Sell Your Data</h2>
          <p className="mt-3 text-muted leading-relaxed">
            We do not sell your personal information or medication data to
            advertisers, data brokers, or any other third party, and we never
            will.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">4. Content Moderation</h2>
          <p className="mt-3 text-muted leading-relaxed">
            To help keep the community safe, posts you share publicly may be
            reviewed using automated tools built on AI models from OpenAI and
            Anthropic. This automated review is limited to the content of
            posts you choose to share with the community, and is used to
            help detect content that violates our Terms of Service, such as
            harassment or harmful material.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">5. Care Partner Sharing</h2>
          <p className="mt-3 text-muted leading-relaxed">
            The Care Partner feature only shares the specific information you
            explicitly choose to grant access to when you send an invite. A
            Care Partner cannot see any part of your account or history that
            you have not chosen to share, and you can revoke their access at
            any time.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">6. Your Choices</h2>
          <p className="mt-3 text-muted leading-relaxed">
            You can use MedMoods anonymously, delete individual entries, or
            delete your account entirely at any time from within the app.
            Deleting your account removes the personal information
            associated with it from our active systems.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">7. Changes to This Policy</h2>
          <p className="mt-3 text-muted leading-relaxed">
            We may update this Privacy Policy from time to time. If we make
            material changes, we will update the effective date above.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">8. Contact Us</h2>
          <p className="mt-3 text-muted leading-relaxed">
            If you have questions about this Privacy Policy or how your data
            is handled, please contact us at{" "}
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
