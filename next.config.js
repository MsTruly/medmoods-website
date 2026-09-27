/** @type {import('next').NextConfig} */

// Same baseline as app.medmoods.com. HSTS is left to Vercel's default
// (max-age=63072000, no includeSubDomains) until every medmoods.com
// subdomain is confirmed to serve HTTPS.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  // Baseline policy: no plugins, no <base> hijacking, and only MedMoods may frame its pages.
  { key: "Content-Security-Policy", value: "object-src 'none'; base-uri 'self'; frame-ancestors 'self'" },
];

const nextConfig = {
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Invite links carry a private token in the URL: never send it on as a
      // referrer and never cache the page. (Listed last so it overrides the
      // site-wide Referrer-Policy.)
      {
        source: "/invite",
        headers: [
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "Cache-Control", value: "no-store" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
