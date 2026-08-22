import { useState } from 'react';
import { Calendar, User, Phone, FileText, CheckCircle2, FileUp, MessageCircle } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { SEO } from '@/app/components/SEO';
import { useLanguage } from '@/app/context/LanguageContext';
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { ChamberStatus } from '@/app/components/ChamberStatus';

export default function Appointment() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', phone: '', age: '', problem: '', date: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `আসসালামু আলাইকুম\nআমি ডা. মোঃ খাইরুল ইসলাম স্যারের কাছে সিরিয়াল নিতে চাই।\n\nনাম: ${formData.name}\nমোবাইল: ${formData.phone}\nবয়স: ${formData.age}\nসমস্যা: ${formData.problem}\nতারিখ: ${formData.date}`;
    window.open(`https://wa.me/8801725497355?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const tips = language === 'en'
    ? ['Visit the chamber at your confirmed appointment time', 'Bring any previous test reports', 'Inform us in advance if you cannot make it', 'In an emergency, call us directly']
    : ['সিরিয়াল নিশ্চিত হওয়ার পর নির্ধারিত সময়ে চেম্বারে আসুন', 'আগের পরীক্ষার রিপোর্ট থাকলে সাথে আনুন', 'সময়মত আসতে না পারলে আগেই জানান', 'জরুরি অবস্থায় সরাসরি ফোন করুন'];

  return (
    <div>
      <SEO
        title="Appointment"
        description="Book an appointment with Dr. Khairul Islam in Barguna. Consultation 500৳, follow-up 300৳."
        canonical="https://drkhairulislam.vercel.app/appointment"
      />

      {/* Page Hero */}
      <div className="page-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <div className="badge-pill mb-4 mx-auto w-fit">
              <Calendar className="h-3.5 w-3.5" />
              {t.appointmentPage.title}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-outfit">{t.appointment.heading}</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">{t.appointment.subheading}</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Live Chamber Status */}
        <div className="mb-10">
          <ChamberStatus />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Form */}
          <ScrollReveal direction="left">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-teal-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 font-outfit">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                {t.appointment.formTitle}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
                    <User className="h-4 w-4 text-primary" /> {t.appointment.name} *
                  </Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required
                    placeholder={t.appointment.namePlaceholder} className="premium-input" />
                </div>
                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
                    <Phone className="h-4 w-4 text-primary" /> {t.appointment.phone} *
                  </Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required
                    placeholder={t.appointment.phonePlaceholder} className="premium-input" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age" className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
                      <User className="h-4 w-4 text-primary" /> {t.appointment.age} *
                    </Label>
                    <Input id="age" name="age" type="number" value={formData.age} onChange={handleChange} required
                      placeholder={t.appointment.agePlaceholder} className="premium-input" />
                  </div>
                  <div>
                    <Label htmlFor="date" className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
                      <Calendar className="h-4 w-4 text-primary" /> {t.appointment.date} *
                    </Label>
                    <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required
                      min={new Date().toISOString().split('T')[0]} className="premium-input" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="problem" className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
                    <FileText className="h-4 w-4 text-primary" /> {t.appointment.problem} *
                  </Label>
                  <Textarea id="problem" name="problem" value={formData.problem} onChange={handleChange} required
                    placeholder={t.appointment.problemPlaceholder} rows={4} className="premium-input resize-none" />
                </div>
                <button type="submit" className="w-full py-4 btn-premium text-white rounded-2xl font-bold text-base flex items-center justify-center gap-2">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {t.appointment.submitBtn}
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Info Cards */}
          <ScrollReveal direction="right">
            <div className="space-y-5">
              {/* Medical Report / Prescription Pre-Upload Guidance */}
              <div className="bg-gradient-to-br from-teal-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 shadow-xl border border-teal-600/30">
                <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                  <FileUp className="h-4 w-4" />
                  <span>{t.reportUpload.title}</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed mb-4">
                  {t.reportUpload.desc}
                </p>
                <a
                  href="https://wa.me/8801725497355?text=%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%B0%20%E0%A6%AA%E0%A7%82%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A7%87%E0%A6%B0%20%E0%A6%B0%E0%A6%BF%E0%A6%AA%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%9F%20%2F%20%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B8%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%AA%E0%A6%B6%E0%A6%A8%20%E0%A6%B8%E0%A6%82%E0%A6%AF%E0%A7%81%E0%A6%95%E0%A7%8D%E0%A6%A4%20%E0%A6%95%E0%A6%B0%E0%A6%9B%E0%A6%BF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-2xl text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-[1.01]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t.reportUpload.actionText}</span>
                </a>
              </div>

              {/* How to book steps */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md">
                <h3 className="font-bold text-gray-900 mb-5 font-outfit">{t.appointment.howToTitle}</h3>
                <div className="space-y-4">
                  {[t.appointment.step1, t.appointment.step2, t.appointment.step3].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 shadow">
                        {i + 1}
                      </div>
                      <p className="text-sm font-medium text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-teal-50 rounded-3xl p-6 border border-teal-100">
                <h3 className="font-bold text-teal-900 mb-4 font-outfit">
                  💡 {language === 'en' ? 'Important Tips' : 'গুরুত্বপূর্ণ তথ্য'}
                </h3>
                <ul className="space-y-2.5">
                  {tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-teal-800">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call CTA */}
              <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100">
                <h3 className="font-bold text-amber-900 mb-3 font-outfit flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-700" />
                  {t.appointment.callTitle}
                </h3>
                <p className="text-sm text-amber-700 mb-4">
                  {language === 'en'
                    ? 'Having trouble booking online? Call us directly:'
                    : 'অনলাইনে সিরিয়াল নিতে সমস্যা হলে সরাসরি কল করুন:'}
                </p>
                <a href="tel:01725497355">
                  <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-white border-2 border-amber-200 rounded-2xl font-bold text-amber-900 hover:bg-amber-50 transition-colors">
                    <Phone className="h-5 w-5" />
                    {t.appointment.callNumber}
                  </button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
