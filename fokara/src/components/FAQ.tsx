import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StructuredData } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";

export const FAQ = () => {
  const { t, dir } = useLanguage();
  
  // Prepare FAQ data for structured data
  const faqData = t.faq.questions.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30" dir={dir}>
      <StructuredData type="FAQPage" data={faqData} />
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.faq.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t.faq.subtitle}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {t.faq.questions.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className={`${dir === 'rtl' ? 'text-right' : 'text-left'} text-base md:text-lg font-semibold hover:text-accent py-4`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              {t.faq.additionalQuestion}
            </p>
            <p className="text-sm text-muted-foreground">
              {t.faq.additionalInfo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
