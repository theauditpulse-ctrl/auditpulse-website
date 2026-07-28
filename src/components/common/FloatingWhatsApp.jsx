import { MessageCircle } from "lucide-react";

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919025973127"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle size={32} />
    </a>
  );
}

export default FloatingWhatsApp;