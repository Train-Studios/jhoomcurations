import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "./site-data";

const title = "Jhoom Curations by Amilohit | Dance for Everyone";
const description = "Personalised, joyful and beginner-friendly dance choreography for all ages, abilities and experience levels. Dance your heart out with Jhoom Curations by Amilohit.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://jhoom-curations.vikasgudimanchi1.chatgpt.site"),
  icons: { icon: "/logo.png", shortcut: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Jhoom Curations by Amilohit",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Jhoom Curations by Amilohit" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export const viewport: Viewport = {
  themeColor: "#A63E23",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DanceSchool",
  name: "Jhoom Curations by Amilohit",
  description,
  email: CONTACT_EMAIL,
  sameAs: [INSTAGRAM_URL],
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
