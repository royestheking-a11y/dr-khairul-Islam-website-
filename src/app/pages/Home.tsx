import { useState } from 'react';
import { Link } from 'react-router';
import { Phone, MessageCircle, MapPin, Clock, BadgeCheck, Heart, Users, Stethoscope, Calendar, GraduationCap, HeartHandshake, Baby, HelpCircle, Video, User, FileText, Send } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
const doctorImage = "/doctor img.jpg";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    problem: '',
    date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `আসসালামু আলাইকুম\nআমি ডা. মোঃ খাইরুল ইসলাম স্যারের কাছে সিরিয়াল নিতে চাই।\n\nনাম: ${formData.name}\nমোবাইল: ${formData.phone}\nবয়স: ${formData.age}\nসমস্যা: ${formData.problem}\nতারিখ: ${formData.date}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/8801725497355?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const faqs = [
    { question: 'সিরিয়াল কিভাবে নেবো?', answer: 'আপনি তিনটি উপায়ে সিরিয়াল নিতে পারেন: ১) ওয়েবসাইটের সিরিয়াল ফর্ম পূরণ করে WhatsApp এ পাঠান, ২) সরাসরি ০১৭২৫-৪৯৭৩৫৫ নাম্বারে কল করুন, ৩) WhatsApp এ মেসেজ পাঠান।' },
    { question: 'Follow-up কখন করতে হবে?', answer: 'প্রথম পরামর্শের পর চিকিৎসক যে সময় নির্ধারণ করে দিবেন সেই সময় Follow-up করতে হবে। সাধারণত ৭-১৫ দিনের মধ্যে Follow-up করা হয়।' },
    { question: 'Follow-up ফি কত?', answer: 'Follow-up ফি ৩০০ টাকা। তবে এটি প্রথম পরামর্শের ১৫ দিনের মধ্যে প্রযোজ্য। আগের রসিদ সাথে আনতে হবে।' },
    { question: 'পেইন মেডিসিন কি?', answer: 'পেইন মেডিসিন হলো একটি বিশেষায়িত চিকিৎসা শাখা যেখানে বিভিন্ন ধরনের ব্যথার কারণ নির্ণয় করে আধুনিক পদ্ধতিতে চিকিৎসা প্রদান করা হয়।' },
    { question: 'আল্ট্রাসনোগ্রাফির খরচ কত?', answer: 'গর্ভবতী মায়েদের আল্ট্রাসনোগ্রাফি মাত্র ৪০০ টাকায় করা হয়। এটি একটি বিশেষ মূল্যে প্রদান করা সেবা।' },
    { question: 'প্রতিবন্ধীদের ফ্রী চিকিৎসা কিভাবে পাবো?', answer: 'প্রতিবন্ধী পরিচয়পত্র অথবা প্রাসঙ্গিক কাগজপত্র সাথে নিয়ে চেম্বারে আসুন। আপনাকে সম্পূর্ণ বিনামূল্যে পরামর্শ ও চিকিৎসা সেবা প্রদান করা হবে।' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 md:py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="order-1">
              <div className="inline-block mb-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-teal-200">
                <p className="text-sm font-medium text-primary flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  বিশ্বাসযোগ্য চিকিৎসা • আধুনিক পেইন ম্যানেজমেন্ট
                </p>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                মেডিসিন ও ইন্টারভেনশনাল পেইন ম্যানেজমেন্ট বিশেষজ্ঞ
              </h1>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-semibold">এম.বি.বি.এস (শের-ই-বাংলা মেডিকেল কলেজ)</p>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="h-5 w-5 text-accent" />
                  </div>
                  <p className="font-semibold">ডিএ (BSMMU) | FIPM (India)</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#appointment-section">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 gap-2 text-base">
                    <Calendar className="h-5 w-5" />
                    সিরিয়াল নিন
                  </Button>
                </a>
                <a
                  href="https://wa.me/8801725497355"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="gap-2 text-base border-2 hover:bg-green-50">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    WhatsApp এ যোগাযোগ করুন
                  </Button>
                </a>
              </div>
            </div>

            {/* Right - Doctor Image */}
            <div className="order-2 flex justify-center">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>

                {/* Image container */}
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                  <img
                    src={doctorImage}
                    alt="ডা. মোঃ খাইরুল ইসলাম"
                    className="w-full h-auto rounded-2xl"
                  />

                  {/* Doctor info overlay */}
                  <div className="relative mt-4 md:absolute md:bottom-6 md:left-6 md:right-6 md:mt-0 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-teal-100">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      ডা. মোঃ খাইরুল ইসলাম
                    </h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2 text-gray-700">
                        <GraduationCap className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>এম.বি.বি.এস (শের-ই-বাংলা মেডিকেল কলেজ)</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Stethoscope className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>ডিএ (BSMMU) | FIPM (India)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">চেম্বার</h3>
                <p className="text-sm text-muted-foreground">নিউ হলি কেয়ার প্যাথলজী</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">ঠিকানা</h3>
                <p className="text-sm text-muted-foreground">পুরাতন লোহাপট্টি, পূবালী ব্যাংকের নীচতলা, বরগুনা</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">কনসালটেশন ফি</h3>
                <p className="text-sm text-muted-foreground">৫০০ টাকা</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Follow-up ফি</h3>
                <p className="text-sm text-muted-foreground">৩০০ টাকা</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Services Snapshot */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">সেবাসমূহ</h2>
            <p className="text-muted-foreground">আধুনিক চিকিৎসা সেবায় আমরা প্রতিশ্রুতিবদ্ধ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Stethoscope className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">মেডিসিন সেবা</h3>
                <p className="text-sm text-muted-foreground">জ্বর, ডায়াবেটিস, প্রেসার, শ্বাসকষ্ট ইত্যাদি</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">ব্যথার চিকিৎসা</h3>
                <p className="text-sm text-muted-foreground">সকল প্রকার তীব্র ও দীর্ঘমেয়াদী ব্যথার চিকিৎসা</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BadgeCheck className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">পেইন ম্যানেজমেন্ট</h3>
                <p className="text-sm text-muted-foreground">ইন্টারভেনশনাল পেইন ম্যানেজমেন্ট</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">আল্ট্রাসনোগ্রাফি</h3>
                <p className="text-sm text-muted-foreground">গর্ভবতী মায়েদের আল্ট্রাসনোগ্রাফি (৪০০ টাকা)</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" size="lg">সকল সেবা দেখুন</Button>
            </Link>
          </div>
        </div>
      </section>



      {/* Quick Access Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">দ্রুত সেবা নিন</h2>
            <p className="text-muted-foreground">আপনার সুবিধামত যেকোনো সেবা নির্বাচন করুন</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Appointment/Serial */}
            <a href="#appointment-section">
              <Card className="hover:shadow-2xl transition-all hover:scale-105 cursor-pointer bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">সিরিয়াল</h3>
                  <p className="text-muted-foreground mb-4">
                    অনলাইনে সিরিয়াল বুক করুন এবং নির্ধারিত সময়ে চেম্বারে আসুন
                  </p>
                  <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                    <span>সিরিয়াল নিন</span>
                    <span>→</span>
                  </div>
                </CardContent>
              </Card>
            </a>

            {/* Online Consultation */}
            <Link to="/online-consultation">
              <Card className="hover:shadow-2xl transition-all hover:scale-105 cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Video className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">অনলাইন পরামর্শ</h3>
                  <p className="text-muted-foreground mb-4">
                    ঘরে বসে অনলাইন বা অফলাইনে পরামর্শ নিন
                  </p>
                  <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                    <span>পরামর্শ নিন</span>
                    <span>→</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* FAQ */}
            <Link to="/faq">
              <Card className="hover:shadow-2xl transition-all hover:scale-105 cursor-pointer bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <HelpCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">প্রশ্নোত্তর</h3>
                  <p className="text-muted-foreground mb-4">
                    সচরাচর জিজ্ঞাসিত প্রশ্নের উত্তর জানুন
                  </p>
                  <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold">
                    <span>FAQ দেখুন</span>
                    <span>→</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Care & Offers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">সামাজিক সেবা ও অফার</h2>
            <p className="text-muted-foreground">সমাজের সকল শ্রেণীর মানুষের জন্য বিশেষ সুবিধা</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartHandshake className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">প্রতিবন্ধীদের জন্য</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">ফ্রী চিকিৎসা</p>
                <p className="text-sm text-muted-foreground">সম্পূর্ণ বিনামূল্যে পরামর্শ ও চিকিৎসা সেবা</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">মাদ্রাসা শিক্ষার্থী</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">৫০% ডিসকাউন্ট</p>
                <p className="text-sm text-muted-foreground">মাদ্রাসা শিক্ষার্থীদের বিশেষ ছাড়</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">আল্ট্রাসনোগ্রাফি</h3>
                <p className="text-2xl font-bold text-purple-600 mb-2">মাত্র ৪০০ টাকা</p>
                <p className="text-sm text-muted-foreground">গর্ভবতী মায়েদের বিশেষ মূল্যে</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">কেন আমাকে বেছে নেবেন?</h2>
            <p className="text-muted-foreground">আপনার স্বাস্থ্যসেবার জন্য সেরা পছন্দ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="bg-primary text-white p-2 rounded-lg flex-shrink-0">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1">আধুনিক পেইন মেডিসিন ট্রেনিং</h3>
                <p className="text-sm text-muted-foreground">দেশ-বিদেশ থেকে প্রশিক্ষণপ্রাপ্ত</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary text-white p-2 rounded-lg flex-shrink-0">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1">আন্তর্জাতিক ফেলোশিপ</h3>
                <p className="text-sm text-muted-foreground">FIPM (India) সার্টিফাইড</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary text-white p-2 rounded-lg flex-shrink-0">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1">রোগীবান্ধব আচরণ</h3>
                <p className="text-sm text-muted-foreground">সকলের সাথে সদ্ব্যবহার</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary text-white p-2 rounded-lg flex-shrink-0">
                <Stethoscope className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1">পরিষ্কার ও নির্ভরযোগ্য চিকিৎসা</h3>
                <p className="text-sm text-muted-foreground">স্বচ্ছ ও কার্যকর পদ্ধতি</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary text-white p-2 rounded-lg flex-shrink-0">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1">দীর্ঘমেয়াদী ব্যথা নিয়ন্ত্রণ</h3>
                <p className="text-sm text-muted-foreground">বিশেষজ্ঞ পরামর্শ ও চিকিৎসা</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary text-white p-2 rounded-lg flex-shrink-0">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1">সমাজসেবামূলক</h3>
                <p className="text-sm text-muted-foreground">বিশেষ মূল্যে সেবা প্রদান</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment-section" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">সিরিয়াল নিন</h2>
            <p className="text-muted-foreground">অনলাইনে সিরিয়াল বুক করুন এবং WhatsApp এ নিশ্চিতকরণ পান</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-lg border-teal-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  সিরিয়াল ফর্ম
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2 mb-1">
                      <User className="h-4 w-4" /> নাম *
                    </Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="আপনার পূর্ণ নাম" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2 mb-1">
                      <Phone className="h-4 w-4" /> মোবাইল *
                    </Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="০১XXXXXXXXX" />
                  </div>
                  <div>
                    <Label htmlFor="age" className="flex items-center gap-2 mb-1">
                      <User className="h-4 w-4" /> বয়স *
                    </Label>
                    <Input id="age" name="age" type="number" value={formData.age} onChange={handleChange} required placeholder="বয়স" />
                  </div>
                  <div>
                    <Label htmlFor="problem" className="flex items-center gap-2 mb-1">
                      <FileText className="h-4 w-4" /> সমস্যা *
                    </Label>
                    <Textarea id="problem" name="problem" value={formData.problem} onChange={handleChange} required placeholder="সমস্যার বিবরণ" rows={3} />
                  </div>
                  <div>
                    <Label htmlFor="date" className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4" /> তারিখ *
                    </Label>
                    <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} />
                  </div>
                  <Button type="submit" className="w-full gap-2 bg-primary hover:bg-primary/90">
                    <Send className="h-5 w-5" />
                    WhatsApp এ সিরিয়াল নিশ্চিত করুন
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4 flex items-center gap-2 text-teal-900">
                    <Calendar className="h-5 w-5" />
                    কিভাবে সিরিয়াল নেবেন?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm flex-shrink-0">1</div>
                      <p className="text-sm text-teal-800 pt-1">ফর্মটি সঠিকভাবে পূরণ করুন</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm flex-shrink-0">2</div>
                      <p className="text-sm text-teal-800 pt-1">সাবমিট বাটনে ক্লিক করুন</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm flex-shrink-0">3</div>
                      <p className="text-sm text-teal-800 pt-1">WhatsApp এ মেসেজ পাঠান</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 text-amber-900">সরাসরি কল করুন</h3>
                  <a href="tel:01725497355">
                    <Button variant="outline" className="w-full gap-2 border-amber-200 text-amber-900 hover:bg-amber-100">
                      <Phone className="h-4 w-4" /> ০১৭২৫-৪৯৭৩৫৫
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)</h2>
            <p className="text-muted-foreground">আপনার সাধারণ প্রশ্নের উত্তরগুলো এখানে জানুন</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-bold text-gray-800">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
            <Link to="/faq">
              <Button variant="outline" size="lg">আরও জানুন</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">আজই সিরিয়াল নিন</h2>
          <p className="text-lg mb-8 opacity-90">বিশ্বস্ত চিকিৎসার জন্য আজই যোগাযোগ করুন</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:01725497355">
              <Button size="lg" variant="secondary" className="gap-2">
                <Phone className="h-5 w-5" />
                কল করুন: ০১৭২৫-৪৯৭৩৫৫
              </Button>
            </a>
            <Link to="/online-consultation">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                অনলাইন পরামর্শ নিন
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Chamber Info Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">চেম্বার তথ্য</h2>
            <p className="text-muted-foreground">চেম্বারের বিস্তারিত তথ্য এবং সময়সূচী</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Chamber Details Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  চেম্বারের ঠিকানা
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">নিউ হলি কেয়ার প্যাথলজী</h4>
                  <p className="text-muted-foreground">পুরাতন লোহাপট্টি, পূবালী ব্যাংকের নীচতলা, বরগুনা</p>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    চেম্বারের সময়সূচী
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">শনিবার - বৃহস্পতিবার:</span>
                      <span className="font-semibold">সকাল ৯:০০ - রাত ৯:০০</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">শুক্রবার:</span>
                      <span className="font-semibold">বিকাল ৪:০০ - রাত ৯:০০</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fees and Contact Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-6 w-6 text-primary" />
                  ফি এবং যোগাযোগ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">কনসালটেশন ফি</p>
                    <p className="text-2xl font-bold text-primary">৫০০ টাকা</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Follow-up ফি</p>
                    <p className="text-2xl font-bold text-blue-600">৩০০ টাকা</p>
                  </div>
                </div>
                <div className="pt-4 border-t space-y-3">
                  <h4 className="font-bold mb-3">যোগাযোগ করুন</h4>
                  <a href="tel:01725497355" className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">ফোন নাম্বার</p>
                      <p className="font-semibold text-green-900">০১৭২৫-৪৯৭৩৫৫</p>
                    </div>
                  </a>
                  <a href="https://wa.me/8801725497355" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors">
                    <MessageCircle className="h-5 w-5 text-teal-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-semibold text-teal-900">মেসেজ পাঠান</p>
                    </div>
                  </a>
                </div>
                <div className="pt-4 border-t">
                  <a href="#appointment-section">
                    <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                      <Calendar className="h-5 w-5" />
                      সিরিয়াল নিন
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}