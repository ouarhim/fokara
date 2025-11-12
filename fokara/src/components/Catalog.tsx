import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";
import book4 from "@/assets/book-4.jpg";
import book5 from "@/assets/book-5.jpg";
import book6 from "@/assets/book-6.jpg";

const books = [
  { id: 1, image: book1, title: "رواية عربية حديثة" },
  { id: 2, image: book2, title: "رواية خيالية" },
  { id: 3, image: book3, title: "رواية رومانسية" },
  { id: 4, image: book4, title: "رواية غموض وإثارة" },
  { id: 5, image: book5, title: "كتاب تطوير الذات" },
  { id: 6, image: book6, title: "أدب كلاسيكي" },
];

export const Catalog = () => {
  const { t, dir } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30" dir={dir}>
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.catalog.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.catalog.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto">
          {books.map((book, index) => (
            <Card 
              key={book.id} 
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 bg-card animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={300}
                  height={400}
                />
              </div>
              <div className="p-3">
                <div className="h-4 bg-muted rounded-md animate-pulse group-hover:bg-accent/20 transition-colors" />
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          {t.catalog.disclaimer}
        </p>
      </div>
    </section>
  );
};
