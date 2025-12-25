import { SectionTitle } from "./ui/SectionTitle";

const badges = [
  {
    id: "leetcode-50",
    platform: "LeetCode",
    title: "50 Days Badge 2025",
    image: "https://assets.leetcode.com/static_assets/others/2550.gif",
    profile: "https://leetcode.com/medal/?showImg=0&id=6205206&isLevel=false",
  },
  {
    id: "DCC Jan 2025",
    platform: "LeetCode",
    title: "DCC Jan 2025",
    image: "https://assets.leetcode.com/static_assets/marketing/202501.gif",
    profile: "https://leetcode.com/medal/?showImg=0&id=6078072&isLevel=false",
  },
  {
    id: "DCC Feb 2025",
    platform: "LeetCode",
    title: "DCC Feb 2025",
    image: "https://assets.leetcode.com/static_assets/marketing/202502.gif",
    profile: "https://leetcode.com/medal/?showImg=0&id=6325795&isLevel=false",
  },
  {
    id: "DCC March 2025",
    platform: "LeetCode",
    title: "DCC March 2025",
    image: "https://assets.leetcode.com/static_assets/marketing/202503.gif",
    profile: "https://leetcode.com/medal/?showImg=0&id=6671055&isLevel=false",
  },
  {
    id: "Introduction to Pandas",
    platform: "LeetCode",
    title: "Introduction to Pandas",
    image:
      "https://assets.leetcode.com/static_assets/others/Introduction_to_Pandas.gif",
    profile: "https://leetcode.com/medal/?showImg=0&id=6270605&isLevel=false",
  },

  {
    id: "github-YOLO",
    platform: "GitHub",
    title: "YOLO",
    image:
      "https://github.githubassets.com/assets/yolo-default-be0bbff04951.png",
    profile: "https://github.com/users/amitkumardemo/achievements/yolo",
  },
  {
    id: "pull-shark",
    platform: "GitHub",
    title: "pull-shark",
    image:
      "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
    profile: "https://github.com/users/amitkumardemo/achievements/pull-shark",
  },
  {
    id: "quickdraw",
    platform: "GitHub",
    title: "quickdraw",
    image:
      "https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png",
    profile: "https://github.com/users/amitkumardemo/achievements/quickdraw",
  },

  {
    id: "5 star",
    platform: "HackerRank",
    title: "5-Star Java Developer",
    image: "/assets/java 5.png",
    profile: "https://www.hackerrank.com/profile/lbgofficial12345",
  },
  {
    id: "5 star",
    platform: "HackerRank",
    title: "5-Star Python Developer",
    image: "/assets/python 5.png",
    profile: "https://www.hackerrank.com/profile/lbgofficial12345",
  },
  {
    id: "3 star",
    platform: "HackerRank",
    title: "3-Star Problem Solver",
    image: "/assets/proble_solve.png",
    profile: "https://www.hackerrank.com/profile/lbgofficial12345",
  },

  {
    id: "DevPioneer",
    platform: "DevDisplay",
    title: "Open Source Contributor",
    image: "/assets/DevPioneer.gif",
    profile: "https://www.devdisplay.org/home",
  },
];

export function Badges() {
  return (
    <section id="badges" className="py-20">
      <div className="container mx-auto max-w-6xl px-8">
        <SectionTitle>Coding Badges</SectionTitle>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 gap-4">
          {badges.map((badge) => (
            <a
              key={badge.id}
              href={badge.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex flex-col items-center justify-center p-5 bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-xl blur-lg transition-all duration-300" />

              {/* Badge Image */}
              <img
                src={badge.image}
                alt={badge.platform}
                className="w-30 h-30 rounded-md transition-transform duration-300 group-hover:scale-110"
              />

              {/* Badge Text */}
              <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-white text-center">
                {badge.title}
              </p>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {badge.platform}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
