export type RoomType = "Single" | "Double" | "Dormitory";

export interface Room {
  id: string;
  photos: string[];
  price: number;
  location: string;
  area: string;
  roomType: RoomType;
  amenities: string[];
  description: string;
  taggedBy: string;
  createdAt: Date;
}

export interface Filters {
  location: string;
  maxPrice: number;
  roomTypes: RoomType[];
}
