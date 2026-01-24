import { GraduationCap, Award, Building2, Heart, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';


export default function About() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">ডাক্তার সম্পর্কে</h1>
          <p className="text-lg text-muted-foreground">ডা. মোঃ খাইরুল ইসলাম</p>
        </div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-6 items-start mb-16">
          <div>
            <img
              src="/doctor img.jpg"
              alt="ডা. মোঃ খাইরুল ইসলাম"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-1 leading-tight">ডা. মোঃ খাইরুল ইসলাম</h2>
            <p className="text-xl text-primary mb-2 leading-tight">
              Medicine & Interventional Pain Management Specialist
            </p>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                শের-ই-বাংলা মেডিকেল কলেজ, বরিশাল থেকে এমবিবিএস ডিগ্রি অর্জনের পর তিনি বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয় (BSMMU) থেকে এনেস্থেসিওলজিতে ডিএ ডিগ্রি সম্পন্ন করেন। পরবর্তীতে ভারত থেকে ইন্টারভেনশনাল পেইন ম্যানেজমেন্টে ফেলোশিপ অর্জনের মাধ্যমে আধুনিক ব্যথা চিকিৎসায় বিশেষ দক্ষতা অর্জন করেন।
              </p>
              <p className="text-muted-foreground leading-relaxed">
                তিনি বিশ্বাস করেন, শুধু রোগের চিকিৎসাই নয়—রোগীর মানসিক স্বস্তি ও আস্থা অর্জন করাও চিকিৎসার একটি গুরুত্বপূর্ণ অংশ। প্রতিটি রোগীর সমস্যাকে গুরুত্ব সহকারে শুনে রোগের মূল কারণ নির্ণয় করে ব্যক্তিভিত্তিক চিকিৎসা পরিকল্পনা প্রণয়ন করেন। আধুনিক প্রযুক্তিনির্ভর ও প্রমাণভিত্তিক চিকিৎসা পদ্ধতির মাধ্যমে দীর্ঘমেয়াদী সুস্থতা নিশ্চিত করাই তার প্রধান লক্ষ্য।
              </p>
              <p className="text-muted-foreground leading-relaxed">
                মেডিসিন ও পেইন মেডিসিনের পাশাপাশি তিনি এনেস্থেসিওলজি ও ব্যথা ব্যবস্থাপনায় নিয়মিত প্রশিক্ষণ ও আপডেটেড জ্ঞান অর্জনে আগ্রহী। দীর্ঘদিনের অভিজ্ঞতায় তিনি জ্বর, ডায়াবেটিস, উচ্চ রক্তচাপ, শ্বাসকষ্ট, গ্যাস্ট্রিক সমস্যা, দীর্ঘমেয়াদী কোমর ব্যথা, ঘাড় ও জয়েন্ট ব্যথা, নার্ভ পেইনসহ বিভিন্ন জটিল রোগের সফল চিকিৎসা করে আসছেন।
              </p>
              <p className="text-muted-foreground leading-relaxed">
                তিনি একজন রোগীবান্ধব চিকিৎসক হিসেবে পরিচিত। স্বচ্ছ ও নৈতিক চিকিৎসা সেবা প্রদান, অপ্রয়োজনীয় পরীক্ষা ও ওষুধ পরিহার এবং রোগীর আর্থিক ও সামাজিক অবস্থার প্রতি সম্মান রেখে চিকিৎসা করাই তার পেশাগত নীতি। বিশেষ করে প্রতিবন্ধী রোগী ও সুবিধাবঞ্চিত মানুষের জন্য সহজলভ্য চিকিৎসা নিশ্চিত করাকে তিনি সামাজিক দায়িত্ব হিসেবে বিবেচনা করেন।
              </p>
            </div>
            <div className="bg-accent/20 p-6 rounded-lg border border-accent mt-6">
              <p className="font-medium italic">
                "রোগের মূল কারণ নির্ণয় করে আধুনিক ও নিরাপদ পদ্ধতিতে চিকিৎসা প্রদানই আমার মূল লক্ষ্য।"
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">শিক্ষাগত যোগ্যতা</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">এম.বি.বি.এস</h3>
                <p className="text-muted-foreground">শের-ই-বাংলা মেডিকেল কলেজ, বরিশাল</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">ডিএ (এনেস্থেসিওলজি)</h3>
                <p className="text-muted-foreground">বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয় (BSMMU)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">FIPM</h3>
                <p className="text-muted-foreground">Fellowship in Interventional Pain Management (India)</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Specialization Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">বিশেষজ্ঞতা</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Internal Medicine
                </h3>
                <p className="text-sm text-muted-foreground">সাধারণ মেডিসিন ও অভ্যন্তরীণ রোগের চিকিৎসা</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Interventional Pain Management
                </h3>
                <p className="text-sm text-muted-foreground">আধুনিক পেইন ম্যানেজমেন্ট পদ্ধতি</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Anesthesiology & Pain Medicine
                </h3>
                <p className="text-sm text-muted-foreground">অবশকরণ ও ব্যথার ঔষধ বিশেষজ্ঞ</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Chronic & Acute Pain Treatment
                </h3>
                <p className="text-sm text-muted-foreground">তীব্র ও দীর্ঘমেয়াদী ব্যথার চিকিৎসা</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hospital Affiliation */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">হাসপাতাল সংযুক্তি</h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">নিউ হলি কেয়ার প্যাথলজী</h3>
                  <p className="text-muted-foreground">
                    পুরাতন লোহাপট্টি, পূবালী ব্যাংকের নীচতলা, বরগুনা
                  </p>
                  <p className="text-sm text-primary mt-2">প্রধান চেম্বার</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
