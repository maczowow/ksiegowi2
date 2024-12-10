"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Footer() {
  const { scrollToElement } = useSmoothScroll();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToElement(id);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Księgowi Warszawscy</h3>
            <p className="text-gray-400">
              Profesjonalne usługi księgowe dla firm każdej wielkości.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Szybkie Linki</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Usługi
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  onClick={(e) => handleNavClick(e, 'why-choose-us')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dlaczego My
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Dane Kontaktowe</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>(22) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>kontakt@ksiegowiwarszawscy.pl</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>ul. Marszałkowska 100, Warszawa</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Księgowi Warszawscy. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}