export type Language = "ar" | "fr" | "en";

export interface Translations {
  // Header
  brandName: string;
  
  // Hero Section
  hero: {
    trustBadge1: string;
    trustBadge2: string;
    mainHeading1: string;
    mainHeading2: string;
    subheading: string;
    ctaButton: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
  };
  
  // Catalog Section
  catalog: {
    title: string;
    subtitle: string;
    disclaimer: string;
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    locationTitle: string;
    locationAddress: string;
    whatsappTitle: string;
    whatsappDescription: string;
    whatsappButton: string;
    quickInfo: string;
  };
  
  // FAQ Section
  faq: {
    title: string;
    subtitle: string;
    questions: {
      question: string;
      answer: string;
    }[];
    additionalQuestion: string;
    additionalInfo: string;
  };
  
  // Footer
  footer: {
    description: string;
    quickLinks: string;
    catalogLink: string;
    faqLink: string;
    contactLink: string;
    followUs: string;
    instagramFollowers: string;
    copyright: string;
  };
  
  // Common
  common: {
    whatsappMessage: string;
    toastTitle: string;
    toastDescription: string;
  };
}

export const translations: Record<Language, Translations> = {
  ar: {
    brandName: "مكتبة الفقراء",
    hero: {
      trustBadge1: "7000+ قارئ يثقون بنا",
      trustBadge2: "15K+ متابع",
      mainHeading1: "كتب بأسعار مناسبة",
      mainHeading2: "+ توصيل لجميع المدن",
      subheading: "اكتشف أحدث الروايات والكتب مع خدمة توصيل سريعة لكل المغرب",
      ctaButton: "اطلب على واتساب",
      benefit1: "أسعار في المتناول لكل عشاق القراءة",
      benefit2: "توصيل لجميع المدن عبر واتساب",
      benefit3: "توصيات سريعة للكتب المناسبة لك",
    },
    catalog: {
      title: "الأكثر طلبًا هذا الأسبوع",
      subtitle: "مجموعة مختارة من أحدث وأفضل الكتب والروايات",
      disclaimer: "* الكتب المعروضة للتوضيح فقط - تواصل معنا عبر واتساب لمعرفة الكتب المتوفرة حاليًا",
    },
    contact: {
      title: "الموقع والتواصل",
      subtitle: "نحن هنا لخدمتك - تواصل معنا بسهولة",
      locationTitle: "موقعنا",
      locationAddress: "Souk Sidi Youssef\nأكادير، المغرب",
      whatsappTitle: "واتساب",
      whatsappDescription: "تواصل معنا مباشرة للاستفسارات والطلبات",
      whatsappButton: "تواصل عبر واتساب",
      quickInfo: "نستقبل طلباتكم واستفساراتكم يوميًا | نرد خلال دقائق",
    },
    faq: {
      title: "أسئلة شائعة",
      subtitle: "إجابات سريعة على أكثر الأسئلة شيوعًا",
      questions: [
        {
          question: "كيف أطلب كتابًا؟",
          answer: "ببساطة انقر على زر 'اطلب على واتساب' وأرسل لنا اسم الكتاب الذي تريده. سنرد عليك فورًا بالسعر والتوفر.",
        },
        {
          question: "هل تقومون بالتوصيل لجميع المدن؟",
          answer: "نعم، نوفر خدمة التوصيل لجميع مدن المغرب. نستخدم شركات شحن موثوقة لضمان وصول كتبك بأمان.",
        },
        {
          question: "كم تستغرق مدة التوصيل؟",
          answer: "عادة ما يستغرق التوصيل من 2 إلى 5 أيام عمل حسب المدينة. سنخبرك بالمدة الدقيقة عند تأكيد الطلب.",
        },
        {
          question: "هل الأسعار شاملة للتوصيل؟",
          answer: "الأسعار المعروضة للكتب فقط. تكلفة التوصيل تُحسب حسب المدينة وسنوضحها لك قبل تأكيد الطلب.",
        },
        {
          question: "ماذا إذا لم يكن الكتاب متوفرًا؟",
          answer: "إذا لم يكن الكتاب متوفرًا حاليًا، سنخبرك بذلك ونقترح عليك بدائل مشابهة أو نوفره لك خلال فترة قصيرة.",
        },
        {
          question: "هل يمكنني طلب كتب بلغات أخرى؟",
          answer: "نعم، نوفر كتبًا بالعربية والفرنسية والإنجليزية. اذكر لنا اللغة المطلوبة عند الطلب.",
        },
      ],
      additionalQuestion: "لديك سؤال آخر؟",
      additionalInfo: "تواصل معنا مباشرة عبر واتساب وسنجيب على جميع استفساراتك",
    },
    footer: {
      description: "نوفر لك أفضل الكتب والروايات بأسعار في المتناول مع خدمة توصيل سريعة لجميع مدن المغرب",
      quickLinks: "روابط سريعة",
      catalogLink: "الكتب المتوفرة",
      faqLink: "أسئلة شائعة",
      contactLink: "اتصل بنا",
      followUs: "تابعنا",
      instagramFollowers: "15K+ متابع على إنستغرام",
      copyright: "جميع الحقوق محفوظة.",
    },
    common: {
      whatsappMessage: "السلام عليكم، أريد الاستفسار عن الكتب المتوفرة",
      toastTitle: "جاري فتح واتساب",
      toastDescription: "سيتم توجيهك إلى محادثة واتساب",
    },
  },
  fr: {
    brandName: "Librairie des Pauvres",
    hero: {
      trustBadge1: "7000+ lecteurs nous font confiance",
      trustBadge2: "15K+ abonnés",
      mainHeading1: "Livres à prix abordables",
      mainHeading2: "+ livraison dans toutes les villes",
      subheading: "Découvrez les derniers romans et livres avec un service de livraison rapide pour tout le Maroc",
      ctaButton: "Commander sur WhatsApp",
      benefit1: "Prix abordables pour tous les amoureux de la lecture",
      benefit2: "Livraison dans toutes les villes via WhatsApp",
      benefit3: "Recommandations rapides pour les livres qui vous conviennent",
    },
    catalog: {
      title: "Les plus demandés cette semaine",
      subtitle: "Une sélection des derniers et meilleurs livres et romans",
      disclaimer: "* Les livres affichés sont à titre d'illustration seulement - contactez-nous via WhatsApp pour connaître les livres actuellement disponibles",
    },
    contact: {
      title: "Localisation et Contact",
      subtitle: "Nous sommes là pour vous servir - contactez-nous facilement",
      locationTitle: "Notre emplacement",
      locationAddress: "Souk Sidi Youssef\nAgadir, Maroc",
      whatsappTitle: "WhatsApp",
      whatsappDescription: "Contactez-nous directement pour les questions et commandes",
      whatsappButton: "Contacter via WhatsApp",
      quickInfo: "Nous recevons vos commandes et questions quotidiennement | Nous répondons en quelques minutes",
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Réponses rapides aux questions les plus courantes",
      questions: [
        {
          question: "Comment commander un livre ?",
          answer: "Simplement cliquez sur le bouton 'Commander sur WhatsApp' et envoyez-nous le nom du livre que vous voulez. Nous vous répondrons immédiatement avec le prix et la disponibilité.",
        },
        {
          question: "Livrez-vous dans toutes les villes ?",
          answer: "Oui, nous offrons un service de livraison dans toutes les villes du Maroc. Nous utilisons des entreprises de transport fiables pour garantir que vos livres arrivent en sécurité.",
        },
        {
          question: "Combien de temps prend la livraison ?",
          answer: "La livraison prend généralement de 2 à 5 jours ouvrables selon la ville. Nous vous informerons de la durée exacte lors de la confirmation de la commande.",
        },
        {
          question: "Les prix incluent-ils la livraison ?",
          answer: "Les prix affichés sont pour les livres seulement. Le coût de livraison est calculé selon la ville et nous vous l'expliquerons avant de confirmer la commande.",
        },
        {
          question: "Que faire si le livre n'est pas disponible ?",
          answer: "Si le livre n'est pas disponible actuellement, nous vous en informerons et vous proposerons des alternatives similaires ou nous vous le fournirons dans un court délai.",
        },
        {
          question: "Puis-je commander des livres dans d'autres langues ?",
          answer: "Oui, nous fournissons des livres en arabe, français et anglais. Mentionnez-nous la langue souhaitée lors de la commande.",
        },
      ],
      additionalQuestion: "Vous avez une autre question ?",
      additionalInfo: "Contactez-nous directement via WhatsApp et nous répondrons à toutes vos questions",
    },
    footer: {
      description: "Nous vous offrons les meilleurs livres et romans à prix abordables avec un service de livraison rapide dans toutes les villes du Maroc",
      quickLinks: "Liens rapides",
      catalogLink: "Livres disponibles",
      faqLink: "Questions fréquentes",
      contactLink: "Nous contacter",
      followUs: "Suivez-nous",
      instagramFollowers: "15K+ abonnés sur Instagram",
      copyright: "Tous droits réservés.",
    },
    common: {
      whatsappMessage: "Bonjour, je voudrais me renseigner sur les livres disponibles",
      toastTitle: "Ouverture de WhatsApp",
      toastDescription: "Vous allez être redirigé vers une conversation WhatsApp",
    },
  },
  en: {
    brandName: "Poor's Library",
    hero: {
      trustBadge1: "7000+ readers trust us",
      trustBadge2: "15K+ followers",
      mainHeading1: "Books at affordable prices",
      mainHeading2: "+ delivery to all cities",
      subheading: "Discover the latest novels and books with fast delivery service for all of Morocco",
      ctaButton: "Order on WhatsApp",
      benefit1: "Affordable prices for all book lovers",
      benefit2: "Delivery to all cities via WhatsApp",
      benefit3: "Quick recommendations for books that suit you",
    },
    catalog: {
      title: "Most requested this week",
      subtitle: "A selection of the latest and best books and novels",
      disclaimer: "* Books shown are for illustration only - contact us via WhatsApp to know currently available books",
    },
    contact: {
      title: "Location and Contact",
      subtitle: "We are here to serve you - contact us easily",
      locationTitle: "Our location",
      locationAddress: "Souk Sidi Youssef\nAgadir, Morocco",
      whatsappTitle: "WhatsApp",
      whatsappDescription: "Contact us directly for inquiries and orders",
      whatsappButton: "Contact via WhatsApp",
      quickInfo: "We receive your orders and inquiries daily | We respond within minutes",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Quick answers to the most common questions",
      questions: [
        {
          question: "How do I order a book?",
          answer: "Simply click the 'Order on WhatsApp' button and send us the name of the book you want. We'll respond immediately with the price and availability.",
        },
        {
          question: "Do you deliver to all cities?",
          answer: "Yes, we provide delivery service to all cities in Morocco. We use reliable shipping companies to ensure your books arrive safely.",
        },
        {
          question: "How long does delivery take?",
          answer: "Delivery usually takes 2 to 5 business days depending on the city. We'll tell you the exact duration when confirming the order.",
        },
        {
          question: "Do prices include delivery?",
          answer: "Prices shown are for books only. Delivery cost is calculated according to the city and we'll explain it to you before confirming the order.",
        },
        {
          question: "What if the book is not available?",
          answer: "If the book is not currently available, we'll inform you and suggest similar alternatives or provide it to you within a short period.",
        },
        {
          question: "Can I order books in other languages?",
          answer: "Yes, we provide books in Arabic, French and English. Mention the desired language when ordering.",
        },
      ],
      additionalQuestion: "Have another question?",
      additionalInfo: "Contact us directly via WhatsApp and we'll answer all your questions",
    },
    footer: {
      description: "We offer you the best books and novels at affordable prices with fast delivery service to all cities in Morocco",
      quickLinks: "Quick Links",
      catalogLink: "Available Books",
      faqLink: "FAQ",
      contactLink: "Contact Us",
      followUs: "Follow Us",
      instagramFollowers: "15K+ followers on Instagram",
      copyright: "All rights reserved.",
    },
    common: {
      whatsappMessage: "Hello, I would like to inquire about available books",
      toastTitle: "Opening WhatsApp",
      toastDescription: "You will be redirected to a WhatsApp conversation",
    },
  },
};
