import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { Phone, MessageCircle, AlertTriangle, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import { ScrollReveal } from '@/app/components/ScrollReveal';

const extendedFaqsBn = [
  { q: 'মাদ্রাসা শিক্ষার্থীদের ডিসকাউন্ট কিভাবে পাবো?', a: 'মাদ্রাসার পরিচয়পত্র অথবা প্রত্যয়নপত্র সাথে নিয়ে আসলে সকল সেবায় ৫০% ছাড় পাবেন।' },
  { q: 'জরুরি রোগী হলে কি করবেন?', a: 'জরুরি অবস্থায় দেরি না করে নিকটস্থ হাসপাতালের জরুরি বিভাগে যান। তারপর সুস্থ হলে আমাদের সাথে ফোনে যোগাযোগ করে Follow-up পরামর্শ নিন।' },
  { q: 'অনলাইন কনসাল্টেশন আছে কি?', a: 'হ্যাঁ, আমরা অনলাইন পরামর্শ সেবা প্রদান করি। ফোন বা WhatsApp এর মাধ্যমে পরামর্শ নিতে পারবেন।' },
  { q: 'পেমেন্ট কিভাবে করবো?', a: 'চেম্বারে নগদ (Cash) পেমেন্ট করতে পারবেন। এছাড়াও bKash, Nagad, Rocket এর মাধ্যমেও পেমেন্ট করতে পারবেন।' },
  { q: 'চেম্বারের সঠিক ঠিকানা কি?', a: 'নিউ হলি কেয়ার প্যাথলজী, পুরাতন লোহাপট্টি, পূবালী ব্যাংকের নীচতলা, বরগুনা।' },
  { q: 'রিপোর্ট কি সাথে আনতে হবে?', a: 'হ্যাঁ, আগের কোনো পরীক্ষার রিপোর্ট, প্রেসক্রিপশন বা মেডিকেল ডকুমেন্ট থাকলে অবশ্যই সাথে আনবেন।' },
];

const extendedFaqsEn = [
  { q: 'How do Madrasha students get their discount?', a: 'Bring your Madrasha ID card or certificate. You will receive 50% discount on all services.' },
  { q: 'What to do in an emergency?', a: 'In an emergency, do not delay — go directly to the nearest hospital emergency department. Contact us for follow-up once stable.' },
  { q: 'Is online consultation available?', a: 'Yes, we provide online consultation services via phone or WhatsApp.' },
  { q: 'How do I make a payment?', a: 'Cash payments are accepted at the chamber. bKash, Nagad, and Rocket are also accepted.' },
  { q: 'What is the exact chamber address?', a: 'New Holy Care Pathology, Old Lohapatti, Ground Floor of Pubali Bank, Barguna.' },
  { q: 'Should I bring previous reports?', a: 'Yes, please bring any previous test reports, prescriptions, or medical documents as they help in diagnosis.' },
];

export default function FAQ() {
  const { t, language } = useLanguage();
  const allFaqs = [...t.faq.items, ...(language === 'en' ? extendedFaqsEn : extendedFaqsBn)];

  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <div className="badge-pill mb-4 mx-auto w-fit">
              <HelpCircle className="h-3.5 w-3.5" />
              FAQ
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-outfit">{t.faqPage.title}</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">{t.faqPage.subtitle}</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">

        {/* FAQ Accordion */}
        <ScrollReveal>
          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 mb-8">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {allFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-800 px-5 py-4 hover:text-primary hover:no-underline">
                    <span className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 px-5 pb-5 leading-relaxed pl-14">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>

        {/* Emergency Notice */}
        <ScrollReveal>
          <div className="bg-red-50 rounded-3xl p-6 border border-red-100 mb-6">
            <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2 font-outfit">
              🚨 {language === 'en' ? 'Emergency & Safety Notice' : 'জরুরি ও নিরাপত্তা নোটিশ'}
            </h3>
            <p className="text-red-800 text-sm leading-relaxed">
              {language === 'en'
                ? 'In an emergency, do not delay. Go directly to the nearest hospital emergency department. Seek follow-up care from us once stable.'
                : 'জরুরি অবস্থায় দেরি না করে নিকটস্থ হাসপাতালের জরুরি বিভাগে যান। তারপর ফোনে যোগাযোগ করুন।'}
            </p>
          </div>
        </ScrollReveal>

        {/* CTA Card */}
        <ScrollReveal>
          <div className="gradient-animated rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3 font-outfit">
              {language === 'en' ? 'Still have questions?' : 'আরও প্রশ্ন আছে?'}
            </h3>
            <p className="mb-6 opacity-90 text-sm">
              {language === 'en'
                ? "Can't find your answer here? Contact us directly."
                : 'আপনার প্রশ্নের উত্তর খুঁজে পাচ্ছেন না? আমাদের সাথে সরাসরি যোগাযোগ করুন।'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:01725497355">
                <button className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg">
                  <Phone className="h-4 w-4" />
                  {language === 'en' ? 'Call Us' : 'কল করুন'}
                </button>
              </a>
              <a href="https://wa.me/8801725497355" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-xl font-bold border-2 border-white/50 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Disclaimer */}
        <ScrollReveal>
          <div className="mt-6 bg-amber-50 rounded-3xl p-5 border border-amber-100">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 leading-relaxed">
                {language === 'en'
                  ? 'Information on this website is for general knowledge only. Always consult a doctor directly for medical treatment. Online consultation is not a substitute for in-person visits but may be used for initial guidance.'
                  : 'এই ওয়েবসাইটে প্রদত্ত তথ্য শুধুমাত্র সাধারণ জ্ঞানের জন্য। চিকিৎসার জন্য সরাসরি ডাক্তারের পরামর্শ গ্রহণ করুন।'}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}