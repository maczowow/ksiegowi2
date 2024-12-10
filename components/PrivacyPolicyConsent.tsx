"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PrivacyPolicyConsentProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function PrivacyPolicyConsent({ checked, onCheckedChange }: PrivacyPolicyConsentProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="flex items-start space-x-2">
      <Checkbox
        id="privacy-policy"
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="mt-1"
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="privacy-policy"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{" "}
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="link" className="h-auto p-0 text-blue-500">
                polityką prywatności
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Polityka Prywatności</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm">
                <p>
                  1. Administrator danych osobowych: Księgowi Warszawscy Sp. z o.o.
                </p>
                <p>
                  2. Cel przetwarzania: Państwa dane osobowe będą przetwarzane w celu:
                  - Udzielenia odpowiedzi na przesłane zapytanie
                  - Prowadzenia korespondencji dotyczącej świadczonych usług
                  - Marketingu bezpośredniego własnych produktów lub usług
                </p>
                <p>
                  3. Podstawa prawna: Przetwarzanie danych odbywa się na podstawie:
                  - Art. 6 ust. 1 lit. a) RODO (zgoda osoby, której dane dotyczą)
                  - Art. 6 ust. 1 lit. b) RODO (wykonanie umowy)
                  - Art. 6 ust. 1 lit. f) RODO (prawnie uzasadniony interes administratora)
                </p>
                <p>
                  4. Okres przechowywania: Dane będą przechowywane przez okres:
                  - Niezbędny do udzielenia odpowiedzi na zapytanie
                  - Trwania umowy i po jej zakończeniu przez okres wynikający z przepisów prawa
                  - Do momentu wniesienia sprzeciwu wobec przetwarzania
                </p>
                <p>
                  5. Prawa osoby, której dane dotyczą:
                  - Prawo dostępu do danych
                  - Prawo do sprostowania danych
                  - Prawo do usunięcia danych
                  - Prawo do ograniczenia przetwarzania
                  - Prawo do przenoszenia danych
                  - Prawo do wniesienia sprzeciwu
                  - Prawo do cofnięcia zgody
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </label>
        <p className="text-sm text-gray-500">
          Twoje dane będą przetwarzane wyłącznie w celu obsługi Twojego zapytania.
        </p>
      </div>
    </div>
  );
}