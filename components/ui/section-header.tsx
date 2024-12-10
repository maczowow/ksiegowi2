"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({ 
  title, 
  subtitle, 
  className,
  align = "center" 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "space-y-4",
      align === "center" ? "text-center" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}