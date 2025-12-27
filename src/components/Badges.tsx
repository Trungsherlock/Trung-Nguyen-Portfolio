import { SectionTitle } from "./ui/SectionTitle";

const badges = [
  {
    id: "leetcode-50",
    platform: "LeetCode",
    title: "50 Days Badge 2025",
    image: "https://assets.leetcode.com/static_assets/others/2550.gif",
    profile: "https://leetcode.com/medal/?showImg=0&id=7734969&isLevel=false",
  },
  {
    id: "github-YOLO",
    platform: "GitHub",
    title: "YOLO",
    image:
      "https://github.githubassets.com/assets/yolo-default-be0bbff04951.png",
    profile: "https://github.com/users/Trungsherlock/achievements/yolo",
  },
  {
    id: "pull-shark",
    platform: "GitHub",
    title: "pull-shark",
    image:
      "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
    profile: "https://github.com/users/Trungsherlock/achievements/pull-shark",
  },
  {
    id: "quickdraw",
    platform: "GitHub",
    title: "quickdraw",
    image:
      "https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png",
    profile: "https://github.com/users/Trungsherlock/achievements/quickdraw",
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
