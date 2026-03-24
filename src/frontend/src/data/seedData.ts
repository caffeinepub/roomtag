import type { Room } from "../types";

export const SEED_ROOMS: Room[] = [
  {
    id: "1",
    photos: [
      "https://picsum.photos/seed/room1a/600/400",
      "https://picsum.photos/seed/room1b/600/400",
    ],
    price: 5500,
    location: "Koramangala",
    area: "Koramangala 5th Block, Bangalore",
    roomType: "Single",
    amenities: ["WiFi", "AC", "Attached Bathroom", "Laundry"],
    description:
      "Bright single room in a well-maintained hostel near Koramangala food street. 24/7 security, power backup, and a cheerful common area. Walking distance to multiple IT companies.",
    taggedBy: "Priya Sharma",
    createdAt: new Date("2026-03-10"),
  },
  {
    id: "2",
    photos: [
      "https://picsum.photos/seed/room2a/600/400",
      "https://picsum.photos/seed/room2b/600/400",
    ],
    price: 3500,
    location: "Indiranagar",
    area: "Indiranagar 100 Ft Road, Bangalore",
    roomType: "Double",
    amenities: ["WiFi", "Gym", "Meals Included", "CCTV"],
    description:
      "Affordable double-sharing room with a vibrant community of students. Located just 5 mins walk from Indiranagar metro. Monthly housekeeping and mess facility available.",
    taggedBy: "Arjun Menon",
    createdAt: new Date("2026-03-12"),
  },
  {
    id: "3",
    photos: [
      "https://picsum.photos/seed/room3a/600/400",
      "https://picsum.photos/seed/room3b/600/400",
      "https://picsum.photos/seed/room3c/600/400",
    ],
    price: 7800,
    location: "HSR Layout",
    area: "HSR Layout Sector 2, Bangalore",
    roomType: "Single",
    amenities: ["WiFi", "AC", "Attached Bathroom", "Fridge", "TV"],
    description:
      "Premium single room with high-speed fiber internet, perfect for working professionals. Fully furnished with study table, wardrobe, and ergonomic chair. Quiet neighborhood.",
    taggedBy: "Neha Kulkarni",
    createdAt: new Date("2026-03-14"),
  },
  {
    id: "4",
    photos: [
      "https://picsum.photos/seed/room4a/600/400",
      "https://picsum.photos/seed/room4b/600/400",
    ],
    price: 3000,
    location: "BTM Layout",
    area: "BTM Layout 2nd Stage, Bangalore",
    roomType: "Dormitory",
    amenities: ["WiFi", "CCTV", "Meals Included", "Laundry"],
    description:
      "Budget-friendly dormitory style hostel for students. 6-bed dorm with individual lockers and reading lights. Homely atmosphere with South Indian meals. Great for new students.",
    taggedBy: "Rahul Verma",
    createdAt: new Date("2026-03-15"),
  },
  {
    id: "5",
    photos: [
      "https://picsum.photos/seed/room5a/600/400",
      "https://picsum.photos/seed/room5b/600/400",
    ],
    price: 6200,
    location: "Marathahalli",
    area: "Marathahalli Bridge, Bangalore",
    roomType: "Double",
    amenities: ["WiFi", "AC", "Parking", "Gym", "CCTV"],
    description:
      "Modern double-sharing room near Marathahalli IT corridor. The hostel has a rooftop terrace and gaming lounge. Ideal for tech students at nearby colleges and companies.",
    taggedBy: "Divya Nair",
    createdAt: new Date("2026-03-17"),
  },
  {
    id: "6",
    photos: [
      "https://picsum.photos/seed/room6a/600/400",
      "https://picsum.photos/seed/room6b/600/400",
    ],
    price: 4800,
    location: "Electronic City",
    area: "Electronic City Phase 1, Bangalore",
    roomType: "Single",
    amenities: ["WiFi", "Meals Included", "AC", "Attached Bathroom"],
    description:
      "Cozy single room near Electronic City tech park. All-inclusive rent covers meals, cleaning, and electricity. Shuttle service to major tech parks. Safe and secure premises.",
    taggedBy: "Kiran Reddy",
    createdAt: new Date("2026-03-18"),
  },
];

export const AMENITY_OPTIONS = [
  "WiFi",
  "AC",
  "Attached Bathroom",
  "Meals Included",
  "Laundry",
  "CCTV",
  "Gym",
  "Parking",
  "Fridge",
  "TV",
];

export const LOCATIONS = [
  "Koramangala",
  "Indiranagar",
  "HSR Layout",
  "BTM Layout",
  "Marathahalli",
  "Electronic City",
  "Whitefield",
  "Jayanagar",
  "Bannerghatta Road",
  "Hebbal",
];
