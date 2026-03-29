import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { getSiteSettings } from "@/lib/graphql/settings";

const geist = Geist({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: {
      default: `${settings.title} - Your Gateway to Global Education`,
      template: `%s | ${settings.title}`,
    },
    description:
      "Your trusted partner for studying abroad in UK, USA, Canada, Australia and more.",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();

  // Split WordPress site title into name + tagline if formatted as "Name | Tagline"
  const [siteName, tagline] = settings.title.includes("|")
    ? settings.title.split("|").map((s) => s.trim())
    : [settings.title, settings.description || "& Immigration Center"];

  return (
    <html lang="en">
      <body className={`${geist.className} bg-white text-gray-900`}>
        <Header
          siteName={siteName}
          tagline={tagline}
          logoUrl={settings.logoUrl}
          logoAlt={settings.logoAlt}
          logoWidth={settings.logoWidth}
          logoHeight={settings.logoHeight}
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
