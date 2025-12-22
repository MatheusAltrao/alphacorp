import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alpha Corp - Professional Cleaning Services",
    short_name: "Alpha Corp",
    description: "Alpha Janitorial Services Corporation Professional cleaning with guaranteed quality",
    start_url: "/",
    display: "standalone",
    background_color: "#16A349",
    theme_color: "#fff",
  };
}
