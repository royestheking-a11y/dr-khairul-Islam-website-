import { useState } from 'react';
import { Link } from 'react-router';
import { Phone, MapPin, Menu, X, Calendar } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { to: '/', label: 'হোম' },
    { to: '/about', label: 'ডাক্তার সম্পর্কে' },
    { to: '/services', label: 'সেবাসমূহ' },
    { to: '/chamber', label: 'চেম্বার' },
    { to: '/fees', label: 'ফি' },
    { to: '/appointment', label: 'সিরিয়াল' },
    { to: '/online-consultation', label: 'অনলাইন পরামর্শ' },
    { to: '/faq', label: 'প্রশ্নোত্তর' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:01725497355" className="flex items-center gap-1 hover:underline">
              <Phone className="h-4 w-4" />
              <span>০১৭২৫-৪৯৭৩৫৫</span>
            </a>
            <div className="hidden sm:flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>বরগুনা</span>
            </div>
          </div>
          <Link to="/appointment">
            <Button size="sm" variant="secondary" className="text-xs gap-1">
              <Calendar className="h-3 w-3" />
              সিরিয়াল নিন
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <Link to="/" className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-primary">ডা. মোঃ খাইরুল ইসলাম</h1>
            <p className="text-xs md:text-sm text-muted-foreground">Medicine & Pain Specialist</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-6">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-4 rounded hover:bg-accent transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 px-4">
              <Link to="/appointment" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full gap-2 text-lg font-bold" size="lg">
                  <Calendar className="h-5 w-5" />
                  সিরিয়াল নিন
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
