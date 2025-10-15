import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.ar;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage, default to Arabic
    const savedLang = localStorage.getItem('bookstore-language') as Language;
    return savedLang && ['ar', 'fr', 'en'].includes(savedLang) ? savedLang : 'ar';
  });

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('bookstore-language', language);
  }, [language]);

  // Determine text direction based on language
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    dir,
  };

  return (
    <LanguageContext.Provider value={value}>
      <div dir={dir} lang={language}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
