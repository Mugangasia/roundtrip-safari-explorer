import { useParams } from "react-router-dom";
import { safaris } from "@/data/safaris";
import Layout from "@/components/Layout";
import { promos } from "@/data/promos";
import WhatsAppButton from "@/components/WhatsAppButton";
import PromoPopup from "@/components/PromoPopup";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SafariDetail = () => {
  const { id } = useParams<{ id: string }>();
  const safari = safaris.find((safari) => safari.id === id);
  
  // Get promotions related to this package
  const packagePromo = promos.find(promo => 
    promo.enabled && 
    (!promo.relatedPackages?.length || promo.relatedPackages.includes(id || ""))
  );

  if (!safari) {
    return (
      <Layout>
        <div className="safari-container py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Safari Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the safari package you're looking for.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative bg-safari-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={safari.image}
            alt={safari.title}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="safari-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              {safari.title}
            </h1>
            <div className="flex items-center space-x-2 mb-4">
              {Array(Math.floor(safari.rating)).fill(null).map((_, index) => (
                <Star key={index} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              ))}
              {safari.rating % 1 !== 0 && (
                <Star className="w-5 h-5 fill-yellow-500 text-yellow-500 opacity-50" />
              )}
              <span className="text-lg ml-1">{safari.rating.toFixed(1)}</span>
            </div>
            <p className="text-lg md:text-xl mb-8">
              {safari.longDescription || safari.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-safari-50">
                <Calendar className="mr-2 h-5 w-5" />
                <span>{safari.days} days</span>
              </div>
              <div className="flex items-center text-safari-50">
                <MapPin className="mr-2 h-5 w-5" />
                <span>{safari.location}</span>
              </div>
              <div className="flex items-center text-safari-50">
                <Users className="mr-2 h-5 w-5" />
                <span>{safari.groupSize}</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg inline-flex items-center">
              <span className="text-2xl font-bold">${safari.price.toLocaleString()}</span>
              <span className="text-safari-50 ml-2">per person</span>
            </div>
          </div>
        </div>
      </div>

      {/* Safari Details */}
      <section className="py-12 bg-white">
        <div className="safari-container">
          <Tabs defaultValue="overview" className="w-full">
            <div className="bg-safari-50 rounded-lg overflow-hidden mb-8">
              <TabsList className="w-full justify-start bg-transparent p-0">
                <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-safari-600 data-[state=active]:bg-white data-[state=active]:text-safari-800">Overview</TabsTrigger>
                <TabsTrigger value="itinerary" className="rounded-none border-b-2 border-transparent data-[state=active]:border-safari-600 data-[state=active]:bg-white data-[state=active]:text-safari-800">Itinerary</TabsTrigger>
                <TabsTrigger value="inclusions" className="rounded-none border-b-2 border-transparent data-[state=active]:border-safari-600 data-[state=active]:bg-white data-[state=active]:text-safari-800">Inclusions & Exclusions</TabsTrigger>
                <TabsTrigger value="map" className="rounded-none border-b-2 border-transparent data-[state=active]:border-safari-600 data-[state=active]:bg-white data-[state=active]:text-safari-800">Map</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="overview" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-display font-semibold mb-6">About This Safari</h2>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    {safari.longDescription || safari.description}
                  </p>

                  <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {safari.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-safari-100 p-1 rounded-full mr-3 mt-1">
                          <Star className="h-4 w-4 text-safari-600" />
                        </div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-safari-50 rounded-lg p-6 h-fit">
                  <h3 className="text-xl font-semibold mb-4 pb-3 border-b border-safari-100">Trip Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="mr-3 h-5 w-5 text-safari-700" />
                        <span>Duration</span>
                      </div>
                      <span className="font-semibold">{safari.days} days</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-700">
                        <MapPin className="mr-3 h-5 w-5 text-safari-700" />
                        <span>Location</span>
                      </div>
                      <span className="font-semibold">{safari.location}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-700">
                        <Users className="mr-3 h-5 w-5 text-safari-700" />
                        <span>Group Size</span>
                      </div>
                      <span className="font-semibold">{safari.groupSize}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-safari-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">Price per person</span>
                      <span className="text-2xl font-bold text-safari-800">${safari.price.toLocaleString()}</span>
                    </div>
                    
                    <Button asChild className="w-full mt-4 bg-safari-600 hover:bg-safari-700">
                      <Link to="/contact">Book This Safari</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="itinerary" className="animate-fade-in">
              <div className="max-w-4xl">
                <h2 className="text-3xl font-display font-semibold mb-6">Your Day-by-Day Itinerary</h2>
                
                <div className="space-y-8">
                  {safari.itinerary.map((day, index) => (
                    <Card key={index} className="overflow-hidden border-safari-100 hover:shadow-md transition-shadow">
                      <div className="bg-safari-50 px-6 py-3 border-b border-safari-100">
                        <h3 className="text-xl font-semibold">Day {day.day}: {day.title}</h3>
                      </div>
                      <CardContent className="p-6">
                        <p className="text-gray-700 mb-4">{day.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-semibold text-safari-800">Meals:</span>{" "}
                            {day.meals.join(", ")}
                          </div>
                          <div>
                            <span className="font-semibold text-safari-800">Accommodation:</span>{" "}
                            {day.accommodation}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="inclusions" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center text-safari-800">
                    <span className="w-10 h-10 rounded-full bg-safari-100 flex items-center justify-center mr-3">
                      <span className="text-safari-600 text-xl font-bold">✓</span>
                    </span>
                    What's Included
                  </h2>
                  <ul className="space-y-2">
                    {safari.inclusions.map((inclusion, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-safari-600 mr-2">✓</span>
                        <span className="text-gray-700">{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center text-safari-800">
                    <span className="w-10 h-10 rounded-full bg-safari-100 flex items-center justify-center mr-3">
                      <span className="text-safari-600 text-xl font-bold">✕</span>
                    </span>
                    What's Excluded
                  </h2>
                  <ul className="space-y-2">
                    {safari.exclusions.map((exclusion, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-safari-500 mr-2">✕</span>
                        <span className="text-gray-700">{exclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="map" className="animate-fade-in">
              <div className="max-w-4xl">
                <h2 className="text-3xl font-display font-semibold mb-6">Location Map</h2>
                <div className="bg-safari-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 mb-4">Explore the beautiful region of {safari.location} where this safari adventure takes place.</p>
                </div>
                
                <div className="aspect-[16/9] overflow-hidden rounded-lg border border-safari-200 shadow-md mb-8">
                  <div className="relative w-full h-full">
                    {/* Map image placeholder - in a real app, this could be an interactive map */}
                    <img 
                      src={`https://source.unsplash.com/featured/?${safari.location.toLowerCase().replace(/\s+/g, '')},safari,map`} 
                      alt={`Map of ${safari.location}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-white mr-2" />
                        <span className="text-white font-semibold">{safari.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-safari-100 p-6">
                  <h3 className="text-xl font-semibold mb-3">About the Location</h3>
                  <p className="text-gray-700 mb-4">
                    {safari.location} is known for its diverse wildlife and stunning landscapes. This region 
                    offers travelers a chance to experience the authentic African wilderness up close.
                  </p>
                  <div className="flex items-center text-safari-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">GPS coordinates available on request</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Image Gallery Preview */}
      <section className="py-12 bg-safari-50">
        <div className="safari-container">
          <h2 className="text-3xl font-display font-semibold mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {safari.gallery.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`${safari.title} - image ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-safari-800 text-white py-16">
        <div className="safari-container text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to book your adventure?</h2>
          <p className="text-safari-100 mb-8 max-w-2xl mx-auto">
            Contact our safari experts to start planning your dream adventure in {safari.location}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-safari-500 hover:bg-safari-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-safari-800">
              <Link to="/safaris">View All Safaris</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* WhatsApp Button */}
      <WhatsAppButton 
        phoneNumber="2028839907" 
        message={`Hello! I'm interested in the ${safari.title} package.`}
      />

      {/* Promotional Popup */}
      {packagePromo && <PromoPopup promo={packagePromo} currentPackage={id} />}
    </Layout>
  );
};

export default SafariDetail;
