import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "A full-stack developer with ML/AI optimization experience.",
      "Built systems serving 200+ users and scaled across organizations.",
      "Passionate about performance optimization and clean architecture.",
    ],
    color: "bg-netflix-red",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "Build scalable platforms with Next.js, Node.js, Docker and PostgreSQL.",
      "Optimize backend systems - 67% time reduction, sub-100ms APIs.",
      "Deploy production-grade ML models with edge computing.",
    ],
    color: "bg-netflix-dark-red",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
      "Create impactful products bridging AI and full-stack development.",
      "Build systems that scale - from startups to enterprise level.",
      "Contribute to robotics education and open-source communities.",
    ],
    color: "bg-netflix-red",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
      "Performance matters - every millisecond and megabyte counts.",
      "Good code solves problems; great code enables others.",
      "Ship fast, measure everything, iterate continuously.",
    ],
    color: "bg-netflix-dark-red",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white dark:bg-netflix-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white dark:from-netflix-black dark:to-netflix-dark-gray">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #E50914 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <SectionTitle>About Me</SectionTitle>

        {/* Introduction */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hey there! 👋 I'm{" "}
            <span className="text-netflix-red font-bold">Trung Nguyen</span>, a
            Full-Stack Developer specializing in performance optimization and
            scalable systems. Currently pursuing my MS in Computer Science at
            UMass Amherst, I've built platforms serving hundreds of users - from
            internal tools at FPT Software to robotics education platforms at
            CYOBot. I optimize everything from database queries (10-40x faster)
            to ML models (30% smaller, edge-ready).
          </p>

          <div className="mt-6 flex justify-center">
            <span className="text-sm sm:text-base inline-block bg-netflix-red/10 dark:bg-netflix-red/20 text-netflix-red border border-netflix-red/30 px-5 py-2.5 rounded shadow-lg">
              Building production systems that are fast, reliable, and scalable
            </span>
          </div>
        </div>

        {/* About Section Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aboutSections.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="relative group netflix-card-hover">
              {/* Background Effect */}
              <div
                className={`absolute inset-0 ${color} rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none`}
              />

              {/* Card Content */}
              <div className="relative bg-white dark:bg-netflix-dark-gray p-6 border border-gray-200 dark:border-netflix-gray rounded-lg shadow-md hover:shadow-[0_8px_30px_rgba(229,9,20,0.3)] transition-all duration-300">
                <div className="flex items-center mb-4 space-x-4">
                  {/* Icon */}
                  <div className={`p-3 ${color} rounded-lg shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                </div>
                <ul className="text-sm sm:text-base list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  {description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
