import { Check, Award, Clock, Users, Shield, Coins, HeartHandshake } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const features = [
  {
    icon: Award,
    title: "20+ Lat Doświadczenia",
    description: "Wieloletnie doświadczenie w obsłudze firm różnej wielkości"
  },
  {
    icon: Shield,
    title: "Certyfikowani Eksperci",
    description: "Zespół wykwalifikowanych księgowych z państwowymi certyfikatami"
  },
  {
    icon: HeartHandshake,
    title: "Indywidualne Podejście",
    description: "Spersonalizowane rozwiązania dostosowane do potrzeb każdego klienta"
  },
  {
    icon: Clock,
    title: "Terminowość",
    description: "Gwarancja terminowej realizacji wszystkich zobowiązań"
  },
  {
    icon: Users,
    title: "Zespół Specjalistów",
    description: "Kompleksowa obsługa przez zespół ekspertów z różnych dziedzin"
  },
  {
    icon: Coins,
    title: "Konkurencyjne Ceny",
    description: "Atrakcyjne warunki współpracy dopasowane do możliwości klienta"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Dlaczego My"
          subtitle="Zapewniamy profesjonalizm, niezawodność i pełne zaangażowanie w każdej współpracy"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-200">
              <feature.icon className="h-8 w-8 text-blue-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 dark:bg-gray-700 rounded-2xl p-8 lg:p-12">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                alt="Zespół księgowych"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Twój Sukces Jest Naszym Priorytetem
              </h3>
              <div className="space-y-4">
                {[
                  "Kompleksowa obsługa księgowa",
                  "Doradztwo podatkowe i finansowe",
                  "Wsparcie w rozwoju biznesu",
                  "Optymalizacja procesów finansowych",
                  "Bezpieczeństwo i poufność danych",
                  "Stały kontakt i wsparcie"
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <p className="text-gray-700 dark:text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}