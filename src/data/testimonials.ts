
export interface TestimonialType {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
}

export const testimonials: TestimonialType[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Our safari to the Maasai Mara was the trip of a lifetime! Our guide was incredibly knowledgeable and we saw all of the Big Five. The accommodations were luxurious and the staff made us feel like family."
  },
  {
    id: "2",
    name: "Michael and Lisa Smith",
    location: "Toronto, Canada",
    rating: 5,
    text: "Roundtrip Safaris created the perfect itinerary for our honeymoon. From the wildlife in Amboseli to the beaches of Zanzibar, every detail was perfectly arranged. We can't wait to return to Africa!"
  },
  {
    id: "3",
    name: "David Wong",
    location: "Sydney, Australia",
    rating: 4,
    text: "As a wildlife photographer, I had specific needs for my safari, and Roundtrip Safaris delivered beyond expectations. The guides knew exactly where to position us for the best shots. Truly exceptional service."
  },
  {
    id: "4",
    name: "Emma and James Taylor",
    location: "London, UK",
    rating: 5,
    text: "We booked the Family Safari package and it was perfect for our children ages 8 and 10. Educational, exciting, and comfortable. The kids are still talking about their adventure months later!"
  }
];
