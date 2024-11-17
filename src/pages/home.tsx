import { useState } from "react";
import { SEO } from "../components/global";
import CookieConsent from "../components/global/CookieConsent";

const partners = [
  { src: "/images/DHVC.png", alt: "DHVC" },
  { src: "/images/partner-14.png", alt: "Partner 14" },
  { src: "/images/partner-12.png", alt: "Partner 12" },
  { src: "/images/partner-6.png", alt: "Partner 6" },
  { src: "/images/hash.png", alt: "Hash" },
  { src: "/images/metis.png", alt: "Metis" },
  { src: "/images/hamany.png", alt: "Hamany" },
  { src: "/images/partner-5.png", alt: "Partner 5" },
  { src: "/images/partner-9.png", alt: "Partner 9" },
  { src: "/images/partner-7.png", alt: "Partner 7" },
  { src: "/images/BifrostImg.png", alt: "Bifrost" },
  { src: "/images/partner-10.png", alt: "Partner 10" },
];

const newsPartners = [
  { src: "/images/newsfile.png", alt: "Newsfile", height: "h-[55px]" },
  { src: "/images/yahoo.png", alt: "Yahoo Finance" },
  { src: "/images/newsbtc.png", alt: "NewsBTC" },
  { src: "/images/ap.png", alt: "AP" },
  { src: "/images/coinspeaker.png", alt: "Coinspeaker" },
];

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <SEO title="Home" />

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center relative z-10"
        style={{
          backgroundImage: "url('/images/home_banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div
            className="animate-slideInRight"
            style={{
              animation: "lightSpeedInRight 1s ease-out",
            }}
          >
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
              MEMO
            </h1>
            <p className="text-3xl font-semibold mb-3 text-gray-100">
              Decentralized Storage Designed For Your Future
            </p>
            <p className="text-xl text-gray-400 mb-12">
              — Outlast human civilization
            </p>
            <button
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-green-400 text-white text-lg font-medium rounded-full hover:opacity-90 transition-opacity"
              style={{
                animation: "lightSpeedInLeft 1s ease-out",
              }}
            >
              Start for Free
            </button>
          </div>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80 pointer-events-none"
          aria-hidden="true"
        ></div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            Our Technology
          </h2>
          <p className="text-center text-gray-400 mb-12">
            MEMO provides decentralized information storage support for web3
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "/images/2.png",
                title: "Safety",
                desc: "Smart contract settlement; Encryption control, user self-sovereignty over data; Public verification mechanism, ensure storage safety.",
              },
              {
                icon: "/images/1.png",
                title: "Reliability",
                desc: "Multi-level fault tolerance mechanism; Decentralized storage of data, no centralized control; RAFI data recovery mechanism.",
              },
              {
                icon: "/images/3.png",
                title: "High-efficiency",
                desc: "Tiered data architecture design; Low on-chain overhead to improve system processing capability; Low communication overhead to improve data transfer speed.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-gray-700 rounded-lg hover:-translate-y-2 transition-transform border border-gray-600"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-16 w-16 mb-4"
                />
                <h3 className="text-xl font-bold mb-4 text-gray-100">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            Designing A New Era Of Decentralized Storage
          </h2>
          <p className="text-gray-400 mb-12">
            Memo seeks to continuously explore new methods of storage and design
            that will last until the end of time.
          </p>
          <button
            onClick={() => setShowVideo(true)}
            className="relative inline-flex items-center justify-center p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <span className="absolute w-16 h-16 border-2 border-blue-500 rounded-full animate-ping"></span>
            <svg
              className="w-12 h-12 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Decentralized Applications Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            Powering Decentralized Applications
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Build a reliable data storage foundation for WEB3.0
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/images/Application.png"
                alt="Decentralized Applications"
                className="w-full h-auto"
              />
            </div>

            {/* Right side - Features */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-100">
                  Metaverse & NFT
                </h3>
                <p className="text-gray-400">
                  Provide decentralized underlying data storage technology for
                  Metaverse&NFT to open up data value transfer channels, and
                  help human civilization survive forever.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-100">
                  Web 3.0
                </h3>
                <p className="text-gray-400">
                  Memo provides extensible and adaptable storage layers to Web
                  3.0 to deal with the exponential growth in data volume and to
                  support the Internet of value with data as a factor of
                  production.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-100">dApps</h3>
                <p className="text-gray-400">
                  Provide development support for dApps, improve data response
                  speed and reliability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 hover:bg-gray-700 transition-colors rounded-lg"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-h-12 w-auto filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            In the News
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {newsPartners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className={`${
                    partner.height || "h-12"
                  } w-auto filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            Roadmap
          </h2>

          {/* Desktop Timeline (hidden on mobile) */}
          <div className="hidden lg:block">
            <img
              src="/images/roadmap-desktop.png"
              alt="MEMO Roadmap Background"
              className="w-full h-auto"
            />
          </div>

          {/* Mobile Timeline (hidden on desktop) */}
          <div className="lg:hidden relative">
            <img
              src="/images/roadmap-mobile-line.png"
              alt="MEMO Roadmap Background"
              className="w-full h-auto"
            />

            <div className="absolute top-0 left-8 space-y-24">
              <div className="relative">
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">Q3 2017</h3>
                  <p className="text-gray-300">Project Start</p>
                </div>
              </div>

              <div className="relative">
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">Q1 2018</h3>
                  <p className="text-gray-300">
                    System Architecture Design 1.0
                  </p>
                  <p className="text-sm text-gray-400">White Paper 1.0</p>
                </div>
              </div>

              <div className="relative">
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">Q4 2019</h3>
                  <p className="text-gray-300">
                    Implement Basic Storage Function
                  </p>
                  <p className="text-sm text-gray-400">
                    Integrate Blockchain Payment and Incentive System
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">Q3 2020</h3>
                  <p className="text-gray-300">
                    Upgrade the Proof of Data Storage
                  </p>
                  <p className="text-sm text-gray-400">Security Audit</p>
                </div>
              </div>

              <div className="relative">
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">Q2 2021</h3>
                  <p className="text-gray-300">Phecda Test Network Online</p>
                  <p className="text-sm text-gray-400">
                    Start the Provider/User Test
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">Q4 2022</h3>
                  <p className="text-gray-300">Megrez Version Online</p>
                </div>
              </div>

              <div className="relative">
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">Q2 2023</h3>
                  <p className="text-gray-300">
                    Data Verification, and data wallets
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">Q2 2024</h3>
                  <p className="text-gray-300">
                    Improved Storage Ecosystem, Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Consent */}
      <CookieConsent />

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative">
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              onClick={() => setShowVideo(false)}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <video
              className="w-[90vw] max-w-[930px] aspect-video rounded-lg"
              controls
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
