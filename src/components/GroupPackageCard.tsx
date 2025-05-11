
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Cake, Crown, Users, MapPin, Calendar } from "lucide-react";
import { GroupPackage } from "@/data/groupSafaris";

const getPackageIcon = (type: GroupPackage['type']) => {
  switch (type) {
    case 'honeymoon':
      return <Heart className="h-5 w-5 text-pink-500 fill-pink-500" />;
    case 'bridal':
      return <Cake className="h-5 w-5 text-purple-500 fill-purple-500" />;
    case 'king':
      return <Crown className="h-5 w-5 text-amber-500 fill-amber-500" />;
    case 'queen':
      return <Crown className="h-5 w-5 text-purple-400 fill-purple-400" />;
    case 'mother':
      return <Users className="h-5 w-5 text-blue-500 fill-blue-500" />;
    default:
      return <Users className="h-5 w-5 text-gray-500" />;
  }
};

interface GroupPackageCardProps {
  package: GroupPackage;
}

const GroupPackageCard = ({ package: pkg }: GroupPackageCardProps) => {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border-safari-100">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
          {getPackageIcon(pkg.type)}
        </div>
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-xl font-semibold text-gray-800">{pkg.title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
          <span className="font-semibold">From ${pkg.price.toLocaleString()}</span>
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            <span>{pkg.days} days</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span>{pkg.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{pkg.description}</p>
        
        <Button asChild className="w-full mt-2 bg-safari-600 hover:bg-safari-700 text-white">
          <Link to={`/group-safaris/${pkg.id}`}>
            View Details
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default GroupPackageCard;
