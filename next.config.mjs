/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // Force le bon domaine
  env: {
    NEXT_PUBLIC_SITE_URL: "https://www.mohamedhenniproduction.com",
  },

  // ✅ AJOUT 1 — Redirections : non-www → www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'mohamedhenniproduction.com' }],
        destination: 'https://www.mohamedhenniproduction.com/:path*',
        permanent: true,
      },
    ];
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

  // ✅ AJOUT 2 — Headers SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
    ];
  },
};

export default nextConfig;