import { Camera, Cpu, FileText, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Capture or Upload",
    description:
      "Use your smartphone with a funduscope attachment to capture retinal images, or upload existing fundus photographs from your device.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Analysis",
    description:
      "Our advanced AI models analyze the image in seconds, detecting signs of diabetic retinopathy and identifying retinal artifacts with precision.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Review Results",
    description:
      "Get detailed classification results with probability scores, highlighted areas of concern, and visual markers on the fundus image.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Consult FundusAI",
    description:
      "Chat with our medical AI assistant to understand findings, explore treatment options, and get answers to your clinical questions.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-white to-fundusnap-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-angel-blue/30 rounded-full text-sm font-medium text-venice-blue mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-bleached-cedar mb-6">
            Simple, Fast, and
            <br />
            <span className="text-gradient">Accurate Screening</span>
          </h2>
          <p className="text-lg text-fundusnap-gray">
            Get from image capture to diagnosis in under a minute with our
            streamlined workflow designed for busy healthcare professionals.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-angel-blue via-venice-blue to-angel-blue" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="bg-white p-6 lg:p-8 rounded-2xl border border-angel-blue/20 hover:shadow-xl hover:shadow-angel-blue/10 transition-all duration-300 h-full">
                  {/* Number badge */}
                  <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-venice-blue to-angel-blue rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-venice-blue/25">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>

                  <div className="w-12 h-12 bg-angel-blue/30 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-venice-blue" />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-bleached-cedar mb-3">
                    {step.title}
                  </h3>
                  <p className="text-fundusnap-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
