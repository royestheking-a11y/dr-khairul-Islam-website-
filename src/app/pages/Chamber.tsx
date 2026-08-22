import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/app/context/LanguageContext';
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { ChamberStatus } from '@/app/components/ChamberStatus';

export default function Chamber() {
  const { t, language } = useLanguage();

  return (
    <div>
      <Helmet>
        <title>Chamber Info | Dr. Khairul Islam | Best Doctor in Barguna, Bangladesh</title>
        <meta name="description" content="Find the chamber address and visiting hours of Dr. Khairul Islam in Barguna, Bangladesh." />
        <meta property="og:title" content="Chamber Info | Dr. Khairul Islam | Best Doctor in Barguna" />
      </Helmet>

      {/* Page Hero */}
      <div className="page-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <div className="badge-pill mb-4 mx-auto w-fit">
              <MapPin className="h-3.5 w-3.5" />
              {t.chamber.heading}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-outfit">{t.chamber.heading}</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">{t.chamber.subheading}</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Live Chamber Status */}
        <div className="max-w-4xl mx-auto mb-10">
          <ChamberStatus />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Chamber Details */}
          <div className="space-y-5">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-7 font-outfit">{t.chamber.chamberName}</h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin, label: t.quickInfo.address, value: t.chamber.addressText,
                      iconBg: 'bg-teal-100', iconColor: 'text-teal-700',
                    },
                    {
                      icon: Phone, label: t.chamber.contact, value: '০১৭২৫-৪৯৭৩৫৫',
                      iconBg: 'bg-green-100', iconColor: 'text-green-700',
                    },
                    {
                      icon: Clock, label: t.chamber.scheduleTitle, value: `${t.chamber.satToThu} ${t.chamber.satToThuTime}`,
                      iconBg: 'bg-blue-100', iconColor: 'text-blue-700',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Schedule detail */}
                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                  <h3 className="font-bold text-gray-900 mb-3">{t.chamber.scheduleTitle}</h3>
                  <div className="flex justify-between items-center py-2.5 px-4 bg-teal-50 rounded-xl">
                    <span className="text-sm text-gray-700">{t.chamber.satToThu}</span>
                    <span className="text-sm font-bold text-primary">{t.chamber.satToThuTime}</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 px-4 bg-amber-50 rounded-xl">
                    <span className="text-sm text-gray-700">{t.chamber.friday}</span>
                    <span className="text-sm font-bold text-amber-700">{t.chamber.fridayTime}</span>
                  </div>
                </div>

                {/* Directions */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center justify-between">
                    <span>{language === 'en' ? 'Directions & Plus Code' : 'দিকনির্দেশনা ও প্লাস কোড'}</span>
                    <span className="px-2.5 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-mono font-bold">
                      545C+V2 Barguna
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {language === 'en'
                      ? 'Located at the ground floor of Pubali Bank Limited, Barguna Branch. Old Lohapatti area, Barguna.'
                      : 'পূবালী ব্যাংক লিমিটেড, বরগুনা শাখার নিচতলায় অবস্থিত। পুরাতন লোহাপট্টি, বরগুনা।'}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/VohUnA2Zuz8gJkiN8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center gap-2 px-5 py-3 btn-premium text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all">
                      <Navigation className="h-4 w-4" />
                      {language === 'en' ? 'Get Directions (Google Maps)' : 'Google Maps এ সরাসরি যান'}
                    </button>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Contact */}
            <ScrollReveal direction="left" delay={100}>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 border border-teal-100">
                <h3 className="font-bold text-gray-900 mb-4 font-outfit">
                  {language === 'en' ? 'Quick Contact' : 'দ্রুত যোগাযোগ'}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <a href="tel:01725497355" className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl hover:shadow-md transition-all hover:-translate-y-1 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Phone className="h-5 w-5 text-green-700" />
                    </div>
                    <span className="text-xs font-bold text-gray-900">০১৭২৫-৪৯৭৩৫৫</span>
                  </a>
                  <a href="https://wa.me/8801725497355" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl hover:shadow-md transition-all hover:-translate-y-1 text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-gray-900">WhatsApp</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal direction="right">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-full min-h-[500px] flex flex-col relative group">
              {/* Map Floating Header Bar */}
              <div className="p-4 bg-white/95 backdrop-blur-sm border-b border-gray-100 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 leading-tight font-outfit">New Holy Care Pathology</p>
                    <p className="text-[11px] text-muted-foreground">545C+V2 Barguna, Bangladesh</p>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/VohUnA2Zuz8gJkiN8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1"
                >
                  <Navigation className="h-3 w-3" />
                  <span>{language === 'en' ? 'Open Map' : 'ম্যাপ খুলুন'}</span>
                </a>
              </div>

              {/* Responsive Google Maps Embed */}
              <div className="flex-1 w-full min-h-[440px] relative">
                <iframe
                  src="https://maps.google.com/maps?q=545C%2BV2%20Barguna&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[440px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chamber Location (545C+V2 Barguna)"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Emergency Notice */}
        <ScrollReveal>
          <div className="mt-8 bg-red-50 rounded-3xl p-6 border border-red-100">
            <h3 className="font-bold text-lg text-red-900 mb-2">
              🚨 {language === 'en' ? 'Emergency Notice' : 'জরুরি নোটিশ'}
            </h3>
            <p className="text-red-800 text-sm leading-relaxed">
              {language === 'en'
                ? 'In case of emergency, do not delay — go directly to the nearest hospital emergency department. Then contact us by phone.'
                : 'জরুরি অবস্থায় দেরি না করে নিকটস্থ হাসপাতালের জরুরি বিভাগে যান। তারপর ফোনে যোগাযোগ করুন।'}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
