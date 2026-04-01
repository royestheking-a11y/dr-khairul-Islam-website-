import { useState } from 'react';
import { Calendar as CalendarIcon, CreditCard, CheckCircle2, MessageCircle, Monitor, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Calendar } from '@/app/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/app/components/ui/popover';
import { format } from 'date-fns';

export default function OnlineConsultation() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    problem: '',
    consultationType: 'online',
    timeSlot: '',
    paymentMethod: '',
    transactionId: '',
  });

  const timeSlots = [
    '09:00 AM - 09:30 AM',
    '10:00 AM - 10:30 AM',
    '11:00 AM - 11:30 AM',
    '02:00 PM - 02:30 PM',
    '03:00 PM - 03:30 PM',
    '04:00 PM - 04:30 PM',
    '05:00 PM - 05:30 PM',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Create confirmation message
    const message = `নতুন পরামর্শ বুকিং

নাম: ${formData.name}
ফোন: ${formData.phone}
বয়স: ${formData.age}
সমস্যা: ${formData.problem}
পরামর্শের ধরন: ${formData.consultationType === 'online' ? 'অনলাইন পরামর্শ' : 'অফলাইন পরামর্শ (চেম্বারে)'}
তারিখ: ${date ? format(date, 'PPP') : ''}
সময়: ${formData.timeSlot}
পেমেন্ট মাধ্যম: ${formData.paymentMethod}
ট্রান্স্যাকশন আইডি: ${formData.transactionId}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/8801725497355?text=${encodedMessage}`, '_blank');

    // Move to confirmation step
    setStep(4);
  };

  return (
    <div className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-medium text-primary">অনলাইন ও অফলাইন উভয় সেবা</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            পরামর্শ বুকিং
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            আপনার সুবিধামত অনলাইন অথবা চেম্বারে এসে পরামর্শ নিন
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center max-w-3xl mx-auto relative">
            {/* Progress Line Background */}
            <div className="absolute top-6 left-0 right-0 flex items-center px-6 z-0">
              <div className="flex-1 h-1 bg-gray-200 rounded-full relative">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 rounded-full shadow-sm"
                  style={{ width: `${step === 1 ? 0 : step === 2 ? 50 : 100}%` }}
                />
              </div>
            </div>

            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center flex-1 relative z-10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step >= s
                    ? 'bg-gradient-to-br from-primary to-accent text-white shadow-lg scale-110'
                    : 'bg-white border-2 border-gray-300 text-gray-400'
                    }`}
                >
                  {step > s ? <CheckCircle2 className="h-6 w-6" /> : s}
                </div>
                <span className={`text-xs md:text-sm font-medium mt-2 ${step >= s ? 'text-primary' : 'text-gray-400'}`}>
                  {s === 1 && 'তথ্য'}
                  {s === 2 && 'সময় নির্বাচন'}
                  {s === 3 && 'পেমেন্ট ও নিশ্চিতকরণ'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Basic Information */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>আপনার তথ্য</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">নাম *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="আপনার পূর্ণ নাম"
                    required
                    className="bg-input-background"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">মোবাইল নাম্বার *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="০১XXXXXXXXX"
                    required
                    className="bg-input-background"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="age">বয়স *</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="বছর"
                  required
                  className="bg-input-background"
                />
              </div>


              <div>
                <Label htmlFor="problem">সমস্যার বিবরণ *</Label>
                <Textarea
                  id="problem"
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  placeholder="আপনার স্বাস্থ্য সমস্যার বিস্তারিত লিখুন"
                  rows={4}
                  required
                  className="bg-input-background"
                />
              </div>

              <div>
                <Label className="mb-3 block">পরামর্শের ধরন *</Label>
                <RadioGroup
                  value={formData.consultationType}
                  onValueChange={(value) => setFormData({ ...formData, consultationType: value })}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div>
                    <RadioGroupItem value="online" id="online" className="peer sr-only" />
                    <Label
                      htmlFor="online"
                      className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                    >
                      <Monitor className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-bold">অনলাইন পরামর্শ</p>
                        <p className="text-sm text-muted-foreground">মুখোমুখি পরামর্শ</p>
                      </div>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="offline" id="offline" className="peer sr-only" />
                    <Label
                      htmlFor="offline"
                      className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                    >
                      <MapPin className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-bold">অফলাইন পরামর্শ (চেম্বারে)</p>
                        <p className="text-sm text-muted-foreground">ভয়েস কলে পরামর্শ</p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button onClick={handleNext} className="w-full" size="lg">
                পরবর্তী
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Date & Time Selection */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>তারিখ ও সময় নির্বাচন করুন</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="mb-3 block">তারিখ নির্বাচন করুন *</Label>
                <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, 'PPP') : <span>একটি তারিখ নির্বাচন করুন</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(newDate) => {
                        setDate(newDate);
                        setCalendarOpen(false);
                      }}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label className="mb-3 block">সময় নির্বাচন করুন *</Label>
                <RadioGroup
                  value={formData.timeSlot}
                  onValueChange={(value) => setFormData({ ...formData, timeSlot: value })}
                  className="grid md:grid-cols-2 gap-3"
                >
                  {timeSlots.map((slot) => (
                    <div key={slot}>
                      <RadioGroupItem value={slot} id={slot} className="peer sr-only" />
                      <Label
                        htmlFor={slot}
                        className="flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                      >
                        {slot}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleBack} variant="outline" className="flex-1">
                  পূর্ববর্তী
                </Button>
                <Button onClick={handleNext} className="flex-1" disabled={!date || !formData.timeSlot}>
                  পরবর্তী
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Payment Method */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>পেমেন্ট মাধ্যম</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-amber-900">
                  <strong>পরামর্শ ফি:</strong> ৫০০ টাকা
                </p>
              </div>

              <div>
                <Label className="mb-3 block">পেমেন্ট মাধ্যম নির্বাচন করুন *</Label>
                <RadioGroup
                  value={formData.paymentMethod}
                  onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                  className="space-y-3"
                >
                  <div>
                    <RadioGroupItem value="bkash" id="bkash" className="peer sr-only" />
                    <Label
                      htmlFor="bkash"
                      className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                    >
                      <CreditCard className="h-6 w-6 text-primary" />
                      <div className="flex-1">
                        <p className="font-bold">bKash</p>
                        <p className="text-sm text-muted-foreground">মোবাইল পেমেন্ট</p>
                      </div>
                      <div className="text-pink-600 font-bold">bKash</div>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="nagad" id="nagad" className="peer sr-only" />
                    <Label
                      htmlFor="nagad"
                      className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                    >
                      <CreditCard className="h-6 w-6 text-primary" />
                      <div className="flex-1">
                        <p className="font-bold">Nagad</p>
                        <p className="text-sm text-muted-foreground">মোবাইল পেমেন্ট</p>
                      </div>
                      <div className="text-orange-600 font-bold">Nagad</div>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="rocket" id="rocket" className="peer sr-only" />
                    <Label
                      htmlFor="rocket"
                      className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                    >
                      <CreditCard className="h-6 w-6 text-primary" />
                      <div className="flex-1">
                        <p className="font-bold">Rocket</p>
                        <p className="text-sm text-muted-foreground">মোবাইল পেমেন্ট</p>
                      </div>
                      <div className="text-purple-600 font-bold">Rocket</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Card className="bg-teal-50 border-teal-200">
                <CardContent className="p-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold text-teal-900">
                      পেমেন্ট করার নিয়ম:
                    </p>
                    <p className="text-sm text-teal-800">
                      ১. নিচের দেওয়া নাম্বারে <span className="font-bold text-primary">৫০০ টাকা</span> 'Send Money' করুন।
                    </p>
                    <div className="bg-white p-3 rounded-lg border border-teal-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase font-semibold">বিকাশ / নগদ / রকেট (Personal)</p>
                        <p className="text-lg font-bold text-primary">01725497355</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigator.clipboard.writeText('01725497355')}
                        className="text-primary hover:text-primary hover:bg-primary/5"
                      >
                        কপি করুন
                      </Button>
                    </div>
                    <p className="text-sm text-teal-800">
                      ২. পেমেন্ট সফল হওয়ার পর প্রাপ্ত <span className="font-bold">Transaction ID</span> টি নিচের ঘরে লিখে 'নিশ্চিত করুন' বাটনে ক্লিক করুন।
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div>
                <Label htmlFor="transactionId">ট্রান্স্যাকশন আইডি *</Label>
                <Input
                  id="transactionId"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleChange}
                  placeholder="পেমেন্ট করার পর ট্রান্স্যাকশন আইডি দিন"
                  required
                  className="bg-input-background"
                />
              </div>

              <div className="flex gap-3">
                <Button onClick={handleBack} variant="outline" className="flex-1">
                  পূর্ববর্তী
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="flex-1 gap-2"
                  disabled={!formData.paymentMethod || !formData.transactionId}
                >
                  <CheckCircle2 className="h-5 w-5" />
                  নিশ্চিত করুন
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>নিশ্চিতকরণ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-green-900">
                  <strong>আপনার বুকিং সফলভভাবে করা হয়েছে!</strong>
                </p>
              </div>

              <div>
                <Label className="mb-3 block">নিশ্চিতকরণ বার্তা:</Label>
                <Textarea
                  value={`নতুন পরামর্শ বুকিং

নাম: ${formData.name}
ফোন: ${formData.phone}
বয়স: ${formData.age}
সমস্যা: ${formData.problem}
পরামর্শের ধরন: ${formData.consultationType === 'online' ? 'অনলাইন পরামর্শ' : 'অফলাইন পরামর্শ (চেম্বারে)'}
তারিখ: ${date ? format(date, 'PPP') : ''}
সময়: ${formData.timeSlot}
পেমেন্ট মাধ্যম: ${formData.paymentMethod}
ট্রান্স্যাকশন আইডি: ${formData.transactionId}`}
                  rows={10}
                  className="bg-input-background"
                  readOnly
                />
              </div>

              <div className="flex gap-3">
                <Button onClick={handleBack} variant="outline" className="flex-1">
                  পূর্ববর্তী
                </Button>
                <Button
                  onClick={() => setStep(1)}
                  className="flex-1 gap-2"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  আরও একটি বুকিং করুন
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Monitor className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">HD ভিডিও কল</h3>
              <p className="text-sm text-muted-foreground">
                উচ্চ মানের ভিডিও কলের মাধ্যমে পরামর্শ
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">সুবিধাজনক</h3>
              <p className="text-sm text-muted-foreground">
                ঘরে বসে যেকোনো সময় পরামর্শ নিন
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">ফলো-আপ সাপোর্ট</h3>
              <p className="text-sm text-muted-foreground">
                পরামর্শের পরে সাপোর্ট সেবা
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div >
  );
}