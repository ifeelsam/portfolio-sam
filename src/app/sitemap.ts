import type { MetadataRoute } from "next";
import { allProjects, projectPath, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const projectRoutes: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${site.url}${projectPath(project.slug)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: project.status === "building" ? 0.8 : 0.7,
    ...(project.logo ? { images: [`${site.url}${project.logo}`] } : {}),
  }));

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectRoutes,
  ];
}
