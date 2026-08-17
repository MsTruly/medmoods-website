import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact & Support — MedMoods",
};

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-ink">Contact & Support</h1>

          <h2 className="mt-10 text-xl font-semibold text-ink">Get in Touch</h2>
          <p className="mt-3 text-muted leading-relaxed">
            We'd love to hear from you — whether you have a question,
            feedback, or need help with your account.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">Email Support</h2>
          <p className="mt-3 text-muted leading-relaxed">
            For any questions or support requests, email us at{" "}
            <a href="mailto:care@medmoods.com" className="text-primary hover:underline">
              care@medmoods.com
            </a>
            . We aim to respond within 24-48 hours.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">Common Questions</h2>
          <p className="mt-3 text-muted leading-relaxed">
            Looking for answers? Check our{" "}
            <Link href="/faq" className="text-primary hover:underline">
              FAQ & Help
            </Link>{" "}
            page for the most frequently asked questions.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">Report a Problem</h2>
          <p className="mt-3 text-muted leading-relaxed">
            If you're experiencing a bug or technical issue with the app,
            please include:
          </p>
          <ul className="mt-3 space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-primary">
            <li>A description of what happened</li>
            <li>What device and operating system you're using</li>
            <li>Any screenshots that might help</li>
          </ul>
          <p className="mt-3 text-muted leading-relaxed">
            Send these details to{" "}
            <a href="mailto:care@medmoods.com" className="text-primary hover:underline">
              care@medmoods.com
            </a>{" "}
            and we'll look into it.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-ink">Community Guidelines</h2>
          <p className="mt-3 text-muted leading-relaxed">
            If you'd like to report content that violates our community
            standards, you can flag any post directly in the app using the
            flag icon. You can also review our{" "}
            <Link href="/community-guidelines" className="text-primary hover:underline">
              Community Guidelines
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
