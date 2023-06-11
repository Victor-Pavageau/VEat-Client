export const tags = [
  "Vegan",
  "Halal",
  "Gluten free",
  "Fast food",
  "Pizza",
  "Italian",
  "French",
  "Japanese",
  "Chinese",
  "American",
  "Asian",
  "Snacks",
  "Indian",
  "Moroccan",
  "Thai",
  "Vietnamese",
  "Luxury",
  "Cambodgian",
  "Seafood",
  "Burger",
  "Sushi",
  "Vegetarian",
] as const;

export type Tag = (typeof tags)[number];

export type Article = {
  uid: string;
  name: string;
  isUnavailable: boolean;
  photo: string;
  description: string;
  price: number | undefined;
  category: string; // Entrée, Plats, Desserts, Boissons, ...
  tags: Tag[];
};

export type Menu = {
  uid: string;
  isUnavailable: boolean;
  name: string;
  photo: string;
  description: string;
  price: number;
  articles: Article[];
};
