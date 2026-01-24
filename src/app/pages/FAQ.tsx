import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { Card, CardContent } from '@/app/components/ui/card';
import { Phone, MessageCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export default function FAQ() {
  const faqs = [
    {
      question: 'সিরিয়াল কিভাবে নেবো?',
      answer: 'আপনি তিনটি উপায়ে সিরিয়াল নিতে পারেন: ১) ওয়েবসাইটের সিরিয়াল ফর্ম পূরণ করে WhatsApp এ পাঠান, ২) সরাসরি ০১৭২৫-৪৯৭৩৫৫ নাম্বারে কল করুন, ৩) WhatsApp এ মেসেজ পাঠান।',
    },
    {
      question: 'Follow-up কখন করতে হবে?',
      answer: 'প্রথম পরামর্শের পর চিকিৎসক যে সময় নির্ধারণ করে দিবেন সেই সময় Follow-up করতে হবে। সাধারণত ৭-১৫ দিনের মধ্যে Follow-up করা হয়।',
    },
    {
      question: 'Follow-up ফি কত?',
      answer: 'Follow-up ফি ৩০০ টাকা। তবে টি প্রথম পরামর্শের ১৫ দিনের মধ্যে প্রযোজ্য। আগের রসিদ সাথে আনতে হবে।',
    },
    {
      question: 'পেইন মেডিসিন কি?',
      answer: 'পেইন মেডিসিন হলো একটি বিশেষায়িত চিকিৎসা শাখা যেখানে বিভিন্ন ধরনের ব্যথার কারণ নির্ণয় করে আধুনিক পদ্ধতিতে চিকিৎসা প্রদান করা হয়। এতে অবশকরণ, ইনজেকশন, থেরাপি এবং অন্যান্য আধুনিক পদ্ধতি ব্যবহার করা হয়।',
    },
    {
      question: 'আল্ট্রাসনোগ্রাফির খরচ কত?',
      answer: 'গর্ভবতী মায়েদের আল্ট্রাসনোগ্রাফি মাত্র ৫০০ টাকায় করা হয়। এটি একটি বিশেষ মূল্যে প্রদান করা সেবা।',
    },
    {
      question: 'প্রতিবন্ধীদের ফ্রী চিকিৎসা কিভাবে পাবো?',
      answer: 'প্রতিবন্ধী পরিচয়পত্র অথবা প্রাসঙ্গিক কাগজপত্র সাথে নিয়ে চেম্বারে আসুন। আপনাকে সম্পূর্ণ বিনামূল্যে পরামর্শ ও চিকিৎসা সেবা প্রদান করা হবে।',
    },
    {
      question: 'মাদ্রাসা শিক্ষার্থীদের ডিসকাউন্ট কিভাবে পাবো?',
      answer: 'মাদ্রাসার পরিচয়পত্র অথবা প্রত্যয়নপত্র সাথে নিয়ে আসলে সকল সেবায় ৫০% ছাড় পাবেন।',
    },
    {
      question: 'জরুরি রোগী হলে কি করবেন?',
      answer: 'জরুরি অবস্থায় দেরি না করে নিকটস্থ হাসপাতালের জরুরি বিভাগে যান। তারপর সুস্থ হলে আমাদের সাথে ফোনে যোগাযোগ করে Follow-up এর জন্য পরামর্শ নিন।',
    },
    {
      question: 'অনলাইন কনসাল্টেশন আছে কি?',
      answer: 'হ্যাঁ, আমরা অনলাইন পরামর্শ সেবা প্রদান করি। ভিডিও কল অথবা ফোন কলের মাধ্যমে পরামর্শ নিতে পারবেন। "অনলাইন পরামর্শ" পেজ থেকে বুকিং করুন।',
    },
    {
      question: 'পেমেন্ট কিভাবে করবো?',
      answer: 'চেম্বারে নগদ (Cash) পেমেন্ট করতে পারবেন। এছাড়াও bKash, Nagad, Rocket এর মাধ্যমেও পেমেন্ট করতে পারবেন। অনলাইন পরামর্শের ক্ষেত্রে বুকিং করার পর পেমেন্ট নির্দেশনা প্রদান করা হবে।',
    },
    {
      question: 'চেম্বারের সঠিক ঠিকানা কি?',
      answer: 'নিউ হলি কেয়ার প্যাথলজী, পুরাতন লোহাপট্টি, পূবালী ব্যাংকের নীচতলা, বরগুনা। GPS: 5459+VXX, Barguna',
    },
    {
      question: 'রিপোর্ট কি সাথে আনতে হবে?',
      answer: 'হ্যাঁ, আগের কোনো পরীক্ষার রিপোর্ট, প্রেসক্রিপশন বা মেডিকেল ডকুমেন্ট থাকলে অবশ্যই সাথে আনবেন। এটি রোগ নির্ণয়ে সাহায্য করবে।',
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">প্রশ্নোত্তর (FAQ)</h1>
          <p className="text-lg text-muted-foreground">
            সচরাচর জিজ্ঞাসিত প্রশ্নের উত্তর
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <span className="font-bold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Safety Notice */}
        <Card className="mb-8 bg-red-50 border-red-200">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-3 text-red-900 flex items-center gap-2">
              🚨 জরুরি ও নিরাপত্তা নোটিশ
            </h3>
            <p className="text-red-800 leading-relaxed">
              জরুরি অবস্থায় দেরি না করে নিকটস্থ হাসপাতালের জরুরি বিভাগে যান। তারপর ফোনে যোগাযোগ করুন।
              গুরুতর অবস্থায় সরাসরি হাসপাতালে যাওয়াই সর্বোত্তম।
            </p>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-primary to-accent text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">আরও প্রশ্ন আছে?</h3>
            <p className="mb-6 opacity-90">
              আপনার প্রশ্নের উত্তর খুঁজে পাচ্ছেন না? আমাদের সাথে সরাসরি যোগাযোগ করুন
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:01725497355">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Phone className="h-5 w-5" />
                  কল করুন
                </Button>
              </a>
              <a
                href="https://wa.me/8801725497355"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white gap-2">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="mt-8 bg-amber-50 border-amber-200">
          <CardContent className="p-6">
            <h3 className="font-bold mb-2 flex items-center gap-2 text-amber-900">
              <AlertTriangle className="h-5 w-5" />
            </h3>
            <p className="text-sm text-muted-foreground">
              এই ওয়েবসাইটে প্রদত্ত তথ্য শুধুমাত্র সাধারণ জ্ঞানের জন্য। চিকিৎসার জন্য সরাসরি ডাক্তারের
              পরামর্শ গ্রহণ করুন। অনলাইন পরামর্শ সরাসরি চেম্বারে আসার বিকল্প নয়, তবে প্রাথমিক
              পরামর্শের জন্য ব্যবহার করা যেতে পারে।
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}