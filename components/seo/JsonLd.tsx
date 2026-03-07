export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://bantuancode.com/#organization",
    name: "Bantuancode",
    url: "https://bantuancode.com",
    logo: {
      "@type": "ImageObject",
      url: "https://bantuancode.com/images/logo.png",
      width: 512,
      height: 512,
    },
    description:
      "Jasa bantuan tugas coding dan pembuatan aplikasi profesional untuk mahasiswa IT Indonesia. Spesialis web, mobile, machine learning, cybersecurity, dan IoT.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-851-8238-0899",
      contactType: "customer service",
      availableLanguage: "Indonesian",
      contactOption: "TollFree",
    },
    sameAs: [
      "https://instagram.com/bantuancode",
      "https://wa.me/6285182380899",
    ],
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "Machine Learning",
      "Data Science",
      "Cybersecurity",
      "React",
      "Next.js",
      "Laravel",
      "Flutter",
      "Python",
    ],
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

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://bantuancode.com/#website",
    name: "Bantuancode",
    url: "https://bantuancode.com",
    description:
      "Jasa bantuan tugas coding dan pembuatan aplikasi untuk mahasiswa IT Indonesia.",
    inLanguage: "id-ID",
    publisher: {
      "@id": "https://bantuancode.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://bantuancode.com/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bantuancode",
    description:
      "Jasa pembuatan tugas coding mahasiswa: web, mobile, machine learning, cybersecurity, IoT.",
    url: "https://bantuancode.com",
    logo: "https://bantuancode.com/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-851-8238-0899",
      contactType: "customer service",
      availableLanguage: "Indonesian",
    },
    sameAs: [
      "https://instagram.com/bantuancode",
      "https://wa.me/6285182380899",
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
        url: "https://bantuancode.com/images/logo.png",
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

export function BreadcrumbListJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
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
