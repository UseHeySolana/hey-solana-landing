import type { Metadata } from "next";

const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.maskyray.heysolana";

export const metadata: Metadata = {
  title: "Download Orova - AI Voice Powered Wallet",
  description:
    "Download Orova on Google Play and start using an AI voice powered wallet for DeFi and crypto transactions.",
  alternates: {
    canonical: "https://heyorova.com/download",
  },
  openGraph: {
    title: "Download Orova - AI Voice Powered Wallet",
    description:
      "Get Orova on Google Play and manage crypto with an AI voice powered wallet.",
    url: "https://heyorova.com/download",
    siteName: "Orova",
    type: "website",
  },
};

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-16 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            name: "Orova",
            operatingSystem: "Android",
            applicationCategory: "FinanceApplication",
            description:
              "Orova is an AI voice powered wallet for DeFi and crypto transactions.",
            url: "https://heyorova.com/download",
            downloadUrl: playStoreUrl,
            sameAs: [playStoreUrl],
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      <section className="mx-auto flex max-w-4xl flex-col items-center rounded-[32px] border border-darkpink/30 bg-white/5 p-8 text-center md:p-14">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-darkpink">
          Download Orova
        </p>
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Get Orova on your phone
        </h1>
        <p className="mb-8 max-w-2xl text-base text-gray-300 md:text-lg">
          Use your voice to manage crypto, explore market insights, and move
          faster across DeFi with Orova.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full bg-gradient-to-b from-lightpink to-darkpink px-8 py-4 text-lg font-semibold text-white"
          >
            Get it on Google Play -&gt;
          </a>
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-full border border-footergrey px-8 py-4 text-lg font-semibold text-footergrey"
          >
            iOS App Store coming soon
          </button>
        </div>
      </section>
    </main>
  );
}
