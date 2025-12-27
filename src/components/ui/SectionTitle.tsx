import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-900 dark:text-white">
      <span className="relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-netflix-red rounded-full"></span>
      </span>
    </h2>
  );
}
