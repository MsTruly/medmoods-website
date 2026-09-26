"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is MedMoods?",
    answer:
      "MedMoods is a medication experience tracking and sharing platform. You can log your own medication experiences privately, read real experiences other people have shared, and track your wellness — all without revealing your identity.",
  },
  {
    question: "Can I use MedMoods without downloading the app?",
    answer:
      "Yes! MedMoods is available as a web app at app.medmoods.com. You can track medications, browse experiences, and access all features from any browser.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. All posts are anonymous and no personal information is ever displayed. You can use MedMoods without creating an account. If you do create an account, it's only for syncing your data across devices — never for identification.",
  },
  {
    question: "Is MedMoods really anonymous?",
    answer:
      "Yes. You can use MedMoods without an email, name, or any identifying information. All posts are anonymous by default. Creating an account is optional and only needed for features like care partner sharing.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. MedMoods is designed to work without an account. You can browse, post, react, and track medications as a guest. Creating an account is optional and only needed if you want to sync your data across devices or protect it from loss.",
  },
  {
    question: "What is MedMoods+?",
    answer:
      "MedMoods+ is our premium tier that unlocks deeper personal tracking tools: mood and symptom daily tracking, dose and refill reminders (by email or phone notification), trends that compare before and after a dose change, supplement logging, a private journal, medication change timelines, weekly wellness summaries, visit prep, saved posts, care partner invites, and PDF exports for your doctor.",
  },
  {
    question: "How much does MedMoods+ cost?",
    answer:
      "MedMoods+ is $9.99/month or $39.99/year (save 67%). You can use all core features for free — premium unlocks mood tracking, dose and refill reminders, trends, medication timelines, journal, PDF export, and care partner access.",
  },
  {
    question: "How do I report a post?",
    answer:
      "Tap the flag icon on any post to report it for review. Our moderation team reviews all flagged content.",
  },
  {
    question: "How does moderation work?",
    answer:
      "Every post is automatically reviewed by our moderation system before appearing in the community feed. Posts containing harmful content, medical advice, or policy violations are flagged for additional review. Content that may indicate self-harm is handled with care, and we may provide supportive resources.",
  },
  {
    question: "Can I share my medication data with my doctor?",
    answer:
      "Yes — MedMoods+ lets you generate doctor-ready PDF summaries of your medication experience cards. You can share these with your healthcare provider at your next appointment.",
  },
  {
    question: "What is a care partner?",
    answer:
      "A care partner is a trusted person — like a family member, partner, or caregiver — who you invite to view your medication experience cards. You control exactly what they can see, and you can revoke access at any time. This feature is available with MedMoods+.",
  },
  {
    question: "How do I contact support?",
    answer: "Reach us at care@medmoods.com. We'd love to hear from you.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-primary transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FaqAccordion() {
  const [openStates, setOpenStates] = useState<boolean[]>(() =>
    faqs.map(() => false)
  );

  function toggle(index: number) {
    setOpenStates((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  }

  return (
    <div className="mt-8 space-y-4">
      {faqs.map((faq, index) => {
        const open = openStates[index];
        return (
          <div
            key={faq.question}
            className="rounded-2xl bg-white border border-primary/10 shadow-sm overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={open}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-ink">{faq.question}</span>
              <ChevronIcon open={open} />
            </button>
            {open && (
              <div className="px-6 pb-5 text-muted leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
