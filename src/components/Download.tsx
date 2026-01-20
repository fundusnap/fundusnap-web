import { Apple, Download as DownloadIcon, Play } from "lucide-react";
import Image from "next/image";
import Logo from "./Logo";

export default function Download() {
  return (
    <section id="download" className="py-20 md:py-32 bg-gradient-to-br from-venice-blue via-venice-blue to-bleached-cedar relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-angel-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 mb-8">
              <Logo size={56} />
              <span className="font-display text-3xl font-bold text-white">
                Fundusnap
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Screening
              <br />
              <span className="text-angel-blue">Today</span>
            </h2>

            <p className="text-lg text-angel-blue/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Download Fundusnap and join thousands of healthcare professionals
              using AI-powered diabetic retinopathy screening to protect their
              patients&apos; vision.
            </p>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white text-bleached-cedar rounded-xl font-semibold hover:bg-fundusnap-white transition-all hover:shadow-xl group"
              >
                <Apple className="w-7 h-7 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-fundusnap-gray">Download on the</p>
                  <p className="text-lg font-bold">App Store</p>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white text-bleached-cedar rounded-xl font-semibold hover:bg-fundusnap-white transition-all hover:shadow-xl group"
              >
                <Play className="w-7 h-7 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-fundusnap-gray">Get it on</p>
                  <p className="text-lg font-bold">Google Play</p>
                </div>
              </a>

              <a
                href="https://github.com/fundusnap/fundusnap-app/releases/download/v1.0.0/Fundusnap-release-1.0.apk"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white text-bleached-cedar rounded-xl font-semibold hover:bg-fundusnap-white transition-all hover:shadow-xl group"
                target="_blank"
                rel="noreferrer"
              >
                <DownloadIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-fundusnap-gray">Direct download</p>
                  <p className="text-lg font-bold">Android APK</p>
                </div>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-8 text-sm text-angel-blue/70">
              <span>Free Download</span>
              <span>No Credit Card Required</span>
              <span>HIPAA Compliant</span>
            </div>
          </div>

          {/* Right - Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-64 sm:w-72 h-[520px] sm:h-[580px] bg-white/10 backdrop-blur-sm rounded-[3rem] p-3 border border-white/20">
                <div className="w-full h-full bg-fundusnap-white rounded-[2.5rem] overflow-hidden flex flex-col">
                  {/* App Header */}
                  <div className="bg-angel-blue px-6 py-4 flex justify-center">
                    <Logo size={32} />
                  </div>

                  {/* App Content */}
                  <div className="flex-1 flex flex-col items-center justify-center p-6">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden relative mb-6 shadow-lg">
                      <Image
                        src="/images/eye.png"
                        alt="Fundus scan"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="font-display text-xl font-semibold text-bleached-cedar mb-2 text-center">
                      Fundusnap
                    </p>
                    <p className="text-sm text-fundusnap-gray text-center">
                      Available on iOS & Android
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative floating element */}
              <div className="absolute -left-8 top-1/3 bg-white px-4 py-3 rounded-xl shadow-xl">
                <p className="text-sm font-semibold text-venice-blue">4.9 Rating</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Additional floating element with eye scan */}
              <div className="absolute -right-4 bottom-1/4 bg-white px-3 py-2 rounded-xl shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative">
                    <Image
                      src="/images/eye_row_alt.png"
                      alt="Eye scan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs font-medium text-venice-blue">AI Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
