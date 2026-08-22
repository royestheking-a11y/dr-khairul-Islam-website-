import { useState } from 'react';
import { BookOpen, Sparkles, X, ChevronRight, HeartPulse, ShieldAlert, Award } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useLanguage } from '@/app/context/LanguageContext';
import { ScrollReveal } from '@/app/components/ScrollReveal';

interface HealthTip {
  id: string;
  categoryBn: string;
  categoryEn: string;
  titleBn: string;
  titleEn: string;
  excerptBn: string;
  excerptEn: string;
  takeawayBn: string;
  takeawayEn: string;
  contentBn: string[];
  contentEn: string[];
}

const HEALTH_TIPS: HealthTip[] = [
  {
    id: 'back-posture',
    categoryBn: 'কোমর ও মেরুদণ্ড',
    categoryEn: 'Spine & Posture',
    titleBn: 'বসে কাজ করার সঠিক নিয়ম ও কোমর ব্যথা প্রতিরোধের উপায়',
    titleEn: 'Proper Ergonomic Posture & Lower Back Pain Prevention',
    excerptBn: 'প্রতিদিন যারা চেয়ারে বসে দীর্ঘ সময় কাজ করেন, তাদের মেরুদণ্ডে অতিরিক্ত চাপ পড়ে। কিছু সাধারণ অভ্যাসের পরিবর্তনেই এই ব্যথা এড়ানো সম্ভব।',
    excerptEn: 'Prolonged sitting puts excessive pressure on the lumbar spine. Simple ergonomic adjustments can prevent long-term damage.',
    takeawayBn: 'প্রতি ৩০-৪০ মিনিট পর উঠে ২ মিনিট হাঁটুন এবং পিঠের পেছনে লাম্বার সাপোর্ট কুশন ব্যবহার করুন।',
    takeawayEn: 'Stand up and stretch every 30-40 minutes; use a supportive lumbar cushion behind your lower back.',
    contentBn: [
      'চেয়ারে বসার সময় কোমর সোজা রাখুন এবং হাঁটু যেন কোমর বরাবর ৯০ ডিগ্রি কোণে থাকে।',
      'কম্পিউটার স্ক্রিন চোখের সমান্তরালে রাখুন যাতে ঘাড় বাঁকা না করতে হয়।',
      'ভারী বস্তু মাটি থেকে তোলার সময় কোমর বাঁকা না করে হাঁটু ভেঙে বসুন।',
      'কোমর ব্যথায় বিছানায় পুরোপুরি শুয়ে না থেকে চিকিৎসকের পরামর্শে নিয়মিত কোর এক্সারসাইজ করুন।'
    ],
    contentEn: [
      'Keep your back straight with knees bent at a 90-degree angle aligned with hips.',
      'Adjust computer monitor to eye level to avoid bending the neck forward.',
      'Always bend your knees, not your back, when lifting heavy objects from the floor.',
      'Avoid prolonged complete bed rest during back pain; gentle rehabilitation maintains spinal mobility.'
    ]
  },
  {
    id: 'knee-care',
    categoryBn: 'জয়েন্ট ও বাতব্যথা',
    categoryEn: 'Joint & Arthritis',
    titleBn: 'হাঁটুর জয়েন্ট ভালো রাখার নিয়ম ও বাতব্যথা নিয়ন্ত্রণের কৌশল',
    titleEn: 'Knee Joint Longevity & Effective Arthritis Management',
    excerptBn: 'শরীরের সম্পূর্ণ ভার বহন করে হাঁটু। সঠিক শারীরিক ওজন বজায় রাখা এবং কোয়াড্রিসেপস পেশির ব্যায়াম হাঁটুকে দীর্ঘদিন সুস্থ রাখে।',
    excerptEn: 'Knees bear the body’s full weight. Controlling body weight and strengthening thigh muscles preserve joint cartilage.',
    takeawayBn: '১ কেজি ওজন কমলে হাঁটু থেকে প্রায় ৪ কেজি অতিরিক্ত চাপ হ্রাস পায়।',
    takeawayEn: 'Losing just 1 kg of body weight reduces approximately 4 kg of pressure from your knee joints.',
    contentBn: [
      'হাঁটুর তীব্র ব্যথায় হাই-কমোড ব্যবহার করুন এবং ডিপ-স্কোয়াটিং এড়িয়ে চলুন।',
      'প্রতিদিন সকালে ১০-১৫ মিনিট হাঁটুর স্ট্রেন্থেনিং এক্সারসাইজ করুন।',
      'হাঁটু ফুলে গেলে বা গরম অনুভূত হলে বরফের সেক দিন এবং জয়েন্টে গরম সেক দেওয়া থেকে বিরত থাকুন।',
      'ব্যথা খুব বেড়ে গেলে কার্টিলেজ রিজেনারেশনের জন্য পিআরপি বা ইন্টারভেনশনাল থেরাপির পরামর্শ নিন।'
    ],
    contentEn: [
      'Use high commodes during acute knee arthritis flare-ups and avoid deep squatting.',
      'Practice non-impact quad strengthening exercises for 10-15 minutes daily.',
      'Apply ice packs if the joint is swollen or warm; avoid hot compresses on active inflammation.',
      'Consult for regenerative PRP or interventional lubricant therapy before irreversible damage.'
    ]
  },
  {
    id: 'painkiller-risk',
    categoryBn: 'ঔষধ সচেতনতা',
    categoryEn: 'Medication Safety',
    titleBn: 'দীর্ঘদিন পেইনকিলার খাওয়ার ঝুঁকি ও আধুনিক পেইন ম্যানেজমেন্ট',
    titleEn: 'Risks of Long-Term Painkillers & Modern Interventions',
    excerptBn: 'ব্যথা হলেই ফার্মেসি থেকে ব্যথানাশক ওষুধ খাওয়ার অভ্যাস কিডনি ও লিভারের জন্য মারাত্মক ক্ষতিকর হতে পারে। জেনে নিন নিরাপদ বিকল্প।',
    excerptEn: 'Frequent use of over-the-counter NSAID painkillers can cause severe kidney and stomach damage. Learn safer interventional alternatives.',
    takeawayBn: 'পেইনকিলার সাময়িক অনুভূতি বন্ধ করে, রোগ নিরাময় করে না। ইন্টারভেনশনাল চিকিৎসা ব্যথার মূল উৎস নিষ্ক্রিয় করে।',
    takeawayEn: 'Painkillers only mask the symptom; interventional pain management treats the exact root source safely.',
    contentBn: [
      'এনএসএআইডি (NSAIDs) ব্যথানাশক ওষুধের অতিরিক্ত সেবনে গ্যাস্ট্রিক আলসার এবং কিডনি ফেইলিওরের ঝুঁকি বহুগুণ বেড়ে যায়।',
      'ডায়াবেটিস ও উচ্চ রক্তচাপের রোগীদের পেইনকিলারের ব্যবহারে সর্বোচ্চ সতর্কতা প্রয়োজন।',
      'সি-আর্ম গাইডেড নার্ভ ব্লক ও ওজোন থেরাপির মাধ্যমে ওষুধ ছাড়াই মাসের পর মাস ব্যথা নিয়ন্ত্রণে রাখা সম্ভব।',
      'ডাক্তারের প্রেসক্রিপশন ছাড়া কখনোই নিজে থেকে তীব্র ব্যথানাশক ওষুধ খাবেন না।'
    ],
    contentEn: [
      'Overuse of NSAID painkillers drastically elevates the risk of peptic ulcers and chronic kidney disease.',
      'Diabetic and hypertensive patients must exercise strict caution with all painkiller medications.',
      'Targeted nerve blocks under fluoroscopy (C-Arm) provide durable relief without systemic drug toxicity.',
      'Never take over-the-counter anti-inflammatory painkillers without a certified doctor’s prescription.'
    ]
  },
  {
    id: 'pregnancy-ultrasound-care',
    categoryBn: 'মাতৃস্বাস্থ্য ও আল্ট্রাসাউন্ড',
    categoryEn: 'Maternal & Ultrasound',
    titleBn: 'গর্ভকালীন সঠিক সময়ে আল্ট্রাসনোগ্রাফির গুরুত্ব ও মাতৃস্বাস্থ্য',
    titleEn: 'Timing & Clinical Importance of Pregnancy Ultrasonography',
    excerptBn: 'গর্ভস্থ শিশু সুস্থ ও স্বাভাবিকভাবে বেড়ে উঠছে কিনা তা জানতে নির্দিষ্ট সময়ে আল্ট্রাসনোগ্রাফি অত্যন্ত প্রয়োজনীয়।',
    excerptEn: 'Timely prenatal ultrasonography ensures early detection of fetal growth milestones and safe maternal health monitoring.',
    takeawayBn: 'ডা. খাইরুল ইসলাম স্যারের চেম্বারে গর্ভবতী মায়েদের জন্য মাত্র ৫০০ টাকায় নিখুঁত আল্ট্রাসনোগ্রাফি সেবা প্রদান করা হয়।',
    takeawayEn: 'High-precision pregnancy ultrasonography is provided at an accessible fee of only BDT 500.',
    contentBn: [
      '১ম ট্রাইমেস্টার (১১-১৩ সপ্তাহ): বাচ্চার হার্টবিট, সঠিক বয়স ও গঠন নিশ্চিত করা।',
      '২য় ট্রাইমেস্টার (১৮-২২ সপ্তাহ): জন্মগত ত্রুটি বা অ্যানোমালি স্ক্যান নিশ্চিত করা।',
      '৩য় ট্রাইমেস্টার (৩২-৩৬ সপ্তাহ): গর্ভস্থ বাচ্চার ওজন, প্লাসেন্টার অবস্থান ও অ্যামনিওটিক ফ্লুইডের পরিমাণ দেখা।',
      'নিয়মিত চেকআপে মা ও বাচ্চার জটিলতা শুরুতেই প্রতিরোধ করা সম্ভব।'
    ],
    contentEn: [
      'First Trimester (11-13 wks): Confirmation of fetal cardiac activity and exact gestational age.',
      'Second Trimester (18-22 wks): Comprehensive anomaly scan to verify organ development.',
      'Third Trimester (32-36 wks): Assessing fetal growth, placental maturity, and amniotic fluid index.',
      'Routine prenatal screening ensures early detection of preventable pregnancy complications.'
    ]
  }
];

export function HealthTips() {
  const { t, language } = useLanguage();
  const [selectedTip, setSelectedTip] = useState<HealthTip | null>(null);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 text-slate-900 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4 shadow-sm">
              <BookOpen className="h-4 w-4" />
              <span>{t.healthTips.badge}</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 font-outfit">
              {t.healthTips.heading}
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {t.healthTips.subheading}
            </p>
          </div>
        </ScrollReveal>

        {/* Health Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HEALTH_TIPS.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 bg-teal-50 text-teal-800 text-[11px] font-bold rounded-full border border-teal-100">
                    {language === 'bn' ? tip.categoryBn : tip.categoryEn}
                  </span>
                  <HeartPulse className="h-4 w-4 text-primary opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>

                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {language === 'bn' ? tip.titleBn : tip.titleEn}
                </h3>

                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {language === 'bn' ? tip.excerptBn : tip.excerptEn}
                </p>

                {/* Key takeaway highlight box */}
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-700 mb-4">
                  <div className="flex items-center gap-1.5 font-bold text-primary mb-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{t.healthTips.keyTakeaway}:</span>
                  </div>
                  <p className="italic text-slate-600 leading-snug">
                    "{language === 'bn' ? tip.takeawayBn : tip.takeawayEn}"
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedTip(tip)}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-teal-50/70 hover:bg-primary hover:text-white text-primary text-xs font-bold rounded-xl transition-all cursor-pointer group/btn"
              >
                <span>{t.healthTips.readMore}</span>
                <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detailed Advice View */}
      {selectedTip && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-scale-up">
            <button
              type="button"
              onClick={() => setSelectedTip(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-800 text-xs font-bold rounded-full border border-teal-200 mb-3">
              <Award className="h-3.5 w-3.5 text-primary" />
              <span>{language === 'bn' ? selectedTip.categoryBn : selectedTip.categoryEn}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 font-outfit">
              {language === 'bn' ? selectedTip.titleBn : selectedTip.titleEn}
            </h3>

            <div className="p-4 bg-teal-50/70 rounded-2xl border border-teal-200/80 mb-5">
              <div className="flex items-center gap-2 font-bold text-primary text-xs mb-1.5">
                <Sparkles className="h-4 w-4" />
                <span>{t.healthTips.keyTakeaway}</span>
              </div>
              <p className="text-xs md:text-sm text-slate-800 font-medium leading-relaxed">
                {language === 'bn' ? selectedTip.takeawayBn : selectedTip.takeawayEn}
              </p>
            </div>

            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-3">
              {language === 'bn' ? 'চিকিৎসকের মূল নির্দেশনাসমূহ:' : 'Clinical Guidelines:'}
            </h4>

            <ul className="space-y-3 mb-6">
              {(language === 'bn' ? selectedTip.contentBn : selectedTip.contentEn).map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <div className="text-[11px] text-slate-500 flex items-center gap-1">
                <ShieldAlert className="h-3.5 w-3.5 text-amber-500" />
                <span>পরামর্শটি তথ্যমূলক। তীব্র ব্যথায় চিকিৎসকের শরণাপন্ন হোন।</span>
              </div>
              <Button onClick={() => setSelectedTip(null)} className="btn-premium text-white font-bold" size="sm">
                বুঝেছি
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
