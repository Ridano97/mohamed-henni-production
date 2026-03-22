/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // ā… Force le bon domaine ā€” empĆŖche Vercel d'utiliser *.vercel.app comme canonical
  env: {
    NEXT_PUBLIC_SITE_URL: "https://www.mohamedhenniproduction.com",
  },

  turbopack: {
    root: new URL('.', import.meta.url).pathname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "videodelivery.net",
      },
    ],
  },
};

export default nextConfig;