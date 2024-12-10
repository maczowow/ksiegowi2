import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Księgowi Warszawscy - Usługi Księgowe',
  description: 'Profesjonalne usługi księgowe i doradztwo finansowe dla Twojej firmy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="accounting-theme"
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}