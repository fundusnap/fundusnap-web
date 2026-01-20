import { Brain, Camera, MessageSquare, FolderOpen, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Easy Image Capture",
    description:
      "Capture fundus images directly with your smartphone using a special lens attachment, or upload existing images for analysis.",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Advanced machine learning models trained on thousands of retinal images provide accurate diabetic retinopathy detection.",
  },
  {
    icon: MessageSquare,
    title: "FundusAI Assistant",
    description:
      "Chat with our medical AI assistant to understand results, ask questions, and get detailed explanations about findings.",
  },
  {
    icon: FolderOpen,
    title: "Case Management",
    description:
      "Organize patient scans with an intuitive case management system. Track history, add notes, and monitor progression.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description:
      "Your data is encrypted and stored securely on Azure cloud infrastructure, meeting healthcare compliance standards.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Designed for healthcare professionals on the go. Access patient data and perform screenings anywhere, anytime.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-angel-blue/30 rounded-full text-sm font-medium text-venice-blue mb-4">
            Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-bleached-cedar mb-6">
            Everything You Need for
            <br />
            <span className="text-gradient">Retinal Screening</span>
          </h2>
          <p className="text-lg text-fundusnap-gray">
            Fundusnap combines powerful AI technology with an intuitive interface
            to streamline diabetic retinopathy detection for healthcare
            professionals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 bg-fundusnap-white rounded-2xl border border-angel-blue/20 hover:border-angel-blue/40 hover:shadow-xl hover:shadow-angel-blue/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-angel-blue/60 to-venice-blue/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-venice-blue" />
              </div>
              <h3 className="font-display text-xl font-semibold text-bleached-cedar mb-3">
                {feature.title}
              </h3>
              <p className="text-fundusnap-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
