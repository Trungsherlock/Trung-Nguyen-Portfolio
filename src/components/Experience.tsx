import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "FPT Software",
    period: "June 2022 - June 2022",
    description: `Developed an internal interview tool featuring an appointment scheduling system using React.js, Node.js, and Express.js. Reduced interview duration from one hour to 20 minutes by implementing modules for candidate evaluation, information management, response collection, and HR assessment, utilizing a MySQL database for storage.`,
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Problem Solving",
      "Interview Systems",
    ],
  },
  {
    title: "Machine Learning Engineering Intern",
    company: "MLSys Lab, UMass Amherst",
    period: "Dec 12, 2024 – Jan 12, 2025",
    description:
      "Conducted research on memory optimization techniques for BERT models on mobile devices and developed GPU profiling tools for LoRA fine-tuned BERT models. Implemented gradient computation methods in PyTorch to evaluate performance trade-offs. Presented findings on memory bottlenecks and proposed optimization strategies.",
    skills: [
      "AI",
      "Machine Learning",
      "BERT",
      "PyTorch",
      "Problem Solving",
      "Optimization",
    ],
  },
  {
    title: "Open Source Contributor",
    company: "CYOBot",
    period: "May 2024 - Present",
    description: `Developed an educational website using PayloadCMS to integrate badges and achievements, serving interactive lessons and quizzes for over 50 active monthly users. Created a portal that allows users to interact directly with robots by uploading files, coding, and utilizing an integrated code editor built with Next.js. Designed and optimized Docker configurations for streamlined automated deployments.`,
    skills: [
      "Next.js",
      "PayloadCMS",
      "Docker",
      "Full-Stack Development",
      "Open Source",
      "Education Technology",
    ],
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-netflix-dark-gray">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative border-l-2 border-blue-600 dark:border-netflix-red max-w-5xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <div key={index}>
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
