import { ArrowDown } from "lucide-react";
import { Link } from "./Links";
import { TypeWriter } from "./ui/TypeWriter";
import { SocialLinks } from "./hero/SocialLinks";
import { ContactInfo } from "./hero/ContactInfo";
import { ActionButtons } from "./hero/ActionButtons";

export function Hero() {
  const roles = [
    "Full-Stack Developer",
    "Open Source Contributor",
    "DSA Enthusiast",
    "Problem Solver",
    "Tech Innovator",
    "Lifelong Learner",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-netflix-black"
    >
      {/* Animated background - Light mode colorful, Dark mode Netflix */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-purple-50 dark:from-transparent dark:via-netflix-black dark:to-netflix-black">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] dark:opacity-0" />
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #E50914 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Light mode - Colorful orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl animate-pulse dark:hidden" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl animate-pulse dark:hidden" style={{ animationDelay: '1s' }} />

        {/* Dark mode - Netflix red glow orbs */}
        <div className="hidden dark:block absolute top-1/4 left-1/4 w-96 h-96 bg-netflix-red/20 rounded-full blur-3xl animate-pulse" />
        <div className="hidden dark:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-netflix-red/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-10 py-16 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-center justify-center text-center space-y-6 order-2 md:order-1">
            <div className="space-y-4">
              <div className="inline-block bg-blue-100 dark:bg-netflix-red/20 backdrop-blur-sm text-blue-600 dark:text-netflix-red text-sm font-medium dark:font-semibold px-4 dark:px-5 py-2 dark:py-2.5 rounded-full dark:rounded border-0 dark:border dark:border-netflix-red/30">
                Hey!{" "}
                <span className="inline-block origin-[70%_70%] animate-wave">
                  👋
                </span>{" "}
                I'm
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold dark:font-black bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-white dark:to-white bg-clip-text text-transparent dark:drop-shadow-[0_0_30px_rgba(229,9,20,0.3)] animate-gradient dark:animate-none">
                Trung Nguyen
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 dark:text-netflix-light-gray">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
            </div>

            <ContactInfo />
            <ActionButtons />
            <SocialLinks />
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative order-1 md:order-2">
            {/* Light mode - Colorful floating elements */}
            <div className="absolute w-24 h-24 bg-blue-600 top-0 left-0 rounded-full animate-floating dark:hidden" />
            <div className="absolute w-24 h-24 bg-purple-600 bottom-0 right-0 rounded-full animate-floating dark:hidden" style={{ animationDelay: '0.15s' }} />
            <div className="absolute w-20 h-20 bg-green-500 top-4 right-4 rounded-full animate-floating dark:hidden" style={{ animationDelay: '0.3s' }} />
            <div className="absolute w-20 h-20 bg-yellow-500 bottom-4 left-4 rounded-full animate-floating dark:hidden" style={{ animationDelay: '0.45s' }} />

            {/* Dark mode - Netflix-themed floating elements */}
            <div className="hidden dark:block absolute w-24 h-24 bg-netflix-red/40 top-0 left-0 rounded-full animate-floating blur-sm" />
            <div className="hidden dark:block absolute w-24 h-24 bg-netflix-dark-red/40 bottom-0 right-0 rounded-full animate-floating blur-sm" style={{ animationDelay: '0.5s' }} />
            <div className="hidden dark:block absolute w-20 h-20 bg-netflix-red/30 top-4 right-4 rounded-full animate-floating blur-sm" style={{ animationDelay: '1s' }} />
            <div className="hidden dark:block absolute w-20 h-20 bg-netflix-red/30 bottom-4 left-4 rounded-full animate-floating blur-sm" style={{ animationDelay: '1.5s' }} />

            <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 dark:from-netflix-red/10 dark:to-netflix-red/10 rounded-full blur-3xl animate-pulse" />
            <img
              src="/assets/trung_pic.jpg"
              alt="Trung Nguyen"
              className="relative w-3/5 max-w-md mx-auto rounded-full shadow-2xl dark:shadow-[0_0_50px_rgba(229,9,20,0.3)] ring-0 dark:ring-4 dark:ring-netflix-red/30 transform hover:scale-105 dark:hover:ring-netflix-red/50 transition-all duration-500"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
         <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="p-2 rounded-full bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
