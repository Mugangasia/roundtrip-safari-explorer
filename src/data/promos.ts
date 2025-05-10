
import { PromoType } from "@/components/PromoPopup";

export const promos: PromoType[] = [
  {
    id: "group-safari-promo",
    title: "Group Safari Special Offer",
    description: "Book for 4 or more people and get 15% off your entire safari experience! Limited time offer for family and friends group adventures.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80",
    linkText: "Learn More",
    linkUrl: "/contact",
    delay: 5,
    enabled: true
  },
  {
    id: "honeymoon-package",
    title: "Romantic Honeymoon Safari",
    description: "Special honeymoon package with private dinners under the stars, luxury accommodations, and exclusive wildlife viewing experiences.",
    image: "https://images.unsplash.com/photo-1624495412674-58668a10c982?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    linkText: "Book Now",
    linkUrl: "/contact",
    delay: 3,
    enabled: true,
    relatedPackages: ["maasai-mara-safari", "zanzibar-beach-getaway"]
  }
];
