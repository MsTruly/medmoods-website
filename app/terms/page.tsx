import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service — MedMoods",
};

const Mail = () => (
  <a href="mailto:care@medmoods.com" className="text-primary hover:underline">
    care@medmoods.com
  </a>
);
function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl font-semibold text-ink">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-muted leading-relaxed">{children}</p>;
}
function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-3 space-y-3 text-muted leading-relaxed list-disc pl-5 marker:text-primary">
      {children}
    </ul>
  );
}
function B({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-ink">{children}</span>;
}

export default function TermsPage() {
  return (
    <>
      <NavBar />
      <main className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-ink">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted">Effective date: August 3, 2026</p>
          <p className="mt-1 text-sm text-muted">Last updated: September 25, 2026</p>

          <P>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the MedMoods app and website (together, the
            &ldquo;Service&rdquo;), operated as a sole proprietorship under the name MedMoods (&ldquo;MedMoods,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
            or &ldquo;our&rdquo;). By creating an account, using the Service as a guest, or otherwise accessing it, you agree
            to these Terms and to our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
            If you do not agree, please do not use the Service.
          </P>

          <div className="mt-8 rounded-2xl border-2 border-primary/30 bg-mint/40 p-6">
            <h2 className="text-xl font-semibold text-ink">Not medical advice. In an emergency, get help now.</h2>
            <P>
              MedMoods is a personal tracking and journaling tool. It is not a medical device and does not provide
              medical advice, diagnosis, or treatment. Community posts reflect individual experiences only. Always
              talk to a qualified healthcare professional before starting, stopping, or changing any medication.
              Reminders are a convenience and may occasionally be late or fail to arrive, so do not rely on them as
              your only way to take a medication on time.
            </P>
            <P>
              <B>If you are having a medical emergency or thoughts of harming yourself, call 911 or your local
              emergency number, or call or text 988 (the Suicide &amp; Crisis Lifeline in the U.S.).</B> MedMoods is
              not monitored in real time and cannot respond to emergencies.
            </P>
          </div>

          <H2>1. Who Can Use MedMoods</H2>
          <P>
            You must be at least 18 years old and able to form a binding contract to use the Service. By using
            MedMoods you confirm that you meet these requirements.
          </P>

          <H2>2. Your Account and Guest Use</H2>
          <P>
            You can use core features as a guest without an email address. Guest data is tied to your browser, so
            if you clear it before creating a full account, the data may be lost. If you create an account, keep
            your password secure. You are responsible for activity under your account. Tell us right away at{" "}
            <Mail /> if you think someone else has accessed it.
          </P>

          <H2>3. HIPAA</H2>
          <P>
            MedMoods is not a HIPAA-covered entity and does not claim HIPAA compliance. What you enter is
            self-reported wellness information, not a medical record. Our{" "}
            <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> explains how we protect it.
          </P>

          <H2>4. Your Content</H2>
          <P>
            You own the content you create. You give MedMoods a limited, non-exclusive, royalty-free license to
            store, display, and process it only as needed to operate the Service. For community posts and comments,
            this includes showing them anonymously to other users. This license ends when you delete the content or
            your account, except for copies other users have already seen or that we must keep by law.
          </P>

          <H2>5. Community Rules</H2>
          <P>When you post or comment, you agree not to:</P>
          <UL>
            <li>Give medical advice as if you were a professional, or tell others to start, stop, or change a medication.</li>
            <li>Sell, promote, or offer medications or other products, or share links for commercial purposes.</li>
            <li>Share anyone else&rsquo;s private or health information, or try to identify other users.</li>
            <li>Post content that is unlawful, harassing, hateful, sexually explicit, or that encourages self-harm.</li>
            <li>Post false experiences, spam, or impersonate anyone.</li>
            <li>Try to break, overload, scrape, or get around the security of the Service.</li>
          </UL>
          <P>
            We may review, hold, edit for safety, or remove content, including through automated tools, and may
            limit accounts that break these rules.
          </P>

          <H2>6. Care Partners</H2>
          <P>
            You can invite a Care Partner to view specific medication cards. Sharing happens only after you send an
            invite and the person accepts. You can revoke access at any time. Only invite people you trust. What a
            Care Partner does with information you shared is their responsibility.
          </P>

          <H2>7. MedMoods+ Subscriptions</H2>
          <UL>
            <li><B>Price:</B> $9.99 per month or $39.99 per year, plus any applicable taxes. Prices shown at checkout apply.</li>
            <li><B>Automatic renewal:</B> subscriptions renew automatically at the end of each billing period and your payment method is charged until you cancel.</li>
            <li><B>Cancel anytime:</B> in the app under Profile &rarr; Manage subscription. Cancellation takes effect at the end of the current billing period, and you keep MedMoods+ until then.</li>
            <li><B>Refunds:</B> you may request a refund within 7 days of purchase by emailing <Mail />. Other refunds are at our discretion unless the law requires them.</li>
            <li><B>Price changes:</B> we will tell you before a price change affects your subscription, and you can cancel before it takes effect.</li>
            <li><B>Payments</B> are processed by Stripe. We never see or store your full card number.</li>
          </UL>

          <H2>8. Reminders and Notifications</H2>
          <P>
            If you turn on email or push reminders, you agree to receive them. You can change the time or turn them
            off at any time. Reminder messages are kept short and do not include medication names, to protect your
            privacy on lock screens and shared inboxes.
          </P>

          <H2>9. Ending Your Use of MedMoods</H2>
          <P>
            You can delete your account at any time from Profile. This permanently removes your data as described
            in the Privacy Policy and cancels any subscription. We may suspend or end access for anyone who breaks
            these Terms, misuses the Service, or puts others at risk. When reasonable, we will give notice first.
          </P>

          <H2>10. Disclaimers</H2>
          <P>
            The Service is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; To the fullest extent the law allows, we make no
            warranties, express or implied, including that the Service will be uninterrupted or error-free, or that
            community content, medication information, statistics, or summaries are accurate or complete. Medication
            information from third-party sources (such as RxNorm) is provided for reference only.
          </P>

          <H2>11. Limitation of Liability</H2>
          <P>
            To the fullest extent the law allows, MedMoods will not be liable for indirect, incidental, special,
            consequential, or punitive damages, or for any health decision made based on the Service. Our total
            liability for any claim relating to the Service will not exceed the greater of the amount you paid us in
            the 12 months before the claim or $50. Some places do not allow these limits, so they may not fully apply
            to you.
          </P>

          <H2>12. Governing Law and Disputes</H2>
          <P>
            These Terms are governed by the laws of the State of Maryland, without regard to conflict-of-law rules.
            Before filing any claim, please contact us at <Mail /> so we can try to resolve it informally. Any claim
            that is not resolved will be brought in the state or federal courts located in Maryland, unless the law
            where you live gives you the right to bring it elsewhere. Either party may bring an eligible claim in
            small-claims court.
          </P>

          <H2>13. Changes to These Terms</H2>
          <P>
            If we make material changes, we will update the date above and notify signed-in users in the app or by
            email before the changes take effect. If you keep using the Service after that, you accept the updated
            Terms.
          </P>

          <H2>14. Contact Us</H2>
          <P>Questions about these Terms: <Mail />.</P>
        </div>
      </main>
      <Footer />
    </>
  );
}
