import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Clock, CheckCircle2, AlertCircle, Phone, Calendar, MapPin, Sparkles, Navigation } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export function ChamberStatus({ compact = false }: { compact?: boolean }) {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState('');

  useEffect(() => {
    const checkChamberStatus = () => {
      // Calculate Bangladesh time (UTC +6)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const bdDate = new Date(utc + 3600000 * 6);

      const hour = bdDate.getHours();
      const minute = bdDate.getMinutes();
      const currentMinutes = hour * 60 + minute;

      // Format BD time for display
      const timeStr = bdDate.toLocaleTimeString(language === 'bn' ? 'bn-BD' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTimeStr(timeStr);

      // Schedule: Everyday 9:00 AM (540 mins) to 10:00 PM (1320 mins)
      setIsOpen(currentMinutes >= 540 && currentMinutes < 1320);
    };

    checkChamberStatus();
    const interval = setInterval(checkChamberStatus, 30000);
    return () => clearInterval(interval);
  }, [language]);

  if (compact) {
    return (
      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
        isOpen
          ? 'bg-emerald-500/15 text-emerald-700 border border-emerald-400/40'
          : 'bg-amber-500/15 text-amber-800 border border-amber-400/40'
      }`}>
        <span className="relative flex h-2 w-2">
          {isOpen && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`} />
        </span>
        <span>{isOpen ? t.chamberStatus.openNow : t.chamberStatus.closedNow}</span>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-teal-100/90 bg-white group transition-all duration-300 hover:shadow-xl">
      {/* Top accent gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-teal-500 to-accent" />

      <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-teal-50/30 via-white to-emerald-50/20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-5">
          {/* Left: Status & Schedule Info */}
          <div className="flex items-start gap-3.5 md:gap-4">
            <div className={`w-11 h-11 md:w-12 md:h-12 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 transition-transform group-hover:scale-105 ${
              isOpen
                ? 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-emerald-700/20'
                : 'bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-slate-800/20'
            }`}>
              <Clock className="h-5 w-5 md:h-6 md:w-6" />
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wide border shadow-2xs ${
                  isOpen
                    ? 'bg-emerald-500/15 text-emerald-800 border-emerald-300'
                    : 'bg-amber-500/15 text-amber-900 border-amber-300'
                }`}>
                  <span className="relative flex h-1.5 w-1.5">
                    {isOpen && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />}
                    <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isOpen ? 'bg-emerald-600' : 'bg-amber-600'}`} />
                  </span>
                  <span>{isOpen ? t.chamberStatus.openNow : t.chamberStatus.closedNow}</span>
                </span>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200">
                  {isOpen ? <CheckCircle2 className="h-3 w-3 text-emerald-600" /> : <AlertCircle className="h-3 w-3 text-amber-600" />}
                  <span>{currentTimeStr} (BD Time)</span>
                </div>
              </div>

              <h3 className="text-base md:text-lg font-bold text-gray-900 font-outfit leading-snug">
                {language === 'bn' ? 'নিউ হলি কেয়ার প্যাথলজী চেম্বার' : 'New Holy Care Pathology Chamber'}
              </h3>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-1 text-teal-800 font-bold">
                  <Sparkles className="h-3 w-3 text-teal-600" />
                  <span>{t.chamberStatus.dailyHours}</span>
                </div>
                <span className="hidden sm:inline text-slate-300">•</span>
                <div className="flex items-center gap-1 text-slate-500">
                  <MapPin className="h-3 w-3 text-primary" />
                  <span className="truncate max-w-[260px] sm:max-w-none">{t.chamber.addressText}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Action Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
            <Link to="/appointment" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-teal-600 hover:to-teal-700 text-white font-bold text-xs shadow-md shadow-teal-700/20 transition-all hover:scale-[1.02] cursor-pointer">
                <Calendar className="h-3.5 w-3.5" />
                <span>{t.nav.bookAppointment}</span>
              </button>
            </Link>

            <a
              href="tel:01725497355"
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-teal-50 text-slate-800 hover:text-primary font-bold text-xs border border-slate-200 hover:border-teal-300 transition-all shadow-2xs"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span>০১৭২৫-৪৯৭৩৫৫</span>
            </a>

            <a
              href="https://maps.app.goo.gl/VohUnA2Zuz8gJkiN8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-teal-50/80 hover:bg-teal-100 text-teal-800 font-bold text-xs border border-teal-200/80 transition-all"
              title="Google Maps"
            >
              <Navigation className="h-3.5 w-3.5 text-teal-700" />
              <span>{language === 'en' ? 'Directions' : 'ম্যাপ'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
