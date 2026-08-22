import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import {
  Video, Star, BadgeCheck, Play, X, ChevronLeft, ChevronRight,
  ArrowRight, Calendar, MessageCircle, Sparkles
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useLanguage } from '@/app/context/LanguageContext';
import { ScrollReveal } from '@/app/components/ScrollReveal';

// 20 Patient Video Review Shorts
export const REVIEW_SHORTS = [
  { id: 'zMaPJICsdEo', titleBn: 'রোগীর সুস্থতার বাস্তব অভিজ্ঞতা ও অনুভূতি', titleEn: 'Patient Recovery Experience & Feedback', tagBn: 'পেইন রিলিফ', tagEn: 'Pain Relief', category: 'pain' },
  { id: 'gA9yo-uKzoQ', titleBn: 'দীর্ঘমেয়াদী ব্যথা উপশমে রোগীর সন্তুষ্টি', titleEn: 'Chronic Pain Relief & Patient Satisfaction', tagBn: 'ব্যথা নিরাময়', tagEn: 'Pain Treatment', category: 'pain' },
  { id: 'I1fmwbpbq3U', titleBn: 'সফল চিকিৎসা পরবর্তী রোগীর প্রতিক্রিয়া', titleEn: 'Post-Treatment Patient Recovery Story', tagBn: 'সফল চিকিৎসা', tagEn: 'Success Story', category: 'recovery' },
  { id: 'vOL37rAv9-g', titleBn: 'ইন্টারভেনশনাল পেইন চিকিৎসায় রোগীর মুখে হাসি', titleEn: 'Interventional Pain Treatment Experience', tagBn: 'পেইন বিশেষজ্ঞ', tagEn: 'Pain Specialist', category: 'pain' },
  { id: 'PbqG4kV3UyU', titleBn: 'হাঁটু ও জয়েন্ট ব্যথার কার্যকর চিকিৎসা মতামত', titleEn: 'Knee & Joint Pain Treatment Review', tagBn: 'জয়েন্ট পেইন', tagEn: 'Joint Pain', category: 'joint' },
  { id: 'YZ59PmkD2-M', titleBn: 'চিকিৎসা শেষে রোগীর অভিজ্ঞতা ও সন্তুষ্টি', titleEn: 'Patient Review After Successful Care', tagBn: 'রোগী সন্তুষ্টি', tagEn: 'Satisfaction', category: 'recovery' },
  { id: 'MALxGtOZIjI', titleBn: 'মেরুদণ্ড ও কোমর ব্যথার চিকিৎসা প্রতিক্রিয়া', titleEn: 'Spine & Back Pain Relief Feedback', tagBn: 'কোমর ব্যথা', tagEn: 'Back Pain', category: 'pain' },
  { id: 'rlu8hUVvfR4', titleBn: 'ডা. খাইরুল ইসলাম স্যারের চিকিৎসা রিভিউ', titleEn: 'Dr. Khairul Islam Treatment Review', tagBn: 'মেডিসিন সেবা', tagEn: 'Medicine Care', category: 'medicine' },
  { id: 'AbOVSx-cT64', titleBn: 'তীব্র ব্যথা থেকে দ্রুত আরোগ্য লাভের গল্প', titleEn: 'Fast Recovery from Severe Acute Pain', tagBn: 'তীব্র ব্যথা', tagEn: 'Acute Pain', category: 'pain' },
  { id: 'KzWQyE55bOA', titleBn: 'রোগীর মুখে চিকিৎসার বিস্তারিত অভিজ্ঞতা', titleEn: 'Detailed Patient Experience & Treatment', tagBn: 'অভিজ্ঞতা', tagEn: 'Experience', category: 'recovery' },
  { id: 'I40nkcJIaJc', titleBn: 'ঘাড় ও কাঁধের ব্যথার সফল চিকিৎসা রিভিউ', titleEn: 'Neck & Shoulder Pain Relief Story', tagBn: 'ঘাড় ব্যথা', tagEn: 'Neck Pain', category: 'joint' },
  { id: 'F5b00CiN0MY', titleBn: 'আধুনিক পেইন ম্যানেজমেন্টে সুস্থতা লাভ', titleEn: 'Recovery Through Modern Pain Management', tagBn: 'পেইন ম্যানেজমেন্ট', tagEn: 'Pain Mgmt', category: 'pain' },
  { id: 'lR5DIQ5s-qc', titleBn: 'রোগীর আন্তরিক অনুভূতি ও কৃতজ্ঞতা', titleEn: 'Patient Gratitude & Recovery Thoughts', tagBn: 'কৃতজ্ঞতা', tagEn: 'Testimonial', category: 'recovery' },
  { id: '8eQxLl8wQKE', titleBn: 'পুরাতন ব্যথার স্থায়ী নিরাময়ে রোগীর কথা', titleEn: 'Long-term Pain Solution Patient Review', tagBn: 'স্থায়ী সমাধান', tagEn: 'Relief', category: 'pain' },
  { id: 'AKcG2IX3NbI', titleBn: 'বিশেষায়িত চিকিৎসা সেবায় সন্তুষ্ট রোগী', titleEn: 'Satisfied Patient with Specialized Care', tagBn: 'বিশেষায়িত সেবা', tagEn: 'Specialized', category: 'medicine' },
  { id: '1euPlxQDKBE', titleBn: 'রোগী ও স্বজনদের আস্থা ও ভালোবাসার গল্প', titleEn: 'Patient & Family Trust & Review', tagBn: 'বিশ্বস্ত চিকিৎসা', tagEn: 'Trusted Care', category: 'recovery' },
  { id: 'Vx0_Ygwesv4', titleBn: 'ব্যথা নিরাময়ে দ্রুত আরোগ্য লাভের অনুভূতি', titleEn: 'Fast Pain Recovery Patient Testimonial', tagBn: 'পেইন নিরাময়', tagEn: 'Pain Recovery', category: 'pain' },
  { id: 'vuAuBO_pW-M', titleBn: 'চিকিৎসা শেষে রোগীর মুখে তৃপ্তির হাসি', titleEn: 'Patient Happiness After Successful Treatment', tagBn: 'সফল চিকিৎসা', tagEn: 'Success Story', category: 'recovery' },
  { id: 'Ds0JL8ztqmc', titleBn: 'কোমর ও জয়েন্ট ব্যথার কার্যকর সমাধান', titleEn: 'Effective Back & Joint Pain Solution', tagBn: 'জয়েন্ট পেইন', tagEn: 'Joint Pain', category: 'joint' },
  { id: 'axvlYf28TFE', titleBn: 'আধুনিক চিকিৎসায় জটিল রোগের উপশম', titleEn: 'Complex Health Relief with Modern Care', tagBn: 'বিশেষায়িত সেবা', tagEn: 'Specialized', category: 'medicine' },
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

export default function Reviews() {
  const { t, language } = useLanguage();
  const [selectedReviewIndex, setSelectedReviewIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

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

  const categories = [
    { id: 'all', labelBn: 'সকল রিভিউ (২০টি)', labelEn: 'All Reviews (20)' },
    { id: 'pain', labelBn: 'ব্যথা নিরাময়', labelEn: 'Pain Relief' },
    { id: 'joint', labelBn: 'জয়েন্ট ও ঘাড়', labelEn: 'Joint & Neck' },
    { id: 'recovery', labelBn: 'সুস্থতার গল্প', labelEn: 'Recovery Stories' },
    { id: 'medicine', labelBn: 'মেডিসিন সেবা', labelEn: 'Medicine Care' },
  ];

  const filteredShorts = activeCategory === 'all'
    ? REVIEW_SHORTS
    : REVIEW_SHORTS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>
          {language === 'en'
            ? 'Patient Video Reviews & Testimonials - Dr. Md. Khairul Islam'
            : 'রোগীদের ভিডিও রিভিউ ও মতামত - ডা. মোঃ খাইরুল ইসলাম'}
        </title>
        <meta
          name="description"
          content={
            language === 'en'
              ? 'Watch authentic video reviews and recovery stories from patients treated by Dr. Md. Khairul Islam in Barguna.'
              : 'বরগুনার বিশিষ্ট মেডিসিন ও পেইন বিশেষজ্ঞ ডা. মোঃ খাইরুল ইসলাম স্যারের চিকিৎসা সেবা গ্রহণকারী সম্মানিত রোগীদের বাস্তব ভিডিও প্রতিক্রিয়া ও রিভিউ।'
          }
        />
      </Helmet>

      {/* Hero Header */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-bold mb-4 shadow-sm">
              <Video className="h-4 w-4" />
              <span>{t.reviews.badge}</span>
              <span className="px-2 py-0.5 bg-red-600 text-white rounded-full text-[10px] font-extrabold uppercase">
                20 Shorts
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 font-outfit">
              {t.reviews.heading}
            </h1>

            <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg mb-8 leading-relaxed">
              {t.reviews.subheading}
            </p>

            {/* Quick Stats Trust Banner */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span>99% সন্তুষ্টি রেটিং</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                <BadgeCheck className="h-4 w-4 text-teal-400" />
                <span>২০টি ভেরিফায়েড ভিডিও রিভিউ</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                <Sparkles className="h-4 w-4 text-emerald-400" />
                <span>বাস্তব আরোগ্য লাভের অভিজ্ঞতা</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Video Gallery Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter Tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-teal-500/20 scale-105'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {language === 'en' ? cat.labelEn : cat.labelBn}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Videos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {filteredShorts.map((review, i) => {
              const originalIndex = REVIEW_SHORTS.findIndex((item) => item.id === review.id);
              return (
                <ScrollReveal key={review.id} delay={(i % 4) * 60}>
                  <div
                    onClick={() => setSelectedReviewIndex(originalIndex !== -1 ? originalIndex : i)}
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

                    {/* Center Play Button */}
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

                      <h3 className="font-bold text-xs sm:text-sm text-white leading-snug line-clamp-2 font-outfit mb-1 group-hover:text-teal-300 transition-colors">
                        {language === 'en' ? review.titleEn : review.titleBn}
                      </h3>

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
              );
            })}
          </div>
        </div>
      </section>

      {/* Appointment CTA Banner */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-teal-950 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 font-outfit">
              {language === 'en' ? 'Need Expert Treatment?' : 'আপনিও কি ব্যথামুক্ত সুস্থ জীবন চান?'}
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm md:text-base">
              {language === 'en'
                ? 'Book your appointment with Dr. Md. Khairul Islam today.'
                : 'ডা. মোঃ খাইরুল ইসলাম স্যারের বিশেষজ্ঞ পরামর্শ ও আধুনিক চিকিৎসার জন্য আজই সিরিয়াল নিন।'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/appointment">
                <Button size="lg" className="btn-premium text-white border-0 gap-2 px-8 py-6 text-base font-bold shadow-lg shadow-teal-500/20">
                  <Calendar className="h-5 w-5" />
                  {t.hero.bookBtn}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="https://wa.me/8801725497355" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 text-base px-8 py-6 border-2 border-green-400/40 text-green-400 hover:bg-green-500/10 transition-all">
                  <MessageCircle className="h-5 w-5" />
                  {t.hero.whatsappBtn}
                </Button>
              </a>
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
    </div>
  );
}
