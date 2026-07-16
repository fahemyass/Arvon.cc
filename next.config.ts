import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: "https://nttaoaguepxfyngfqaco.supabase.co/storage/v1/object/public/web/site",
};

export default nextConfig;
