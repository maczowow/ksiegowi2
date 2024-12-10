"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Hero() {
  const { scrollToElement } = useSmoothScroll();

  return (
    <div id="hero" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f')] bg-cover bg-center mix-blend-overlay opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Profesjonalne Usługi Księgowe
            <br />
            <span className="text-blue-400 mt-2 block">dla Twojej Firmy</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Eksperckie doradztwo finansowe i kompleksowe rozwiązania księgowe
            wspierające rozwój Twojego biznesu
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-6 transition-colors"
              onClick={() => scrollToElement('contact')}
            >
              Rozpocznij współpracę <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 transition-colors"
              onClick={() => scrollToElement('services')}
            >
              Poznaj nasze usługi
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}