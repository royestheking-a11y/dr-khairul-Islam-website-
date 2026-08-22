import { GraduationCap, Award, Building2, Heart, CheckCircle2, Quote } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/app/context/LanguageContext';
import { ScrollReveal } from '@/app/components/ScrollReveal';

const doctorImage = '/doctor img.png';

export default function About() {
  const { t } = useLanguage();

  return (
    <div>
      <Helmet>
        <title>About Dr. Khairul Islam | Best Medicine Specialist in Bangladesh</title>
        <meta name="description" content="Learn more about Dr. Khairul Islam, a top Medicine and Interventional Pain Management Specialist in Barguna, Bangladesh." />
        <meta property="og:title" content="About Dr. Khairul Islam | Best Medicine Specialist in Bangladesh" />
      </Helmet>

      {/* Page Hero */}
      <div className="page-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <div className="badge-pill mb-4 mx-auto w-fit">
              <GraduationCap className="h-3.5 w-3.5" />
              {t.about.pageTitle}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-outfit">
              {t.about.pageSubtitle}
            </h1>
            <p className="text-lg text-primary font-semibold">{t.about.specialty}</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl border border-teal-50">
                <img
                  src={doctorImage}
                  alt="ডা. মোঃ খাইরুল ইসলাম"
                  className="rounded-2xl w-full object-cover"
                />
                <div className="mt-3 glass rounded-2xl p-4">
                  <h3 className="font-bold text-gray-900 text-lg font-outfit">{t.about.doctorName}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{t.about.specialty}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-outfit">{t.about.doctorName}</h2>
              <p className="text-lg text-primary font-semibold mb-6">{t.about.specialty}</p>

              <div className="space-y-4 mb-8">
                {[t.about.bio1, t.about.bio2, t.about.bio3, t.about.bio4].map((bio, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{bio}</p>
                ))}
              </div>

              {/* Quote */}
              <div className="relative bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl border border-teal-100">
                <Quote className="h-8 w-8 text-primary/20 absolute top-4 left-4" />
                <p className="font-semibold italic text-gray-800 pl-6 leading-relaxed">
                  {t.about.quote}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Education Section */}
        <section className="mb-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 font-outfit">{t.about.educationTitle}</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: GraduationCap, degree: t.about.mbbs, institution: t.about.mbbsInst, color: 'from-teal-50 to-cyan-50', iconBg: 'bg-teal-100', iconColor: 'text-teal-700', border: 'border-teal-100' },
              { icon: Award, degree: t.about.da, institution: t.about.daInst, color: 'from-blue-50 to-indigo-50', iconBg: 'bg-blue-100', iconColor: 'text-blue-700', border: 'border-blue-100' },
              { icon: Award, degree: t.about.fipm, institution: t.about.fipmInst, color: 'from-purple-50 to-pink-50', iconBg: 'bg-purple-100', iconColor: 'text-purple-700', border: 'border-purple-100' },
            ].map((edu, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`premium-card bg-gradient-to-br ${edu.color} rounded-2xl p-7 border ${edu.border} h-full`}>
                  <div className={`w-14 h-14 ${edu.iconBg} rounded-2xl flex items-center justify-center mb-5`}>
                    <edu.icon className={`h-7 w-7 ${edu.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2 font-outfit">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.institution}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Specialization Section */}
        <section className="mb-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 font-outfit">{t.about.specializationTitle}</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {t.about.specializations.map((spec, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">{spec.title}</h3>
                    <p className="text-sm text-muted-foreground">{spec.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Hospital Affiliation */}
        <section>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 font-outfit">{t.about.hospitalTitle}</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/15">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2 font-outfit">{t.about.hospitalName}</h3>
                  <p className="text-muted-foreground mb-3">{t.about.hospitalAddress}</p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full border border-primary/20">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {t.about.mainChamber}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
