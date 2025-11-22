import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  
  // LocalBusiness data - TODO: Move to config file
  const localBusinessData = {
    name: language === "ar" ? "مكتبة الفقراء أكادير" : "Librairie Alfokara Agadir",
    description: language === "ar"
      ? "مكتبة متخصصة في بيع الكتب والروايات بأسعار مناسبة مع خدمة توصيل سريعة لجميع مدن المغرب"
      : "Librairie et boutique de livres à Agadir proposant nouveautés, scolaires et romans avec livraison au Maroc",
    telephone: "+212691218840",
    address: {
      streetAddress: "Souk Sidi Youssef BAB N°7",
      addressLocality: "Agadir",
      addressRegion: "Souss-Massa",
      postalCode: "80000",
      addressCountry: "MA",
    },
    geo: {
      latitude: "30.4278",
      longitude: "-9.5981",
    },
    openingHours: [
      "Monday 09:00-19:00",
      "Tuesday 09:00-19:00",
      "Wednesday 09:00-19:00",
      "Thursday 09:00-19:00",
      "Friday 09:00-19:00",
      "Saturday 09:00-19:00",
    ],
    sameAs: [
      "https://www.instagram.com/maktabatlfokara/",
      "https://www.facebook.com/maktabatlfokara",
      // TODO: Add Google Business Profile URL
    ],
  };

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
      <SEOHead />
      <StructuredData type="LocalBusiness" data={localBusinessData} />
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
