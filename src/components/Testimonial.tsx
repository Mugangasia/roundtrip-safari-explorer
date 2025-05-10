
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
}

const Testimonial = ({ name, location, rating, text, image }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
            />
          ))}
        </div>
        <p className="text-gray-700 mb-6">"{text}"</p>
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden bg-safari-100 mr-4 flex-shrink-0">
            {image ? (
              <img src={image} alt={name} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-safari-400 flex items-center justify-center text-white font-semibold text-lg">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-gray-500 text-sm">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
