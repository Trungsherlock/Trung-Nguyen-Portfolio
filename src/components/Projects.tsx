import { SectionTitle } from "./ui/SectionTitle";
import { ProjectCard } from "./ui/ProjectCard";

const projects = [
  {
    title: "Robotics Quest",
    description:
      "Robotics Quest – Interactive learning platform for robotics education featuring skill-based progression, gamified quests with difficulty levels, achievement tracking, and real-time collaboration powered by Next.js and PayloadCMS.",
    image: "/src/assets/projects/cyobot-dashboard-image.png",
    link: "https://quest.cyobot.com/",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "PayloadCMS",
      "OAuth 2.0",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "CYOBot Portal",
    description:
      "CYOBot Portal – Browser-based IDE for programming and controlling CYOBot robots. Features dual-mode programming (Python code editor and Blockly visual blocks), real-time code execution via WebREPL, multi-file management, and educational activity library for hands-on robotics learning.",
    image: "/src/assets/projects/cyobot-portal-image.png",
    link: "https://portal-ruddy-seven.vercel.app/",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "WebSocket",
      "Blockly",
      "CodeMirror",
      "React Query",
    ],
  },
  {
    title: "CYOBot Website",
    description:
      "CYOBot Website – Interactive landing page showcasing AI-powered choose-your-own-adventure bot with dynamic storytelling features, modern UI/UX, and seamless user engagement built with Next.js.",
    image: "/src/assets/projects/cyobot-website-image.png",
    link: "https://www.cyobot.com/",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
  },
  {
    title: "FoundIt",
    description:
      "FoundIt – Community-driven platform for discovering products and sharing startup ideas with voting, collaboration features, and real-time engagement powered by modern full-stack architecture.",
    image: "/src/assets/projects/foundit-image.png",
    link: "https://foundit-ten.vercel.app/",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "OAuth 2.0",
      "Docker",
      "Prometheus",
    ],
  },
  {
    title: "Datahotpot Marketplace",
    description:
      "A decentralized Web3 data exchange platform where users tokenize datasets as NFTs and trade them on-chain. Features NFT-based access control, IPFS storage with S3 backup, and a 3-step monetization flow: create data contract, mint DataNFT, and list on marketplace. Earned top-5 placement at FVM Space Warp Hackathon 2023.",
    image: "/src/assets/projects/datahotpot-image.png",
    link: "https://github.com/Trungsherlock/datahotpot",
    tags: [
      "Next.js",
      "TypeScript",
      "IPFS",
      "Web3",
      "Smart Contracts",
      "Supabase",
    ],
  },
  {
    title: "Distributed Text Analytics Pipeline",
    description:
      "A scalable distributed system built with Apache Spark for processing and analyzing large document collections. The pipeline performs document ingestion (PDF, DOCX, TXT), TF-IDF feature extraction, K-Means clustering, semantic embeddings, and cluster-aware retrieval. Developed for COMPSCI 532 at UMass Amherst, it demonstrates distributed computing principles with performance benchmarking and visualization of retrieval efficiency across different methods.",
    image: "/src/assets/distributed-analytics.png",
    link: "https://github.com/Trungsherlock/distributed-text-analytics",
    tags: [
      "Python",
      "Apache Spark",
      "Machine Learning",
      "NLP",
      "Distributed Systems",
    ],
  },
  {
    title: "Schedule Builder",
    description:
      "Schedule Builder is a course management platform built with Next.js and Flask that helps students plan their academic schedules. It features a watchlist system for tracking courses, course recommendations, schedule comparison tools, and a MongoDB-powered backend for storing course data. The application uses Chakra UI for a modern, responsive interface and includes features like course history tracking, visual schedule building, and personalized course suggestions.",
    image: "/src/assets/projects/schedule-builder-image.png",
    link: "https://github.com/Trungsherlock/schedule-builder",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Flask",
      "MongoDB",
      "Chakra UI",
      "Python",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
