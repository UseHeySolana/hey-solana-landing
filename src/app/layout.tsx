import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const dmsans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Orova",
              url: "https://heyorova.com",
              description: "Orova is an AI Voice Powered Wallet for DeFi and all transactions.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://heyorova.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <title>Orova - AI Voice Powered Wallet</title>
        <meta
          name="description"
          content="Orova is an AI Voice Powered Wallet that you can use for DeFi and all transactions. Secure, fast, and user-friendly crypto wallet."
        />
      </head>
      <body
        className={`${dmsans.variable} bg-[url('/pngs/hero.png')] bg-black bg-contain antialiased`}
      >
        <div className="z-50">
          <Navigation />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}