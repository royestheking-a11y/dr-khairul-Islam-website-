import { Heart, Stethoscope, RefreshCw, Baby, HeartHandshake, BookOpen, Banknote, CheckCircle2, AlertCircle, Microscope } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import { ScrollReveal } from '@/app/components/ScrollReveal';

export default function Fees() {
  const { t } = useLanguage();

  const feeCards = [
    { service: t.feesPage.consultation, fee: t.feesPage.consultationFee, icon: Stethoscope, iconBg: 'bg-blue-100', iconColor: 'text-blue-700', gradient: 'from-blue-50 to-cyan-50', border: 'border-blue-100', feeColor: 'text-blue-700' },
    { service: t.feesPage.followup, fee: t.feesPage.followupFee, icon: RefreshCw, iconBg: 'bg-green-100', iconColor: 'text-green-700', gradient: 'from-green-50 to-emerald-50', border: 'border-green-100', feeColor: 'text-green-700' },
    { service: t.feesPage.pregUltrasound, fee: t.feesPage.pregUltrasoundFee, icon: Baby, iconBg: 'bg-purple-100', iconColor: 'text-purple-700', gradient: 'from-purple-50 to-pink-50', border: 'border-purple-100', feeColor: 'text-purple-700' },
    { service: t.feesPage.disabled, fee: t.feesPage.disabledFee, icon: HeartHandshake, iconBg: 'bg-green-100', iconColor: 'text-green-700', gradient: 'from-emerald-100 to-green-100', border: 'border-emerald-200', feeColor: 'text-emerald-700', special: true },
    { service: t.feesPage.madrasha, fee: t.feesPage.madrashaFee, icon: BookOpen, iconBg: 'bg-blue-100', iconColor: 'text-blue-700', gradient: 'from-blue-100 to-cyan-100', border: 'border-blue-200', feeColor: 'text-blue-700', special: true },
    { service: t.feesPage.medTests, fee: t.feesPage.medTestsFee, icon: Microscope, iconBg: 'bg-amber-100', iconColor: 'text-amber-700', gradient: 'from-amber-100 to-orange-100', border: 'border-amber-200', feeColor: 'text-amber-700', special: true },
  ];

  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <div className="badge-pill mb-4 mx-auto w-fit">
              <Banknote className="h-3.5 w-3.5" />
              {t.feesPage.title}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-outfit">{t.feesPage.title}</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">{t.feesPage.subtitle}</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Fee Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {feeCards.map((item, i) => (
            <ScrollReveal key={i} delay={(i % 3) * 80}>
              <div className={`premium-card bg-gradient-to-br ${item.gradient} rounded-2xl p-8 text-center border ${item.border} h-full relative overflow-hidden`}>
                {item.special && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-primary text-white text-xs font-bold rounded-full">
                    {t.feesPage.specialOffer}
                  </div>
                )}
                <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 font-outfit">{item.service}</h3>
                <p className={`text-3xl font-bold ${item.feeColor} font-outfit`}>{item.fee}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Fee Table */}
        <ScrollReveal>
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-14">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-accent text-white">
                    <th className="p-4 text-left font-bold">{t.feesPage.tableService}</th>
                    <th className="p-4 text-right font-bold">{t.feesPage.tableFee}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: t.feesPage.consultation, fee: t.feesPage.consultationFee },
                    { service: t.feesPage.followup, fee: t.feesPage.followupFee },
                    { service: t.feesPage.pregUltrasound, fee: t.feesPage.pregUltrasoundFee },
                    { service: t.feesPage.disabled, fee: t.feesPage.disabledFee, highlight: 'bg-green-50', feeColor: 'text-green-700' },
                    { service: t.feesPage.madrasha, fee: t.feesPage.madrashaFee, highlight: 'bg-blue-50', feeColor: 'text-blue-700' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${row.highlight || ''}`}>
                      <td className="p-4 font-medium text-gray-800">{row.service}</td>
                      <td className={`p-4 text-right font-bold ${row.feeColor || 'text-gray-900'}`}>{row.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Special Social Services */}
        <section className="mb-14">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 font-outfit">{t.feesPage.socialServiceTitle}</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: HeartHandshake, gradient: 'from-green-50 to-emerald-50', border: 'border-green-200',
                iconBg: 'bg-green-100', iconColor: 'text-green-700',
                title: t.feesPage.disabledFreeTitle, desc: t.feesPage.disabledFreeDesc,
                howLabel: t.feesPage.howToGetDisabled, howDesc: t.feesPage.disabledRequirement,
              },
              {
                icon: BookOpen, gradient: 'from-blue-50 to-cyan-50', border: 'border-blue-200',
                iconBg: 'bg-blue-100', iconColor: 'text-blue-700',
                title: t.feesPage.madrashaDiscountTitle, desc: t.feesPage.madrashaDiscountDesc,
                howLabel: t.feesPage.howToGetMadrasha, howDesc: t.feesPage.madrashaRequirement,
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`premium-card bg-gradient-to-br ${item.gradient} rounded-3xl p-8 border-2 ${item.border} h-full`}>
                  <div className="flex items-start gap-5">
                    <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-outfit">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.desc}</p>
                      <div className="bg-white/70 rounded-xl p-4">
                        <p className="font-bold text-gray-900 text-sm mb-1">{item.howLabel}</p>
                        <p className="text-sm text-muted-foreground">{item.howDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Payment Information */}
        <ScrollReveal>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-6">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Banknote className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-5 font-outfit">{t.feesPage.paymentTitle}</h3>
                <ul className="space-y-3">
                  {[t.feesPage.payment1, t.feesPage.payment2, t.feesPage.payment3, t.feesPage.payment4].map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-gray-600 text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Important Notes */}
        <ScrollReveal>
          <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="h-5 w-5 text-amber-700" />
              <h3 className="font-bold text-amber-900 font-outfit">{t.feesPage.importantTitle}</h3>
            </div>
            <ul className="space-y-2">
              {[t.feesPage.note1, t.feesPage.note2, t.feesPage.note3].map((note, i) => (
                <li key={i} className="text-sm text-amber-800 flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
