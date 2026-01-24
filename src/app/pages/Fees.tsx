import { Heart, Stethoscope, RefreshCw, Baby, HeartHandshake, BookOpen, Banknote, CheckCircle2, AlertCircle, Microscope } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';

export default function Fees() {
  const feeStructure = [
    {
      service: 'প্রথম পরামর্শ (Consultation)',
      fee: '৫০০ টাকা',
      icon: Stethoscope,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100',
      color: 'from-blue-50 to-cyan-50',
    },
    {
      service: 'ফলো-আপ (Follow-up)',
      fee: '৩০০ টাকা',
      icon: RefreshCw,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100',
      color: 'from-green-50 to-emerald-50',
    },
    {
      service: 'গর্ভবতী মায়েদের আল্ট্রাসনোগ্রাফি',
      fee: '৫০০ টাকা',
      icon: Baby,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-100',
      color: 'from-purple-50 to-pink-50',
    },
    {
      service: 'প্রতিবন্ধী রোগী',
      fee: 'সম্পূর্ণ ফ্রী',
      icon: HeartHandshake,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100',
      color: 'from-green-100 to-emerald-100',
      special: true,
    },
    {
      service: 'মাদ্রাসা শিক্ষার্থী',
      fee: '৫০% ডিসকাউন্ট',
      icon: BookOpen,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100',
      color: 'from-blue-100 to-cyan-100',
      special: true,
    },
    {
      service: 'সকল মেডিকেল টেস্ট',
      fee: 'স্বল্প খরচে',
      icon: Microscope,
      iconColor: 'text-amber-600',
      bgColor: 'bg-amber-100',
      color: 'from-amber-100 to-orange-100',
      special: true,
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">ফি ও মূল্য তালিকা</h1>
          <p className="text-lg text-muted-foreground">
            স্বচ্ছ ও সাশ্রয়ী মূল্যে মানসম্পন্ন চিকিৎসা সেবা
          </p>
        </div>

        {/* Fee Structure Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {feeStructure.map((item, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${item.color} ${item.special ? 'border-2 border-primary' : ''} hover:shadow-lg transition-shadow`}
            >
              <CardContent className="p-8 text-center">
                <div className={`${item.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                  <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.service}</h3>
                <p className={`text-3xl font-bold ${item.special ? 'text-primary' : 'text-gray-900'}`}>
                  {item.fee}
                </p>
                {item.special && (
                  <div className="mt-3 bg-white/50 rounded-full px-4 py-1 inline-block">
                    <span className="text-sm font-medium text-primary">বিশেষ অফার</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fee Table */}
        <Card className="mb-12">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="p-4 text-left">সেবা</th>
                    <th className="p-4 text-right">ফি</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">প্রথম পরামর্শ (Consultation)</td>
                    <td className="p-4 text-right font-bold">৫০০ টাকা</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">ফলো-আপ (Follow-up)</td>
                    <td className="p-4 text-right font-bold">৩০০ টাকা</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">গর্ভবতী মায়েদের আল্ট্রাসনোগ্রাফি</td>
                    <td className="p-4 text-right font-bold">৫০০ টাকা</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 bg-green-50">
                    <td className="p-4 font-medium">প্রতিবন্ধী রোগী</td>
                    <td className="p-4 text-right font-bold text-green-600">সম্পূর্ণ ফ্রী</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 bg-blue-50">
                    <td className="p-4 font-medium">মাদ্রাসা শিক্ষার্থী</td>
                    <td className="p-4 text-right font-bold text-blue-600">৫০% ডিসকাউন্ট</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Special Offers */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">বিশেষ সামাজিক সেবা</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">প্রতিবন্ধীদের জন্য ফ্রী চিকিৎসা</h3>
                    <p className="text-muted-foreground mb-4">
                      সকল প্রকার প্রতিবন্ধী রোগীদের জন্য সম্পূর্ণ বিনামূল্যে পরামর্শ, পরীক্ষা ও চিকিৎসা সেবা প্রদান করা হয়।
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-bold text-green-700">কিভাবে পাবেন?</p>
                      <p className="text-sm text-muted-foreground">
                        প্রতিবন্ধী পরিচয়পত্র অথবা প্রাসঙ্গিক কাগজপত্র সাথে নিয়ে আসুন।
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">মাদ্রাসা শিক্ষার্থীদের ৫০% ছাড়</h3>
                    <p className="text-muted-foreground mb-4">
                      মাদ্রাসায় অধ্যয়নরত শিক্ষার্থীদের জন্য সকল প্রকার চিকিৎসা সেবায় ৫০% বিশেষ ছাড় প্রদান করা হয়।
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-bold text-blue-700">কিভাবে পাবেন?</p>
                      <p className="text-sm text-muted-foreground">
                        মাদ্রাসার পরিচয়পত্র অথবা প্রত্যয়নপত্র সাথে নিয়ে আসুন।
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Payment Notice */}
        <Card className="bg-slate-50">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Banknote className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">পেমেন্ট তথ্য</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>নগদ (Cash) পেমেন্ট গ্রহণ করা হয়</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>bKash / Nagad / Rocket এর মাধ্যমে পেমেন্ট সুবিধা রয়েছে</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>ফলো-আপের জন্য আগের রসিদ সাথে আনুন</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>বিশেষ ছাড়ের জন্য প্রাসঙ্গিঙ 5 কাগজপত্র আবশ্যক</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mt-8 bg-amber-50 border-amber-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-5 w-5 text-amber-700" />
              <h3 className="font-bold text-lg text-amber-900">গুরুত্বপূর্ণ নোটিশ</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• ফলো-আপ ফি শুধুমাত্র প্রথম পরামর্শের 30 দিনের মধ্যে প্রযোজ্য</li>
              <li>• বিশেষ পরীক্ষা বা টেস্টের খরচ আলাদা হবে</li>
              <li>• ফি সম্পর্কে আরও তথ্যের জন্য সরাসরি যোগাযোগ করুন</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
