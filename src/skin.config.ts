interface SkinConfig {
  brandName: string;
  tagline: string;
  heroVariant: "video" | "search" | "image" | "simple";
  primaryFacilitySlug?: string;
  contactPhone?: string;
  contactEmail?: string;
  primaryAddress?: { line1: string; city: string; state: string; zip: string };
}

const skinConfig: SkinConfig = {
  brandName: "Go Local Interactive",
  tagline: "Secure self-storage from Go Local Interactive.",
  heroVariant: "search",
};

export default skinConfig;
