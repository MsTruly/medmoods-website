import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — MedMoods",
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

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-ink">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted">Effective date: August 3, 2026</p>
          <p className="mt-1 text-sm text-muted">Last updated: September 25, 2026</p>

          <P>
            This Privacy Policy explains how MedMoods (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            collects, uses, shares, and protects information when you use the MedMoods app and website
            (the &ldquo;Service&rdquo;). MedMoods is a place to track how your medications make you feel, so much
            of what you enter is <B>health information</B>. We treat all of it as sensitive, whether or not a
            law requires us to.
          </P>

          <div className="mt-8 rounded-2xl border-2 border-primary/30 bg-mint/40 p-6">
            <h2 className="text-xl font-semibold text-ink">The short version</h2>
            <UL>
              <li>We collect only what the Service needs, and you can use the core features without giving us your name or email.</li>
              <li>We <B>never sell</B> your data and we <B>never</B> use your health information for advertising.</li>
              <li>Your private entries (medications, doses, side effects, moods, journal, supplements) are visible only to you and to Care Partners you choose.</li>
              <li>Community posts are shown without your name or any identifier.</li>
              <li>You can download all of your data or permanently delete your account from the Profile page at any time.</li>
            </UL>
          </div>

          <div className="mt-6 rounded-2xl border-2 border-primary/30 bg-mint/40 p-6">
            <h2 className="text-xl font-semibold text-ink">HIPAA</h2>
            <P>
              MedMoods is not a healthcare provider, health plan, or healthcare clearinghouse, and is not a
              HIPAA-covered entity. The information you enter is self-reported wellness information, not a medical
              record, and MedMoods does not claim HIPAA compliance. Other health-privacy laws, such as the FTC
              Health Breach Notification Rule and state consumer-health-data laws, may still apply, and we follow
              this policy regardless. Section 10 explains how we handle consumer health data.
            </P>
          </div>

          <H2>1. Information We Collect</H2>
          <P><B>Information you give us.</B></P>
          <UL>
            <li><B>Account details:</B> your email address and password (stored only as a secure hash), or the email address Google shares with us if you sign in with Google. Guest accounts have no email at all.</li>
            <li><B>Health information you record:</B> medications, doses and dose changes, start and stop dates, side effects and their severity, mood check-ins (mood, anxiety, energy, sleep and optional symptom tags), dose and refill reminders, journal entries, supplement logs, and notes.</li>
            <li><B>Community content:</B> posts, comments, reactions, saved posts, and reports you submit.</li>
            <li><B>Care Partner information:</B> the email address of anyone you invite and the notes a Care Partner writes.</li>
            <li><B>Settings:</B> reminder times, time zone, and notification preferences.</li>
            <li><B>Messages to us:</B> anything you send to <Mail />.</li>
          </UL>
          <P><B>Information collected automatically.</B></P>
          <UL>
            <li><B>Session cookies</B> that keep you signed in (see Section 7).</li>
            <li><B>Basic technical data</B> that our hosting providers log to run and secure the Service, such as IP address, browser type, and error logs.</li>
            <li><B>Push notification tokens</B>, only if you turn on app notifications. These are used to deliver your reminders.</li>
            <li><B>Aggregate page-traffic statistics</B> from Vercel Analytics, which does not use cookies or build individual profiles.</li>
          </UL>
          <P><B>Payment information.</B> Stripe collects card details directly. We receive only your subscription status and a Stripe customer reference, never your card number.</P>

          <H2>2. How We Use Information</H2>
          <UL>
            <li>To provide the Service: store your entries, show your history, charts and summaries, and generate your doctor-visit summary.</li>
            <li>To send reminders you turned on (mood check-ins, doses, refills) by email or push notification.</li>
            <li>To show anonymous community statistics, such as how other people felt at the same stage of a medication. These use grouped data and never identify you.</li>
            <li>To moderate community content and keep people safe (Section 5).</li>
            <li>To process MedMoods+ subscriptions.</li>
            <li>To secure the Service, prevent abuse, and fix problems.</li>
            <li>To reply to you when you contact us.</li>
          </UL>
          <P>
            We do <B>not</B> use your health information for advertising, marketing profiles, or selling to anyone,
            and we do not use it to train AI models.
          </P>

          <H2>3. Who Can See Your Information</H2>
          <UL>
            <li><B>Only you:</B> your medications, doses, side effects, mood check-ins, journal, supplements, reminders, and saved posts.</li>
            <li><B>Care Partners you invite:</B> only the specific medication cards you share with them, until you revoke access.</li>
            <li><B>The community:</B> posts and comments you choose to publish, after they pass moderation. They appear without your name, email, or account ID.</li>
            <li><B>Our service providers</B> (Section 4), only as needed to run the Service.</li>
            <li><B>Authorities,</B> only when the law requires it, or when needed to protect someone&rsquo;s safety.</li>
          </UL>

          <H2>4. Service Providers</H2>
          <P>We use a small number of providers who process data on our behalf and may use it only to provide their service to us:</P>
          <UL>
            <li><B>Supabase</B>: database, authentication, and scheduled tasks (such as reminders). This is where your data is stored.</li>
            <li><B>Vercel</B>: hosts the web app and provides cookie-free traffic statistics.</li>
            <li><B>Stripe</B>: payment processing for MedMoods+ (<a href="https://stripe.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a>).</li>
            <li><B>Brevo</B>: sends account emails (sign-up confirmation, password reset) and the reminder emails you turn on.</li>
            <li><B>Google</B>: optional &ldquo;Continue with Google&rdquo; sign-in. We receive only your email address.</li>
            <li><B>OpenAI and Anthropic</B>: automated moderation of text you post publicly (Section 5).</li>
            <li><B>RxNorm (U.S. National Library of Medicine)</B>: medication name search. Only the search term is sent.</li>
            <li><B>Your browser&rsquo;s push service</B> (for example Apple, Google or Mozilla): delivers push notifications if you turn them on. The notification contains only a short reminder message.</li>
          </UL>

          <H2>5. Content Moderation</H2>
          <P>
            Before a post or comment is published, its text is checked by automated tools built on AI models from
            OpenAI and Anthropic, to catch content that breaks our Terms or suggests someone may be at risk of
            harm. Only the text you chose to share publicly is sent, never your name, email, or private entries.
            Content that is flagged may be held for human review.
          </P>

          <H2>6. We Do Not Sell or Share Your Data for Advertising</H2>
          <P>
            We do not sell your personal information or health data, we do not &ldquo;share&rdquo; it for cross-context
            behavioral advertising, and we do not allow advertisers or data brokers to collect it through the
            Service. There are no advertising cookies or trackers in MedMoods.
          </P>

          <H2>7. Cookies</H2>
          <P>
            MedMoods uses cookies only to keep you signed in. We do not use advertising or cross-site tracking
            cookies. Signing out removes the session cookie from your browser and signs you out on your other
            devices.
          </P>

          <H2>8. How We Protect Your Data</H2>
          <UL>
            <li>All traffic is encrypted in transit (HTTPS), and data is encrypted at rest by our database provider.</li>
            <li>Database access rules make sure each account can read only its own private records.</li>
            <li>Community posts do not expose any account identifier.</li>
            <li>Access to production systems is limited and protected with strong authentication.</li>
          </UL>
          <P>
            No system is perfectly secure. If we learn of a breach that affects your information, we will notify
            you and any required authorities as the law requires, and without unreasonable delay.
          </P>

          <H2>9. Your Choices and Rights</H2>
          <UL>
            <li><B>Access and download:</B> any signed-in user can download a complete copy of their data (JSON file) or a readable copy they can print or save as PDF, from Profile.</li>
            <li><B>Correct:</B> edit your entries, posts, and comments at any time.</li>
            <li><B>Delete:</B> delete individual entries, posts, or comments, or permanently delete your account from Profile. Deleting your account cancels any subscription and removes your data from our active systems right away.</li>
            <li><B>Reminders:</B> turn email or push reminders on or off at any time.</li>
            <li><B>Care Partners:</B> revoke a Care Partner&rsquo;s access at any time.</li>
            <li><B>Withdraw consent:</B> you can stop using the Service and delete your data at any time.</li>
          </UL>
          <P>
            Depending on where you live (for example California, Washington, Colorado, Connecticut, Virginia or
            Nevada), you may have additional rights: to know what we collect, to access, correct or delete it, to
            receive a copy, to opt out of sale or targeted advertising (we don&rsquo;t do either), to appeal a
            decision about your request, and to not be discriminated against for using these rights. To make a
            request, use the tools in the app or email <Mail />. We will respond within the time the law requires
            (usually 45 days). We may need to confirm the request comes from the account owner.
          </P>

          <H2>10. Consumer Health Data</H2>
          <P>
            Some state laws, including Washington&rsquo;s My Health My Data Act and Nevada&rsquo;s consumer health data law,
            give extra protection to &ldquo;consumer health data.&rdquo; In MedMoods, this includes the medications, doses,
            side effects, moods, symptoms, reminders and notes you record.
          </P>
          <UL>
            <li><B>What we collect and where it comes from:</B> the health information listed in Section 1. It comes directly from you, or from a Care Partner&rsquo;s notes on a card you shared.</li>
            <li><B>Why:</B> only to provide the features you use (Section 2).</li>
            <li><B>Who we share it with:</B> the service providers in Section 4, to operate the Service, and Care Partners you choose. We do not sell consumer health data.</li>
            <li><B>Consent:</B> we collect it because you choose to enter it. You can withdraw consent by deleting the data or your account.</li>
            <li><B>Your rights:</B> see Section 9. Email <Mail /> with the subject line &ldquo;Health data request.&rdquo;</li>
          </UL>

          <H2>11. How Long We Keep Data</H2>
          <P>
            We keep your data for as long as your account exists. When you delete an entry or your account, it is
            removed from our active systems immediately. Copies in our providers&rsquo; backups are overwritten on their
            normal schedule (typically within 30 days). Payment records kept by Stripe follow Stripe&rsquo;s own legal
            retention requirements. Guest accounts that are never used again may be deleted after 12 months of
            inactivity.
          </P>

          <H2>12. Children</H2>
          <P>
            MedMoods is intended for adults 18 and older. We do not knowingly collect information from anyone under
            18. If you believe a minor has created an account, contact <Mail /> and we will delete it.
          </P>

          <H2>13. Where Data Is Processed</H2>
          <P>MedMoods is operated from the United States, and your information is stored and processed in the United States.</P>

          <H2>14. Changes to This Policy</H2>
          <P>
            If we make material changes, we will update the date above and notify signed-in users in the app or by
            email before the changes take effect. We will never use health data you already gave us in a new way
            without asking you first.
          </P>

          <H2>15. Contact Us</H2>
          <P>Questions or requests about privacy: <Mail />.</P>
        </div>
      </main>
      <Footer />
    </>
  );
}
