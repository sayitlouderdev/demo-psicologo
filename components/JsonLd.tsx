import { DOCTOR } from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MedicalBusiness"],
        "@id": "#business",
        name: DOCTOR.studio,
        description:
          "Centro de psicoterapia basada en evidencia en Mérida, Yucatán. Especialistas en ansiedad, depresión, ataques de pánico y terapia de pareja.",
        telephone: DOCTOR.phone,
        email: DOCTOR.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${DOCTOR.address.street}, ${DOCTOR.address.colony}`,
          addressLocality: "Mérida",
          addressRegion: "Yucatán",
          postalCode: "97000",
          addressCountry: "MX",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "14:00",
          },
        ],
        priceRange: "$$",
        areaServed: ["Mérida", "Yucatán", "México"],
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DOCTOR.address.full)}`,
      },
      {
        "@type": "Person",
        "@id": "#doctor",
        name: DOCTOR.name,
        jobTitle: DOCTOR.title,
        worksFor: { "@id": "#business" },
        knowsAbout: DOCTOR.specialties,
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Cédula profesional",
          identifier: DOCTOR.license,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
