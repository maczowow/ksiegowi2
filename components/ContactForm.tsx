"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { PrivacyPolicyConsent } from "@/components/PrivacyPolicyConsent";
import { ContactFormData } from "@/lib/types";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacyPolicyAccepted: false,
    timestamp: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!privacyPolicyAccepted) {
      toast({
        title: "Błąd",
        description: "Proszę zaakceptować politykę prywatności aby kontynuować.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          privacyPolicyAccepted
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      toast({
        title: "Sukces!",
        description: "Twoja wiadomość została wysłana pomyślnie.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        privacyPolicyAccepted: false,
        timestamp: ""
      });
      setPrivacyPolicyAccepted(false);
    } catch (error) {
      toast({
        title: "Błąd",
        description: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Twoje Imię"
          required
        />
      </div>
      <div>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Adres Email"
          required
        />
      </div>
      <div>
        <Input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Temat"
          required
        />
      </div>
      <div>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Twoja Wiadomość"
          className="h-32"
          required
        />
      </div>
      <PrivacyPolicyConsent
        checked={privacyPolicyAccepted}
        onCheckedChange={setPrivacyPolicyAccepted}
      />
      <Button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600"
        disabled={isSubmitting || !privacyPolicyAccepted}
      >
        {isSubmitting ? "Wysyłanie..." : "Wyślij Wiadomość"}
      </Button>
    </form>
  );
}