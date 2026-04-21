export type Movie = {
    id: number;
    name: string;
    slug: string;
    category: string;
    video_url: string;
    thumbnail: string;
    rating: number;
    is_featured: boolean;
    // [key: string]: unknown;
};
