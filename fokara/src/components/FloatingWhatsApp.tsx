import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FloatingWhatsAppProps {
  onWhatsAppClick: () => void;
}

export const FloatingWhatsApp = ({ onWhatsAppClick }: FloatingWhatsAppProps) => {
  const { dir } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div className={`absolute bottom-16 ${dir === 'rtl' ? 'right-0' : 'left-0'} ${dir === 'rtl' ? 'mr-2' : 'ml-2'}`}>
        <div className="bg-card border border-border/50 rounded-lg px-3 py-2 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-xs text-foreground whitespace-nowrap">
            {dir === 'rtl' ? 'تواصل معنا' : 'Contact us'}
          </p>
          <div className={`absolute top-full ${dir === 'rtl' ? 'right-4' : 'left-4'} w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border/50`} />
        </div>
      </div>

      {/* Main floating button */}
      <div className="relative">
        {/* Pulse animation ring - behind the button */}
        <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping pointer-events-none" />
        <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse pointer-events-none" />
        
        <Button
          onClick={onWhatsAppClick}
          className="relative z-10 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-accent hover:bg-accent/90 text-accent-foreground animate-in fade-in slide-in-from-bottom-4 duration-500 hover:scale-110 active:scale-95"
          size="icon"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  );
};
