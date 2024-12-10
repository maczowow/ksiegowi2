import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-200 hover:scale-105">
      <div className="rounded-full w-12 h-12 bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
}