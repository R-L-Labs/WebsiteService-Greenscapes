import { fetchInstagramProjects, type ProjectItem } from './instagram';
import { fetchFacebookReviews, type TestimonialItem } from './facebook';

// In-memory build-time cache (lives for duration of `astro build`)
let cachedProjects: ProjectItem[] | null | undefined = undefined;
let cachedTestimonials: TestimonialItem[] | null | undefined = undefined;

export async function getSocialProjects(limit = 6): Promise<ProjectItem[] | null> {
  if (cachedProjects !== undefined) return cachedProjects;
  cachedProjects = await fetchInstagramProjects(limit);
  return cachedProjects;
}

export async function getSocialTestimonials(limit = 3): Promise<TestimonialItem[] | null> {
  if (cachedTestimonials !== undefined) return cachedTestimonials;
  cachedTestimonials = await fetchFacebookReviews(limit);
  return cachedTestimonials;
}

export type { ProjectItem } from './instagram';
export type { TestimonialItem } from './facebook';
