import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { StructuredData } from "./StructuredData";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const { language, dir } = useLanguage();
  
  const allItems = [
    { name: language === "ar" ? "الرئيسية" : language === "fr" ? "Accueil" : "Home", url: "/" },
    ...items,
  ];

  // Generate breadcrumb schema
  const breadcrumbData = allItems.map((item) => ({
    name: item.name,
    url: item.url,
  }));

  return (
    <>
      <StructuredData type="BreadcrumbList" data={breadcrumbData} />
      <nav
        className="flex items-center space-x-2 text-sm text-muted-foreground mb-4"
        aria-label="Breadcrumb"
        dir={dir}
      >
        {allItems.map((item, index) => (
          <div key={item.url} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
            )}
            {index === allItems.length - 1 ? (
              <span className="text-foreground font-medium">{item.name}</span>
            ) : (
              <Link
                to={item.url}
                className="hover:text-foreground transition-colors"
              >
                {index === 0 ? (
                  <Home className="w-4 h-4" />
                ) : (
                  item.name
                )}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
};
