import { Award, Users, Activity, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "75", label: "Clinic pilot target (2027)" },
  { icon: Activity, value: "2,000", label: "Patient pilot target (2027)" },
  { icon: Award, value: "Up to 70%", label: "Screening cost reduction" },
  { icon: Globe, value: "Up to 50%", label: "Specialist workload reduction" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-angel-blue/30 rounded-full text-sm font-medium text-venice-blue mb-4">
              About Fundusnap
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-bleached-cedar mb-6">
              Built for Earlier
              <br />
              <span className="text-gradient">DR Detection</span>
            </h2>
            <p className="text-lg text-fundusnap-gray mb-6">
              Indonesia is home to 20M+ people with diabetes, and 1 in 3 will
              develop diabetic retinopathy. Yet fewer than 6% of clinics are
              equipped to screen eyes, and fundus cameras cost more than
              IDR 100M, leaving rural areas without routine access to screening.
            </p>
            <p className="text-lg text-fundusnap-gray mb-8">
              Fundusnap closes this gap by turning a smartphone into a retinal
              screening tool using a low-cost lens and AI workflow that includes
              on-device preprocessing and cloud analysis. We start with a
              75-clinic, 2,000-patient pilot by 2027 and scale toward 3,378
              reachable Puskesmas and 2M patients across Indonesia.
            </p>

            {/* Mission statement */}
            <div className="p-6 bg-gradient-to-br from-angel-blue/40 to-venice-blue/10 rounded-2xl border border-angel-blue/30">
              <p className="text-venice-blue font-medium italic">
                &ldquo;We focus on affordable, explainable screening so primary care
                teams can triage patients early and reduce preventable vision
                loss.&rdquo;
              </p>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 bg-fundusnap-white rounded-2xl border border-angel-blue/20 text-center hover:shadow-lg hover:shadow-angel-blue/10 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-angel-blue/60 to-venice-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-venice-blue" />
                </div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-venice-blue mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-fundusnap-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
