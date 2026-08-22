import {
  Stethoscope, Heart, Users, Syringe, Baby, Zap, HeartHandshake, BookOpen,
  Thermometer, Droplets, HeartPulse, Wind, Pill, UserCheck, Bone, Brain,
  Activity, Sparkles, Flame, Utensils, Maximize2, ShieldAlert, Sun,
  ArrowUpRight, Footprints, Layers, User, AlertTriangle, Phone
} from 'lucide-react';
import { SEO } from '@/app/components/SEO';
import { useLanguage } from '@/app/context/LanguageContext';
import { ScrollReveal } from '@/app/components/ScrollReveal';

const medicineIcons = [
  Thermometer, Brain, Wind, Flame, Pill, Wind, Utensils,
  Droplets, Maximize2, ShieldAlert, Sun, Activity, HeartPulse, Droplets, ArrowUpRight,
];

const painIcons = [Syringe, User, AlertTriangle, UserCheck, Footprints, Bone, Zap];

export default function Services() {
  const { t } = useLanguage();

  return (
    <div>
      <SEO
        title="Services"
        description="Medicine and Interventional Pain Management services by Dr. Khairul Islam in Barguna."
        canonical="https://drkhairulislam.vercel.app/services"
      />

      {/* Page Hero */}
      <div className="page-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <div className="badge-pill mb-4 mx-auto w-fit">
              <Stethoscope className="h-3.5 w-3.5" />
              {t.servicesPage.title}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-outfit">
              {t.servicesPage.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">{t.servicesPage.subtitle}</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Medicine Services */}
        <section className="mb-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-teal-700" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 font-outfit">{t.servicesPage.medicineTitle}</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.servicesPage.medicineServices.map((name, index) => {
              const Icon = medicineIcons[index] || Pill;
              return (
                <ScrollReveal key={index} delay={(index % 6) * 60}>
                  <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-200 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-teal-700" />
                    </div>
                    <p className="font-semibold text-gray-800">{name}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Pain Management Services */}
        <section className="mb-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 font-outfit">{t.servicesPage.painTitle}</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.servicesPage.painServices.map((name, index) => {
              const Icon = painIcons[index] || Zap;
              return (
                <ScrollReveal key={index} delay={index * 80}>
                  <div className="premium-card bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4 shadow-md">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-semibold text-gray-800 text-sm leading-relaxed">{name}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Special Services */}
        <section className="mb-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-purple-700" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 font-outfit">{t.servicesPage.specialTitle}</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Baby, title: t.servicesPage.ultrasoundTitle, desc: t.servicesPage.ultrasoundDesc,
                gradient: 'from-purple-50 to-pink-50', iconBg: 'bg-purple-100', iconColor: 'text-purple-700', border: 'border-purple-100',
              },
              {
                icon: Layers, title: t.servicesPage.allUltrasoundTitle, desc: t.servicesPage.allUltrasoundDesc,
                gradient: 'from-blue-50 to-cyan-50', iconBg: 'bg-blue-100', iconColor: 'text-blue-700', border: 'border-blue-100',
              },
              {
                icon: Baby, title: t.servicesPage.pregUltrasoundTitle, desc: t.servicesPage.pregUltrasoundDesc,
                gradient: 'from-green-50 to-emerald-50', iconBg: 'bg-green-100', iconColor: 'text-green-700', border: 'border-green-100',
                price: t.servicesPage.pregUltrasoundPrice,
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`premium-card bg-gradient-to-br ${item.gradient} rounded-2xl p-8 border ${item.border} h-full`}>
                  <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center mb-5`}>
                    <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2 font-outfit">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                  {item.price && (
                    <p className="text-2xl font-bold text-primary font-outfit">{item.price}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Special Patient Care */}
        <section className="mb-16">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <Users className="h-6 w-6 text-emerald-700" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 font-outfit">{t.servicesPage.specialPatientTitle}</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: HeartHandshake, title: t.servicesPage.disabledTitle, offer: t.servicesPage.disabledOffer,
                desc: t.servicesPage.disabledDesc,
                gradient: 'from-green-50 to-emerald-50', border: 'border-green-200',
                iconBg: 'bg-green-100', iconColor: 'text-green-700', offerColor: 'text-green-600',
              },
              {
                icon: BookOpen, title: t.servicesPage.madrashaTitle, offer: t.servicesPage.madrashaOffer,
                desc: t.servicesPage.madrashaDesc,
                gradient: 'from-blue-50 to-cyan-50', border: 'border-blue-200',
                iconBg: 'bg-blue-100', iconColor: 'text-blue-700', offerColor: 'text-blue-600',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`premium-card bg-gradient-to-br ${item.gradient} rounded-2xl p-8 border ${item.border} h-full`}>
                  <div className="flex items-start gap-5">
                    <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 font-outfit">{item.title}</h3>
                      <p className={`text-xl font-bold ${item.offerColor} mb-3`}>{item.offer}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <ScrollReveal>
          <div className="gradient-animated rounded-3xl p-10 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 font-outfit">{t.servicesPage.ctaTitle}</h3>
            <p className="mb-7 opacity-90">{t.servicesPage.ctaSubtitle}</p>
            <a href="tel:01725497355">
              <button className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-colors shadow-xl">
                <Phone className="h-5 w-5" />
                {t.servicesPage.callBtn}
              </button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
