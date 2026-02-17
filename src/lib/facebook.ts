interface FacebookReview {
  created_time: string;
  recommendation_type?: string;
  review_text?: string;
  reviewer: {
    name: string;
    id: string;
  };
}

interface FacebookReviewsResponse {
  data: FacebookReview[];
  paging?: {
    cursors: { before: string; after: string };
    next?: string;
  };
}

export interface TestimonialItem {
  name: string;
  initials: string;
  role: string;
  quote: string;
  rating?: number;
}

export async function fetchFacebookReviews(limit = 3): Promise<TestimonialItem[] | null> {
  const token = import.meta.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  const pageId = import.meta.env.FACEBOOK_PAGE_ID;

  if (!token || !pageId) {
    console.warn('[Facebook] Missing FACEBOOK_PAGE_ACCESS_TOKEN or FACEBOOK_PAGE_ID, using static fallback');
    return null;
  }

  try {
    const fields = 'created_time,recommendation_type,review_text,reviewer';
    const fetchLimit = limit * 3;
    const url = `https://graph.facebook.com/v21.0/${pageId}/ratings?fields=${fields}&limit=${fetchLimit}&access_token=${token}`;

    const response = await fetch(url);
    if (!response.ok) {
      console.error(`[Facebook] API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const json: FacebookReviewsResponse = await response.json();

    // Only positive recommendations with review text
    const positiveWithText = json.data.filter(
      (r) => r.recommendation_type === 'positive' && r.review_text && r.review_text.trim().length > 0
    );
    const selected = positiveWithText.slice(0, limit);

    return selected.map((review) => {
      const name = review.reviewer.name;
      const nameParts = name.split(' ').filter(Boolean);
      const initials = nameParts.length >= 2
        ? (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
        : name.substring(0, 2).toUpperCase();

      return {
        name,
        initials,
        role: 'Verified Customer',
        quote: review.review_text!.trim(),
        rating: 5,
      };
    });
  } catch (error) {
    console.error('[Facebook] Fetch failed:', error);
    return null;
  }
}
