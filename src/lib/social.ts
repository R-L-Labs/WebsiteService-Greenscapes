import { fetchInstagramProjects, type ProjectItem } from './instagram';
import { fetchFacebookReviews, type TestimonialItem } from './facebook';

// In-memory build-time cache (lives for duration of `astro build`)
let cachedProjects: ProjectItem[] | null | undefined = undefined;
export async function getSocialProjects(limit = 6): Promise<ProjectItem[] | null> {
  if (cachedProjects !== undefined) return cachedProjects;
  cachedProjects = await fetchInstagramProjects(limit);
  return cachedProjects;
}

export function getSocialTestimonials(limit = 3): TestimonialItem[] {
  return fetchFacebookReviews(limit);
}

export type { ProjectItem } from './instagram';
export type { TestimonialItem } from './facebook';
