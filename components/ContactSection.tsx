import { Mail, Phone, MapPin, Clock, Calendar } from "lucide-react";
import ContactForm from "./ContactForm";
import { SectionHeader } from "@/components/ui/section-header";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "(22) 123-45-67",
    link: "tel:+48221234567"
  },
  {
    icon: Mail,
    title: "Email",
    content: "kontakt@ksiegowiwarszawscy.pl",
    link: "mailto:kontakt@ksiegowiwarszawscy.pl"
  },
  {
    icon: MapPin,
    title: "Adres",
    content: "ul. Marszałkowska 100, Warszawa",
    link: "https://maps.google.com"
  }
];

const officeHours = [
  { days: "Poniedziałek - Piątek", hours: "9:00 - 17:00" },
  { days: "Sobota", hours: "10:00 - 14:00" },
  { days: "Niedziela", hours: "Zamknięte" }
];

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Skontaktuj się z nami"
          subtitle="Jesteśmy do Twojej dyspozycji. Skorzystaj z formularza lub wybierz inną formę kontaktu."
        />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full p-3 bg-blue-50 dark:bg-blue-900">
                      <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Godziny otwarcia
                </h3>
              </div>
              <div className="space-y-3">
                {officeHours.map((schedule) => (
                  <div
                    key={schedule.days}
                    className="flex justify-between items-center text-gray-600 dark:text-gray-400"
                  >
                    <span>{schedule.days}</span>
                    <span className="font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Umów spotkanie
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Preferujesz spotkanie osobiste? Umów się na konsultację w dogodnym
                terminie. Pierwsze spotkanie jest bezpłatne.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}