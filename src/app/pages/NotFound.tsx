import { Link } from 'react-router';
import { Home, Calendar } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb orb-1 w-64 h-64 top-10 left-10 bg-primary/10" />
      <div className="orb orb-2 w-96 h-96 bottom-10 right-10 bg-accent/10" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-lg mx-auto">
          {/* Animated 404 */}
          <div className="relative mb-6 inline-block">
            <span className="text-[120px] md:text-[180px] font-black font-outfit leading-none gradient-text select-none">
              404
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl -z-10 animate-pulse-glow" />
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-outfit">
            {language === 'en' ? 'Page Not Found' : 'পেজটি পাওয়া যায়নি'}
          </h1>
          <p className="text-muted-foreground mb-10 max-w-sm mx-auto leading-relaxed">
            {language === 'en'
              ? "Sorry, the page you're looking for doesn't exist or has been moved."
              : 'দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি বা সরানো হয়েছে।'}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/">
              <button className="flex items-center gap-2 px-8 py-4 btn-premium text-white rounded-2xl font-bold text-base">
                <Home className="h-5 w-5" />
                {language === 'en' ? 'Go to Home' : 'হোম পেজে ফিরুন'}
              </button>
            </Link>
            <Link to="/appointment">
              <button className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-2xl font-bold text-base hover:bg-primary hover:text-white transition-all">
                <Calendar className="h-5 w-5" />
                {language === 'en' ? 'Book Appointment' : 'সিরিয়াল নিন'}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
