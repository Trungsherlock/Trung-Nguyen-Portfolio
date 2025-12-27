import { useState, useEffect } from "react";
import { SectionTitle } from "./ui/SectionTitle";

interface LeetCodeProfile {
  totalSolved: number;
  ranking: number;
  contributionCalendar?: {
    maxStreak: number;
  };
}

export function Leetcode() {
  const [profile, setProfile] = useState<LeetCodeProfile | null>(null);
  const username = "TrungXO";

  useEffect(() => {
    const fetchLeetcodeData = async () => {
      try {
        const response = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${username}`
        );
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      }
    };
    fetchLeetcodeData();
  }, []);

  return (
    <section id="leetcode" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-8">
        <SectionTitle>Leetcode Progress</SectionTitle>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Leetcode Activity Image */}
          <div className="relative w-full h-100 overflow-hidden">
            <iframe
              src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=Inter&ext=heatmap&border=2&radius=10`}
              title="Leetcode Heatmap"
              className="absolute w-full h-full shadow-md"
            ></iframe>
          </div>

          {/* Leetcode Profile Info */}
          <div className="text-center">
            {profile ? (
              <>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  My Leetcode Journey
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  I have solved <strong>{profile.totalSolved}</strong> problems,
                  with a ranking of
                  <strong> {profile.ranking}</strong> globally. My max streak is
                  <strong>
                    {" "}
                    {profile.contributionCalendar?.maxStreak}
                  </strong>{" "}
                  days!
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  My expertise spans across topics like Dynamic Programming,
                  Graphs, and more. I keep challenging myself daily to grow as a
                  competitive programmer.
                </p>
                <a
                  href={`https://leetcode.com/u/${username}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 text-white! px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                >
                  View My Profile
                </a>
              </>
            ) : (
              <p className="text-gray-600 dark:text-gray-300">
                Loading Leetcode data...
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
