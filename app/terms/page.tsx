import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service — MedMoods",
};

export default function TermsPage() {
  return (
    <>
      <NavBar />
      <main className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-ink">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted">Effective date: August 3, 2026</p>

          <p className="mt-6 text-muted leading-relaxed">
            Welcome to MedMoods. These Terms of Service ("Terms") govern your
            use of the MedMoods mobile application and website (together, the
            "Service"), operated as a sole proprietorship under the name
            MedMoods ("MedMoods," "we," "us," or "our"). By creating an
            account, using the app anonymously, or otherwise accessing the
            Service, you agree to these Terms.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">1. Not Medical Advice</h2>
          <p className="mt-3 text-muted leading-relaxed">
            MedMoods is a personal tracking and journaling tool. It is not a
            medical device and does not provide medical advice, diagnosis, or
            treatment. Content shared by other users, including community
            posts, reflects individual experiences and opinions only. Always
            consult a qualified healthcare professional before making any
            decisions about your medications or treatment plan, and never
            disregard professional medical advice because of something you
            read on MedMoods.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">2. Your Account and Anonymous Use</h2>
          <p className="mt-3 text-muted leading-relaxed">
            You may use core features of MedMoods anonymously, without
            providing an email address or other identifying information. If
            you choose to create a full account, you are responsible for
            keeping your login credentials secure and for all activity that
            occurs under your account.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">3. User-Generated Content and Moderation</h2>
          <p className="mt-3 text-muted leading-relaxed">
            You may post entries, comments, and other content within the
            Service. You retain ownership of the content you create, but you
            grant MedMoods a limited license to store, display, and process
            it in order to operate the Service. We reserve the right to
            review, moderate, or remove content, including through automated
            tools, that violates these Terms, is unlawful, harassing, or
            otherwise harmful to other users. Do not post content that
            discloses another person's private health information without
            their consent.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">4. Care Partner Feature</h2>
          <p className="mt-3 text-muted leading-relaxed">
            MedMoods allows you to invite a trusted "Care Partner" to view
            portions of your medication journey. Sharing only occurs after
            you send an invite and the recipient accepts it, and you control
            what information is visible to your Care Partner. You may revoke
            this access at any time within the app.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">5. Data Handling</h2>
          <p className="mt-3 text-muted leading-relaxed">
            We store the information you provide using reputable third-party
            infrastructure providers so that your data is available across
            your devices. Please see our Privacy Policy for details about
            what we collect and how it is used.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">6. Account Termination</h2>
          <p className="mt-3 text-muted leading-relaxed">
            You may stop using the Service or delete your account at any
            time. We may suspend or terminate access to the Service for
            anyone who violates these Terms, misuses the platform, or poses a
            risk to other users, with or without prior notice where
            reasonably necessary.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">7. Changes to These Terms</h2>
          <p className="mt-3 text-muted leading-relaxed">
            We may update these Terms from time to time. If we make material
            changes, we will update the effective date above. Continued use
            of the Service after changes take effect constitutes acceptance
            of the revised Terms.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">8. Contact Us</h2>
          <p className="mt-3 text-muted leading-relaxed">
            If you have questions about these Terms, please contact us at{" "}
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
