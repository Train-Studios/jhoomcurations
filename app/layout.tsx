import type { Metadata } from "next";
import "./globals.css";

const title = "Jhoom Curations by AmiLohith | Dance for Everyone";
const description = "Personalised, joyful and beginner-friendly dance choreography for all ages, abilities and experience levels. Dance your heart out with Jhoom Curations by AmiLohith.";

export const metadata: Metadata = {
  title,
  description,
  themeColor: "#4b123f",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title, description, type: "website", siteName: "Jhoom Curations by AmiLohith" },
  twitter: { card: "summary", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DanceSchool",
  name: "Jhoom Curations by AmiLohith",
  description,
  email: "hello@jhoomcurations.com",
  availableLanguage: ["English", "Hindi", "Telugu"],
  serviceType: ["Dance classes", "Personal choreography", "Wedding choreography"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
