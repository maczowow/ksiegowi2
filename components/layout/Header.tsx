"use client";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/ui/mobile-nav";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Header() {
  const { scrollToElement } = useSmoothScroll();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToElement(id);
  };

  return (
    <header className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, 'hero')} 
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Księgowi Warszawscy
          </a>
          <div className="hidden md:flex space-x-8">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Usługi
            </a>
            <a 
              href="#why-choose-us" 
              onClick={(e) => handleNavClick(e, 'why-choose-us')}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Dlaczego My
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Kontakt
            </a>
          </div>
          <div className="hidden md:block">
            <Button
              onClick={(e) => {
                e.preventDefault();
                scrollToElement('contact');
              }}
              className="bg-blue-500 hover:bg-blue-600 transition-colors"
            >
              Rozpocznij współpracę
            </Button>
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}