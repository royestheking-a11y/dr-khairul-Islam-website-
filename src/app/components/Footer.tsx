import { Link } from 'react-router';
import { Phone, Mail, MapPin, AlertTriangle, ArrowUp, Facebook, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/reviews', label: t.nav.reviews },
    { to: '/appointment', label: t.nav.appointment },
    { to: '/online-consultation', label: t.nav.onlineConsultation },
    { to: '/faq', label: t.nav.faq },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,60 C360,0 1080,60 1440,0 L1440,60 Z" fill="#0f172a"/>
        </svg>
      </div>

      <div className="bg-gray-950 text-white pt-16 pb-0">
        {/* Decorative orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-teal-600 to-accent flex items-center justify-center shadow-lg shadow-teal-500/20 border border-teal-400/30">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
                    <circle cx="20" cy="10" r="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-outfit leading-tight">{t.footer.doctorName}</h3>
                  <p className="text-xs text-teal-400">{t.footer.specialty}</p>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                {t.footer.tagline}
              </p>

              <div className="flex gap-3 mb-5">
                <a
                  href="https://www.facebook.com/drmdkhairulislams/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  title="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://m.me/drmdkhairulislams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                  title="Messenger"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/8801725497355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                  title="WhatsApp"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>

              {/* WhatsApp Appointment CTA */}
              <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-inner max-w-xs">
                <p className="text-xs text-slate-300 mb-2.5 font-medium">{t.nav.bookAppointment}</p>
                <a
                  href="https://wa.me/8801725497355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02]"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-base font-bold text-white mb-5 font-outfit flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-primary to-accent rounded-full inline-block" />
                {t.footer.contact}
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:01725497355"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 bg-slate-800 group-hover:bg-primary rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                    <Phone className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors text-sm">০১৭২৫-৪৯৭৩৫৫</span>
                </a>
                <a
                  href="mailto:Khairulislam7355@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 bg-slate-800 group-hover:bg-primary rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                    <Mail className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors text-sm break-all">Khairulislam7355@gmail.com</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/VohUnA2Zuz8gJkiN8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 bg-slate-800 group-hover:bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                    <MapPin className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-300 group-hover:text-white transition-colors text-sm leading-relaxed">{t.footer.address}</span>
                    <span className="text-teal-400 text-xs font-mono font-bold mt-0.5">Plus Code: 545C+V2 Barguna</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base font-bold text-white mb-5 font-outfit flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-primary to-accent rounded-full inline-block" />
                {t.footer.quickLinks}
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-slate-400 hover:text-teal-300 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-teal-500 rounded-full group-hover:w-2 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 pt-6 border-t border-slate-800">
            <div className="max-w-2xl mx-auto flex items-center justify-center">
              <p className="text-xs text-slate-400 leading-relaxed text-center inline-flex items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-inner">
                <AlertTriangle className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                <span>{t.footer.disclaimer}</span>
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-4 pt-4 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-slate-500">{t.footer.copyright}</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              {t.footer.backToTop}
              <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}