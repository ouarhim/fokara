import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Truck, BookOpen, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Agadir = () => {
  const { t, language, dir } = useLanguage();
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    const phoneNumber = "212691218840";
    const message = encodeURIComponent(
      language === "ar"
        ? "السلام عليكم، أريد الاستفسار عن الكتب المتوفرة في مكتبة أكادير"
        : language === "fr"
        ? "Bonjour, je voudrais me renseigner sur les livres disponibles à la librairie d'Agadir"
        : "Hello, I would like to inquire about books available at the Agadir bookstore"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    toast({
      title: t.common.toastTitle,
      description: t.common.toastDescription,
    });
  };

  // LocalBusiness data for Agadir page
  const localBusinessData = {
    name: language === "ar" ? "مكتبة الفقراء أكادير" : "Librairie des Pauvres Agadir",
    description: language === "ar"
      ? "مكتبة في أكادير توفر romans, manga, fournitures scolaires, وlivres d'occasion مع توصيل سريع. English books agadir, papeterie agadir, fournitures scolaires agadir"
      : "Librairie à Agadir proposant nouveautés, scolaires et romans à prix abordables avec livraison rapide au Maroc",
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
    ],
  };

  // SEO metadata
  const seoMetadata = {
    ar: {
      title: "مكتبة في أكادير — كتب بأسعار مناسبة وتوصيل سريع",
      description: "مكتبة في أكادير توفر romans, manga, fournitures scolaires, وlivres d'occasion مع توصيل سريع. English books agadir, papeterie agadir, fournitures scolaires agadir",
      keywords: "مكتبة أكادير, كتب أكادير, librairie agadir, كتب بأسعار مناسبة, توصيل كتب أكادير, روايات أكادير, مكتبة قريبة مني, مكتبة مفتوحة الآن",
    },
    fr: {
      title: "Librairie à Agadir — nouveautés scolaires et romans",
      description: "Librairie à Agadir proposant nouveautés, scolaires et romans à prix abordables avec livraison rapide au Maroc",
      keywords: "librairie agadir, livres pas chers agadir, fournitures scolaires agadir, livres d'occasion agadir, bookstore agadir",
    },
    en: {
      title: "Bookstore in Agadir — New Releases, Textbooks and Novels",
      description: "Bookstore in Agadir offering new releases, textbooks and novels at affordable prices with fast delivery across Morocco",
      keywords: "bookstore agadir, books agadir, cheap books agadir, school supplies agadir",
    },
  };

  const meta = seoMetadata[language];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
      />
      <StructuredData type="LocalBusiness" data={localBusinessData} />
      <Header />
      <main dir={dir}>
        <div className="container px-4 py-8">
          <Breadcrumb items={[{ name: language === "ar" ? "أكادير" : "Agadir", url: "/agadir" }]} />
          
          {/* Hero Section */}
          <section className="py-12 md:py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === "ar"
                ? "مكتبة في أكادير — إصدارات جديدة وكتب مدرسية وروايات"
                : language === "fr"
                ? "Librairie à Agadir — nouveautés, scolaires et romans"
                : "Bookstore in Agadir — New Releases, Textbooks and Novels"}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              {language === "ar"
                ? "مكتبة الفقراء في أكادير توفر لك أحدث الإصدارات والكتب المدرسية والروايات بأسعار مناسبة. نوفر خدمة توصيل سريعة لجميع مدن المغرب عبر واتساب."
                : language === "fr"
                ? "La Librairie des Pauvres à Agadir vous propose les dernières nouveautés, livres scolaires et romans à prix abordables. Nous offrons un service de livraison rapide dans toutes les villes du Maroc via WhatsApp."
                : "The Poor's Library in Agadir offers you the latest releases, textbooks and novels at affordable prices. We provide fast delivery service to all cities in Morocco via WhatsApp."}
            </p>
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <MessageCircle className={`${dir === "rtl" ? "ml-2" : "mr-2"} w-5 h-5`} />
              {language === "ar"
                ? "اطلب على واتساب"
                : language === "fr"
                ? "Commander sur WhatsApp"
                : "Order on WhatsApp"}
            </Button>
          </section>

          {/* Store Info */}
          <section className="py-12 md:py-16 border-t">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {language === "ar" ? "موقعنا" : language === "fr" ? "Notre emplacement" : "Our Location"}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Souk Sidi Youssef BAB N°7</p>
                      <p className="text-muted-foreground">Agadir, Morocco 80000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">
                        {language === "ar" ? "ساعات العمل" : language === "fr" ? "Heures d'ouverture" : "Opening Hours"}
                      </p>
                      <p className="text-muted-foreground">
                        {language === "ar"
                          ? "الاثنين - السبت: 9:00 - 19:00"
                          : language === "fr"
                          ? "Lundi - Samedi: 9h00 - 19h00"
                          : "Monday - Saturday: 9:00 AM - 7:00 PM"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {language === "ar" ? "خدماتنا" : language === "fr" ? "Nos services" : "Our Services"}
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-accent mt-1" />
                    <span className="text-muted-foreground">
                      {language === "ar"
                        ? "روايات عربية وفرنسية وإنجليزية"
                        : language === "fr"
                        ? "Romans en arabe, français et anglais"
                        : "Novels in Arabic, French and English"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-accent mt-1" />
                    <span className="text-muted-foreground">
                      {language === "ar"
                        ? "كتب مدرسية ومستلزمات مدرسية"
                        : language === "fr"
                        ? "Livres scolaires et fournitures"
                        : "Textbooks and school supplies"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-accent mt-1" />
                    <span className="text-muted-foreground">
                      {language === "ar"
                        ? "توصيل لجميع مدن المغرب"
                        : language === "fr"
                        ? "Livraison dans toutes les villes du Maroc"
                        : "Delivery to all cities in Morocco"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Popular Categories */}
          <section className="py-12 md:py-16 border-t">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              {language === "ar"
                ? "أشهر التصنيفات في أكادير"
                : language === "fr"
                ? "Catégories populaires à Agadir"
                : "Popular Categories in Agadir"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">
                  {language === "ar" ? "روايات" : language === "fr" ? "Romans" : "Novels"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "أحدث الروايات العربية والفرنسية والإنجليزية"
                    : language === "fr"
                    ? "Derniers romans en arabe, français et anglais"
                    : "Latest novels in Arabic, French and English"}
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">
                  {language === "ar"
                    ? "مستلزمات مدرسية"
                    : language === "fr"
                    ? "Fournitures scolaires"
                    : "School Supplies"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "كتب مدرسية ومستلزمات للطلاب"
                    : language === "fr"
                    ? "Livres scolaires et fournitures pour étudiants"
                    : "Textbooks and supplies for students"}
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">
                  {language === "ar"
                    ? "كتب مستعملة"
                    : language === "fr"
                    ? "Livres d'occasion"
                    : "Used Books"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "كتب مستعملة بأسعار مناسبة"
                    : language === "fr"
                    ? "Livres d'occasion à prix abordables"
                    : "Used books at affordable prices"}
                </p>
              </div>
            </div>
          </section>

          {/* Delivery Info */}
          <section className="py-12 md:py-16 border-t">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              {language === "ar"
                ? "التوصيل في المغرب — المدد والتكاليف"
                : language === "fr"
                ? "Livraison au Maroc — délais et tarifs"
                : "Delivery in Morocco — Timeframes and Costs"}
            </h2>
            <div className="prose max-w-none">
              <p className="text-muted-foreground mb-4">
                {language === "ar"
                  ? "نوفر خدمة توصيل سريعة لجميع مدن المغرب. عادة ما يستغرق التوصيل من 2 إلى 5 أيام عمل حسب المدينة. تكلفة التوصيل تُحسب حسب المدينة وسنوضحها لك قبل تأكيد الطلب."
                  : language === "fr"
                  ? "Nous offrons un service de livraison rapide dans toutes les villes du Maroc. La livraison prend généralement de 2 à 5 jours ouvrables selon la ville. Le coût de livraison est calculé selon la ville et nous vous l'expliquerons avant de confirmer la commande."
                  : "We provide fast delivery service to all cities in Morocco. Delivery usually takes 2 to 5 business days depending on the city. Delivery cost is calculated according to the city and we'll explain it to you before confirming the order."}
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <div className="py-12 md:py-16 border-t">
            <FAQ />
          </div>

          {/* Internal Links */}
          <section className="py-12 md:py-16 border-t">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {language === "ar" ? "روابط مفيدة" : language === "fr" ? "Liens utiles" : "Useful Links"}
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link to="/" className="text-accent hover:underline">
                {language === "ar" ? "الصفحة الرئيسية" : language === "fr" ? "Page d'accueil" : "Homepage"}
              </Link>
              <Link to="/#catalog" className="text-accent hover:underline">
                {language === "ar" ? "الكتب المتوفرة" : language === "fr" ? "Livres disponibles" : "Available Books"}
              </Link>
              <Link to="/#faq" className="text-accent hover:underline">
                {language === "ar" ? "أسئلة شائعة" : language === "fr" ? "FAQ" : "FAQ"}
              </Link>
              <Link to="/#contact" className="text-accent hover:underline">
                {language === "ar" ? "اتصل بنا" : language === "fr" ? "Contactez-nous" : "Contact Us"}
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp onWhatsAppClick={handleWhatsAppClick} />
    </div>
  );
};

export default Agadir;
