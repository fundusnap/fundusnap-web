import Image from "next/image";

import elevaiteImg from "@/assets/images/elevaite.png";
import microsoftImg from "@/assets/images/microsoft.png";
import bijiBijiImg from "@/assets/images/biji-biji.png";
import telkomUniversityImg from "@/assets/images/telkom-university.png";
import diginationImg from "@/assets/images/digination.png";
import ppiImg from "@/assets/images/perhimpunan-pelajar-indonesia-dunia.png";
import ptnElevaiteImg from "@/assets/images/ptn-x-elevaite.png";
import yayasanBumnImg from "@/assets/images/yayasan-bumn.webp";

const achievements = [
  {
    title: "3rd Winner elevAIte Microsoft x Biji-biji Hackathon 2025 at Tel-U Hub",
    date: "June 2025",
    highlight: "3rd Winner",
    competitionImage: elevaiteImg,
    organizers: [
      { name: "Microsoft", logo: microsoftImg },
      { name: "Biji-biji Initiative", logo: bijiBijiImg },
      { name: "Telkom University", logo: telkomUniversityImg },
    ],
  },
  {
    title: "Top 6 Finalist Digination Fest PPI Hackathon 2025",
    date: "June 2025",
    highlight: "Top 6 Finalist",
    competitionImage: diginationImg,
    organizers: [
      {
        name: "Perhimpunan Pelajar Indonesia Dunia",
        logo: ppiImg,
      },
    ],
  },
  {
    title: "Top 30 Pikiran Terbaik Negeri x elevAIte 2025",
    date: "July 2025",
    highlight: "Top 30",
    competitionImage: ptnElevaiteImg,
    organizers: [
      { name: "Yayasan BUMN", logo: yayasanBumnImg },
      { name: "Microsoft", logo: microsoftImg },
      { name: "Biji-biji Initiative", logo: bijiBijiImg },
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
              className="rounded-2xl border border-angel-blue/20 bg-white shadow-sm hover:shadow-xl hover:shadow-angel-blue/10 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl bg-gradient-to-br from-venice-blue/20 via-angel-blue/20 to-fundusnap-white">
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
                        className="group/organizer relative h-10 w-24 rounded-lg bg-fundusnap-white border border-angel-blue/20 flex items-center justify-center px-2"
                        title={organizer.name}
                        aria-label={organizer.name}
                      >
                        <Image
                          src={organizer.logo}
                          alt={organizer.name}
                          fill
                          className="object-contain p-2"
                        />
                        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-bleached-cedar px-2 py-1 text-[10px] font-medium text-white opacity-0 shadow-md transition-all duration-200 group-hover/organizer:-translate-y-1 group-hover/organizer:opacity-100 max-w-[12rem] text-center whitespace-normal z-10">
                          {organizer.name}
                        </span>
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
