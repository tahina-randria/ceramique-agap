import { MetadataRoute } from "next";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";

const baseUrl = "https://ceramique-agap.vercel.app";

async function getActualites() {
  const query = groq`*[_type == "actualite" && (publie == true || !defined(publie))] | order(datePublication desc) {
    slug,
    datePublication
  }`;
  return client.fetch(query);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/musee`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/activites`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/association`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/actualites`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ceramique-en-fete`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Pages dynamiques des actualités
  const actualites = await getActualites();
  const actualitePages: MetadataRoute.Sitemap = actualites.map(
    (actu: { slug: { current: string }; datePublication: string }) => ({
      url: `${baseUrl}/actualites/${actu.slug.current}`,
      lastModified: new Date(actu.datePublication),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  return [...staticPages, ...actualitePages];
}
