import { SectionTitle } from "./ui/SectionTitle";
import { EducationCard } from "./ui/EducationCard";

const education = [
  {
    degree: "Master Degree in Computer Science",
    institution: "University of Massachusetts Amherst",
    period: "2024 - 2025",
    score: "3.93/4.0 GPA",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Massachusetts Amherst",
    period: "2021 - 2024",
    score: "3.91/4.0 GPA",
  },
  {
    degree: "High School Diploma",
    institution: "Hanoi-Amsterdam High School for the Gifted",
    period: "2018 - 2021",
    score: "9.4/10.0 GPA",
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-netflix-dark-gray">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard
              key={edu.degree}
              {...edu}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
