import { Calculator, ChartBar, Shield, FileText, BookOpen, Users, Building, Coins } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";

const services = [
  {
    title: "Rozliczenia Podatkowe",
    description: "Kompleksowe planowanie podatkowe i profesjonalne rozliczenia dla firm każdej wielkości",
    icon: Calculator,
  },
  {
    title: "Analiza Finansowa",
    description: "Szczegółowa analiza finansowa i raporty wspierające strategiczne decyzje biznesowe",
    icon: ChartBar,
  },
  {
    title: "Audyt i Kontrola",
    description: "Profesjonalne audyty finansowe zapewniające zgodność z przepisami i najwyższą jakość",
    icon: Shield,
  },
  {
    title: "Księgowość Bieżąca",
    description: "Kompleksowa obsługa księgowa i dokumentacja finansowa zgodna z wymogami prawa",
    icon: FileText,
  },
  {
    title: "Doradztwo Podatkowe",
    description: "Eksperckie doradztwo w zakresie optymalizacji podatkowej i planowania finansowego",
    icon: BookOpen,
  },
  {
    title: "Kadry i Płace",
    description: "Profesjonalna obsługa kadrowo-płacowa i zarządzanie dokumentacją pracowniczą",
    icon: Users,
  },
  {
    title: "Obsługa Spółek",
    description: "Kompleksowa obsługa prawno-księgowa spółek i podmiotów gospodarczych",
    icon: Building,
  },
  {
    title: "Optymalizacja Kosztów",
    description: "Skuteczne strategie optymalizacji kosztów i zwiększania efektywności finansowej",
    icon: Coins,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nasze Usługi"
          subtitle="Kompleksowe rozwiązania finansowe dostosowane do potrzeb Twojej firmy"
        />
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <FeatureCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}