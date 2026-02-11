export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bantuancode",
    description:
      "Jasa pembuatan tugas coding mahasiswa: web, mobile, machine learning, cybersecurity, IoT.",
    url: "https://bantuancode.com",
    logo: "https://bantuancode.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-812-3456-7890",
      contactType: "customer service",
      availableLanguage: "Indonesian",
    },
    sameAs: [
      "https://instagram.com/bantuancode",
      "https://wa.me/6281234567890",
    ],
    priceRange: "Rp 200.000 - Rp 500.000",
    openingHours: "Mo-Su 08:00-22:00",
    serviceArea: {
      "@type": "Country",
      name: "Indonesia",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  price,
}: {
  name: string;
  description: string;
  url: string;
  price: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Bantuancode",
      url: "https://bantuancode.com",
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "IDR",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BlogPostJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    image: image || "https://bantuancode.com/og-image.png",
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Bantuancode",
      logo: {
        "@type": "ImageObject",
        url: "https://bantuancode.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
