import { Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si"; // LeetCode & HackerRank icons
// import { MdEmojiEvents } from "react-icons/md"; // Unstop icon (closest match)

const links = [
  {
    href: "https://github.com/amitkumardemo",
    icon: <Github className="w-6 h-6 text-gray-900 dark:text-white" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/amit-kumar-686196225/",
    icon: <Linkedin className="w-6 h-6 text-[#0077B5]" />,
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/917673825079",
    icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />,
    label: "WhatsApp",
  },
  // {
  //   href: "https://x.com/AmitKum5579044",
  //   icon: <FaXTwitter className="w-6 h-6 text-gray-900 dark:text-white" />,
  //   label: "Twitter",
  // },
  {
    href: "https://leetcode.com/u/Amitkumar90/",
    icon: <SiLeetcode className="w-6 h-6 text-[#FFA116]" />,
    label: "LeetCode",
  },
  // {
  //   href: "https://unstop.com/u/amitkum6013",
  //   icon: <MdEmojiEvents className="w-6 h-6 text-[#800080]" />, // Unstop (using trophy icon)
  //   label: "Unstop",
  // },
  // {
  //   href: "https://www.hackerrank.com/profile/lbgofficial12345",
  //   icon: <SiHackerrank className="w-6 h-6 text-[#2EC866]" />,
  //   label: "HackerRank",
  // },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {links.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:scale-110 transform transition-transform duration-300"
        >
          <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div>{icon}</div>
        </a>
      ))}
    </div>
  );
}
