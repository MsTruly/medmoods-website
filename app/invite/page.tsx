import { Suspense } from "react";
import InviteClient from "@/components/InviteClient";

// Invite URLs carry a private token: render per request so the response is
// never cached (Next sends Cache-Control: no-store for dynamic pages).
export const dynamic = "force-dynamic";

export default function InvitePage() {
  return (
    <Suspense fallback={null}>
      <InviteClient />
    </Suspense>
  );
}
