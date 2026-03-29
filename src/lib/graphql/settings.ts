import { fetchGraphQL } from "./fetcher";
import { GET_SITE_SETTINGS } from "./queries/settings";

export type SiteSettings = {
  title: string;
  description: string;
  url: string;
  logoUrl: string | null;
  logoAlt: string;
  logoWidth: number | null;
  logoHeight: number | null;
};

const FALLBACK: SiteSettings = {
  title: "Banglay IELTS & Immigration Center",
  description: "& Immigration Center",
  url: "/",
  logoUrl: "https://new.biic.com.bd/wp-content/uploads/2025/12/BIIC-LOGO-F1.svg",
  logoAlt: "BIIC Global",
  logoWidth: 200,
  logoHeight: 56,
};

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const data = await fetchGraphQL(GET_SITE_SETTINGS);

    const g = data?.generalSettings;
    const logoNode = data?.siteSettings?.logo?.node;

    return {
      title: g?.title || FALLBACK.title,
      description: g?.description || FALLBACK.description,
      url: g?.url || FALLBACK.url,
      logoUrl: logoNode?.sourceUrl || FALLBACK.logoUrl,
      logoAlt: logoNode?.altText || g?.title || FALLBACK.logoAlt,
      logoWidth: logoNode?.mediaDetails?.width || FALLBACK.logoWidth,
      logoHeight: logoNode?.mediaDetails?.height || FALLBACK.logoHeight,
    };
  } catch {
    return FALLBACK;
  }
}
