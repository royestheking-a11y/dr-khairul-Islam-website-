import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { SEO } from '@/app/components/SEO';
import { LanguageProvider } from '@/app/context/LanguageContext';

export function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <SEO
          keywords={[
            "Dr Khairul Islam",
            "ডা. খাইরুল ইসলাম",
            "Medicine specialist Barguna",
            "মেডিসিন বিশেষজ্ঞ বরগুনা",
            "Pain specialist Barguna",
            "পেইন স্পেশালিস্ট বরগুনা",
            "Interventional pain management Bangladesh",
            "Holy Care Barguna",
            "New Holy Care Pathology Barguna",
          ]}
        />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
