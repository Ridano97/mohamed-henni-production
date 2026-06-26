import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const DOMAIN = "https://mohamedhenniproduction.com";
const GTM_ID = "GTM-NK2PMXXB";

export const metadata = {
  metadataBase: new URL(DOMAIN),

  title: {
    default: "Mohamed Henni Production | Vidéaste & Réalisateur Dunkerque",
    template: "%s | Mohamed Henni Production",
  },
  description:
    "Vidéaste professionnel basé à Dunkerque, spécialisé en productions vidéo pour entreprises, industrie, événementiel et mariages dans le Nord et partout en France. Contactez-nous.",

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
    title: "Mohamed Henni Production | Vidéaste & Réalisateur Dunkerque",
    description:
      "Vidéaste professionnel basé à Dunkerque, spécialisé en productions vidéo pour entreprises, industrie, événementiel et mariages dans le Nord et partout en France.",
    images: [
      {
        url: `${DOMAIN}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Mohamed Henni Production – Vidéaste & Réalisateur Dunkerque",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohamed Henni Production | Vidéaste & Réalisateur Dunkerque",
    description:
      "Vidéaste professionnel basé à Dunkerque, spécialisé en productions vidéo pour entreprises, industrie, événementiel et mariages dans le Nord et partout en France.",
    images: [`${DOMAIN}/og-image.jpg`],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
      founder: { "@id": `${DOMAIN}/#person` },
      sameAs: [
        "https://www.facebook.com/MohamedHenniProd",
        "https://www.instagram.com/mohamed_henni/",
        "https://fr.linkedin.com/in/mohamed-henni-630187141",
      ],
    },
    {
      "@type": "Person",
      "@id": `${DOMAIN}/#person`,
      name: "Mohamed Henni",
      jobTitle: "Vidéaste professionnel",
      description:
        "Vidéaste professionnel basé à Dunkerque, spécialisé en productions vidéo pour entreprises, industrie, événementiel et mariages.",
      image: `${DOMAIN}/og-image.jpg`,
      url: DOMAIN,
      worksFor: { "@id": DOMAIN },
      sameAs: [
        "https://www.facebook.com/MohamedHenniProd",
        "https://www.instagram.com/mohamed_henni/",
        "https://fr.linkedin.com/in/mohamed-henni-630187141",
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* ── Preconnect Typekit & Cloudflare ── */}
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="" />
        <link rel="preconnect" href="https://iframe.cloudflarestream.com" />
        <link rel="preconnect" href="https://videodelivery.net" />

        {/* ── Typekit ── */}
        <link rel="stylesheet" href="https://use.typekit.net/dtz1fkj.css" />

        {/* ── Favicons ── */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Navbar />

        <main style={{ paddingTop: "80px" }}>{children}</main>

        <ScrollTop />
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
