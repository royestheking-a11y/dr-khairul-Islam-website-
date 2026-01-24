import { Stethoscope, Heart, Users, Syringe, Baby, Zap, ClipboardList, HeartHandshake, BookOpen, Thermometer, Droplets, HeartPulse, Wind, Pill, UserCheck, AlertCircle, Bone, Brain, Activity, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { SEO } from '@/app/components/SEO';

export default function Services() {
  const medicineServices = [
    { name: 'জ্বর ও ইনফেকশন চিকিৎসা', icon: Thermometer },
    { name: 'ডায়াবেটিস ব্যবস্থাপনা', icon: Droplets },
    { name: 'উচ্চ রক্তচাপ নিয়ন্ত্রণ', icon: HeartPulse },
    { name: 'গ্যাস্ট্রিক ও পেটের সমস্যা', icon: Pill },
    { name: 'শ্বাসকষ্ট ও হাঁপানি', icon: Wind },
    { name: 'সাধারণ মেডিসিন সমস্যা', icon: Stethoscope },
  ];

  const painServices = [
    { name: 'কোমর ব্যথা (Lower Back Pain)', icon: UserCheck },
    { name: 'ঘাড় ও কাঁধ ব্যথা (Neck & Shoulder Pain)', icon: AlertCircle },
    { name: 'জয়েন্ট ব্যথা (Joint Pain)', icon: Bone },
    { name: 'সায়াটিকা (Sciatica)', icon: Activity },
    { name: 'নার্ভ পেইন (Neuropathic Pain)', icon: Zap },
    { name: 'মাথাব্যথা / মাইগ্রেন (Migraine)', icon: Brain },
    { name: 'পোস্ট-সার্জিক্যাল পেইন', icon: Syringe },
    { name: 'ক্যান্সার পেইন ম্যানেজমেন্ট', icon: Heart },
  ];

  return (
    <div className="py-12">
      <SEO
        title="Services"
        description="Medicine and Interventional Pain Management services by Dr. Khairul Islam in Barguna. Treatment for fever, diabetes, BP, asthma, gastric issues, back pain, joint pain, sciatica, nerve pain and more."
        canonical="https://drkhairulislam.vercel.app/services"
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">আমাদের সেবাসমূহ</h1>
          <p className="text-lg text-muted-foreground">
            আধুনিক ও কার্যকর চিকিৎসা সেবায় আমরা প্রতিশ্রুতিবদ্ধ
          </p>
        </div>

        {/* Medicine Services */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Stethoscope className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">মেডিসিন সেবা</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {medicineServices.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium">{item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pain Management Services */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">পেইন ম্যানেজমেন্ট সেবা</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {painServices.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gradient-to-br from-teal-50 to-cyan-50">
                <CardContent className="p-6">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mb-3">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="font-medium">{item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Special Services */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">বিশেষ সেবা</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <Baby className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">আল্ট্রাসনোগ্রাফি</h3>
                <p className="text-muted-foreground mb-3">গর্ভবতী মায়েদের আল্ট্রাসনোগ্রাফি সেবা</p>
                <p className="text-2xl font-bold text-primary">৪০০ টাকা</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <Syringe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">ইন্টারভেনশনাল পেইন</h3>
                <p className="text-muted-foreground">আধুনিক পদ্ধতিতে দীর্ঘমেয়াদী ব্যথার চিকিৎসা</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <ClipboardList className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">পরামর্শ ও পরীক্ষা</h3>
                <p className="text-muted-foreground">সম্পূর্ণ স্বাস্থ্য পরীক্ষা ও পরামর্শ সেবা</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Special Patient Care */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">বিশেষ রোগী সেবা</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">প্রতিবন্ধীদের জন্য</h3>
                    <p className="text-xl font-bold text-green-600 mb-3">সম্পূর্ণ ফ্রী চিকিৎসা</p>
                    <p className="text-muted-foreground">
                      প্রতিবন্ধী রোগীদের জন্য সম্পূর্ণ বিনামূল্যে পরামর্শ, পরীক্ষা ও চিকিৎসা সেবা প্রদান করা হয়।
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">মাদ্রাসা শিক্ষার্থী</h3>
                    <p className="text-xl font-bold text-blue-600 mb-3">৫০% বিশেষ ছাড়</p>
                    <p className="text-muted-foreground">
                      মাদ্রাসায় অধ্যয়নরত শিক্ষার্থীদের জন্য সকল প্রকার চিকিৎসা সেবায় ৫০% বিশেষ ছাড় প্রদান করা হয়।
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">আরও তথ্যের জন্য যোগাযোগ করুন</h3>
          <p className="mb-6 opacity-90">আপনার স্বাস্থ্য সমস্যার সমাধানে আমরা সর্বদা প্রস্তুত</p>
          <a href="tel:01725497355">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition">
              📞 কল করুন: ০১৭২৫-৪৯৭৩৫৫
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
