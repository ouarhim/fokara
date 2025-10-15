import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    // WhatsApp number: +212691-218840
    const phoneNumber = "212691218840"; // Format: country code + number without + or spaces
    const message = encodeURIComponent(t.common.whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: t.common.toastTitle,
      description: t.common.toastDescription,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero onWhatsAppClick={handleWhatsAppClick} />
        <div id="catalog">
          <Catalog />
        </div>
        <div id="contact">
          <Contact onWhatsAppClick={handleWhatsAppClick} />
        </div>
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp onWhatsAppClick={handleWhatsAppClick} />
    </div>
  );
};

export default Index;
