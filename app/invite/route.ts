import { NextResponse, type NextRequest } from "next/server";

// Care-partner invites are accepted in the web app now. Invite emails sent
// before the move link here as /invite?token=<uuid>; forward them to
// app.medmoods.com with the token in the URL fragment (#token=), which
// browsers never send to a server, so it can't reach the app's request logs,
// referrers or analytics. The response is never cached and sends no referrer.

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const APP_INVITE_URL = "https://app.medmoods.com/invite";

export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token")?.trim() ?? "";
  // Only a well-formed invite token is carried over, exactly as received.
  const location = UUID_RE.test(token) ? `${APP_INVITE_URL}#token=${token}` : APP_INVITE_URL;
  return new NextResponse(null, {
    status: 307,
    headers: {
      Location: location,
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
    },
  });
}
