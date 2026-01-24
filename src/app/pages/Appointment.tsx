import { useState } from 'react';
import { Calendar, User, Phone, FileText, Send, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    problem: '',
    date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `আসসালামু আলাইকুম
আমি ডা. মোঃ খাইরুল ইসলাম স্যারের কাছে সিরিয়াল নিতে চাই।

নাম: ${formData.name}
মোবাইল: ${formData.phone}
বয়স: ${formData.age}
সমস্যা: ${formData.problem}
তারিখ: ${formData.date}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/8801725497355?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">সিরিয়াল নিন</h1>
          <p className="text-lg text-muted-foreground">
            অনলাইনে সিরিয়াল বুক করুন এবং WhatsApp এ নিশ্চিতকরণ পান
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Appointment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                সিরিয়াল ফর্ম
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4" />
                    নাম *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input-background"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                    <Phone className="h-4 w-4" />
                    মোবাইল নাম্বার *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="০১XXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-input-background"
                  />
                </div>

                <div>
                  <Label htmlFor="age" className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4" />
                    বয়স *
                  </Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="বছর"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="bg-input-background"
                  />
                </div>

                <div>
                  <Label htmlFor="problem" className="flex items-center gap-2 mb-2">
                    <FileText className="h-4 w-4" />
                    সমস্যা / রোগের বিবরণ *
                  </Label>
                  <Textarea
                    id="problem"
                    name="problem"
                    placeholder="আপনার স্বাস্থ্য সমস্যার সংক্ষিপ্ত বিবরণ লিখুন"
                    value={formData.problem}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-input-background"
                  />
                </div>

                <div>
                  <Label htmlFor="date" className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4" />
                    পছন্দের তারিখ *
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="bg-input-background"
                  />
                </div>

                <Button type="submit" className="w-full gap-2" size="lg">
                  <Send className="h-5 w-5" />
                  WhatsApp এ সিরিয়াল নিশ্চিত করুন
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Information Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>সিরিয়াল পদ্ধতি</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">ফর্ম পূরণ করুন</h4>
                    <p className="text-sm text-muted-foreground">
                      আপনার তথ্য দিয়ে সিরিয়াল ফর্ম পূরণ করুন
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">WhatsApp এ পাঠান</h4>
                    <p className="text-sm text-muted-foreground">
                      ফর্ম জমা দিলে WhatsApp খুলবে এবং মেসেজ পাঠান
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">নিশ্চিতকরণ পান</h4>
                    <p className="text-sm text-muted-foreground">
                      আমরা WhatsApp এ আপনার সিরিয়াল নিশ্চিত করব
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-teal-50 border-teal-200">
              <CardHeader>
                <CardTitle className="text-lg">💡 গুরুত্বপূর্ণ তথ্য</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>সিরিয়াল নিশ্চিত হওয়ার পর নির্ধারিত সময়ে চেম্বারে আসুন</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>আগের পরীক্ষার রিপোর্ট থাকলে সাথে আনুন</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>সময়মত আসতে না পারলে আগেই জানান</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>জরুরি অবস্থায় সরাসরি ফোন করুন</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">📞 সরাসরি যোগাযোগ</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  অনলাইনে সিরিয়াল নিতে সমস্যা হলে সরাসরি কল করুন:
                </p>
                <a href="tel:01725497355">
                  <Button variant="outline" className="w-full">
                    কল করুন: ০১৭২৫-৪৯৭৩৫৫
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
