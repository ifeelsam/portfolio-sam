import { allProjects, experiences, projectPath, site, stack } from "@/lib/site";

export function JsonLd() {
  const personId = `${site.url}/#person`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        alternateName: site.handle,
        url: site.url,
        jobTitle: site.title,
        description:
          "Full-stack Solana engineer building Mortem — agent trading observability. Arcium Fellow and 2× Superteam grant recipient.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        knowsAbout: [
          ...stack,
          "Solana",
          "Privacy-preserving finance",
          "AI agent observability",
          "Smart contracts",
        ],
        sameAs: [site.github, site.x],
        worksFor: {
          "@type": "Organization",
          name: site.building.label,
          url: site.building.href,
        },
        alumniOf: experiences.map((exp) => ({
          "@type": "Organization",
          name: exp.org,
          ...(exp.href ? { url: exp.href } : {}),
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: "Sam — ifeelsam",
        publisher: { "@id": personId },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profilepage`,
        url: site.url,
        name: "Sam (@ifeelsam) — Full-stack Solana Engineer & Builder",
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        hasPart: allProjects.map((project) => ({
          "@type": "SoftwareSourceCode",
          name: project.name,
          description: project.description,
          url: `${site.url}${projectPath(project.slug)}`,
          codeRepository: project.href,
          ...(project.demo ? { sameAs: project.demo } : {}),
          ...(project.language
            ? { programmingLanguage: project.language }
            : {}),
          author: { "@id": personId },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Schema.org JSON-LD must be serialized into the document for crawlers/LLMs.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
