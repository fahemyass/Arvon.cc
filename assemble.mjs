import { readFileSync, writeFileSync } from 'fs';
const files = [
 ".env.production","postcss.config.mjs","package.json","tsconfig.json",
 "src/app/about/page.tsx","src/app/app/page.tsx","src/app/contact/page.tsx","src/app/download/page.tsx",
 "src/app/events/page.tsx","src/app/globals.css","src/app/layout.tsx","src/app/page.tsx",
 "src/app/partner/page.tsx","src/app/venues/page.tsx",
 "src/components/Button.tsx","src/components/ContactForm.tsx","src/components/EventCard.tsx",
 "src/components/Eyebrow.tsx","src/components/Footer.tsx","src/components/Marquee.tsx",
 "src/components/Nav.tsx","src/components/NotifyForm.tsx","src/components/PageHero.tsx",
 "src/components/PartnerForm.tsx","src/components/PhoneMock.tsx","src/components/Reveal.tsx",
 "src/components/VenueCard.tsx","src/lib/asset.ts","src/lib/queries.ts","src/lib/supabase.ts",
];
const out = files.map(f => ({ file: f, data: readFileSync(f,'utf8') }));
// safe Vercel config: normal Next build, Vercel serves _next; images unoptimized (plain <img>)
out.push({ file: "next.config.ts", data:
`import type { NextConfig } from "next";\nconst nextConfig: NextConfig = { trailingSlash: true, images: { unoptimized: true } };\nexport default nextConfig;\n` });
writeFileSync("_deploy-fresh.json", JSON.stringify(out));
console.log("files:", out.length, " bytes:", JSON.stringify(out).length);
