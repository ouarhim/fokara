import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactProps {
  onWhatsAppClick: () => void;
}

export const Contact = ({ onWhatsAppClick }: ContactProps) => {
  const { t, dir } = useLanguage();

  return (
    <section className="py-16 md:py-24" dir={dir}>
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.contact.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Location Card */}
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border/50">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t.contact.locationTitle}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {t.contact.locationAddress}
                  </p>
                </div>
              </div>
            </Card>

            {/* WhatsApp Card */}
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-accent/5">
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{t.contact.whatsappTitle}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t.contact.whatsappDescription}
                  </p>
                  <Button 
                    onClick={onWhatsAppClick}
                    variant="default"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
                  >
                    <MessageCircle className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} w-4 h-4`} />
                    {t.contact.whatsappButton}
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              {t.contact.quickInfo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
