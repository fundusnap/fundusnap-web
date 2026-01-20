import Image from "next/image";

const achievements = [
  {
    title: "3rd Winner elevAIte Microsoft x Biji-biji Initiative Hackathon 2025",
    date: "June 2025",
    location: "Tel-U Hub",
    highlight: "3rd Winner",
    competitionImage: "/images/elevaite.png",
    organizers: [
      { name: "Microsoft", logo: "/images/microsoft.png" },
      { name: "Biji-biji Initiative", logo: "/images/biji-biji.png" },
      { name: "Telkom University", logo: "/images/telkom-university.png" },
    ],
  },
  {
    title: "Top 6 Finalist Digination Fest PPI Hackathon 2025",
    date: "June 2025",
    location: "Digination Fest",
    highlight: "Top 6 Finalist",
    competitionImage: "/images/digination.png",
    organizers: [
      {
        name: "Perhimpunan Pelajar Indonesia Dunia",
        logo: "/images/perhimpunan-pelajar-indonesia-dunia.png",
      },
    ],
  },
  {
    title: "Top 30 Pikiran Terbaik Negeri x elevAIte 2025",
    date: "July 2025",
    location: "Pikiran Terbaik Negeri",
    highlight: "Top 30",
    competitionImage: "/images/ptn-x-elevaite.png",
    organizers: [
      { name: "Yayasan BUMN", logo: "/images/yayasan-bumn.webp" },
      { name: "Microsoft", logo: "/images/microsoft.png" },
      { name: "Biji-biji Initiative", logo: "/images/biji-biji.png" },
    ],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-fundusnap-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-angel-blue/30 rounded-full text-sm font-medium text-venice-blue mb-4">
            Achievements
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-bleached-cedar mb-6">
            Recognized by
            <br />
            <span className="text-gradient">Leading Innovators</span>
          </h2>
          <p className="text-lg text-fundusnap-gray">
            Fundusnap has earned recognition across Indonesia&apos;s health-tech and
            AI innovation ecosystem for its impact on diabetic retinopathy
            screening.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-angel-blue/20 bg-white shadow-sm hover:shadow-xl hover:shadow-angel-blue/10 transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-venice-blue/20 via-angel-blue/20 to-fundusnap-white">
                <Image
                  src={achievement.competitionImage}
                  alt={achievement.title}
                  fill
                  className="object-contain p-8"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-venice-blue">
                  {achievement.highlight}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-fundusnap-gray mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-angel-blue/20 text-venice-blue font-medium">
                    {achievement.date}
                  </span>
                  <span>{achievement.location}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-bleached-cedar mb-4">
                  {achievement.title}
                </h3>

                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wide text-fundusnap-gray">
                    Organized by
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    {achievement.organizers.map((organizer, orgIndex) => (
                      <div
                        key={orgIndex}
                        className="relative h-10 w-24 rounded-lg bg-fundusnap-white border border-angel-blue/20 flex items-center justify-center px-2"
                      >
                        <Image
                          src={organizer.logo}
                          alt={organizer.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
