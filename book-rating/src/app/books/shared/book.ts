export interface Book {
  isbn: string;
  title: string;
  description: string;
  rating: number;
  firstThubmnailUrl: string;
  thumbnails: Thumbnail[];
}

export interface Thumbnail {
  url: string;
  title: string;
}
