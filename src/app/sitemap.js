// src/app/sitemap.js
// Next.js génère automatiquement /sitemap.xml à partir de ce fichier
 
const DOMAIN = "https://mohamed-henni-production.vercel.app";
 
export default function sitemap() {
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${DOMAIN}/projets`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
 