import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Software Intern",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/software intern.png",
  },
  {
    title: "Reckon Team",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/reckon team.jpeg",
  },
  {
    title: "Team Core",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/team core.jpeg",
  },
  {
    title: "Top 10",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/top 10.jpg",
  },
  {
    title: "Paper of Reckon",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/papaer of reckon.jpg",
  },
  {
    title: "Welcome Kit",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/welcome kit.jpg",
  },
  {
    title: "Software",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/software.png",
  },
  {
    title: "Python Certification",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/python.png",
  },
  {
    title: "JavaScript Certification",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/js.png",
  },
  {
    title: "API Development",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/Api.png",
  },
  {
    title: "GSoC 2024 Mentor Badge",
    issuer: "Google",
    date: "Year",
    link: "#",
    image: "/assets/Amit_Kumar_Badge_Mentor_GSSoC2024-Extd.png",
  },
  {
    title: "Achievement 1",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/1a.jpg",
  },
  {
    title: "Achievement 2",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/b1.jpg",
  },
  {
    title: "Ambassador Program",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/ambassador.png",
  },
  {
    title: "Mentor Badge",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/mentor-id-1796331726902323.417.png",
  },
  {
    title: "IIT Certificate",
    issuer: "IIT",
    date: "Year",
    link: "#",
    image: "/assets/iit.png",
  },
  {
    title: "GeeksforGeeks Certification",
    issuer: "GeeksforGeeks",
    date: "Year",
    link: "#",
    image: "/assets/gfg.png",
  },
  {
    title: "Internshala Certificate",
    issuer: "Internshala",
    date: "Year",
    link: "#",
    image: "/assets/internshala.png",
  },
  {
    title: "Front-End Development",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/front.png",
  },
  {
    title: "Problem Solving",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/problem.png",
  },
  {
    title: "Profile Achievement",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/profile.png",
  },
  {
    title: "Certification Achievement",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/cert.png",
  },
  {
    title: "JavaScript Intern",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/JsInter.png",
  },
  {
    title: "Python Advanced",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/python5.png",
  },
  {
    title: "AI Certification",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/Ai.png",
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
