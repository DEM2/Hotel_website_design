export const roomData = {
  roomTypes: [
    {
      id: 1,
      name: "Standard Room",
      category: "Standard",
      basePrice: 80,
      size: 30,
      bedOptions: ["Single", "Double"],
      views: ["City"],
      experience: ["Basic"],
      capacity: 2,
      image: "/img/rooms/6.png",
      description: "Basic and comfortable room for short stays.",
      facilities: ["Wifi", "TV", "Air Conditioning"]
    },
    {
      id: 2,
      name: "Superior Room",
      category: "Superior",
      basePrice: 120,
      size: 40,
      bedOptions: ["Queen", "King"],
      views: ["City", "Garden"],
      experience: ["Comfort"],
      capacity: 2,
      image: "/img/rooms/3.png",
      description: "More spacious room with better location and comfort.",
      facilities: ["Wifi", "TV", "Coffee Maker", "Mini Bar"]
    },
    {
      id: 3,
      name: "Deluxe Room",
      category: "Deluxe",
      basePrice: 180,
      size: 50,
      bedOptions: ["King"],
      views: ["Sea", "City"],
      experience: ["Luxury"],
      capacity: 2,
      image: "/img/rooms/8.png",
      description: "Premium room with luxury finishes and great views.",
      facilities: ["Wifi", "TV", "Mini Bar", "Jacuzzi", "Room Service"]
    },
    {
      id: 4,
      name: "Junior Suite",
      category: "Suite",
      basePrice: 250,
      size: 65,
      bedOptions: ["King"],
      views: ["Sea"],
      experience: ["Executive", "Luxury"],
      capacity: 3,
      image: "/img/rooms/4.png",
      description: "Spacious suite with a small living area.",
      facilities: ["Wifi", "TV", "Mini Bar", "Living Room"]
    },
    {
      id: 5,
      name: "Suite",
      category: "Suite",
      basePrice: 350,
      size: 90,
      bedOptions: ["King"],
      views: ["Sea", "Garden"],
      experience: ["Luxury", "Family"],
      capacity: 4,
      image: "/img/rooms/7.png",
      description: "Full suite with separate living room and bedroom.",
      facilities: ["Wifi", "TV", "Kitchen", "Living Room", "Jacuzzi"]
    },
    {
      id: 6,
      name: "Presidential Suite",
      category: "Premium",
      basePrice: 800,
      size: 150,
      bedOptions: ["King"],
      views: ["Sea", "Panoramic"],
      experience: ["Ultra Luxury", "VIP"],
      capacity: 5,
      image: "/img/rooms/2.png",
      description: "Top-tier luxury suite with premium services.",
      facilities: [
        "Wifi",
        "Private Pool",
        "Room Service",
        "Jacuzzi",
        "Kitchen"
      ]
    }
  ],

  rooms: [
    // Standard Rooms
    { id: 101, roomTypeId: 1, status: "available", floor: 1 },
    { id: 102, roomTypeId: 1, status: "occupied", floor: 1 },

    // Superior Rooms
    { id: 201, roomTypeId: 2, status: "available", floor: 2 },
    { id: 202, roomTypeId: 2, status: "maintenance", floor: 2 },

    // Deluxe Rooms
    { id: 301, roomTypeId: 3, status: "available", floor: 3 },
    { id: 302, roomTypeId: 3, status: "occupied", floor: 3 },

    // Junior Suites
    { id: 401, roomTypeId: 4, status: "available", floor: 4 },

    // Suites
    { id: 501, roomTypeId: 5, status: "available", floor: 5 },

    // Presidential Suite
    { id: 601, roomTypeId: 6, status: "available", floor: 6 }
  ]
};