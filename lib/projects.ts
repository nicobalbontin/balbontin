export interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailType: "image" | "video";
  color: string;
}

export const projects: Project[] = [
  {
    slug: "heat-transformers",
    title: "HeatTransformers",
    description: "Simplifying the buying process of heat pumps",
    thumbnail: "/assets/images/672c9e19d79b3d7499002097_HT.png",
    thumbnailType: "image",
    color: "#fafafa",
  },
  {
    slug: "statie",
    title: "StatieApp",
    description: "Making recycling easier for users in a rush",
    thumbnail: "/assets/images/672c9e19b6aa27a45f0703b6_Statieapp.png",
    thumbnailType: "image",
    color: "#fafafa",
  },
  {
    slug: "neoke",
    title: "Neoke",
    description: "Connecting your personal info with AR",
    thumbnail:
      "/assets/videos/67250045a34b9360992cb365_672c9ea335d680cc0aabef90_Neokethumbnail-transcode.mp4",
    thumbnailType: "video",
    color: "#fafafa",
  },
  {
    slug: "here-now",
    title: "Here & Now",
    description: "Tracking your mental health with an app",
    thumbnail:
      "/assets/videos/67250045a34b9360992cb365_672ca17f5337633f5bf34dc6_Hereandnow_thumbnail-transcode.mp4",
    thumbnailType: "video",
    color: "#fafafa",
  },
];

export function getNextProject(currentSlug: string): Project {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  return projects[(idx + 1) % projects.length];
}
