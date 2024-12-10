"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="#services"
              className="text-xl text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Usługi
            </Link>
            <Link
              href="#why-choose-us"
              className="text-xl text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Dlaczego My
            </Link>
            <Link
              href="#contact"
              className="text-xl text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              <Button className="bg-blue-500 hover:bg-blue-600">
                Rozpocznij współpracę
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}