import { SectionTitle } from "./ui/SectionTitle";
import { SkillCard } from "./ui/SkillCard";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiCplusplus,
  SiVite,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiPrometheus,
  SiGrafana,
  SiSentry,
  SiKubernetes,
} from "react-icons/si";
import { FaNodeJs, FaPython, FaJava, FaAws } from "react-icons/fa";

const skills = [
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#e34f26",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#1572b6",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#ffd600",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178c6",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61dafb",
    url: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#",
    url: "https://nextjs.org/",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764abc",
    url: "https://redux.js.org/",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#68a063",
    url: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#68a063",
    url: "https://expressjs.com/",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#e535ab",
    url: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47a248",
    url: "https://www.mongodb.com/",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#186997",
    url: "https://www.prisma.io/",
  },
  {
    name: "Redis",
    icon: SiRedis,
    color: "#ffca28",
    url: "https://redis.io/",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599c",
    url: "https://cplusplus.com/",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#f7b731",
    url: "https://www.java.com/",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "#306998",
    url: "https://www.python.org/",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "#ff9900",
    url: "https://aws.amazon.com/",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#007acc",
    url: "https://www.docker.com/",
  },
  {
    name: "Prometheus",
    icon: SiPrometheus,
    color: "#f34f29",
    url: "https://prometheus.io/",
  },
  {
    name: "Grafana",
    icon: SiGrafana,
    color: "#000000",
    url: "https://grafana.com/",
  },
  {
    name: "Sentry",
    icon: SiSentry,
    color: "#ff6c37",
    url: "https://sentry.io/",
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "#646cff",
    url: "https://vitejs.dev/",
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "#000000",
    url: "https://kubernetes.io/",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>

        <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 mt-8">
          {skills.map((tech) => (
            <SkillCard
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
              url={tech.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
