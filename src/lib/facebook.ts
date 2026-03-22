import reviews from '../data/reviews.json';

export interface TestimonialItem {
  name: string;
  initials: string;
  role: string;
  quote: string;
  rating?: number;
}

export function fetchFacebookReviews(limit = 3): TestimonialItem[] {
  return reviews.slice(0, limit).map((review) => {
    const nameParts = review.name.split(' ').filter(Boolean);
    const initials = nameParts.length >= 2
      ? (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
      : review.name.substring(0, 2).toUpperCase();

    return {
      name: review.name,
      initials,
      role: 'Facebook Review',
      quote: review.quote,
      rating: 5,
    };
  });
}
