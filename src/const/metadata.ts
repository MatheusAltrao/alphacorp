import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;
export const keywordsMetadata = [
  "cleaning services",
  "janitorial services",
  "professional cleaning",
  "commercial cleaning",
  "residential cleaning",
  "office cleaning",
  "deep cleaning",
  "maintenance services",
  "sanitization",
  "cleaning company",
];

export const categoryMetadata =
  "cleaning, janitorial, maintenance, professional services, sanitization, hygiene, commercial cleaning, residential cleaning";

export const METADADATA_TAGS: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "Alpha Corp | %s",
    default: "Alpha Corp",
  },

  description: "Alpha Janitorial Services Corporation Professional cleaning with guaranteed quality",
  icons: {
    icon: [
      {
        url: "/icon.jpeg",
      },
    ],
  },
  authors: [
    {
      name: "Alpha Corp",
      url: "https://www.alphajanitorialcorp.com",
    },
  ],
  twitter: {},
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Alpha Janitorial Services",
    description: "Professional janitorial and cleaning services with guaranteed quality.",
    siteName: "Alpha Janitorial Services",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Alpha Janitorial Services - Professional janitorial and cleaning services with guaranteed quality.",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": "/en",
    },
  },
  keywords: keywordsMetadata,
  category: categoryMetadata,
};
