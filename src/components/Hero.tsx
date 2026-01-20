import { Eye, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-fundusnap-white via-angel-blue/10 to-fundusnap-white" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-angel-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-venice-blue/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-angel-blue/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-venice-blue rounded-full animate-pulse" />
              <span className="text-sm font-medium text-venice-blue">
                AI-Powered Healthcare
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-bleached-cedar leading-tight mb-6">
              Detect Diabetic
              <br />
              <span className="text-gradient">Retinopathy</span>
              <br />
              with AI Precision
            </h1>

            <p className="text-lg text-fundusnap-gray max-w-xl mx-auto lg:mx-0 mb-8">
              Fundusnap empowers healthcare professionals with instant, accurate
              diabetic retinopathy screening using advanced AI analysis of fundus
              images.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="#download"
                className="px-8 py-4 bg-venice-blue text-white rounded-full font-semibold text-lg hover:bg-venice-blue/90 transition-all hover:shadow-xl hover:shadow-venice-blue/25 hover:-translate-y-0.5"
              >
                Download for Free
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 bg-angel-blue/40 text-venice-blue rounded-full font-semibold text-lg hover:bg-angel-blue/60 transition-all"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-fundusnap-gray">
                <Shield size={18} className="text-venice-blue" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-fundusnap-gray">
                <Zap size={18} className="text-venice-blue" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-fundusnap-gray">
                <Eye size={18} className="text-venice-blue" />
                <span>AI-Powered</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-72 sm:w-80 h-[580px] sm:h-[640px] bg-bleached-cedar rounded-[3rem] p-3 shadow-2xl shadow-bleached-cedar/30">
                {/* Screen */}
                <div className="w-full h-full bg-fundusnap-white rounded-[2.5rem] overflow-hidden">
                  {/* App Header */}
                  <div className="bg-angel-blue px-6 py-5">
                    <h3 className="font-display text-xl font-semibold text-bleached-cedar text-center">
                      Fundusnap
                    </h3>
                  </div>

                  {/* App Content */}
                  <div className="p-5">
                    <h4 className="text-2xl font-bold text-bleached-cedar mb-2">
                      Welcome, Dr. Smith
                    </h4>
                    <p className="text-sm text-fundusnap-gray mb-5">
                      Start scanning to detect diabetic retinopathy.
                    </p>

                    {/* Start Scan Button */}
                    <button className="w-full py-4 bg-angel-blue/60 rounded-xl text-bleached-cedar font-semibold mb-6">
                      Start Scan
                    </button>

                    {/* Recent Scans */}
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="font-semibold text-bleached-cedar">Recent Scans</h5>
                      <span className="text-sm text-venice-blue">View All</span>
                    </div>

                    {/* Scan Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-xl p-3 shadow-sm border border-angel-blue/20">
                        <div className="w-full h-20 rounded-lg mb-2 overflow-hidden relative">
                          <Image
                            src="/images/eye_row.png"
                            alt="Eye scan"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-bleached-cedar">New Snap (1)</p>
                        <p className="text-xs text-fundusnap-gray">Jan 20, 2026</p>
                        <span className="inline-block mt-1 text-xs text-venice-blue bg-angel-blue/30 px-2 py-0.5 rounded">
                          Completed
                        </span>
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-sm border border-angel-blue/20">
                        <div className="w-full h-20 rounded-lg mb-2 overflow-hidden relative">
                          <Image
                            src="/images/eye_row_alt.png"
                            alt="Eye scan"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-bleached-cedar">New Snap (2)</p>
                        <p className="text-xs text-fundusnap-gray">Jan 19, 2026</p>
                        <span className="inline-block mt-1 text-xs text-venice-blue bg-angel-blue/30 px-2 py-0.5 rounded">
                          Completed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -left-8 top-1/4 bg-white px-4 py-3 rounded-2xl shadow-lg border border-angel-blue/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-bleached-cedar">Secure</p>
                    <p className="text-xs text-fundusnap-gray">Data Protected</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/3 bg-white px-4 py-3 rounded-2xl shadow-lg border border-angel-blue/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative">
                    <Image
                      src="/images/eye.png"
                      alt="Fundus scan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-bleached-cedar">AI Analysis</p>
                    <p className="text-xs text-fundusnap-gray">Fundus Scan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
