import { Suspense } from "react";
import InviteClient from "@/components/InviteClient";

export default function InvitePage() {
  return (
    <Suspense fallback={null}>
      <InviteClient />
    </Suspense>
  );
}
