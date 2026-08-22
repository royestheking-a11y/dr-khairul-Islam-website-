import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

// Convert numbers to Bengali digits if language is Bengali
function formatNumber(num: number, isBn: boolean): string {
  if (!isBn) return num.toString();
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
}

export function AnimatedCounter({ target, duration = 2000, suffix = '', prefix = '', className = '' }: AnimatedCounterProps) {
  const { language } = useLanguage();
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [started, target, duration]);

  const formattedCount = formatNumber(count, language === 'bn');

  return (
    <span ref={ref} className={`inline-flex items-center justify-center whitespace-nowrap ${className}`}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
}
