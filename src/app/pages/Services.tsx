import { Stethoscope, Heart, Users, Syringe, Baby, Zap, HeartHandshake, BookOpen, Thermometer, Droplets, HeartPulse, Wind, Pill, UserCheck, Bone, Brain, Activity, Sparkles, Flame, Utensils, Maximize2, ShieldAlert, Sun, ArrowUpRight, Footprints, Layers } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { SEO } from '@/app/components/SEO';

export default function Services() {
  const medicineServices = [
    { name: 'জ্বর', icon: Thermometer },
    { name: 'মাথাব্যথা', icon: Brain },
    { name: 'শ্বাসকষ্ট', icon: Wind },
    { name: 'বুক জ্বালাপোড়া', icon: Flame },
    { name: 'পেটে ব্যাথা', icon: Pill },
    { name: 'পেট ফাঁপা দেওয়া', icon: Wind },
    { name: 'হজম শক্তি কমে যাওয়া', icon: Utensils },
    { name: 'প্রসাবে জ্বালাপোড়া', icon: Droplets },
    { name: 'শরীর ফুলে যাওয়া', icon: Maximize2 },
    { name: 'এলার্জির সমস্যা', icon: ShieldAlert },
    { name: 'দাঁদ চর্মরোগ', icon: Sun },
    { name: 'থাইরয়েড হরমোনের সমস্যা', icon: Activity },
    { name: 'বুকে ব্যথা', icon: HeartPulse },
    { name: 'সাদাশ্রাব', icon: Droplets },
    { name: 'পেট বেড়ে যাওয়া', icon: ArrowUpRight },
  ];

  const painServices = [
    { name: 'হাঁটুর জয়েন্টের পানি উত্তোলন', icon: Syringe },
    { name: 'কোমর ব্যথা', icon: UserCheck },
    { name: 'পায়ের গোড়ালি ব্যথা', icon: Footprints },
    { name: 'হাঁটু ব্যথা', icon: Bone },
    { name: 'সকল ধরণের তীব্র ও দীর্ঘমেয়াদী ব্যথা', icon: Zap },
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
          <h1 className="text-4xl font-bold mb-4">সেবাসমূহ</h1>
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
                <p className="text-muted-foreground">আল্ট্রাসনোগ্রাফি সেবা</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <Layers className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">সকল ধরণের আল্ট্রাসনোগ্রাফী</h3>
                <p className="text-muted-foreground">আধুনিক প্রযুক্তিতে নির্ভুল রিপোর্ট</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <Baby className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">গর্ভবতী মায়েদের আল্ট্রাসনোগ্রাফী</h3>
                <p className="text-muted-foreground mb-3">শুধুমাত্র গর্ভবতী মায়েদের জন্য বিশেষ সেবা</p>
                <p className="text-2xl font-bold text-primary">৫০০ টাকা</p>
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
