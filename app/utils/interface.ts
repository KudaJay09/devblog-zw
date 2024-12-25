export interface Post {
  title: string;
  slug: { current: string };
  description: string;
  currentSlug: string;
  publishedAt: string;
  _id: string;
  content: any;
  thumbnail: any;
  tag: Array<tag>;
}

export interface tag {
  name: string;
  slug: { current: string };
  _id: string;
  postCount?: number;
}
