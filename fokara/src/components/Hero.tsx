import { Button } from "@/components/ui/button";
import { MessageCircle, Users, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-books.jpg";

interface HeroProps {
  onWhatsAppClick: () => void;
}

export const Hero = ({ onWhatsAppClick }: HeroProps) => {
  const { t, dir } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt={`${t.brandName} - ${t.hero.mainHeading1}`}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className={`absolute inset-0 bg-gradient-to-l ${dir === 'rtl' ? 'l' : 'r'} from-background/95 via-background/85 to-background/60`} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-16 md:py-24" dir={dir}>
        <div className={`max-w-2xl ${dir === 'rtl' ? 'mr-auto' : 'ml-auto'}`}>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-foreground">{t.hero.trustBadge1}</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-foreground">{t.hero.trustBadge2}</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <span className="text-balance">{t.hero.mainHeading1}</span>
            <br />
            <span className="text-accent">{t.hero.mainHeading2}</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {t.hero.subheading}
          </p>

          {/* CTA Button */}
          <Button 
            size="lg"
            onClick={onWhatsAppClick}
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300 text-lg px-8 py-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 group"
          >
            <MessageCircle className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} w-5 h-5 group-hover:scale-110 transition-transform`} />
            {t.hero.ctaButton}
          </Button>

          {/* Benefits list */}
          <ul className="mt-12 space-y-4 text-foreground/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span className="text-base md:text-lg">{t.hero.benefit1}</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span className="text-base md:text-lg">{t.hero.benefit2}</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span className="text-base md:text-lg">{t.hero.benefit3}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
