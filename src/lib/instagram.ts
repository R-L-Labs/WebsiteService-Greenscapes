import fs from 'node:fs';
import path from 'node:path';

interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
}

interface InstagramMediaResponse {
  data: InstagramMedia[];
  paging?: {
    cursors: { before: string; after: string };
    next?: string;
  };
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  gradient: string;
  imageUrl?: string;
  permalink?: string;
}

function parseCaption(caption?: string): { title: string; category: string; description: string } {
  if (!caption || caption.trim().length === 0) {
    return {
      title: 'Recent Project',
      category: 'Portfolio',
      description: 'Check out our latest work on Instagram.',
    };
  }

  const lines = caption.split('\n').filter((l) => l.trim().length > 0);
  const firstLine = lines[0].replace(/#\w+/g, '').trim();
  const rest = lines.slice(1).join(' ').trim();

  // Extract first hashtag as category
  const hashtags = caption.match(/#(\w+)/g) || [];
  const category = hashtags.length > 0
    ? hashtags[0].replace('#', '').replace(/([A-Z])/g, ' $1').trim()
    : 'Portfolio';

  const description = rest.replace(/#\w+/g, '').trim() || firstLine;

  return {
    title: firstLine.length > 60 ? firstLine.substring(0, 57) + '...' : firstLine || 'Recent Project',
    category: category.charAt(0).toUpperCase() + category.slice(1),
    description: description.length > 150 ? description.substring(0, 147) + '...' : description,
  };
}

export async function fetchInstagramProjects(limit = 6): Promise<ProjectItem[] | null> {
  const token = import.meta.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = import.meta.env.INSTAGRAM_USER_ID;

  if (!token || !userId) {
    console.warn('[Instagram] Missing INSTAGRAM_ACCESS_TOKEN or INSTAGRAM_USER_ID, using static fallback');
    return null;
  }

  try {
    const fields = 'id,caption,media_type,media_url,permalink,timestamp,like_count';
    const fetchLimit = limit * 2;
    const url = `https://graph.instagram.com/v21.0/${userId}/media?fields=${fields}&limit=${fetchLimit}&access_token=${token}`;

    const response = await fetch(url);
    if (!response.ok) {
      console.error(`[Instagram] API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const json: InstagramMediaResponse = await response.json();

    // Only images and carousels (skip video)
    const imageMedia = json.data.filter(
      (m) => m.media_type === 'IMAGE' || m.media_type === 'CAROUSEL_ALBUM'
    );
    const selected = imageMedia.slice(0, limit);

    // Download images locally to avoid Instagram's expiring CDN URLs
    const outputDir = path.resolve('public/instagram');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const projects: ProjectItem[] = await Promise.all(
      selected.map(async (media) => {
        const localFilename = `${media.id}.jpg`;
        const localPath = path.join(outputDir, localFilename);

        if (!fs.existsSync(localPath)) {
          try {
            const imgResponse = await fetch(media.media_url);
            if (imgResponse.ok) {
              const buffer = Buffer.from(await imgResponse.arrayBuffer());
              fs.writeFileSync(localPath, buffer);
            }
          } catch (dlError) {
            console.error(`[Instagram] Failed to download image ${media.id}:`, dlError);
          }
        }

        const { title, description, category } = parseCaption(media.caption);

        return {
          title,
          category,
          description,
          gradient: 'from-primary/30 to-primary/10',
          imageUrl: fs.existsSync(localPath) ? `/instagram/${localFilename}` : undefined,
          permalink: media.permalink,
        };
      })
    );

    return projects;
  } catch (error) {
    console.error('[Instagram] Fetch failed:', error);
    return null;
  }
}
