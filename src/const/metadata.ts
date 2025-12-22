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
    icon: "/favicon.ico",
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
    locale: "pt-BR",
    url: `${BASE_URL}`,
    title: "",
    description: "",
    siteName: "",
    images: [
      {
        url: "",
        alt: "",
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
