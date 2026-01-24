import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

export default function Chamber() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">চেম্বার তথ্য</h1>
          <p className="text-lg text-muted-foreground">
            আমাদের চেম্বারে আসুন এবং সরাসরি পরামর্শ নিন
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Chamber Details */}
          <div>
            <Card className="mb-6">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">নিউ হলি কেয়ার প্যাথলজী</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">ঠিকানা</h3>
                      <p className="text-muted-foreground">
                        পুরাতন লোহাপট্টি, পূবালী ব্যাংকের নীচতলা, বরগুনা
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">যোগাযোগ</h3>
                      <a href="tel:01725497355" className="text-primary hover:underline block">
                        ০১৭২৫-৪৯৭৩৫৫
                      </a>
                      <a
                        href="https://wa.me/8801725497355"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline block mt-1"
                      >
                        WhatsApp: +880 1725-497355
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">সিরিয়াল পদ্ধতি</h3>
                      <p className="text-muted-foreground">
                        কল অথবা WhatsApp এর মাধ্যমে সিরিয়াল নিন
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-bold mb-4">দিকনির্দেশনা</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    পূবালী ব্যাংক লিমিটেড, বরগুনা শাখার নিচতলায় অবস্থিত। পুরাতন লোহাপট্টি এলাকায়।
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Pubali+Bank+Barguna+New+Holy+Care+Pathology"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="gap-2">
                      <Navigation className="h-4 w-4" />
                      Google Maps এ দেখুন
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Visiting Time Notice */}
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">⏰ পরিদর্শন সময়</h3>
                <p className="text-muted-foreground">
                  সঠিক পরিদর্শন সময় জানতে অনুগ্রহ করে ফোনে যোগাযোগ করুন অথবা WhatsApp করুন।
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <div>
            <Card className="h-full">
              <CardContent className="p-0 h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.8!2d90.1!3d22.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA5JzAwLjAiTiA5MMKwMDYnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chamber Location"
                  className="rounded-lg"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Important Notice */}
        <Card className="mt-8 bg-red-50 border-red-200">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-2 text-red-900">🚨 জরুরি নোটিশ</h3>
            <p className="text-red-800">
              জরুরি অবস্থায় দেরি না করে নিকটস্থ হাসপাতালের জরুরি বিভাগে যান। তারপর ফোনে যোগাযোগ করুন।
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
