
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Calendar, MapPin } from "lucide-react";

interface SafariCardProps {
  id: string;
  title: string;
  image: string;
  rating: number;
  description: string;
  price?: number;
  days?: number;
  location?: string;
  featured?: boolean;
}

const SafariCard = ({ 
  id, 
  title, 
  image, 
  rating, 
  description, 
  price, 
  days,
  location,
  featured = false
}: SafariCardProps) => {
  return (
    <Card className={`overflow-hidden h-full transition-all duration-300 hover:shadow-lg ${featured ? 'border-safari-500 border-2' : 'border-border'}`}>
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
        {featured && (
          <div className="absolute top-4 right-4 bg-safari-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-xl font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
          {price && <span className="font-semibold">From ${price.toLocaleString()}</span>}
          {days && (
            <div className="flex items-center">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              <span>{days} days</span>
            </div>
          )}
          {location && (
            <div className="flex items-center">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              <span>{location}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{description}</p>
        
        <Button asChild className="w-full mt-2 bg-safari-600 hover:bg-safari-700 text-white">
          <Link to={`/safaris/${id}`}>
            View Details
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default SafariCard;
