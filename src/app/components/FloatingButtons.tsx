import { Phone, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40 lg:hidden">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/8801725497355"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Call Button */}
      <a
        href="tel:01725497355"
        className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Call"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
