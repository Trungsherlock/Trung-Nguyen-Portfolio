import { SectionTitle } from "./ui/SectionTitle";
import { EducationCard } from "./ui/EducationCard";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering (AI & ML)",
    institution: "JIET Group of Institutions, Jodhpur",
    period: "2023 - 2027",
    score: "8.13 CGPA",
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "C.N College, Muzaffarpur, Bihar",
    period: "2021 - 2023",
    score: "72.5%",
  },
  {
    degree: "Secondary (X)",
    institution: "M High School Baidhyanathpur, Muzaffarpur, Bihar",
    period: "2020 - 2021",
    score: "67%",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
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
