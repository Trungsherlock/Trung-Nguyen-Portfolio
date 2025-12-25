import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Technical Team Member",
    company: "Reckon 6.0",
    period: "January 2025 - Present",
    description: `Launched and managed the Campus Ambassador Program for Reckon 6.0, overseeing the recruitment and coordination of campus ambassadors to promote the hackathon. 
      Handled student registration on Unstop, ensuring smooth onboarding and accurate data entry for participants. 
      Coordinated with campus ambassadors, providing them with the necessary resources and support to successfully promote Reckon 6.0 within their campuses. 
      Worked closely with the technical team to resolve any registration issues and streamline the event's processes. 
      Contributed to the overall success of the event by ensuring high engagement and participation through the campus ambassador network.`,
    skills: [
      "Event Coordination",
      "Registration Management",
      "Team Collaboration",
      "Hackathon Promotion",
    ],
  },
  {
    title: "AICTE Internship on AI",
    company: "Microsoft & SAP - TechSaksham Initiative",
    period: "Dec 12, 2024 – Jan 12, 2025",
    description: `Selected for a 4-week AI internship organized by Microsoft, SAP, and AICTE. Gained hands-on experience in AI technologies through mentorship sessions and collaborative learning. Developed a project prototype, attended technical sessions, and earned certifications from Microsoft, SAP, AICTE, and Edunet Foundation.`,
    skills: ["AI", "Machine Learning", "Project Management", "Problem Solving"],
  },
  {
    title: "Student Executive",
    company: "Unstop",
    period: "Nov 20, 2024 - Present",
    description: `Managed and promoted Unstop's campus events and competitions to increase student engagement. Coordinated with student groups and faculties to organize events and facilitated communication between Unstop and the college. Played a key role in signing the MOU for my college’s annual hackathon, Reckon 6.0, and contributed to partnerships with sponsors and mentors.`,
    skills: [
      "Event Management",
      "Leadership",
      "Team Coordination",
      "Communication",
    ],
    certificateLink: "/assets/Selection Unstop .pdf",
  },
  {
    title: "Mentor",
    company: "Topmate",
    period: "August 2024 - Present",
    description: `Mentored students on career development, technical skills, and interview preparation through personalized guidance. Provided support in coding challenges, project development, and building portfolios. Conducted workshops and one-on-one sessions to improve skills and navigate career opportunities.`,
    skills: [
      "Career Development",
      "Technical Skills",
      "Coding Challenges",
      "Interview Preparation",
    ],
    certificateLink: "https://topmate.io/amit_kumar137",
  },
  {
    title: "Mentor",
    company: "Topmate",
    period: "August 2024 - Present",
    description: `Mentored students on career development, technical skills, and interview preparation through personalized guidance. Provided support in coding challenges, project development, and building portfolios. Conducted workshops and one-on-one sessions to improve skills and navigate career opportunities.`,
    skills: [
      "Career Development",
      "Technical Skills",
      "Coding Challenges",
      "Interview Preparation",
    ],
    certificateLink: "https://topmate.io/amit_kumar137",
  },
  {
    title: "Campus Ambassador",
    company: "IIT Bombay",
    period: "June 2024 - July 2024",
    description: `Represented IIT Bombay on campus, promoting its events, workshops, and initiatives to increase student participation and engagement. Collaborated with the IIT Bombay team to organize and publicize events, driving awareness and encouraging students to participate in various academic and cultural activities. Acted as a liaison between IIT Bombay and my college, providing students with information on upcoming events and opportunities. Developed strong communication, marketing, and event coordination skills while fostering a vibrant student community around IIT Bombay’s initiatives.`,
    skills: ["Event Promotion", "Marketing", "Coordination", "Communication"],
    certificateLink: "/AmitPortfolio/iit.png",
  },
  {
    title: "Developer Program Member",
    company: "NVIDIA",
    period: "May 2024 - Present",
    description: `Joined the NVIDIA Developer Program, gaining access to cutting-edge resources, tools, and technologies to enhance skills in AI, machine learning, and GPU computing. Participated in community events, webinars, and workshops hosted by NVIDIA, learning about the latest advancements in AI and deep learning. Collaborated with fellow developers to share knowledge and best practices in GPU acceleration and AI model development. Utilized NVIDIA’s resources to work on personal projects and contribute to open-source AI solutions, staying updated on industry trends and innovations.`,
    skills: ["AI", "Machine Learning", "GPU Computing", "Deep Learning"],
    certificateLink: "/AmitPortfolio/nvdia.png",
  },
  {
    title: "Campus Ambassador",
    company: "Model United Nations",
    period: "April 2024 - May 2024",
    description: `Represented and promoted Model United Nations (MUN) events on campus, encouraging students to participate in MUN conferences and debates. Assisted in organizing MUN workshops and preparatory sessions, helping students improve their public speaking, diplomacy, and negotiation skills. Coordinated with the MUN team to increase awareness and participation, ensuring a strong presence of students in conferences. Developed leadership, communication, and organizational skills while contributing to the growth of the MUN community on campus.`,
    skills: [
      "Public Speaking",
      "Diplomacy",
      "Leadership",
      "Organization",
      "Communication",
    ],
    certificateLink:
      "https://www.linkedin.com/posts/amit-kumar-686196225_imun-activity-7202265716132134913-y6JQ?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Campus Mantri",
    company: "GeeksforGeeks",
    period: "March 2024 - Dec 2024",
    description: `Acted as a liaison between GeeksforGeeks and my college, promoting the platform’s resources, workshops, and events. Organized and facilitated coding workshops, webinars, and competitions to engage students and enhance their technical skills. Collaborated with the GeeksforGeeks team to bring relevant content and learning opportunities to the campus community. Contributed to the GeeksforGeeks community by sharing updates on upcoming events and resources to help students excel in coding and tech-related fields. Received a Campus Mantri T-shirt as recognition for my efforts and contributions to the program.`,
    skills: [
      "Event Organization",
      "Coding Workshops",
      "Community Engagement",
      "Tech Resources",
      "Public Speaking",
    ],
    certificateLink:
      "https://www.linkedin.com/posts/amit-kumar-686196225_geeksforgeeks-campusmantri-jiet-activity-7186988956800925696-XwPY?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Internshala Student Partner",
    company: "Internshala",
    period: "04 February 2024 - 04 March 2024",
    description: `Represented Internshala on campus, promoting internships, training programs, and career development opportunities to students. Conducted awareness sessions, workshops, and events to help peers find relevant internships and build their professional skills. Acted as a liaison between Internshala and the student community, providing insights into various opportunities and resources available on the platform. Developed leadership, communication, and marketing skills by managing campaigns and collaborating with Internshala’s team.`,
    skills: [
      "Internship Promotion",
      "Workshop Coordination",
      "Career Development",
      "Marketing",
      "Public Speaking",
    ],
    certificateLink: "/AmitPortfolio/Screenshot 2025-01-21 233413.png",
  },
  {
    title: "Web Development Intern",
    company: "Bharat Intern",
    period: "10 January 2024 - 10 February 2024",
    description: `Worked on projects like a Netflix clone, Weather API, and Landing Page, focusing on UI/UX design and enhancing user experience. Developed a responsive Netflix clone with dynamic content, a real-time Weather API application, and a professional landing page. Gained experience with HTML, CSS, JavaScript, and Bootstrap to create mobile-friendly, interactive websites. Learned about free vs. paid hosting, exploring options for deploying websites and selecting the best hosting solutions based on project needs. Used Git for version control and GitHub for collaboration, ensuring efficient code management and project tracking. Collaborated with the team to ensure optimal performance and streamlined development processes.`,
    skills: [
      "UI/UX Design",
      "Responsive Design",
      "Web Development",
      "Git",
      "Team Collaboration",
    ],
    certificateLink: "/AmitPortfolio/Screenshot 2025-01-21 234459.png",
  },
  {
    title: "Content Creator",
    company: "YouTube",
    period: "January 2024 - Present",
    description: `Created coding tutorials and educational content focused on Java, Python, AI, Machine Learning, and web development. Aimed at helping learners improve their programming skills through beginner to advanced-level guides, coding challenges, and real-world projects. Gained a growing community of aspiring developers with clear explanations and practical coding examples.`,
    skills: [
      "Content Creation",
      "Java",
      "Python",
      "AI",
      "Machine Learning",
      "Web Development",
    ],
    certificateLink: "https://www.youtube.com/@TechieHelp",
  },
  {
    title: "Founder & Developer",
    company: "TechieHelp",
    period: "January 2024 - Present",
    description: `Founded TechieHelp, a platform dedicated to providing internships, web development, app development, SEO, UI/UX, and more, helping students and professionals gain real-world experience and skills. Focused on bridging the gap between education and industry by offering a variety of services and career-oriented resources to empower individuals in their tech journey. Built a community of learners, developers, and tech enthusiasts, providing guidance, mentorship, and support in their career development. Launched several initiatives, including coding tutorials, career counseling, and hands-on projects to enhance technical skills and prepare for job placements.`,
    skills: [
      "Entrepreneurship",
      "Web Development",
      "App Development",
      "SEO",
      "UI/UX",
      "Career Counseling",
    ],
    certificateLink: "https://techiehelpt.netlify.app/",
  },
  {
    title: "JIET UNIVERSE",
    company: "Pursuing B.Tech in Computer Science Engineering (AI & ML)",
    period: "August 2023 - August 2027",
    description: `Enrolled in a rigorous B.Tech program with a focus on Artificial Intelligence and Machine Learning, developing a strong foundation in computer science, programming, and emerging technologies. Gained hands-on experience in core subjects such as Data Structures, Algorithms, Machine Learning, Artificial Intelligence, and Cloud Computing. Actively participated in academic projects and assignments, applying theoretical knowledge to real-world scenarios, particularly in AI, ML, and data science. Engaged in collaborative learning through coding challenges, hackathons, and workshops, further enhancing practical skills.`,
    skills: [
      "AI",
      "ML",
      "Cloud Computing",
      "Data Structures",
      "Algorithms",
      "Programming",
    ],
    certificateLink: "https://www.jietjodhpur.ac.in/",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
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
