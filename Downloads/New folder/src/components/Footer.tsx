import { BookOpen, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t, dir } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50" dir={dir}>
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
              <span className="font-bold text-lg">{t.brandName}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#catalog" className="hover:text-accent transition-colors">
                  {t.footer.catalogLink}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition-colors">
                  {t.footer.faqLink}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  {t.footer.contactLink}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t.footer.followUs}</h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/maktabat_lfokara/"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {t.footer.instagramFollowers}
            </p>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} {t.brandName} Agadir. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
