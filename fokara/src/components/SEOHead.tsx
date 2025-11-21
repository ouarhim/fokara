import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  noindex?: boolean;
}

export const SEOHead = ({
  title,
  description,
  keywords,
  image,
  noindex = false,
}: SEOHeadProps) => {
  const { language } = useLanguage();
  const location = useLocation();
  
  // Base URL - TODO: Move to environment variable
  const baseUrl = "https://maktabatlfokara.194.163.143.60.sslip.io";
  const currentUrl = `${baseUrl}${location.pathname}`;
  
  // Default metadata based on language
  const defaultMetadata = {
    ar: {
      title: "مكتبة في أكادير — كتب بأسعار مناسبة وتوصيل لكل المدن",
      description: "اكتشف أحدث الإصدارات والكتب المدرسية والروايات بأسعار مناسبة في أكادير مع خدمة توصيل سريعة إلى جميع مدن المغرب",
      keywords: "مكتبة أكادير, كتب أكادير, librairie agadir, كتب بأسعار مناسبة, توصيل كتب المغرب, روايات أكادير, مكتبة الفقراء, كتب توصيل, مكتبة المغرب",
    },
    fr: {
      title: "Librairie à Agadir — Livres pas chers avec livraison partout au Maroc",
      description: "Nouveautés, scolaires et romans à prix abordables à Agadir, avec livraison rapide vers toutes les villes du Maroc",
      keywords: "librairie agadir, livres pas chers agadir, fournitures scolaires agadir, livres d'occasion agadir, bookstore agadir",
    },
    en: {
      title: "Bookstore in Agadir — Affordable Books with Delivery Across Morocco",
      description: "Discover the latest releases, textbooks, and novels at affordable prices in Agadir with fast delivery to all cities in Morocco",
      keywords: "bookstore agadir, books agadir, cheap books morocco, delivery books morocco",
    },
  };

  const meta = defaultMetadata[language];
  const finalTitle = title || meta.title;
  const finalDescription = description || meta.description;
  const finalKeywords = keywords || meta.keywords;
  const finalImage = image || `${baseUrl}/maktabat_alfokara.svg`;

  // Hreflang URLs
  const hreflangUrls = {
    "ar-MA": `${baseUrl}${location.pathname}`,
    "fr-MA": `${baseUrl}${location.pathname}`,
    "en": `${baseUrl}${location.pathname}`,
    "x-default": `${baseUrl}${location.pathname}`,
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Hreflang */}
      {Object.entries(hreflangUrls).map(([lang, url]) => (
        <link key={lang} rel="alternate" hreflang={lang} href={url} />
      ))}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={language === "ar" ? "ar_MA" : language === "fr" ? "fr_MA" : "en_US"} />
      {language === "ar" && <meta property="og:locale:alternate" content="fr_MA" />}
      {language === "fr" && <meta property="og:locale:alternate" content="ar_MA" />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
    </Helmet>
  );
};
