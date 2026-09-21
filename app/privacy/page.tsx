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
          <p className="mt-1 text-sm text-muted">Last updated: September 21, 2026</p>

          <p className="mt-6 text-muted leading-relaxed">
            This Privacy Policy explains how MedMoods ("we," "us," or "our")
            collects, uses, and protects information when you use the
            MedMoods app and website (the "Service"). We built MedMoods with
            privacy in mind, including the ability to use the app without
            ever sharing your identity.
          </p>

          <div className="mt-8 rounded-2xl border-2 border-primary/30 bg-mint/40 p-6">
            <h2 className="text-xl font-semibold text-ink">HIPAA Disclaimer</h2>
            <p className="mt-3 text-muted leading-relaxed">
              MedMoods is not a HIPAA-covered entity. MedMoods is not a
              healthcare provider, health plan, or healthcare clearinghouse.
              While we take the security of your data seriously and
              implement reasonable safeguards, MedMoods is not subject to
              the Health Insurance Portability and Accountability Act
              (HIPAA) and does not claim HIPAA compliance. The information
              you enter into MedMoods is self-reported wellness data, not a
              medical record. Do not enter information into MedMoods that
              you would only share with a healthcare provider under HIPAA
              protections.
            </p>
          </div>

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

          <h2 className="mt-10 text-xl font-semibold text-ink">3. Third-Party Services</h2>
          <p className="mt-3 text-muted leading-relaxed">
            We rely on a small number of trusted third-party services to
            operate MedMoods. We do not sell or share your data with any of
            them beyond what's needed to provide the Service.
          </p>
          <ul className="mt-3 space-y-3 text-muted leading-relaxed list-disc pl-5 marker:text-primary">
            <li>
              <span className="font-semibold text-ink">Supabase</span> — our
              database and authentication provider. See Section 2 above for
              details.
            </li>
            <li>
              <span className="font-semibold text-ink">Stripe</span> —
              payment processing for MedMoods+ subscriptions. Stripe
              collects payment information directly; MedMoods never sees or
              stores your card number. See Stripe&rsquo;s privacy policy at{" "}
              <a
                href="https://stripe.com/privacy"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                stripe.com/privacy
              </a>
              .
            </li>
            <li>
              <span className="font-semibold text-ink">Google OAuth</span> —
              optional sign-in method. If you choose to sign in with Google,
              we receive your email address from Google. We do not access
              your Google contacts, calendar, or any other Google data.
            </li>
            <li>
              <span className="font-semibold text-ink">
                RxNorm (National Library of Medicine)
              </span>{" "}
              — medication name lookup and autocomplete. When you search for
              a medication, the search term is sent to the NIH&rsquo;s public
              RxNorm API. No personal or identifying information is included
              in these requests.
            </li>
            <li>
              <span className="font-semibold text-ink">
                OpenAI and Anthropic
              </span>{" "}
              — used for automated content moderation. See Section 5 below
              for details.
            </li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-ink">4. We Do Not Sell Your Data</h2>
          <p className="mt-3 text-muted leading-relaxed">
            We do not sell your personal information or medication data to
            advertisers, data brokers, or any other third party, and we never
            will.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">5. Content Moderation</h2>
          <p className="mt-3 text-muted leading-relaxed">
            To help keep the community safe, posts you share publicly may be
            reviewed using automated tools built on AI models from OpenAI and
            Anthropic. This automated review is limited to the content of
            posts you choose to share with the community, and is used to
            help detect content that violates our Terms of Service, such as
            harassment or harmful material.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">6. Cookies &amp; Session Management</h2>
          <p className="mt-3 text-muted leading-relaxed">
            MedMoods uses cookies solely for authentication and session
            management. When you sign in (including as an anonymous user), a
            session cookie is stored in your browser to keep you logged in.
            We do not use tracking cookies, advertising cookies, or
            third-party analytics cookies. Vercel Analytics, which we use to
            understand page traffic, does not use cookies and does not track
            individual users.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">7. Care Partner Sharing</h2>
          <p className="mt-3 text-muted leading-relaxed">
            The Care Partner feature only shares the specific information you
            explicitly choose to grant access to when you send an invite. A
            Care Partner cannot see any part of your account or history that
            you have not chosen to share, and you can revoke their access at
            any time.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">8. Your Choices</h2>
          <p className="mt-3 text-muted leading-relaxed">
            You can use MedMoods anonymously, delete individual entries, or
            delete your account entirely at any time from within the app.
            Deleting your account removes the personal information
            associated with it from our active systems.
          </p>
          <p className="mt-3 text-muted leading-relaxed">
            <span className="font-semibold text-ink">Data Export:</span>{" "}
            MedMoods+ subscribers can export their medication data, mood
            logs, and side effect history as a PDF summary through the app.
            If you need a complete export of all data associated with your
            account, contact{" "}
            <a href="mailto:care@medmoods.com" className="text-primary hover:underline">
              care@medmoods.com
            </a>
            .
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">9. Changes to This Policy</h2>
          <p className="mt-3 text-muted leading-relaxed">
            We may update this Privacy Policy from time to time. If we make
            material changes, we will update the effective date above.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">10. Contact Us</h2>
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
