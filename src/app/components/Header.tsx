import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Phone, MapPin, Menu, X, Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useLanguage } from '@/app/context/LanguageContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/reviews', label: t.nav.reviews },
    { to: '/chamber', label: t.nav.chamber },
    { to: '/fees', label: t.nav.fees },
    { to: '/appointment', label: t.nav.appointment },
    { to: '/online-consultation', label: t.nav.onlineConsultation },
    { to: '/faq', label: t.nav.faq },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-md border-b border-white/30'
          : 'bg-white border-b border-teal-50'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-5">
            <a
              href="tel:01725497355"
              className="flex items-center gap-1.5 hover:text-teal-100 transition-colors font-medium"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="font-outfit">০১৭২৫-৪৯৭৩৫৫</span>
            </a>
            <div className="hidden sm:flex items-center gap-1.5 text-teal-100">
              <MapPin className="h-3.5 w-3.5" />
              <span>{t.header.location}</span>
            </div>
            <a
              href="https://www.facebook.com/drmdkhairulislams/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/15 hover:bg-white/25 rounded-full text-xs font-semibold text-white transition-all shadow-sm"
              title="Official Facebook Page"
            >
              <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>{language === 'en' ? 'Facebook Page' : 'ফেসবুক পেজ'}</span>
            </a>
          </div>

          {/* Language Toggle + CTA */}
          <div className="flex items-center gap-3">
            {/* Minimalist Clean Language Toggle */}
            <div className="flex items-center bg-black/20 backdrop-blur-md rounded-full p-1 border border-white/20">
              <button
                type="button"
                onClick={() => setLanguage('bn')}
                className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  language === 'bn'
                    ? 'bg-white text-teal-950 font-bold shadow-sm'
                    : 'text-white/80 hover:text-white'
                }`}
                aria-label="বাংলা"
              >
                বাং
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  language === 'en'
                    ? 'bg-white text-teal-950 font-bold shadow-sm'
                    : 'text-white/80 hover:text-white'
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>

            <Link to="/appointment">
              <Button
                size="sm"
                className="text-xs gap-1.5 bg-white text-primary hover:bg-teal-50 font-bold shadow-sm transition-all rounded-full px-3.5"
              >
                <Calendar className="h-3 w-3" />
                {t.nav.bookAppointment}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo/Brand with Premium Medical Icon */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-primary via-teal-600 to-accent flex items-center justify-center shadow-lg shadow-teal-600/20 group-hover:shadow-teal-600/40 group-hover:scale-105 transition-all duration-300 border border-white/30">
              {/* Medical Stethoscope & Pulse Emblem */}
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
                <circle cx="20" cy="10" r="2" />
              </svg>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold text-gray-900 leading-tight font-outfit group-hover:text-primary transition-colors">
                {t.header.doctorName}
              </span>
              <span className="text-xs text-primary font-medium tracking-wide">{t.header.specialty}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.to)
                        ? 'text-primary bg-primary/8'
                        : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {item.label}
                    {isActive(item.to) && (
                      <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2.5 rounded-2xl bg-teal-50 hover:bg-teal-100 text-gray-800 transition-colors cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm animate-fade-in flex flex-col justify-end">
          {/* Backdrop Click to Close */}
          <div className="absolute inset-0" onClick={() => setIsMenuOpen(false)} />

          {/* Full Screen Drawer Surface */}
          <div className="relative z-10 w-full h-[100dvh] bg-white flex flex-col shadow-2xl overflow-y-auto animate-fade-up">
            {/* Drawer Top Header Bar */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-teal-50/60 to-white sticky top-0 z-20">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary via-teal-600 to-accent flex items-center justify-center shadow-md text-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
                    <circle cx="20" cy="10" r="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm leading-tight font-outfit">{t.header.doctorName}</h3>
                  <p className="text-[11px] text-primary font-medium">{t.header.specialty}</p>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Language Switcher in Mobile Drawer */}
            <div className="px-5 py-3.5 border-b border-gray-100 bg-teal-50/40 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-700">Language / ভাষা</span>
              <div className="flex items-center bg-white rounded-full p-1 border border-teal-200 shadow-sm">
                <button
                  type="button"
                  onClick={() => setLanguage('bn')}
                  className={`px-4 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    language === 'bn'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  বাংলা
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    language === 'en'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Navigation List */}
            <nav className="flex-1 px-4 py-3">
              <ul className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between py-3 px-4 rounded-2xl text-sm font-semibold transition-all ${
                        isActive(item.to)
                          ? 'text-primary bg-primary/10 font-bold border border-primary/20 shadow-sm'
                          : 'text-gray-700 hover:text-primary hover:bg-teal-50/60'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-gray-100 bg-gray-50/90 space-y-2.5 mt-auto sticky bottom-0">
              <Link to="/appointment" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full gap-2 font-bold btn-premium text-white border-0 py-5 text-base shadow-lg shadow-teal-600/20" size="lg">
                  <Calendar className="h-5 w-5" />
                  {t.nav.bookAppointment}
                </Button>
              </Link>
              <a href="https://wa.me/8801725497355" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full gap-2 font-bold border-2 border-green-300 text-green-700 hover:bg-green-50 py-5 text-sm" size="lg">
                  <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp সিরিয়াল
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

