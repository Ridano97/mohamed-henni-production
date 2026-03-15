import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
 
const DOMAIN = "https://www.mohamedhenniproduction.com"; // ✅ DOMAINE FINAL
 
export const metadata = {
  metadataBase: new URL(DOMAIN),
 
  title: {
    default: "Mohamed Henni Production | Vidéaste Dunkerque",
    template: "%s | Mohamed Henni Production",
  },
  description:
    "Vidéaste professionnel basé à Dunkerque. Productions vidéo pour entreprises, industrie, événementiel et mariages dans le Nord et partout en France.",
 
  keywords: [
    "vidéaste Dunkerque",
    "production vidéo Dunkerque",
    "vidéaste entreprise Nord",
    "film institutionnel Dunkerque",
    "vidéo événementiel Nord",
    "vidéo mariage Dunkerque",
    "vidéaste industrie",
    "Mohamed Henni Production",
    "MHP production",
    "tournage vidéo Nord-Pas-de-Calais",
  ],
 
  authors: [{ name: "Mohamed Henni", url: DOMAIN }],
  creator: "Mohamed Henni",
  publisher: "Mohamed Henni Production",
 
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: DOMAIN,
    siteName: "Mohamed Henni Production",
    title: "Mohamed Henni Production | Vidéaste Dunkerque",
    description:
      "Vidéaste professionnel basé à Dunkerque. Productions vidéo pour entreprises, industrie, événementiel et mariages.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Henni Production – Vidéaste Dunkerque",
      },
    ],
  },
 
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Henni Production | Vidéaste Dunkerque",
    description:
      "Vidéaste professionnel basé à Dunkerque. Productions vidéo pour entreprises, industrie, événementiel et mariages.",
    images: ["/og-image.jpg"],
  },
 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
 
  alternates: {
    canonical: DOMAIN,
  },
};
 
// ── Schema.org JSON-LD — LocalBusiness ──
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": DOMAIN,
  name: "Mohamed Henni Production",
  legalName: "MOHAMED HENNI PRODUCTION",
  description:
    "Vidéaste professionnel basé à Dunkerque spécialisé en productions vidéo pour entreprises, industrie, événementiel et mariages.",
  url: DOMAIN,
  telephone: "+33760121990",
  email: "mohamedhenniproduction@gmail.com",
  image: `${DOMAIN}/og-image.jpg`,
  logo: `${DOMAIN}/logo.png`,
  priceRange: "€€",
  vatID: "911 661 122",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1403 Rue du Banc Vert",
    addressLocality: "Dunkerque",
    addressRegion: "Hauts-de-France",
    postalCode: "59640",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.0343,
    longitude: 2.3767,
  },
  areaServed: [
    { "@type": "City", name: "Dunkerque" },
    { "@type": "City", name: "Lille" },
    { "@type": "State", name: "Hauts-de-France" },
    { "@type": "Country", name: "France" },
  ],
  serviceType: [
    "Production vidéo entreprise",
    "Vidéo industrielle",
    "Vidéo événementielle",
    "Vidéo mariage",
    "Film institutionnel",
  ],
  sameAs: [
    "https://www.facebook.com/MohamedHenniProd",
    "https://www.instagram.com/mohamed_henni/",
    "https://fr.linkedin.com/in/mohamed-henni-630187141",
  ],
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* ── Preconnect Typekit & Cloudflare ── */}
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="" />
        <link rel="preconnect" href="https://iframe.cloudflarestream.com" />
        <link rel="preconnect" href="https://videodelivery.net" />
 
        {/* ── Typekit non-bloquant — fix render blocking (-710ms) ── */}
        <link
          rel="preload"
          href="https://use.typekit.net/dtz1fkj.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link rel="stylesheet" href="https://use.typekit.net/dtz1fkj.css" />
        </noscript>
 
        {/* ── Favicons ── */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body suppressHydrationWarning>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main style={{ paddingTop: "80px" }}>{children}</main>
        <ScrollTop />
        <Footer />
      </body>
    </html>
  );
}
 