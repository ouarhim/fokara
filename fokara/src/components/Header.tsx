import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";

const languageNames: Record<Language, string> = {
  ar: "العربية",
  fr: "Français",
  en: "English",
};

export const Header = () => {
  const { language, setLanguage, t, dir } = useLanguage();

  const toggleLanguage = () => {
    const langs: Language[] = ["ar", "fr", "en"];
    const currentIndex = langs.indexOf(language);
    const nextIndex = (currentIndex + 1) % langs.length;
    setLanguage(langs[nextIndex]);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#60d8f4]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[#60d8f4]/70">
      <div className="container flex h-16 items-center justify-between px-4" dir={dir}>
        <div className="flex items-center gap-2">
          <img src="/maktabat_alfokara.svg" alt="مكتبة الفقراء أكادير" className="w-6 h-6" />
          <span className="font-bold text-lg text-foreground">{t.brandName}</span>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={toggleLanguage}
          className="gap-2"
        >
          <Languages className="w-4 h-4" />
          <span className="text-sm">{languageNames[language]}</span>
        </Button>
      </div>
    </header>
  );
};
