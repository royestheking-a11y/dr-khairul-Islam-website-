import { Link } from 'react-router';
import { Phone, Mail, MapPin, AlertTriangle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">ডা. মোঃ খাইরুল ইসলাম</h3>
            <p className="text-slate-300 mb-2">Medicine & Interventional Pain Management Specialist</p>
            <p className="text-sm text-slate-400">
              বিশ্বাসযোগ্য চিকিৎসা • আধুনিক পেইন ম্যানেজমেন্ট • রোগীবান্ধব সেবা
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">যোগাযোগ</h3>
            <div className="space-y-3">
              <a href="tel:01725497355" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
                <Phone className="h-4 w-4" />
                <span>০১৭২৫-৪৯৭৩৫৫</span>
              </a>
              <a href="mailto:Khairulislam7355@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
                <Mail className="h-4 w-4" />
                <span>Khairulislam7355@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>নিউ হলি কেয়ার প্যাথলজী, পুরাতন লোহাপট্টি, পূবালী ব্যাংকের নীচতলা, বরগুনা</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition">
                  ডাক্তার সম্পর্কে
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition">
                  সেবাসমূহ
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-slate-300 hover:text-white transition">
                  সিরিয়াল নিন
                </Link>
              </li>
              <li>
                <Link to="/online-consultation" className="text-slate-300 hover:text-white transition">
                  অনলাইন পরামর্শ
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-300 hover:text-white transition">
                  প্রশ্নোত্তর
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <p className="text-sm text-slate-400 text-center leading-relaxed">
            <span className="inline-flex items-center gap-2 font-bold text-slate-200 justify-center">
              <AlertTriangle className="h-3 w-3 text-amber-500" />
            </span>{' '}
            <span>
              এই ওয়েবসাইট শুধুমাত্র তথ্য প্রদানের জন্য। চিকিৎসার জন্য সরাসরি ডাক্তারের পরামর্শ গ্রহণ আবশ্যক।
            </span>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-slate-400">
          <p>© 2026 Dr. Md. Khairul Islam. সর্বস্বত্ব সংরক্ষিত।</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition"
          >
            ⬆ শীর্ষে ফিরে যান
          </button>
        </div>
      </div>
    </footer>
  );
}