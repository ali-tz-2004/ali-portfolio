import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ali-tag.ir"),

  title: "Ali Taghizadeh | Full Stack Developer",

  description:
    "Ali Taghizadeh is a Full Stack Developer specializing in React, Next.js, Angular, ASP.NET Core and SQL Server.",

  keywords: [
    "Ali Taghizadeh",
    "Ali Taghizadeh Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Angular Developer",
    "ASP.NET Core Developer",
  ],

  authors: [
    {
      name: "Ali Taghizadeh",
      url: "https://ali-tag.ir",
    },
  ],

  creator: "Ali Taghizadeh",

  alternates: {
    canonical: "https://ali-tag.ir",
  },

  openGraph: {
    title: "Ali Taghizadeh | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Angular, ASP.NET Core and SQL Server.",
    url: "https://ali-tag.ir",
    siteName: "Ali Taghizadeh",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Ali Taghizadeh",
                  url: "https://ali-tag.ir",
                  jobTitle: "Full Stack Developer",
                  sameAs: [
                    "https://www.linkedin.com/in/ali-taghizadeh-b167361b/",
                    "https://github.com/ali-tz-2004",
                    "https://www.hackerrank.com/profile/alitz138",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Ali Taghizadeh",
                  url: "https://ali-tag.ir",
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
