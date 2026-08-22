import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import {
  Phone, MessageCircle, MapPin, Clock, BadgeCheck, Heart, Users,
  Stethoscope, Calendar, GraduationCap, HeartHandshake, Baby,
  HelpCircle, Video, User, FileText, ArrowRight, Star, Play, X,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { useLanguage } from '@/app/context/LanguageContext';
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { AnimatedCounter } from '@/app/components/AnimatedCounter';
import { ChamberStatus } from '@/app/components/ChamberStatus';
import { SymptomGuide } from '@/app/components/SymptomGuide';
import { HealthTips } from '@/app/components/HealthTips';

// YouTube Shorts Video ID or URL (Dr. Khairul Islam Hero Reel)
const YOUTUBE_SHORTS_ID = 'https://youtube.com/shorts/HFOwEiIrszY?si=JTRpgWv6taLWNHss';

// 20 Patient Video Review Shorts
const REVIEW_SHORTS = [
  { id: 'zMaPJICsdEo', titleBn: 'রোগীর সুস্থতার বাস্তব অভিজ্ঞতা ও অনুভূতি', titleEn: 'Patient Recovery Experience & Feedback', tagBn: 'পেইন রিলিফ', tagEn: 'Pain Relief' },
  { id: 'gA9yo-uKzoQ', titleBn: 'দীর্ঘমেয়াদী ব্যথা উপশমে রোগীর সন্তুষ্টি', titleEn: 'Chronic Pain Relief & Patient Satisfaction', tagBn: 'ব্যথা নিরাময়', tagEn: 'Pain Treatment' },
  { id: 'I1fmwbpbq3U', titleBn: 'সফল চিকিৎসা পরবর্তী রোগীর প্রতিক্রিয়া', titleEn: 'Post-Treatment Patient Recovery Story', tagBn: 'সফল চিকিৎসা', tagEn: 'Success Story' },
  { id: 'vOL37rAv9-g', titleBn: 'ইন্টারভেনশনাল পেইন চিকিৎসায় রোগীর মুখে হাসি', titleEn: 'Interventional Pain Treatment Experience', tagBn: 'পেইন বিশেষজ্ঞ', tagEn: 'Pain Specialist' },
  { id: 'PbqG4kV3UyU', titleBn: 'হাঁটু ও জয়েন্ট ব্যথার কার্যকর চিকিৎসা মতামত', titleEn: 'Knee & Joint Pain Treatment Review', tagBn: 'জয়েন্ট পেইন', tagEn: 'Joint Pain' },
  { id: 'YZ59PmkD2-M', titleBn: 'চিকিৎসা শেষে রোগীর অভিজ্ঞতা ও সন্তুষ্টি', titleEn: 'Patient Review After Successful Care', tagBn: 'রোগী সন্তুষ্টি', tagEn: 'Satisfaction' },
  { id: 'MALxGtOZIjI', titleBn: 'মেরুদণ্ড ও কোমর ব্যথার চিকিৎসা প্রতিক্রিয়া', titleEn: 'Spine & Back Pain Relief Feedback', tagBn: 'কোমর ব্যথা', tagEn: 'Back Pain' },
  { id: 'rlu8hUVvfR4', titleBn: 'ডা. খাইরুল ইসলাম স্যারের চিকিৎসা রিভিউ', titleEn: 'Dr. Khairul Islam Treatment Review', tagBn: 'মেডিসিন সেবা', tagEn: 'Medicine Care' },
  { id: 'AbOVSx-cT64', titleBn: 'তীব্র ব্যথা থেকে দ্রুত আরোগ্য লাভের গল্প', titleEn: 'Fast Recovery from Severe Acute Pain', tagBn: 'তীব্র ব্যথা', tagEn: 'Acute Pain' },
  { id: 'KzWQyE55bOA', titleBn: 'রোগীর মুখে চিকিৎসার বিস্তারিত অভিজ্ঞতা', titleEn: 'Detailed Patient Experience & Treatment', tagBn: 'অভিজ্ঞতা', tagEn: 'Experience' },
  { id: 'I40nkcJIaJc', titleBn: 'ঘাড় ও কাঁধের ব্যথার সফল চিকিৎসা রিভিউ', titleEn: 'Neck & Shoulder Pain Relief Story', tagBn: 'ঘাড় ব্যথা', tagEn: 'Neck Pain' },
  { id: 'F5b00CiN0MY', titleBn: 'আধুনিক পেইন ম্যানেজমেন্টে সুস্থতা লাভ', titleEn: 'Recovery Through Modern Pain Management', tagBn: 'পেইন ম্যানেজমেন্ট', tagEn: 'Pain Mgmt' },
  { id: 'lR5DIQ5s-qc', titleBn: 'রোগীর আন্তরিক অনুভূতি ও কৃতজ্ঞতা', titleEn: 'Patient Gratitude & Recovery Thoughts', tagBn: 'কৃতজ্ঞতা', tagEn: 'Testimonial' },
  { id: '8eQxLl8wQKE', titleBn: 'পুরাতন ব্যথার স্থায়ী নিরাময়ে রোগীর কথা', titleEn: 'Long-term Pain Solution Patient Review', tagBn: 'স্থায়ী সমাধান', tagEn: 'Relief' },
  { id: 'AKcG2IX3NbI', titleBn: 'বিশেষায়িত চিকিৎসা সেবায় সন্তুষ্ট রোগী', titleEn: 'Satisfied Patient with Specialized Care', tagBn: 'বিশেষায়িত সেবা', tagEn: 'Specialized' },
  { id: '1euPlxQDKBE', titleBn: 'রোগী ও স্বজনদের আস্থা ও ভালোবাসার গল্প', titleEn: 'Patient & Family Trust & Review', tagBn: 'বিশ্বস্ত চিকিৎসা', tagEn: 'Trusted Care' },
  { id: 'Vx0_Ygwesv4', titleBn: 'ব্যথা নিরাময়ে দ্রুত আরোগ্য লাভের অনুভূতি', titleEn: 'Fast Pain Recovery Patient Testimonial', tagBn: 'পেইন নিরাময়', tagEn: 'Pain Recovery' },
  { id: 'vuAuBO_pW-M', titleBn: 'চিকিৎসা শেষে রোগীর মুখে তৃপ্তির হাসি', titleEn: 'Patient Happiness After Successful Treatment', tagBn: 'সফল চিকিৎসা', tagEn: 'Success Story' },
  { id: 'Ds0JL8ztqmc', titleBn: 'কোমর ও জয়েন্ট ব্যথার কার্যকর সমাধান', titleEn: 'Effective Back & Joint Pain Solution', tagBn: 'জয়েন্ট পেইন', tagEn: 'Joint Pain' },
  { id: 'axvlYf28TFE', titleBn: 'আধুনিক চিকিৎসায় জটিল রোগের উপশম', titleEn: 'Complex Health Relief with Modern Care', tagBn: 'বিশেষায়িত সেবা', tagEn: 'Specialized' },
];

function getYouTubeEmbedUrl(input: string, autoplay = false) {
  const autoParam = autoplay ? '&autoplay=1' : '';
  if (input.includes('/shorts/')) {
    const id = input.split('/shorts/')[1]?.split('?')[0]?.split('/')[0];
    return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1${autoParam}`;
  }
  if (input.includes('v=')) {
    const id = input.split('v=')[1]?.split('&')[0];
    return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1${autoParam}`;
  }
  if (input.includes('youtu.be/')) {
    const id = input.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1${autoParam}`;
  }
  return `https://www.youtube-nocookie.com/embed/${input}?rel=0&modestbranding=1&playsinline=1${autoParam}`;
}

export default function Home() {
  const { t, language } = useLanguage();
  const [selectedReviewIndex, setSelectedReviewIndex] = useState<number | null>(null);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', age: '', problem: '', date: '' });

  // Keyboard navigation for video shorts modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedReviewIndex === null) return;
      if (e.key === 'Escape') setSelectedReviewIndex(null);
      if (e.key === 'ArrowLeft') {
        setSelectedReviewIndex((prev) =>
          prev !== null ? (prev - 1 + REVIEW_SHORTS.length) % REVIEW_SHORTS.length : 0
        );
      }
      if (e.key === 'ArrowRight') {
        setSelectedReviewIndex((prev) =>
          prev !== null ? (prev + 1) % REVIEW_SHORTS.length : 0
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedReviewIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `আসসালামু আলাইকুম\nআমি ডা. মোঃ খাইরুল ইসলাম স্যারের কাছে সিরিয়াল নিতে চাই।\n\nনাম: ${formData.name}\nমোবাইল: ${formData.phone}\nবয়স: ${formData.age}\nসমস্যা: ${formData.problem}\nতারিখ: ${formData.date}`;
    window.open(`https://wa.me/8801725497355?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Dr. Khairul Islam - Best Medicine & Pain Specialist in Barguna, Bangladesh</title>
        <meta name="description" content="Best Medicine and Interventional Pain Management Specialist in Barguna, Bangladesh. Book appointment online." />
        <meta property="og:title" content="Dr. Khairul Islam - Best Medicine & Pain Specialist in Barguna" />
        <meta property="og:url" content="https://drkhairulislam.com/" />
      </Helmet>

      {/* ═══════════════════════════════════════
          HERO SECTION — Premium Animated
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-hero">
        {/* Animated gradient orbs */}
        <div className="orb orb-1 w-96 h-96 top-[-10%] left-[-10%] bg-teal-400/15" />
        <div className="orb orb-2 w-[500px] h-[500px] bottom-[-20%] right-[-10%] bg-cyan-300/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-200/8 rounded-full blur-3xl" />

        {/* Decorative dots grid */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #0D9488 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">

            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="badge-pill mb-6 animate-fade-up w-fit">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {t.hero.badge}
              </div>

              {/* Main heading */}
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-up delay-100">
                <span className="gradient-text">{language === 'en' ? 'Medicine &' : 'মেডিসিন ও'}</span>{' '}
                <br className="hidden md:block" />
                {language === 'en' ? 'Interventional Pain Management Specialist' : 'ইন্টারভেনশনাল পেইন ম্যানেজমেন্ট বিশেষজ্ঞ'}
              </h1>

              {/* Credentials */}
              <div className="space-y-3 mb-8 animate-fade-up delay-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-semibold text-gray-800">{t.hero.mbbs}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent/20">
                    <Star className="h-5 w-5 text-accent" />
                  </div>
                  <p className="font-semibold text-gray-800">{t.hero.da}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-10 animate-fade-up delay-300">
                <a href="#appointment-section">
                  <Button size="lg" className="btn-premium text-white border-0 gap-2 text-base px-6 py-6">
                    <Calendar className="h-5 w-5" />
                    {t.hero.bookBtn}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://wa.me/8801725497355" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-base px-6 py-6 border-2 border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 transition-all"
                  >
                    <svg className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    {t.hero.whatsappBtn}
                  </Button>
                </a>
                <a
                  href="https://www.facebook.com/drmdkhairulislams/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-blue-50 hover:bg-blue-100/90 text-blue-700 border border-blue-200/80 rounded-xl font-bold text-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <span>{language === 'en' ? 'Facebook Page' : 'ফেসবুকে ফলো করুন'}</span>
                </a>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-3 animate-fade-up delay-400">
                {[
                  { num: 5000, suffix: '+', label: t.stats.patientsLabel },
                  { num: 10, suffix: '+', label: t.stats.experienceLabel },
                  { num: 6, suffix: '', label: t.stats.specialtiesLabel },
                  { num: 99, suffix: '%', label: t.stats.satisfactionLabel },
                ].map((stat, i) => (
                  <div key={i} className="stat-card">
                    <div className="text-2xl font-bold gradient-text font-outfit">
                      <AnimatedCounter target={stat.num} suffix={stat.suffix} duration={1500 + i * 200} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 9:16 YouTube Short Reel Card */}
            <div className="order-1 lg:order-2 flex flex-col items-center">
              <div className="relative w-full max-w-[380px] lg:max-w-[400px]">
                {/* Soft ambient glow */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/15 to-accent/15 blur-2xl -z-10" />

                {/* 9:16 Video Reel / YouTube Shorts Frame */}
                <div className="relative bg-white/95 backdrop-blur-md p-3.5 rounded-[2.5rem] shadow-2xl border border-white/90 w-full">
                  <div className="relative rounded-[2rem] overflow-hidden bg-slate-950 aspect-[9/16] shadow-inner flex flex-col justify-between group">
                    {/* Top bar on video */}
                    <div className="absolute top-0 left-0 right-0 z-20 p-3.5 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between text-white pointer-events-none">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
                        <span className="text-xs font-bold tracking-wide">
                          {language === 'en' ? 'YouTube Short' : 'ইউটিউব শর্টস'}
                        </span>
                      </div>
                      <div className="bg-red-600/90 backdrop-blur-md px-2.5 py-1 rounded-full text-white flex items-center gap-1 text-[11px] font-bold">
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        <span>Shorts</span>
                      </div>
                    </div>

                    {/* YouTube Shorts iframe Embed */}
                    <iframe
                      src={getYouTubeEmbedUrl(YOUTUBE_SHORTS_ID)}
                      className="w-full h-full border-0 absolute inset-0 z-10"
                      style={{ border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen={true}
                      title="Dr. Md. Khairul Islam Video Short"
                    />

                    {/* Bottom Doctor Info Bar */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-3.5 bg-gradient-to-t from-black/95 via-black/60 to-transparent text-white pointer-events-none">
                      <p className="font-bold text-sm leading-snug font-outfit">{t.hero.doctorName}</p>
                      <p className="text-[11px] text-gray-200 opacity-90 truncate">{t.header.specialty || 'Medicine & Pain Specialist'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Facebook Page Highlight Badge underneath video */}
              <div className="mt-4 text-center">
                <a
                  href="https://www.facebook.com/drmdkhairulislams/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white backdrop-blur-md rounded-full border border-blue-200 shadow-sm text-xs font-bold text-blue-700 hover:text-blue-800 transition-all hover:scale-105 hover:shadow-md"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <span>{language === 'en' ? 'Follow on Official Facebook Page' : 'অফিশিয়াল ফেসবুক পেজে যুক্ত থাকুন'}</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CHAMBER LIVE STATUS & QUICK INFO CARDS
      ═══════════════════════════════════════ */}
      <section className="py-8 bg-gradient-to-b from-teal-50/20 to-white">
        <div className="container mx-auto px-4 space-y-6">
          <ScrollReveal>
            <ChamberStatus />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: MapPin, label: t.quickInfo.chamber, value: t.quickInfo.chamberName, color: 'text-primary', bg: 'bg-primary/8', href: '/chamber' },
                { icon: MapPin, label: t.quickInfo.address, value: t.quickInfo.addressText, color: 'text-blue-600', bg: 'bg-blue-50', href: 'https://maps.app.goo.gl/VohUnA2Zuz8gJkiN8', isExternal: true },
                { icon: Clock, label: t.quickInfo.consultFee, value: t.quickInfo.consultFeeAmount, color: 'text-emerald-600', bg: 'bg-emerald-50', href: '/fees' },
                { icon: Clock, label: t.quickInfo.followupFee, value: t.quickInfo.followupFeeAmount, color: 'text-purple-600', bg: 'bg-purple-50', href: '/fees' },
              ].map((item, i) => (
                <div key={i}>
                  {item.isExternal ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                      <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1 font-medium">{item.label}</p>
                      <p className="text-sm font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors">{item.value}</p>
                      <span className="inline-flex items-center gap-1 text-[11px] text-teal-600 font-semibold mt-2">545C+V2 Barguna ↗</span>
                    </a>
                  ) : (
                    <Link to={item.href} className="block bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                      <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1 font-medium">{item.label}</p>
                      <p className="text-sm font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors">{item.value}</p>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES SNAPSHOT
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="badge-pill mb-4 mx-auto w-fit">
                <Stethoscope className="h-3.5 w-3.5" />
                {language === 'en' ? 'What We Treat' : 'আমাদের সেবা'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 section-heading font-outfit">
                {t.services.heading}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">{t.services.subheading}</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Stethoscope, title: t.services.medicine, desc: t.services.medicineDesc, gradient: 'from-teal-50 to-cyan-50', iconBg: 'bg-teal-100', iconColor: 'text-teal-700', border: 'border-teal-100' },
              { icon: Heart, title: t.services.pain, desc: t.services.painDesc, gradient: 'from-red-50 to-pink-50', iconBg: 'bg-red-100', iconColor: 'text-red-600', border: 'border-red-100' },
              { icon: BadgeCheck, title: t.services.painMgmt, desc: t.services.painMgmtDesc, gradient: 'from-blue-50 to-indigo-50', iconBg: 'bg-blue-100', iconColor: 'text-blue-700', border: 'border-blue-100' },
              { icon: Users, title: t.services.ultrasound, desc: t.services.ultrasoundDesc, gradient: 'from-purple-50 to-pink-50', iconBg: 'bg-purple-100', iconColor: 'text-purple-700', border: 'border-purple-100' },
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`premium-card bg-gradient-to-br ${service.gradient} rounded-2xl p-6 border ${service.border} h-full group cursor-default`}>
                  <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link to="/services">
                <Button variant="outline" size="lg" className="gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all px-8">
                  {t.services.viewAll}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INTERACTIVE SYMPTOM GUIDE
      ═══════════════════════════════════════ */}
      <SymptomGuide />

      {/* ═══════════════════════════════════════
          PATIENT VIDEO REVIEWS & SHORTS SECTION
      ═══════════════════════════════════════ */}
      <section id="reviews-section" className="py-20 relative overflow-hidden bg-slate-900 text-white">
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-bold mb-4">
                <Video className="h-3.5 w-3.5" />
                <span>{t.reviews.badge}</span>
                <span className="px-2 py-0.5 bg-red-600 text-white rounded-full text-[10px] font-extrabold uppercase">Shorts</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-outfit">
                {t.reviews.heading}
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto text-base">
                {t.reviews.subheading}
              </p>
            </div>
          </ScrollReveal>

          {/* Video Grid (8 initially, expand to 16) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {(showAllReviews ? REVIEW_SHORTS : REVIEW_SHORTS.slice(0, 8)).map((review, i) => (
              <ScrollReveal key={review.id} delay={(i % 4) * 80}>
                <div
                  onClick={() => setSelectedReviewIndex(i)}
                  className="group relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-teal-400/60 shadow-xl hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-1.5 flex flex-col aspect-[9/16]"
                >
                  {/* Thumbnail Image */}
                  <img
                    src={`https://i.ytimg.com/vi/${review.id}/hqdefault.jpg`}
                    alt={language === 'en' ? review.titleEn : review.titleBn}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/60 group-hover:via-black/20 transition-all" />

                  {/* Top Bar: Tag + YouTube Shorts Icon */}
                  <div className="relative z-10 p-3.5 flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-black/50 backdrop-blur-md rounded-full text-[11px] font-bold text-teal-300 border border-teal-400/30">
                      {language === 'en' ? review.tagEn : review.tagBn}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-red-600/90 flex items-center justify-center text-white shadow-md">
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="relative z-10 my-auto flex flex-col items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary/90 group-hover:bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/40 group-hover:scale-110 transition-all duration-300 border-2 border-white/80">
                      <Play className="h-6 w-6 fill-current translate-x-0.5" />
                    </div>
                    <span className="text-[11px] font-semibold text-white/90 mt-2 px-2.5 py-0.5 bg-black/60 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {t.reviews.playVideo}
                    </span>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="relative z-10 p-3.5 mt-auto">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-1.5 text-amber-400">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="h-3 w-3 fill-current" />
                      ))}
                      <span className="text-[10px] text-slate-300 ml-1">5.0</span>
                    </div>

                    <h4 className="font-bold text-xs sm:text-sm text-white leading-snug line-clamp-2 font-outfit mb-1 group-hover:text-teal-300 transition-colors">
                      {language === 'en' ? review.titleEn : review.titleBn}
                    </h4>

                    <div className="flex items-center justify-between text-[11px] text-teal-400">
                      <span className="flex items-center gap-1">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        {t.reviews.verifiedTag}
                      </span>
                      <span className="text-slate-400 group-hover:text-white transition-colors flex items-center gap-0.5">
                        Shorts ↗
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          <ScrollReveal>
            <div className="text-center mt-12">
              <Button
                onClick={() => setShowAllReviews(!showAllReviews)}
                size="lg"
                className="btn-premium text-white border-0 gap-2 px-8 py-6 text-base font-bold shadow-lg shadow-teal-500/20"
              >
                <Video className="h-5 w-5" />
                {showAllReviews ? t.reviews.showLess : `${t.reviews.showMore} (${REVIEW_SHORTS.length})`}
                <ArrowRight className={`h-4 w-4 transition-transform ${showAllReviews ? '-rotate-90' : 'rotate-90'}`} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9:16 THEATER SHORTS MODAL PLAYER
      ═══════════════════════════════════════ */}
      {selectedReviewIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          {/* Backdrop Click to Close */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedReviewIndex(null)}
          />

          {/* Modal Centered Wrapper */}
          <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-6 w-full max-w-5xl h-[92vh] max-h-[760px]">
            {/* Side Previous Arrow (Desktop/Tablet) */}
            <button
              type="button"
              onClick={() =>
                setSelectedReviewIndex((prev) =>
                  prev !== null ? (prev - 1 + REVIEW_SHORTS.length) % REVIEW_SHORTS.length : 0
                )
              }
              className="hidden sm:flex w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl transition-all hover:scale-110 flex-shrink-0 cursor-pointer"
              aria-label={t.reviews.prevVideo}
              title="Previous (Left Arrow key)"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Main Smartphone Card (Height constrained to viewport) */}
            <div className="relative flex flex-col bg-slate-950 rounded-[2rem] p-2 sm:p-2.5 shadow-2xl border border-white/20 h-full aspect-[9/16] w-auto max-w-[94vw] overflow-hidden">
              {/* Top Bar Floating Controls */}
              <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-1.5 pointer-events-auto">
                  <span className="px-2.5 py-0.5 bg-red-600 text-white rounded-full text-[10px] font-bold shadow-md">
                    {selectedReviewIndex + 1} / {REVIEW_SHORTS.length}
                  </span>
                  <span className="px-2.5 py-0.5 bg-black/70 backdrop-blur-md rounded-full text-[11px] font-semibold text-teal-300 border border-white/15 shadow-md truncate max-w-[140px] sm:max-w-[180px]">
                    {language === 'en'
                      ? REVIEW_SHORTS[selectedReviewIndex].tagEn
                      : REVIEW_SHORTS[selectedReviewIndex].tagBn}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 pointer-events-auto">
                  <a
                    href={`https://youtube.com/shorts/${REVIEW_SHORTS[selectedReviewIndex].id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 bg-black/70 hover:bg-black/90 backdrop-blur-md rounded-full text-[11px] font-bold text-white flex items-center gap-1 border border-white/15 shadow-md transition-colors"
                    title={t.reviews.viewOnYoutube}
                  >
                    <span>YouTube</span>
                    <ArrowRight className="h-3 w-3 -rotate-45" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedReviewIndex(null)}
                    className="w-8 h-8 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-colors shadow-md cursor-pointer"
                    aria-label={t.reviews.closeModal}
                    title="Close (Esc)"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* 9:16 Video Player Frame taking full rounded area */}
              <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-black shadow-inner">
                <iframe
                  src={getYouTubeEmbedUrl(REVIEW_SHORTS[selectedReviewIndex].id, true)}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title={REVIEW_SHORTS[selectedReviewIndex].titleEn}
                />
              </div>

              {/* Bottom Mobile Navigation Overlay */}
              <div className="sm:hidden absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-auto">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedReviewIndex((prev) =>
                      prev !== null ? (prev - 1 + REVIEW_SHORTS.length) % REVIEW_SHORTS.length : 0
                    )
                  }
                  className="px-3 py-1.5 bg-black/80 backdrop-blur-md text-white rounded-full text-xs font-bold border border-white/20 flex items-center gap-1 shadow-lg"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>{t.reviews.prevVideo}</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedReviewIndex((prev) =>
                      prev !== null ? (prev + 1) % REVIEW_SHORTS.length : 0
                    )
                  }
                  className="px-3 py-1.5 bg-black/80 backdrop-blur-md text-white rounded-full text-xs font-bold border border-white/20 flex items-center gap-1 shadow-lg"
                >
                  <span>{t.reviews.nextVideo}</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Side Next Arrow (Desktop/Tablet) */}
            <button
              type="button"
              onClick={() =>
                setSelectedReviewIndex((prev) =>
                  prev !== null ? (prev + 1) % REVIEW_SHORTS.length : 0
                )
              }
              className="hidden sm:flex w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl transition-all hover:scale-110 flex-shrink-0 cursor-pointer"
              aria-label={t.reviews.nextVideo}
              title="Next (Right Arrow key)"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════
          QUICK ACCESS CARDS
      ═══════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 section-heading font-outfit">
                {t.quickAccess.heading}
              </h2>
              <p className="text-muted-foreground">{t.quickAccess.subheading}</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                to: '#appointment-section',
                icon: Calendar,
                title: t.quickAccess.serialTitle,
                desc: t.quickAccess.serialDesc,
                cta: t.quickAccess.serialCta,
                gradient: 'from-teal-500 to-cyan-600',
                glow: 'hover:shadow-teal-200',
                isAnchor: true,
              },
              {
                to: '/online-consultation',
                icon: Video,
                title: t.quickAccess.onlineTitle,
                desc: t.quickAccess.onlineDesc,
                cta: t.quickAccess.onlineCta,
                gradient: 'from-blue-500 to-indigo-600',
                glow: 'hover:shadow-blue-200',
                isAnchor: false,
              },
              {
                to: '/faq',
                icon: HelpCircle,
                title: t.quickAccess.faqTitle,
                desc: t.quickAccess.faqDesc,
                cta: t.quickAccess.faqCta,
                gradient: 'from-purple-500 to-pink-600',
                glow: 'hover:shadow-purple-200',
                isAnchor: false,
              },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                {card.isAnchor ? (
                  <a href={card.to} className="block h-full">
                    <QuickAccessCard {...card} />
                  </a>
                ) : (
                  <Link to={card.to} className="block h-full">
                    <QuickAccessCard {...card} />
                  </Link>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SOCIAL CARE & SPECIAL OFFERS
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50/20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="badge-pill mb-4 mx-auto w-fit">
                <Heart className="h-3.5 w-3.5 text-primary" />
                {language === 'en' ? 'Special Care' : 'বিশেষ সেবা'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 section-heading font-outfit">
                {t.socialCare.heading}
              </h2>
              <p className="text-muted-foreground">{t.socialCare.subheading}</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: HeartHandshake,
                title: t.socialCare.disabledTitle,
                offer: t.socialCare.disabledOffer,
                desc: t.socialCare.disabledDesc,
                iconBg: 'bg-emerald-100',
                iconColor: 'text-emerald-600',
                offerColor: 'text-emerald-600',
                gradient: 'from-emerald-50 to-green-50',
                border: 'border-emerald-200',
              },
              {
                icon: GraduationCap,
                title: t.socialCare.madrasha,
                offer: t.socialCare.madrashaOffer,
                desc: t.socialCare.madrashaDesc,
                iconBg: 'bg-blue-100',
                iconColor: 'text-blue-600',
                offerColor: 'text-blue-600',
                gradient: 'from-blue-50 to-cyan-50',
                border: 'border-blue-200',
              },
              {
                icon: Baby,
                title: t.socialCare.ultrasound,
                offer: t.socialCare.ultrasoundOffer,
                desc: t.socialCare.ultrasoundDesc,
                iconBg: 'bg-purple-100',
                iconColor: 'text-purple-600',
                offerColor: 'text-purple-600',
                gradient: 'from-purple-50 to-pink-50',
                border: 'border-purple-200',
              },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`premium-card bg-gradient-to-br ${card.gradient} rounded-2xl p-8 border ${card.border} text-center h-full`}>
                  <div className={`w-16 h-16 ${card.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                    <card.icon className={`h-8 w-8 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className={`text-2xl font-bold ${card.offerColor} mb-2`}>{card.offer}</p>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY CHOOSE SECTION
      ═══════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 section-heading font-outfit">
                {t.whyChoose.heading}
              </h2>
              <p className="text-muted-foreground">{t.whyChoose.subheading}</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {t.whyChoose.reasons.map((reason, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <BadgeCheck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          APPOINTMENT SECTION
      ═══════════════════════════════════════ */}
      <section id="appointment-section" className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 section-heading font-outfit">
                {t.appointment.heading}
              </h2>
              <p className="text-muted-foreground">{t.appointment.subheading}</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <ScrollReveal direction="left">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-teal-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 font-outfit">
                  <Calendar className="h-6 w-6 text-primary" />
                  {t.appointment.formTitle}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
                      <User className="h-4 w-4 text-primary" /> {t.appointment.name} *
                    </Label>
                    <Input
                      id="name" name="name" value={formData.name} onChange={handleChange} required
                      placeholder={t.appointment.namePlaceholder}
                      className="premium-input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
                      <Phone className="h-4 w-4 text-primary" /> {t.appointment.phone} *
                    </Label>
                    <Input
                      id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required
                      placeholder={t.appointment.phonePlaceholder}
                      className="premium-input"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age" className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
                        <User className="h-4 w-4 text-primary" /> {t.appointment.age} *
                      </Label>
                      <Input
                        id="age" name="age" type="number" value={formData.age} onChange={handleChange} required
                        placeholder={t.appointment.agePlaceholder}
                        className="premium-input"
                      />
                    </div>
                    <div>
                      <Label htmlFor="date" className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
                        <Calendar className="h-4 w-4 text-primary" /> {t.appointment.date} *
                      </Label>
                      <Input
                        id="date" name="date" type="date" value={formData.date} onChange={handleChange} required
                        min={new Date().toISOString().split('T')[0]}
                        className="premium-input"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="problem" className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700">
                      <FileText className="h-4 w-4 text-primary" /> {t.appointment.problem} *
                    </Label>
                    <Textarea
                      id="problem" name="problem" value={formData.problem} onChange={handleChange} required
                      placeholder={t.appointment.problemPlaceholder} rows={3}
                      className="premium-input resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2 btn-premium text-white border-0 py-6 text-base font-bold">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    {t.appointment.submitBtn}
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* How to + Direct Call */}
            <ScrollReveal direction="right">
              <div className="space-y-5">
                {/* How to guide */}
                <div className="bg-white rounded-3xl p-6 border border-teal-100 shadow-md">
                  <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2 font-outfit">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    {t.appointment.howToTitle}
                  </h3>
                  <div className="space-y-4">
                    {[t.appointment.step1, t.appointment.step2, t.appointment.step3].map((step, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md">
                          {i + 1}
                        </div>
                        <p className="text-sm text-gray-700 font-medium">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct call */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 border border-amber-100">
                  <h3 className="font-bold text-amber-900 mb-3 font-outfit">{t.appointment.callTitle}</h3>
                  <a href="tel:01725497355">
                    <button className="w-full flex items-center justify-center gap-3 py-4 bg-white border-2 border-amber-200 rounded-2xl hover:bg-amber-50 transition-colors text-amber-900 font-bold text-lg shadow-sm">
                      <Phone className="h-5 w-5" />
                      {t.appointment.callNumber}
                    </button>
                  </a>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/8801725497355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-1"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DOCTOR'S HEALTH ADVICE & TIPS
      ═══════════════════════════════════════ */}
      <HealthTips />

      {/* ═══════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 section-heading font-outfit">
                {t.faq.heading}
              </h2>
              <p className="text-muted-foreground">{t.faq.subheading}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
              <Accordion type="single" collapsible className="w-full space-y-2">
                {t.faq.items.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <AccordionTrigger className="text-left font-semibold text-gray-800 px-5 py-4 hover:text-primary hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-5 pb-4 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mt-8">
              <Link to="/faq">
                <Button variant="outline" size="lg" className="gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                  {t.faq.viewMore}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════ */}
      <section className="py-20 gradient-animated text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-outfit">{t.cta.heading}</h2>
              <p className="text-lg mb-10 opacity-90">{t.cta.subheading}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:01725497355">
                  <Button size="lg" className="gap-2 bg-white text-primary hover:bg-gray-50 font-bold px-8 py-6 text-base shadow-xl">
                    <Phone className="h-5 w-5" />
                    {t.cta.callBtn}
                  </Button>
                </a>
                <Link to="/online-consultation">
                  <Button size="lg" variant="outline" className="bg-white/15 hover:bg-white/25 text-white border-2 border-white/50 px-8 py-6 text-base font-bold">
                    {t.cta.onlineBtn}
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CHAMBER INFO
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 section-heading font-outfit">
                {t.chamber.heading}
              </h2>
              <p className="text-muted-foreground">{t.chamber.subheading}</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full">
                <h3 className="font-bold text-gray-900 text-xl mb-5 flex items-center gap-3 font-outfit">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  {t.chamber.addressTitle}
                </h3>
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-1">{t.chamber.chamberName}</h4>
                  <p className="text-muted-foreground text-sm">{t.chamber.addressText}</p>
                </div>
                <div className="border-t pt-5">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    {t.chamber.scheduleTitle}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 px-3 bg-teal-50 rounded-xl">
                      <span className="text-sm text-gray-600">{t.chamber.satToThu}</span>
                      <span className="text-sm font-bold text-primary">{t.chamber.satToThuTime}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 bg-amber-50 rounded-xl">
                      <span className="text-sm text-gray-600">{t.chamber.friday}</span>
                      <span className="text-sm font-bold text-amber-700">{t.chamber.fridayTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full">
                <h3 className="font-bold text-gray-900 text-xl mb-5 flex items-center gap-3 font-outfit">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  {t.chamber.feesTitle}
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-teal-50 rounded-2xl p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">{t.chamber.consultFee}</p>
                    <p className="text-2xl font-bold text-primary font-outfit">{t.chamber.consultFeeAmt}</p>
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">{t.chamber.followupFee}</p>
                    <p className="text-2xl font-bold text-blue-600 font-outfit">{t.chamber.followupFeeAmt}</p>
                  </div>
                </div>
                <div className="border-t pt-5 space-y-3">
                  <h4 className="font-bold text-gray-900 mb-3">{t.chamber.contact}</h4>
                  <a href="tel:01725497355" className="flex items-center gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group">
                    <div className="w-9 h-9 bg-green-100 group-hover:bg-green-200 rounded-lg flex items-center justify-center transition-colors">
                      <Phone className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{t.chamber.phoneLabel}</p>
                      <p className="font-bold text-green-900 text-sm">০১৭২৫-৪৯৭৩৫৫</p>
                    </div>
                  </a>
                  <a href="https://wa.me/8801725497355" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors group">
                    <div className="w-9 h-9 bg-teal-100 group-hover:bg-teal-200 rounded-lg flex items-center justify-center transition-colors">
                      <MessageCircle className="h-4 w-4 text-teal-700" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{t.chamber.whatsappLabel}</p>
                      <p className="font-bold text-teal-900 text-sm">{t.chamber.whatsappText}</p>
                    </div>
                  </a>
                  <a href="#appointment-section">
                    <button className="w-full mt-2 py-3 btn-premium text-white rounded-xl font-bold flex items-center justify-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {t.nav.bookAppointment}
                    </button>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Quick Access Card Sub-component ────────────────────
function QuickAccessCard({ icon: Icon, title, desc, cta, gradient, glow }: {
  icon: React.ElementType;
  title: string;
  desc: string;
  cta: string;
  gradient: string;
  glow: string;
  to?: string;
  isAnchor?: boolean;
}) {
  return (
    <div className={`h-full rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl ${glow} transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-to-br ${gradient}`}>
      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-center font-outfit">{title}</h3>
      <p className="text-white/80 text-center mb-5 text-sm leading-relaxed">{desc}</p>
      <div className="flex items-center justify-center gap-2 font-bold">
        <span>{cta}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}