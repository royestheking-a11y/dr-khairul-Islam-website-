import { useState } from 'react';
import { Video, Phone, MessageCircle, Calendar, User, FileText, CreditCard, CheckCircle2, MapPin, Clock, Monitor, ArrowRight } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { useLanguage } from '@/app/context/LanguageContext';
import { ScrollReveal } from '@/app/components/ScrollReveal';

const timeSlots = [
  '9:00 AM – 9:30 AM',
  '10:00 AM – 10:30 AM',
  '11:00 AM – 11:30 AM',
  '2:00 PM – 2:30 PM',
  '3:00 PM – 3:30 PM',
  '4:00 PM – 4:30 PM',
  '5:00 PM – 5:30 PM',
];

export default function OnlineConsultation() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [consultType, setConsultType] = useState<'online' | 'offline'>('online');
  const [formData, setFormData] = useState({
    name: '', phone: '', age: '', problem: '', date: '', timeSlot: '',
    paymentMethod: '', transactionId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const typeLabel = consultType === 'online'
      ? (language === 'en' ? 'Online Consultation' : 'অনলাইন পরামর্শ')
      : (language === 'en' ? 'Offline Consultation (Chamber Visit)' : 'অফলাইন পরামর্শ (চেম্বারে)');

    const message = `${language === 'en' ? 'New Consultation Booking' : 'নতুন পরামর্শ বুকিং'}

${language === 'en' ? 'Name' : 'নাম'}: ${formData.name}
${language === 'en' ? 'Phone' : 'ফোন'}: ${formData.phone}
${language === 'en' ? 'Age' : 'বয়স'}: ${formData.age}
${language === 'en' ? 'Problem' : 'সমস্যা'}: ${formData.problem}
${language === 'en' ? 'Type' : 'ধরন'}: ${typeLabel}
${language === 'en' ? 'Date' : 'তারিখ'}: ${formData.date}
${language === 'en' ? 'Time Slot' : 'সময়'}: ${formData.timeSlot}
${language === 'en' ? 'Payment Method' : 'পেমেন্ট'}: ${formData.paymentMethod}
${language === 'en' ? 'Transaction ID' : 'ট্রান্সেকশন আইডি'}: ${formData.transactionId}`;

    window.open(`https://wa.me/8801725497355?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
  };

  const labels = {
    name: language === 'en' ? 'Full Name *' : 'নাম *',
    phone: language === 'en' ? 'Mobile *' : 'মোবাইল *',
    age: language === 'en' ? 'Age *' : 'বয়স *',
    problem: language === 'en' ? 'Problem *' : 'সমস্যা *',
    date: language === 'en' ? 'Preferred Date *' : 'তারিখ *',
    paymentMethod: language === 'en' ? 'Payment Method' : 'পেমেন্ট মাধ্যম',
    transactionId: language === 'en' ? 'Transaction ID' : 'ট্রান্সেকশন আইডি',
  };

  const namePlaceholder = language === 'en' ? 'Your full name' : 'আপনার পূর্ণ নাম';
  const phonePlaceholder = language === 'en' ? '01XXXXXXXXX' : '০১XXXXXXXXX';
  const agePlaceholder = language === 'en' ? 'Age in years' : 'বছর';
  const problemPlaceholder = language === 'en' ? 'Describe your health problem' : 'সমস্যার বিবরণ';
  const paymentPlaceholder = language === 'en' ? 'bKash / Nagad / Rocket' : 'bKash / Nagad / Rocket';
  const transactionPlaceholder = language === 'en' ? 'Transaction ID' : 'ট্রান্সেকশন আইডি';

  const steps = [
    language === 'en' ? 'Personal Info' : 'ব্যক্তিগত তথ্য',
    language === 'en' ? 'Schedule' : 'সময়সূচী',
    language === 'en' ? 'Payment' : 'পেমেন্ট',
    language === 'en' ? 'Confirm' : 'নিশ্চিত',
  ];

  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <div className="badge-pill mb-4 mx-auto w-fit">
              <Video className="h-3.5 w-3.5" />
              {language === 'en' ? 'Online & Offline Services' : 'অনলাইন ও অফলাইন সেবা'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-outfit">
              {t.onlineConsultation.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">{t.onlineConsultation.subtitle}</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">

        {/* Consultation type selector */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {[
              { key: 'online', icon: Monitor, label: language === 'en' ? 'Online Consultation' : 'অনলাইন পরামর্শ', desc: language === 'en' ? 'From home via video/phone' : 'ঘরে বসে ভিডিও/ফোনে' },
              { key: 'offline', icon: MapPin, label: language === 'en' ? 'Chamber Visit' : 'চেম্বারে আসুন', desc: language === 'en' ? 'In-person at Barguna' : 'বরগুনা চেম্বারে সরাসরি' },
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => setConsultType(option.key as 'online' | 'offline')}
                className={`flex items-center gap-4 px-7 py-5 rounded-2xl border-2 transition-all duration-300 min-w-[220px] ${
                  consultType === option.key
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-gray-200 bg-white hover:border-primary/30'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  consultType === option.key ? 'bg-primary' : 'bg-gray-100'
                }`}>
                  <option.icon className={`h-6 w-6 ${consultType === option.key ? 'text-white' : 'text-gray-500'}`} />
                </div>
                <div className="text-left">
                  <p className={`font-bold text-base ${consultType === option.key ? 'text-primary' : 'text-gray-800'}`}>{option.label}</p>
                  <p className="text-xs text-muted-foreground">{option.desc}</p>
                </div>
                {consultType === option.key && (
                  <CheckCircle2 className="h-5 w-5 text-primary ml-auto flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Multi-step Form */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Progress Steps */}
                <div className="border-b border-gray-100 px-8 py-5">
                  <div className="flex items-center gap-2">
                    {steps.map((label, i) => (
                      <div key={i} className="flex items-center gap-2 flex-1">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                          step > i + 1 ? 'bg-primary text-white' :
                          step === i + 1 ? 'bg-primary text-white shadow-md shadow-primary/30' :
                          'bg-gray-100 text-gray-400'
                        }`}>
                          {step > i + 1 ? '✓' : i + 1}
                        </div>
                        <span className={`text-xs font-medium hidden sm:block ${step === i + 1 ? 'text-primary' : 'text-gray-400'}`}>
                          {label}
                        </span>
                        {i < steps.length - 1 && (
                          <div className={`flex-1 h-0.5 ${step > i + 1 ? 'bg-primary' : 'bg-gray-100'}`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8">
                  {submitted ? (
                    <div className="text-center py-10">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-outfit">
                        {language === 'en' ? 'Booking Submitted!' : 'বুকিং সাবমিট হয়েছে!'}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {language === 'en'
                          ? 'We will confirm your appointment via WhatsApp soon.'
                          : 'আমরা শীঘ্রই WhatsApp এ আপনার সিরিয়াল নিশ্চিত করব।'}
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setStep(1); setFormData({ name: '', phone: '', age: '', problem: '', date: '', timeSlot: '', paymentMethod: '', transactionId: '' }); }}
                        className="px-8 py-3 btn-premium text-white rounded-xl font-bold"
                      >
                        {language === 'en' ? 'Book Another' : 'আবার বুক করুন'}
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Step 1: Personal Info */}
                      {step === 1 && (
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-5 font-outfit">
                            {language === 'en' ? 'Personal Information' : 'ব্যক্তিগত তথ্য'}
                          </h3>
                          {[
                            { id: 'name', label: labels.name, type: 'text', placeholder: namePlaceholder, icon: User },
                            { id: 'phone', label: labels.phone, type: 'tel', placeholder: phonePlaceholder, icon: Phone },
                            { id: 'age', label: labels.age, type: 'number', placeholder: agePlaceholder, icon: User },
                          ].map((field) => (
                            <div key={field.id}>
                              <Label htmlFor={field.id} className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
                                <field.icon className="h-4 w-4 text-primary" />
                                {field.label}
                              </Label>
                              <Input id={field.id} name={field.id} type={field.type}
                                value={formData[field.id as keyof typeof formData]} onChange={handleChange}
                                placeholder={field.placeholder} className="premium-input" required />
                            </div>
                          ))}
                          <div>
                            <Label htmlFor="problem" className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
                              <FileText className="h-4 w-4 text-primary" /> {labels.problem}
                            </Label>
                            <Textarea id="problem" name="problem" value={formData.problem} onChange={handleChange}
                              placeholder={problemPlaceholder} rows={3} className="premium-input resize-none" required />
                          </div>
                        </div>
                      )}

                      {/* Step 2: Schedule */}
                      {step === 2 && (
                        <div className="space-y-5">
                          <h3 className="text-xl font-bold text-gray-900 mb-5 font-outfit">
                            {language === 'en' ? 'Schedule' : 'সময়সূচী'}
                          </h3>
                          <div>
                            <Label htmlFor="date" className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
                              <Calendar className="h-4 w-4 text-primary" /> {labels.date}
                            </Label>
                            <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange}
                              min={new Date().toISOString().split('T')[0]} className="premium-input" required />
                          </div>
                          <div>
                            <Label className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-700">
                              <Clock className="h-4 w-4 text-primary" />
                              {language === 'en' ? 'Select Time Slot' : 'সময় নির্বাচন করুন'}
                            </Label>
                            <div className="grid grid-cols-2 gap-2">
                              {timeSlots.map((slot) => (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, timeSlot: slot })}
                                  className={`py-2.5 px-4 rounded-xl border-2 text-sm font-medium transition-all ${
                                    formData.timeSlot === slot
                                      ? 'border-primary bg-primary text-white'
                                      : 'border-gray-200 hover:border-primary/50 text-gray-700'
                                  }`}
                                >
                                  {slot}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Payment */}
                      {step === 3 && (
                        <div className="space-y-5">
                          <h3 className="text-xl font-bold text-gray-900 mb-5 font-outfit">
                            {language === 'en' ? 'Payment' : 'পেমেন্ট'}
                          </h3>

                          {/* Payment Info */}
                          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                            <h4 className="font-bold text-blue-900 mb-3">
                              {language === 'en' ? 'Consultation Fee: BDT 500' : 'পরামর্শ ফি: ৫০০ টাকা'}
                            </h4>
                            <div className="space-y-2 text-sm text-blue-800">
                              <p><strong>bKash:</strong> 01725-497355 ({language === 'en' ? 'Personal' : 'পার্সোনাল'})</p>
                              <p><strong>Nagad:</strong> 01725-497355</p>
                              <p className="font-medium mt-3">
                                {language === 'en' ? 'After payment, enter the transaction ID below.' : 'পেমেন্টের পর নিচে ট্রান্সেকশন আইডি দিন।'}
                              </p>
                            </div>
                          </div>

                          {[
                            { id: 'paymentMethod', label: labels.paymentMethod, type: 'text', placeholder: paymentPlaceholder, icon: CreditCard },
                            { id: 'transactionId', label: labels.transactionId, type: 'text', placeholder: transactionPlaceholder, icon: FileText },
                          ].map((field) => (
                            <div key={field.id}>
                              <Label htmlFor={field.id} className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
                                <field.icon className="h-4 w-4 text-primary" />
                                {field.label}
                              </Label>
                              <Input id={field.id} name={field.id} type={field.type}
                                value={formData[field.id as keyof typeof formData]} onChange={handleChange}
                                placeholder={field.placeholder} className="premium-input" />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Step 4: Confirm */}
                      {step === 4 && (
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-5 font-outfit">
                            {language === 'en' ? 'Confirm Your Booking' : 'বুকিং নিশ্চিত করুন'}
                          </h3>
                          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-3 mb-5">
                            {[
                              { label: language === 'en' ? 'Name' : 'নাম', value: formData.name },
                              { label: language === 'en' ? 'Phone' : 'ফোন', value: formData.phone },
                              { label: language === 'en' ? 'Age' : 'বয়স', value: formData.age },
                              { label: language === 'en' ? 'Problem' : 'সমস্যা', value: formData.problem },
                              { label: language === 'en' ? 'Type' : 'ধরন', value: consultType === 'online' ? (language === 'en' ? 'Online' : 'অনলাইন') : (language === 'en' ? 'Chamber Visit' : 'চেম্বার') },
                              { label: language === 'en' ? 'Date' : 'তারিখ', value: formData.date },
                              { label: language === 'en' ? 'Time' : 'সময়', value: formData.timeSlot },
                            ].map((row, i) => (
                              <div key={i} className="flex items-start justify-between gap-3 py-2 border-b border-gray-100 last:border-0">
                                <span className="text-sm text-muted-foreground flex-shrink-0">{row.label}</span>
                                <span className="text-sm font-medium text-gray-900 text-right">{row.value || '—'}</span>
                              </div>
                            ))}
                          </div>

                          <div className="p-4 bg-teal-50/80 rounded-2xl border border-teal-200/80 space-y-1 mb-5">
                            <div className="flex items-center gap-2 text-teal-900 font-bold text-xs">
                              <span>📎 {t.reportUpload.title}</span>
                            </div>
                            <p className="text-xs text-teal-800 leading-relaxed">
                              {t.reportUpload.desc}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-gray-100">
                        {step > 1 ? (
                          <button
                            type="button"
                            onClick={() => setStep(step - 1)}
                            className="px-6 py-3 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-primary hover:text-primary transition-all"
                          >
                            {language === 'en' ? '← Back' : '← পেছনে'}
                          </button>
                        ) : <div />}

                        {step < 4 ? (
                          <button
                            type="button"
                            onClick={() => setStep(step + 1)}
                            className="px-8 py-3 btn-premium text-white rounded-xl font-bold flex items-center gap-2"
                          >
                            {language === 'en' ? 'Next' : 'পরবর্তী'}
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={handleSubmit}
                            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold flex items-center gap-2 transition-colors"
                          >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            {language === 'en' ? 'Confirm via WhatsApp' : 'WhatsApp এ নিশ্চিত করুন'}
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-5">
            <ScrollReveal direction="right">
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md">
                <h3 className="font-bold text-gray-900 mb-4 font-outfit flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  {language === 'en' ? 'Contact Directly' : 'সরাসরি যোগাযোগ'}
                </h3>
                <div className="space-y-3">
                  <a href="tel:01725497355" className="flex items-center gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                    <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{language === 'en' ? 'Call' : 'ফোন'}</p>
                      <p className="font-bold text-green-900 text-sm">০১৭২৫-৪৯৭৩৫৫</p>
                    </div>
                  </a>
                  <a href="https://wa.me/8801725497355" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors">
                    <div className="w-9 h-9 bg-teal-100 rounded-lg flex items-center justify-center">
                      <svg className="h-4 w-4 text-teal-700" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">WhatsApp</p>
                      <p className="font-bold text-teal-900 text-sm">{language === 'en' ? 'Send a message' : 'মেসেজ পাঠান'}</p>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100">
                <h3 className="font-bold text-amber-900 mb-3 font-outfit">
                  {language === 'en' ? 'Please Note' : 'গুরুত্বপূর্ণ'}
                </h3>
                <ul className="space-y-2.5">
                  {[
                    language === 'en'
                      ? 'Online consultation is not a substitute for in-person visits for serious conditions'
                      : 'গুরুতর রোগের ক্ষেত্রে অনলাইন পরামর্শ বিকল্প নয়',
                    language === 'en'
                      ? 'Bring previous medical reports if visiting the chamber'
                      : 'চেম্বারে আসলে আগের রিপোর্ট সাথে আনুন',
                    language === 'en'
                      ? 'Be available at your selected time slot'
                      : 'নির্বাচিত সময়ে উপলব্ধ থাকুন',
                  ].map((note, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-amber-800">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}