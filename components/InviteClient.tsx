"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Logo";
import { supabase } from "@/lib/supabaseClient";

type Mode = "signin" | "signup";
type Status = "idle" | "loading" | "success" | "error";

const ACCEPT_INVITE_URL =
  "https://arpesgzfmielerqdpgcb.supabase.co/functions/v1/accept-invite";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFycGVzZ3pmbWllbGVycWRwZ2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1ODc2NzMsImV4cCI6MjA3OTE2MzY3M30.8jueV5CBstpaqURJst2evOdsidcYmqd_eh_WC78oLVU";

export default function InviteClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function acceptInvite(accessToken: string) {
    try {
      const res = await fetch(ACCEPT_INVITE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ token }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setMessage(
          data?.error ||
            data?.message ||
            "This invite could not be accepted. It may have expired, already been accepted, or belong to a different email address."
        );
        return;
      }

      setStatus("success");
      setMessage(
        "You're now connected as a care partner! Download the MedMoods app to get started."
      );
    } catch (err) {
      setStatus("error");
      setMessage(
        "Something went wrong while connecting to MedMoods. Please try again."
      );
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return;
    setStatus("loading");
    setMessage(null);

    try {
      const { data, error } =
        mode === "signin"
          ? await supabase.auth.signInWithPassword({ email, password })
          : await supabase.auth.signUp({ email, password });

      if (error) {
        setStatus("error");
        setMessage(error.message);
        return;
      }

      const accessToken = data.session?.access_token;

      if (!accessToken) {
        setStatus("error");
        setMessage(
          "Please check your email to confirm your account, then return to this link to finish connecting."
        );
        return;
      }

      await acceptInvite(accessToken);
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (!token) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-mint px-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-10 text-center">
          <div className="flex justify-center">
            <Logo size={40} />
          </div>
          <h1 className="mt-6 text-2xl font-semibold text-ink">Invalid invite link</h1>
          <p className="mt-3 text-muted">
            This invite link is missing or incomplete. Please ask your care
            partner to resend their invite.
          </p>
          <Link href="/" className="mt-8 inline-block text-primary font-medium hover:underline">
            Back to MedMoods
          </Link>
        </div>
      </main>
    );
  }

  if (status === "success") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-mint px-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-10 text-center">
          <div className="flex justify-center">
            <Logo size={40} />
          </div>
          <h1 className="mt-6 text-2xl font-semibold text-ink">You're connected!</h1>
          <p className="mt-3 text-muted">{message}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-mint px-6 py-16">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-10">
        <div className="flex flex-col items-center text-center">
          <Logo size={40} />
          <h1 className="mt-6 text-2xl font-semibold text-ink">
            You've been invited as a Care Partner
          </h1>
          <p className="mt-3 text-muted">
            Care partners can see the medication updates someone chooses to
            share with them, so they can offer support when it matters. Sign
            in or create an account to accept this invite.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 rounded-xl bg-mint p-1">
          <button
            type="button"
            onClick={() => setMode("signin")}
            className={`rounded-lg py-2 text-sm font-medium transition-colors ${
              mode === "signin" ? "bg-white text-primary shadow-sm" : "text-muted"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`rounded-lg py-2 text-sm font-medium transition-colors ${
              mode === "signup" ? "bg-white text-primary shadow-sm" : "text-muted"
            }`}
          >
            Create Account
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-ink mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink mb-1">Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
            />
          </div>

          {message && status === "error" && (
            <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">{message}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-primary text-white font-medium py-2.5 hover:bg-primary-dark transition-colors disabled:opacity-60"
          >
            {status === "loading"
              ? "Please wait…"
              : mode === "signin"
              ? "Sign In & Accept"
              : "Create Account & Accept"}
          </button>
        </form>
      </div>
    </main>
  );
}
