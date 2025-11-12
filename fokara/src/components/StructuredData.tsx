import { useLanguage } from "@/contexts/LanguageContext";

interface LocalBusinessData {
  name: string;
  description: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: string;
    longitude: string;
  };
  openingHours: string[];
  sameAs: string[];
}

interface FAQData {
  question: string;
  answer: string;
}

interface StructuredDataProps {
  type: "LocalBusiness" | "FAQPage" | "BreadcrumbList";
  data?: LocalBusinessData | FAQData[] | any;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  const { language } = useLanguage();
  const baseUrl = "https://maktabatlfokara.194.163.143.60.sslip.io";

  const getLocalBusinessSchema = (businessData: LocalBusinessData) => {
    return {
      "@context": "https://schema.org",
      "@type": "BookStore",
      "name": businessData.name,
      "alternateName": language === "ar" 
        ? ["Librairie Agadir", "Bookstore Agadir", "مكتبة أكادير"]
        : ["مكتبة الفقراء أكادير", "Bookstore Agadir", "مكتبة أكادير"],
      "description": businessData.description,
      "url": baseUrl,
      "telephone": businessData.telephone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessData.address.streetAddress,
        "addressLocality": businessData.address.addressLocality,
        "addressRegion": businessData.address.addressRegion,
        "postalCode": businessData.address.postalCode,
        "addressCountry": businessData.address.addressCountry,
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": businessData.geo.latitude,
        "longitude": businessData.geo.longitude,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00",
        },
      ],
      "areaServed": {
        "@type": "Country",
        "name": "المغرب",
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": businessData.geo.latitude,
          "longitude": businessData.geo.longitude,
        },
        "geoRadius": "500000",
      },
      "sameAs": businessData.sameAs,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": businessData.telephone,
        "contactType": "customer service",
        "availableLanguage": ["Arabic", "French", "English"],
        "areaServed": "MA",
      },
    };
  };

  const getFAQSchema = (faqData: FAQData[]) => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    };
  };

  const getBreadcrumbSchema = (items: any[]) => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `${baseUrl}${item.url}`,
      })),
    };
  };

  const getSchema = () => {
    switch (type) {
      case "LocalBusiness":
        return getLocalBusinessSchema(data as LocalBusinessData);
      case "FAQPage":
        return getFAQSchema(data as FAQData[]);
      case "BreadcrumbList":
        return getBreadcrumbSchema(data);
      default:
        return null;
    }
  };

  const schema = getSchema();
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
