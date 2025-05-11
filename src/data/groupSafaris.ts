
export interface GroupPackage {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  days: number;
  location: string;
  type: 'honeymoon' | 'bridal' | 'king' | 'queen' | 'mother';
  highlights: string[];
}

export const groupPackages: GroupPackage[] = [
  {
    id: "honeymoon-safari",
    title: "Romantic Getaway Safari",
    image: "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80",
    description: "Experience the magic of Africa with your loved one. Private dinners under the stars, luxury accommodation, and unforgettable wildlife experiences.",
    price: 3800,
    days: 7,
    location: "Kenya & Tanzania",
    type: "honeymoon",
    highlights: [
      "Private candlelit dinners in the bush",
      "Luxury tented accommodation",
      "Hot air balloon safari at sunrise",
      "Couples spa treatments",
      "Sunset game drives"
    ]
  },
  {
    id: "honeymoon-beach",
    title: "Safari & Beach Romance",
    image: "https://images.unsplash.com/photo-1567548661234-2a7a254726c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "Combine a thrilling safari experience with relaxing beach days in Zanzibar. The perfect balance of adventure and relaxation for newlyweds.",
    price: 4200,
    days: 10,
    location: "Tanzania & Zanzibar",
    type: "honeymoon",
    highlights: [
      "Big Five safari in the Serengeti",
      "Private beach villa in Zanzibar",
      "Romantic sailing trip at sunset",
      "Snorkeling in crystal clear waters",
      "Exclusive honeymoon perks"
    ]
  },
  {
    id: "wedding-safari",
    title: "Safari Wedding Package",
    image: "https://images.unsplash.com/photo-1534476478164-b15fec4f091c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "Say 'I do' in the heart of the African wilderness. Our comprehensive wedding package includes ceremony planning, accommodation for guests, and honeymoon safari.",
    price: 6500,
    days: 8,
    location: "Kenya",
    type: "bridal",
    highlights: [
      "Maasai-inspired wedding ceremony",
      "Accommodation for up to 20 guests",
      "Professional photography with wildlife backdrops",
      "Custom wedding planning services",
      "Post-wedding safari experience"
    ]
  },
  {
    id: "bridal-shower-safari",
    title: "Bridal Party Safari",
    image: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2734&q=80",
    description: "Celebrate the bride-to-be with an unforgettable safari adventure. Perfect for bridal parties looking for a unique experience.",
    price: 3200,
    days: 5,
    location: "Kenya",
    type: "bridal",
    highlights: [
      "Private villa with pool",
      "Champagne bush breakfasts",
      "Spa day for the bridal party",
      "Professional group photography session",
      "Exclusive game reserve access"
    ]
  },
  {
    id: "kings-luxury-safari",
    title: "Royal Luxury Safari",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80",
    description: "Experience Africa like royalty with our most exclusive safari package. Private jets, luxury lodges, and personalized service throughout.",
    price: 12000,
    days: 14,
    location: "Kenya, Tanzania & Uganda",
    type: "king",
    highlights: [
      "Private jet transfers between destinations",
      "Exclusive-use luxury lodges",
      "Personal chef and butler service",
      "Custom itinerary with private guides",
      "Helicopter excursions to remote areas"
    ]
  },
  {
    id: "kings-wilderness-safari",
    title: "King of the Wilderness",
    image: "https://images.unsplash.com/photo-1547970600-eab4c0f6469c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "An ultra-premium safari experience focusing on Africa's most spectacular wildlife regions and conservation areas.",
    price: 9500,
    days: 12,
    location: "Kenya & Rwanda",
    type: "king",
    highlights: [
      "Gorilla trekking in Rwanda",
      "Private conservancy access",
      "Meetings with conservation experts",
      "Luxury treehouses and unique accommodations",
      "Personalized wildlife photography assistance"
    ]
  },
  {
    id: "queens-elegant-safari",
    title: "Elegant Explorer Safari",
    image: "https://images.unsplash.com/photo-1504945005722-33670dcaf685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "A sophisticated safari experience with special attention to comfort, cuisine, and cultural immersion for the discerning female traveler.",
    price: 7800,
    days: 10,
    location: "Kenya & Tanzania",
    type: "queen",
    highlights: [
      "Female safari guides and staff",
      "Gourmet dining experiences",
      "Cultural exchanges with local women's groups",
      "Wellness and spa therapies",
      "Shopping excursions for local crafts and jewelry"
    ]
  },
  {
    id: "queens-wellness-safari",
    title: "Wellness & Wildlife Retreat",
    image: "https://images.unsplash.com/photo-1591322528817-3d6d868dce73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "Combine the thrill of safari with rejuvenating wellness experiences. Perfect for those seeking adventure and self-care.",
    price: 6900,
    days: 9,
    location: "Kenya & Zanzibar",
    type: "queen",
    highlights: [
      "Daily yoga and meditation sessions",
      "Organic, locally-sourced meals",
      "Natural hot springs experiences",
      "Mindfulness walks in nature",
      "Luxurious spa treatments"
    ]
  },
  {
    id: "family-safari-adventure",
    title: "Family Safari Adventure",
    image: "https://images.unsplash.com/photo-1590159727103-05d2c9c71223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "A perfect safari experience designed for mothers and children, with educational wildlife activities and family-friendly accommodations.",
    price: 5200,
    days: 8,
    location: "Kenya",
    type: "mother",
    highlights: [
      "Kid-friendly safari guides and vehicles",
      "Educational wildlife activities for children",
      "Family suites and connecting rooms",
      "Junior Ranger programs",
      "Special family dining experiences"
    ]
  },
  {
    id: "mothers-relaxation-safari",
    title: "Mother's Relaxation Safari",
    image: "https://images.unsplash.com/photo-1591322528817-3d6d868dce73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "A perfect getaway for mothers to relax and rejuvenate while enjoying the beauty of African wildlife and landscapes.",
    price: 4800,
    days: 7,
    location: "Kenya & Tanzania",
    type: "mother",
    highlights: [
      "Daily spa treatments",
      "Relaxing game viewing experiences",
      "Women-only safari groups available",
      "Photography sessions in scenic locations",
      "Comfortable, luxury accommodations"
    ]
  }
];
