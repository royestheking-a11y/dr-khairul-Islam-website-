import { useState } from 'react';
import { Link } from 'react-router';
import {
  Activity, CheckCircle2, Calendar, ArrowRight, ShieldCheck, Zap,
  HeartPulse, Baby, Stethoscope, Sparkles
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useLanguage } from '@/app/context/LanguageContext';
import { ScrollReveal } from '@/app/components/ScrollReveal';

interface SymptomCategory {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  symptomsBn: string[];
  symptomsEn: string[];
  solutionBn: string;
  solutionEn: string;
  proceduresBn: string[];
  proceduresEn: string[];
}

const SYMPTOM_DATA: SymptomCategory[] = [
  {
    id: 'back-spine',
    icon: Activity,
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-700',
    titleBn: 'কোমর ও মেরুদণ্ডের ব্যথা (PLID / সায়াটিকা)',
    titleEn: 'Lower Back & Spine Pain (PLID / Sciatica)',
    descBn: 'কোমরে তীব্র টনটনে ব্যথা, যা পায়ের দিকে ছড়িয়ে যায় এবং দীর্ঘক্ষণ বসে বা দাঁড়িয়ে থাকলে বৃদ্ধি পায়।',
    descEn: 'Sharp lower back pain radiating down the leg, aggravated by prolonged sitting or standing.',
    symptomsBn: [
      'কোমর থেকে পা পর্যন্ত ঝিনঝিন বা অবশ অনুভূতি',
      'ভারী কিছু তুলতে গেলে বা ঝুঁকলে তীব্র টান লাগা',
      'সকালে ঘুম থেকে ওঠার পর পিঠ ও কোমর শক্ত হয়ে থাকা',
      'দীর্ঘক্ষণ সোজা হয়ে হাঁটতে বা বসতে অসুবিধা হওয়া'
    ],
    symptomsEn: [
      'Numbness or tingling sensation radiating to legs',
      'Sharp pull or pain when bending or lifting',
      'Morning stiffness in lower back and spine',
      'Difficulty standing or walking straight for long'
    ],
    solutionBn: 'অপারেশনবিহীন আধুনিক ইন্টারভেনশনাল পেইন চিকিৎসা — সি-আর্ম গাইডেড এপিডুরাল ইনজেকশন, ওজোন ডিসকোলাইসিস ও নার্ভ ব্লক থেরাপির মাধ্যমে ব্যথার স্থায়ী সমাধান।',
    solutionEn: 'Non-surgical Interventional Pain Management — C-Arm guided epidural injections, ozone discolysis, and selective nerve root blocks for long-term relief.',
    proceduresBn: ['সি-আর্ম গাইডেড নার্ভ ব্লক', 'ট্রান্সফোরামিনাল এপিডুরাল ইনজেকশন', 'মেডিকেল রিহ্যাব প্ল্যান'],
    proceduresEn: ['C-Arm Guided Nerve Block', 'Transforaminal Epidural Injection', 'Targeted Rehabilitation Plan']
  },
  {
    id: 'neck-shoulder',
    icon: Stethoscope,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    titleBn: 'ঘাড়, কাঁধ ও হাতের ব্যথা (সারভাইকাল স্পন্ডাইলোসিস)',
    titleEn: 'Neck, Shoulder & Arm Pain (Cervical Spondylosis)',
    descBn: 'ঘাড় ঘোরাতে কষ্ট হওয়া, কাঁধ জমে যাওয়া (Frozen Shoulder) এবং ব্যথা হাত বা আঙুল পর্যন্ত ছড়িয়ে পড়া।',
    descEn: 'Neck stiffness, frozen shoulder, and shooting pain or weakness radiating into the arms or fingers.',
    symptomsBn: [
      'ঘাড়ের পেছনের অংশে ক্রমাগত চিনচিনে ব্যথা',
      'হাত উপরে তুলতে বা পেছনে নিতে তীব্র যন্ত্রণা',
      'মাথাব্যথা ও মাথার পেছনের দিকে টান লাগা',
      'হাতের আঙুলে অবশ ভাব বা শক্তি কমে যাওয়া'
    ],
    symptomsEn: [
      'Persistent dull ache behind the neck',
      'Severe restriction lifting or rotating arms',
      'Tension headaches and upper neck tightness',
      'Numbness or reduced grip strength in fingers'
    ],
    solutionBn: 'সারভাইকাল এপিডুরাল ও ফ্যাসেট জয়েন্ট ইনজেকশন, শোল্ডার জয়েন্ট হাইড্রোর্ডাইলেশন এবং ইন্টারভেনশনাল থেরাপির মাধ্যমে জয়েন্টের স্বাভাবিক গতি পুনরুদ্ধার।',
    solutionEn: 'Cervical epidural & facet joint injections, shoulder hydrodilatation, and interventional joint mobilization without surgery.',
    proceduresBn: ['ফ্যাসেট জয়েন্ট ইনজেকশন', 'শোল্ডার হাইড্রো-ডাইলেশন', 'ইনফ্রাস্পাইনাস নার্ভ ব্লক'],
    proceduresEn: ['Facet Joint Injection', 'Shoulder Hydrodilatation', 'Suprascapular Nerve Block']
  },
  {
    id: 'knee-joint',
    icon: HeartPulse,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
    titleBn: 'হাঁটু ও বড় জয়েন্টের বাতব্যথা (অস্টিওআর্থ্রাইটিস)',
    titleEn: 'Knee & Joint Arthritis (Osteoarthritis)',
    descBn: 'হাঁটুর ভেতরের কার্টিলেজ বা পিচ্ছিল তরল কমে যাওয়ার ফলে ওঠা-বসায় কটকট শব্দ ও তীব্র ব্যথা।',
    descEn: 'Knee cartilage wear and fluid reduction causing grinding sounds, swelling, and severe pain when standing or walking.',
    symptomsBn: [
      'সিঁড়ি দিয়ে ওঠানামা করার সময় তীব্র হাঁটু ব্যথা',
      'নামাজে বসা বা স্কোয়াটিং পজিশনে হাঁটুর ভেতরের অংশে চাপ লাগা',
      'হাঁটু ফুলে যাওয়া ও স্পর্শ করলে গরম অনুভূত হওয়া',
      'হাঁটার সময় জয়েন্টে কটকট শব্দ অনুভব হওয়া'
    ],
    symptomsEn: [
      'Sharp knee pain while climbing stairs or walking',
      'Difficulty bending knees during prayer or sitting',
      'Swelling and warmth around the knee joint',
      'Grinding/popping sensations inside the joint'
    ],
    solutionBn: 'হায়ালুরোনিক অ্যাসিড জয়েন্ট লুব্রিকেশন থেরাপি, পিআরপি (PRP) রিজেনারেটিভ থেরাপি এবং জেনিকুলার নার্ভ ব্লক যা দ্রুত ব্যথা নিরাময় করে।',
    solutionEn: 'Hyaluronic acid joint lubrication injections, PRP regenerative therapy, and genicular nerve blocks to eliminate knee pain effectively.',
    proceduresBn: ['পিআরপি (PRP) জয়েন্ট থেরাপি', 'হায়ালুরোনিক ফ্লুইড রিপ্লেসমেন্ট', 'জেনিকুলার নার্ভ রেডিওফ্রিকোয়েন্সি'],
    proceduresEn: ['PRP Joint Regenerative Therapy', 'Hyaluronic Acid Injections', 'Genicular Nerve Block']
  },
  {
    id: 'chronic-neuropathy',
    icon: Zap,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    titleBn: 'দীর্ঘস্থায়ী স্নায়ুবিক ব্যথা ও ট্রাইজেমিনাল নিউরালজিয়া',
    titleEn: 'Chronic Neuropathy & Trigeminal Neuralgia',
    descBn: 'মুখের একপাশে বিদ্যুতের মতো চমকানো ব্যথা, ডায়াবেটিসজনিত পায়ের জ্বালাপোড়া বা দীর্ঘদিনের জটিল ব্যথা।',
    descEn: 'Electric shock-like facial pain, burning sensation in diabetic feet, or stubborn chronic neuropathic pain.',
    symptomsBn: [
      'মুখ ধোয়ার সময় বা কথা বললে মুখে তীব্র বিদ্যুতের মতো শক লাগা',
      'ডায়াবেটিস রোগীদের পায়ের তালুতে সুই ফোটার মতো জ্বালাপোড়া',
      'বছরের পর বছর পেইনকিলার খেয়েও স্থায়ী সমাধান না পাওয়া',
      'শরীরের বিভিন্ন পয়েন্টে স্পর্শ করলে অসহ্য তীব্র অনুভূতি'
    ],
    symptomsEn: [
      'Sudden electric shock sensation across one side of face',
      'Burning, tingling, or needle pricks in feet/soles',
      'Dependency on heavy painkillers with no lasting cure',
      'Hypersensitivity to light touch in affected areas'
    ],
    solutionBn: 'বিশেষায়িত নিউরোমডুলেশন, নার্ভ ব্লক ইনজেকশন এবং ইন্টারভেনশনাল পেইন প্রোটোকল যা ব্যথানাশক ওষুধের পার্শ্বপ্রতিক্রিয়া ছাড়া দীর্ঘস্থায়ী মুক্তি দেয়।',
    solutionEn: 'Advanced neuromodulation, targeted nerve ablations, and customized interventional protocols to end reliance on heavy painkillers.',
    proceduresBn: ['ট্রাইজেমিনাল নার্ভ ব্লক', 'পেরিফেরাল নার্ভ ইনজেকশন', 'মাল্টিমোডাল নিউরো থেরাপি'],
    proceduresEn: ['Trigeminal Nerve Block', 'Peripheral Nerve Injections', 'Multimodal Neuropathic Care']
  },
  {
    id: 'pregnancy-ultrasound',
    icon: Baby,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-700',
    titleBn: 'গর্ভকালীন আল্ট্রাসাউন্ড ও জেনারেল মেডিসিন',
    titleEn: 'Pregnancy Ultrasonography & General Medicine',
    descBn: 'গর্ভবতী মা ও গর্ভস্থ শিশুর স্বাস্থ্য পর্যবেক্ষণ (মাত্র ৫০০ টাকায় আল্ট্রাসাউন্ড) এবং সাধারণ ও জটিল মেডিসিন সেবা।',
    descEn: 'Safe pregnancy ultrasonography (BDT 500) and comprehensive diagnosis of diabetes, hypertension & complex medical issues.',
    symptomsBn: [
      'গর্ভকালীন নিয়মিত স্বাস্থ্য পরীক্ষা ও বাচ্চার বৃদ্ধি পরিমাপ',
      'অনিয়ন্ত্রিত ডায়াবেটিস, উচ্চ রক্তচাপ ও শারীরিক দুর্বলতা',
      'বুকের ধড়ফড়, দীর্ঘদিনের পেটের সমস্যা বা গ্যাসট্রিক',
      'গর্ভস্থ বাচ্চার সঠিক পজিশন ও অ্যামনিওটিক ফ্লুইড যাচাই'
    ],
    symptomsEn: [
      'Routine prenatal screening & fetal growth tracking',
      'Uncontrolled diabetes, hypertension & chronic fatigue',
      'Palpitations, recurring gastric issues & abdominal pain',
      'Checking fetal position & amniotic fluid index'
    ],
    solutionBn: 'উচ্চমানের আল্ট্রাসনোগ্রাফি মেশিনে নিখুঁত গর্ভকালীন পরীক্ষা ও সঠিক সময়ে জীবন রক্ষাকারী মেডিসিন প্রেসক্রিপশন ও ফলোআপ গাইডেন্স।',
    solutionEn: 'Precision pregnancy ultrasonography at subsidized fee (BDT 500) combined with evidence-based internal medicine management.',
    proceduresBn: ['গর্ভকালীন আল্ট্রাসনোগ্রাফি (৫০০ টাকা)', 'ডায়াবেটিস ও প্রেশার ম্যানেজমেন্ট', 'সম্পূর্ণ জেনারেল মেডিসিন কনসালটেশন'],
    proceduresEn: ['Pregnancy Ultrasound (BDT 500)', 'Diabetes & Hypertension Care', 'Comprehensive General Medicine']
  }
];

export function SymptomGuide() {
  const { t, language } = useLanguage();
  const [selectedId, setSelectedId] = useState<string>('back-spine');

  const selectedCategory = SYMPTOM_DATA.find((c) => c.id === selectedId) || SYMPTOM_DATA[0];
  const IconComponent = selectedCategory.icon;

  return (
    <section className="py-20 bg-gradient-to-b from-teal-50/40 via-white to-slate-50 text-slate-900 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4 shadow-sm">
              <Activity className="h-4 w-4" />
              <span>{t.symptomGuide.badge}</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 font-outfit">
              {t.symptomGuide.heading}
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {t.symptomGuide.subheading}
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Selection Bar with Premium Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-10">
          {SYMPTOM_DATA.map((cat) => {
            const isSelected = cat.id === selectedId;
            const TabIcon = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedId(cat.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-br from-primary to-teal-700 text-white border-primary shadow-xl shadow-teal-900/20 scale-[1.02]'
                    : 'bg-white hover:bg-teal-50/70 text-slate-700 border-slate-200 hover:border-teal-300 shadow-sm'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                  isSelected ? 'bg-white/20 text-white' : `${cat.iconBg} ${cat.iconColor}`
                }`}>
                  <TabIcon className="h-5 w-5" />
                </div>
                <div className={`font-bold text-xs sm:text-sm line-clamp-2 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                  {language === 'bn' ? cat.titleBn : cat.titleEn}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Symptom Detailed Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Symptoms & Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-primary text-xs font-extrabold uppercase tracking-wider mb-2">
                  <div className={`w-6 h-6 rounded-lg ${selectedCategory.iconBg} ${selectedCategory.iconColor} flex items-center justify-center`}>
                    <IconComponent className="h-3.5 w-3.5" />
                  </div>
                  <span>{t.symptomGuide.selectCondition}</span>
                </div>
                <h3 className="text-xl md:text-3xl font-extrabold text-gray-900 font-outfit mb-3">
                  {language === 'bn' ? selectedCategory.titleBn : selectedCategory.titleEn}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {language === 'bn' ? selectedCategory.descBn : selectedCategory.descEn}
                </p>
              </div>

              {/* Symptoms Checklist */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span>{language === 'bn' ? 'সাধারণ লক্ষণ ও উপসর্গসমূহ:' : 'Common Signs & Symptoms:'}</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(language === 'bn' ? selectedCategory.symptomsBn : selectedCategory.symptomsEn).map((sym, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Doctor Solution & Booking CTA */}
            <div className="lg:col-span-5 bg-gradient-to-br from-teal-50 via-white to-emerald-50/50 p-6 md:p-7 rounded-3xl border border-teal-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-teal-900 text-xs font-bold uppercase tracking-wider mb-2.5">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>{t.symptomGuide.solutionsHeading}</span>
                </div>

                <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                  {language === 'bn' ? selectedCategory.solutionBn : selectedCategory.solutionEn}
                </p>

                {/* Procedures Pills */}
                <div className="mb-6">
                  <h5 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2.5">
                    {language === 'bn' ? 'প্রযোজ্য বিশেষায়িত চিকিৎসা:' : 'Specialized Procedures:'}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {(language === 'bn' ? selectedCategory.proceduresBn : selectedCategory.proceduresEn).map((proc, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white border border-teal-200 text-teal-800 text-xs font-semibold rounded-full shadow-2xs"
                      >
                        ✓ {proc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-teal-100">
                <Link to="/appointment">
                  <Button className="w-full gap-2 font-bold btn-premium text-white py-6 text-sm md:text-base shadow-lg shadow-teal-700/20">
                    <Calendar className="h-5 w-5" />
                    <span>{t.symptomGuide.bookForThis}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
