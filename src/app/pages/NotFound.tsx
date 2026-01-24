import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4">পেজ পাওয়া যায়নি</h1>
          <p className="text-lg text-muted-foreground mb-8">
            দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি। এটি সরানো হতে পারে বা অস্তিত্ব নেই।
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="gap-2">
                <Home className="h-5 w-5" />
                হোম পেজে ফিরে যান
              </Button>
            </Link>
            <Link to="/appointment">
              <Button size="lg" variant="outline" className="gap-2">
                <Search className="h-5 w-5" />
                সিরিয়াল নিন
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
