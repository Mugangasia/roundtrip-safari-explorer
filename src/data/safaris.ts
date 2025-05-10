
export interface Safari {
  id: string;
  title: string;
  image: string;
  gallery: string[];
  rating: number;
  description: string;
  longDescription: string;
  price: number;
  days: number;
  location: string;
  groupSize: string;
  featured: boolean;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    meals: string[];
    accommodation: string;
  }[];
  inclusions: string[];
  exclusions: string[];
}

export const safaris: Safari[] = [
  {
    id: "maasai-mara",
    title: "Maasai Mara Safari",
    image: "https://images.unsplash.com/photo-1547970600-eab4c0f6469c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547970600-eab4c0f6469c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80"
    ],
    rating: 4.5,
    description: "Discover the Maasai Mara's stunning wildlife, scenic landscapes, and unique cultural experiences.",
    longDescription: "The Maasai Mara National Reserve is one of Africa's most magnificent game reserves. Bordering Tanzania, the Mara is the northern extension of the Serengeti and forms a wildlife corridor between the two countries. It's named after the statuesque, red-cloaked Maasai people who live in the park and graze their animals there as they have done for centuries. In addition to the big cats, the Mara is known for its annual Great Migration, when thousands of wildebeest, zebra, and Thomson's gazelle travel to and from the Serengeti in Tanzania from July through October.",
    price: 2499,
    days: 5,
    location: "Maasai Mara, Kenya",
    groupSize: "2-12 people",
    featured: true,
    highlights: [
      "Witness the Great Migration (seasonal)",
      "Game drives in custom 4x4 vehicles",
      "Visit traditional Maasai villages",
      "Hot air balloon safari option",
      "Luxury tented accommodation"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description: "Arrive at Jomo Kenyatta International Airport and transfer to your hotel in Nairobi. Evening welcome dinner with safari briefing.",
        meals: ["dinner"],
        accommodation: "Nairobi Serena Hotel"
      },
      {
        day: 2,
        title: "Nairobi to Maasai Mara",
        description: "After breakfast, drive to the Maasai Mara National Reserve. Afternoon game drive to spot the first of the Big Five.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Mara Serena Safari Lodge"
      },
      {
        day: 3,
        title: "Maasai Mara Game Drives",
        description: "Full day of game drives in the Mara. Morning and afternoon safaris to maximize wildlife viewing opportunities. Option for hot air balloon safari (extra cost).",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Mara Serena Safari Lodge"
      },
      {
        day: 4,
        title: "Cultural Day & Wildlife",
        description: "Morning game drive followed by a visit to a traditional Maasai village. Learn about Maasai culture and traditions. Afternoon relaxation at the lodge.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Mara Serena Safari Lodge"
      },
      {
        day: 5,
        title: "Maasai Mara to Nairobi",
        description: "Final morning game drive. After lunch, transfer back to Nairobi for your departure flight or extended stay.",
        meals: ["breakfast", "lunch"],
        accommodation: "Day use room until departure"
      }
    ],
    inclusions: [
      "All accommodations",
      "All meals as indicated in the itinerary",
      "Airport transfers",
      "Transport in 4x4 safari vehicles",
      "English-speaking guide/driver",
      "Park entrance fees",
      "Bottled water during game drives",
      "Cultural village visit"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Visa fees",
      "Optional activities",
      "Alcoholic beverages",
      "Personal expenses",
      "Gratuities"
    ]
  },
  {
    id: "mount-kenya",
    title: "Mount Kenya Safari",
    image: "https://images.unsplash.com/photo-1504945005722-33670dcaf685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504945005722-33670dcaf685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2734&q=80",
      "https://images.unsplash.com/photo-1534476478164-b15fec4f091c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    rating: 4.7,
    description: "Journey to Mount Kenya for breathtaking treks, diverse wildlife, and rich cultural heritage.",
    longDescription: "Mount Kenya, Africa's second-highest peak, offers a breathtaking landscape of diverse habitats and wildlife. This UNESCO World Heritage site is a realm of alpine peaks, glaciers, and mountain forests teeming with elephants, buffalo, and various antelope species. Our Mount Kenya safari combines wildlife exploration in the surrounding reserves with optional moderate trekking experiences, cultural encounters with local communities, and luxurious accommodations with spectacular mountain views. Perfect for those seeking both adventure and natural beauty.",
    price: 2799,
    days: 6,
    location: "Mount Kenya Region, Kenya",
    groupSize: "2-10 people",
    featured: true,
    highlights: [
      "Game drives in Mount Kenya National Park",
      "Guided nature walks with stunning views",
      "Optional mountain trekking experiences",
      "Visit to local communities and markets",
      "Luxury lodge accommodation"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description: "Welcome to Kenya! Upon arrival at Jomo Kenyatta International Airport, you'll be transferred to your hotel in Nairobi. Meet your guide for a safari briefing and enjoy a welcome dinner.",
        meals: ["dinner"],
        accommodation: "Nairobi Serena Hotel"
      },
      {
        day: 2,
        title: "Nairobi to Mount Kenya",
        description: "After breakfast, drive to the Mount Kenya region. Check in to your lodge and enjoy an afternoon game drive in the surrounding conservancy.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Serena Mountain Lodge"
      },
      {
        day: 3,
        title: "Wildlife & Nature Walks",
        description: "Morning and afternoon game drives in the Mount Kenya National Park. Optional guided nature walk in the forest to spot birds and smaller wildlife.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Serena Mountain Lodge"
      },
      {
        day: 4,
        title: "Cultural Immersion Day",
        description: "Visit local communities around Mount Kenya. Experience traditional crafts, music, and possibly a local market. Afternoon at leisure with optional activities.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Serena Mountain Lodge"
      },
      {
        day: 5,
        title: "Sweetwaters Game Reserve",
        description: "Full day excursion to Ol Pejeta Conservancy/Sweetwaters Game Reserve, home to the last northern white rhinos. Visit the chimpanzee sanctuary.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Serena Mountain Lodge"
      },
      {
        day: 6,
        title: "Return to Nairobi",
        description: "Final morning activity followed by breakfast. Return to Nairobi for your onward journey or flight home.",
        meals: ["breakfast", "lunch"],
        accommodation: "Day use room until departure"
      }
    ],
    inclusions: [
      "All accommodations as specified",
      "All meals as indicated in the itinerary",
      "Airport transfers",
      "Transport in 4x4 safari vehicles",
      "English-speaking guide/driver",
      "Park entrance fees",
      "Bottled water during activities",
      "Cultural community visits"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Visa fees",
      "Optional activities",
      "Alcoholic beverages",
      "Personal expenses",
      "Gratuities"
    ]
  },
  {
    id: "rift-valley",
    title: "Rift Valley Safari",
    image: "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80",
      "https://images.unsplash.com/photo-1547970600-eab4c0f6469c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    rating: 4.7,
    description: "Explore the Great Rift Valley's lakes, wildlife reserves, and spectacular landscapes.",
    longDescription: "Kenya's Great Rift Valley is a geographical wonder—a dramatic trench cutting through eastern Africa. This safari explores the valley's highlights, from Lake Naivasha's hippos and spectacular birdlife to Lake Nakuru's flamingos and rhino sanctuary. The journey continues to Lake Bogoria with its geothermal hot springs and abundant wildlife. Throughout the trip, you'll experience diverse ecosystems, stunning vistas, and the fascinating cultural heritage of the communities who call this remarkable landscape home.",
    price: 2350,
    days: 5,
    location: "Great Rift Valley, Kenya",
    groupSize: "2-12 people",
    featured: true,
    highlights: [
      "Lake Nakuru flamingo viewing",
      "Boat safari on Lake Naivasha",
      "Visit to geothermal hot springs",
      "Wildlife viewing in multiple parks",
      "Scenic viewpoints of the Great Rift Valley"
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Lake Naivasha",
        description: "Morning departure from Nairobi. Stop at the Great Rift Valley viewpoint before continuing to Lake Naivasha. Afternoon boat safari to see hippos and eagles.",
        meals: ["lunch", "dinner"],
        accommodation: "Lake Naivasha Sopa Lodge"
      },
      {
        day: 2,
        title: "Lake Naivasha & Crescent Island",
        description: "Walking safari on Crescent Island Game Sanctuary. Afternoon visit to Elsamere Conservation Centre, once home to Joy Adamson of 'Born Free' fame.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Lake Naivasha Sopa Lodge"
      },
      {
        day: 3,
        title: "Lake Nakuru National Park",
        description: "Full day exploring Lake Nakuru National Park, famous for flamingos and home to both black and white rhinos. Game drives throughout the day.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Lake Nakuru Lodge"
      },
      {
        day: 4,
        title: "Lake Bogoria",
        description: "Drive to Lake Bogoria to see hot springs, geysers, and more flamingos. Afternoon game drive around the lake shores.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Lake Bogoria Spa Resort"
      },
      {
        day: 5,
        title: "Return to Nairobi",
        description: "Final morning at leisure. After lunch, return to Nairobi arriving in the late afternoon.",
        meals: ["breakfast", "lunch"],
        accommodation: "No overnight stay"
      }
    ],
    inclusions: [
      "All accommodations",
      "All meals as indicated in the itinerary",
      "Transportation in private safari vehicle",
      "English-speaking driver/guide",
      "Park entrance fees",
      "Boat safari on Lake Naivasha",
      "Bottled water during safaris"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Visa fees",
      "Optional activities",
      "Alcoholic beverages",
      "Personal expenses",
      "Gratuities"
    ]
  },
  {
    id: "amboseli",
    title: "Amboseli & Tsavo Safari",
    image: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2734&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2734&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80",
      "https://images.unsplash.com/photo-1547970600-eab4c0f6469c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    rating: 4.8,
    description: "Experience elephants against the backdrop of Mt. Kilimanjaro and the vast wilderness of Tsavo.",
    longDescription: "This spectacular safari combines two of Kenya's most iconic wildlife destinations. Amboseli National Park offers unparalleled views of Mt. Kilimanjaro and large elephant herds, while Tsavo – Kenya's largest national park – provides vast wilderness teeming with diverse wildlife. This adventure delivers contrasting landscapes from Amboseli's marshlands and open plains to Tsavo's volcanic landscapes, baobab trees, and the famous red elephants. With expert guides and comfortable accommodations, this safari promises unforgettable wildlife encounters in breathtaking settings.",
    price: 3100,
    days: 7,
    location: "Southern Kenya",
    groupSize: "2-10 people",
    featured: false,
    highlights: [
      "Mt. Kilimanjaro views from Amboseli",
      "Large elephant herds in natural habitat",
      "Tsavo's famous red elephants",
      "Mzima Springs crystal clear waters",
      "Diverse landscapes and ecosystems"
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Amboseli",
        description: "Depart Nairobi for Amboseli National Park, arriving in time for lunch. Afternoon game drive with views of Mt. Kilimanjaro (weather permitting).",
        meals: ["lunch", "dinner"],
        accommodation: "Amboseli Serena Safari Lodge"
      },
      {
        day: 2,
        title: "Amboseli National Park",
        description: "Full day exploring Amboseli with morning and afternoon game drives. Focus on the large elephant herds and fantastic birdlife. Optional visit to a Maasai village.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Amboseli Serena Safari Lodge"
      },
      {
        day: 3,
        title: "Amboseli to Tsavo West",
        description: "Morning game drive in Amboseli. After lunch, drive to Tsavo West National Park. Evening game drive around the lodge area.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Kilaguni Serena Safari Lodge"
      },
      {
        day: 4,
        title: "Tsavo West Exploration",
        description: "Full day in Tsavo West with game drives. Visit Mzima Springs where underwater observatories allow you to watch hippos and crocodiles.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Kilaguni Serena Safari Lodge"
      },
      {
        day: 5,
        title: "Tsavo West to Tsavo East",
        description: "Morning game drive in Tsavo West. Cross over to Tsavo East National Park, known for its red elephants. Afternoon game drive.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Voi Safari Lodge"
      },
      {
        day: 6,
        title: "Tsavo East National Park",
        description: "Full day exploring the vast wilderness of Tsavo East with morning and afternoon game drives. Seek out lions, elephants, and other wildlife.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Voi Safari Lodge"
      },
      {
        day: 7,
        title: "Return to Nairobi",
        description: "Final morning game drive. After lunch, return to Nairobi, arriving in the early evening.",
        meals: ["breakfast", "lunch"],
        accommodation: "No overnight stay"
      }
    ],
    inclusions: [
      "All accommodations",
      "All meals as indicated in the itinerary",
      "Transportation in 4x4 safari vehicle",
      "English-speaking driver/guide",
      "Park entrance fees",
      "Game drives as mentioned",
      "Bottled water during safaris"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Visa fees",
      "Optional activities",
      "Alcoholic beverages",
      "Personal expenses",
      "Gratuities"
    ]
  },
  {
    id: "zanzibar",
    title: "Zanzibar Beach Escape",
    image: "https://images.unsplash.com/photo-1567548661234-2a7a254726c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1567548661234-2a7a254726c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1591322528817-3d6d868dce73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1590159727103-05d2c9c71223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    rating: 4.9,
    description: "Unwind on Zanzibar's pristine beaches and explore Stone Town's rich cultural heritage.",
    longDescription: "Zanzibar, the spice island of Tanzania, offers an idyllic tropical vacation with its white-sand beaches, crystal-clear waters, and rich cultural heritage. This itinerary combines relaxation on some of Africa's most beautiful beaches with exploration of Stone Town's historic sites and spice plantations. You'll stay in carefully selected beachfront accommodations and have opportunities for snorkeling, diving, and various water activities. This is the perfect adventure for those seeking a blend of cultural immersion, historical discovery, and beach relaxation.",
    price: 1950,
    days: 6,
    location: "Zanzibar, Tanzania",
    groupSize: "2-14 people",
    featured: false,
    highlights: [
      "Stone Town UNESCO World Heritage tour",
      "Pristine white sand beaches",
      "Spice plantation visit",
      "Snorkeling and water activities",
      "Sunset dhow cruise"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Zanzibar",
        description: "Welcome to Zanzibar! Transfer from Zanzibar International Airport to your beach resort on the east coast. Rest of the day at leisure to relax on the beach.",
        meals: ["dinner"],
        accommodation: "Karafuu Beach Resort & Spa"
      },
      {
        day: 2,
        title: "Beach Relaxation Day",
        description: "Full day to enjoy the pristine beaches and resort facilities. Optional activities include snorkeling, diving, or water sports (extra cost).",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Karafuu Beach Resort & Spa"
      },
      {
        day: 3,
        title: "Spice Tour & Stone Town",
        description: "Morning spice plantation tour to learn about Zanzibar's famous spice trade. Continue to Stone Town for check-in. Afternoon walking tour of this UNESCO World Heritage site.",
        meals: ["breakfast", "lunch"],
        accommodation: "Zanzibar Serena Inn"
      },
      {
        day: 4,
        title: "Stone Town Exploration",
        description: "Full day exploring Stone Town's history and culture. Visit the Old Fort, Palace Museum, and famous doors. Evening at leisure to explore the food markets.",
        meals: ["breakfast"],
        accommodation: "Zanzibar Serena Inn"
      },
      {
        day: 5,
        title: "Transfer to North Coast",
        description: "Transfer to the pristine beaches of Zanzibar's north coast. Afternoon at leisure. Optional sunset dhow cruise (extra cost).",
        meals: ["breakfast", "dinner"],
        accommodation: "Diamonds Mapenzi Beach"
      },
      {
        day: 6,
        title: "Departure Day",
        description: "Final morning to enjoy the beach. Transfer to Zanzibar Airport for your departure flight.",
        meals: ["breakfast"],
        accommodation: "Day use room until departure"
      }
    ],
    inclusions: [
      "All accommodations",
      "All meals as indicated in the itinerary",
      "Airport transfers",
      "Transportation in air-conditioned vehicle",
      "English-speaking guide",
      "Stone Town walking tour",
      "Spice plantation tour"
    ],
    exclusions: [
      "International and domestic flights",
      "Travel insurance",
      "Visa fees",
      "Optional activities",
      "Alcoholic beverages",
      "Personal expenses",
      "Gratuities"
    ]
  },
  {
    id: "animal-conservation",
    title: "Animal Conservation Package",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80",
      "https://images.unsplash.com/photo-1534476478164-b15fec4f091c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2734&q=80"
    ],
    rating: 5.0,
    description: "Experience hands-on wildlife conservation efforts while enjoying classic safari activities.",
    longDescription: "This unique safari focuses on Kenya's vital conservation efforts, combining traditional safari experiences with opportunities to learn about and participate in wildlife conservation projects. Visit renowned sanctuaries including the David Sheldrick Elephant Orphanage and Ol Pejeta Conservancy, home to the last northern white rhinos. Meet dedicated conservationists and contribute to their important work. This journey is perfect for travelers who want to enjoy spectacular wildlife viewing while also understanding the challenges facing Africa's wildlife and the innovative solutions being developed to protect these precious species for future generations.",
    price: 3650,
    days: 8,
    location: "Central and Southern Kenya",
    groupSize: "2-8 people",
    featured: false,
    highlights: [
      "David Sheldrick Elephant Orphanage visit",
      "Ol Pejeta Conservancy and northern white rhinos",
      "Conservation talks with wildlife experts",
      "Traditional game drives and wildlife viewing",
      "Behind-the-scenes at conservation projects"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description: "Arrive in Nairobi and transfer to your hotel. Afternoon visit to the Giraffe Center to learn about giraffe conservation. Welcome dinner with conservation specialist.",
        meals: ["dinner"],
        accommodation: "Nairobi Serena Hotel"
      },
      {
        day: 2,
        title: "Nairobi Conservation Day",
        description: "Morning visit to David Sheldrick Elephant Orphanage for the public viewing and to learn about elephant rescue and rehabilitation. Afternoon visit to Karen Blixen Museum.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Nairobi Serena Hotel"
      },
      {
        day: 3,
        title: "Nairobi to Ol Pejeta",
        description: "Drive to Ol Pejeta Conservancy. Afternoon visit to the northern white rhino enclosure to see the last remaining northern white rhinos and learn about conservation efforts.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Sweetwaters Serena Camp"
      },
      {
        day: 4,
        title: "Ol Pejeta Conservation",
        description: "Full day at Ol Pejeta with behind-the-scenes tour of conservation projects. Visit the chimpanzee sanctuary and participate in wildlife monitoring activities.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Sweetwaters Serena Camp"
      },
      {
        day: 5,
        title: "Ol Pejeta to Lake Nakuru",
        description: "Drive to Lake Nakuru National Park, known for its rhino sanctuary. Afternoon game drive focusing on rhino conservation efforts.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Lake Nakuru Sopa Lodge"
      },
      {
        day: 6,
        title: "Lake Nakuru to Maasai Mara",
        description: "Drive to the Maasai Mara National Reserve. Afternoon game drive in this iconic wildlife destination.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Mara Serena Safari Lodge"
      },
      {
        day: 7,
        title: "Maasai Mara Conservation",
        description: "Full day in the Mara with special focus on predator conservation. Meet with researchers from local conservation organizations. Optional visit to a Maasai village to learn about community conservation initiatives.",
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Mara Serena Safari Lodge"
      },
      {
        day: 8,
        title: "Return to Nairobi",
        description: "Final morning game drive. After lunch, return to Nairobi for your departure flight.",
        meals: ["breakfast", "lunch"],
        accommodation: "Day use room until departure"
      }
    ],
    inclusions: [
      "All accommodations",
      "All meals as indicated in the itinerary",
      "Conservation project entry fees",
      "Transportation in 4x4 safari vehicle",
      "English-speaking driver/guide with conservation expertise",
      "Park entrance fees",
      "Bottled water during safaris",
      "Conservation activities as mentioned"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Visa fees",
      "Optional activities",
      "Alcoholic beverages",
      "Personal expenses",
      "Gratuities"
    ]
  }
];
