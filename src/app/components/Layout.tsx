import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';


export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

    </div>
  );
}
