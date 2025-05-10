
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { safaris, Safari } from "@/data/safaris";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Calendar, Clock, Map, Users, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SafariCard from "@/components/SafariCard";

const SafariDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [safari, setSafari] = useState<Safari | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  useEffect(() => {
    // Find the safari by id
    const foundSafari = safaris.find(s => s.id === id);
    if (foundSafari) {
      setSafari(foundSafari);
      // Reset the active image when safari changes
      setActiveImageIndex(0);
    }
    setLoading(false);
    // Scroll to top when safari changes
    window.scrollTo(0, 0);
  }, [id]);
  
  // Get other safari recommendations (excluding the current one)
  const recommendations = safaris
    .filter(s => s.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  
  if (loading) {
    return (
      <Layout>
        <div className="safari-container py-20">
          <div className="text-center">
            <p className="text-xl">Loading safari details...</p>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!safari) {
    return (
      <Layout>
        <div className="safari-container py-20">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Safari Not Found</h2>
            <p className="mb-8">The safari you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/safaris">Back to All Safaris</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="safari-container">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/safaris" className="hover:text-primary">Safaris</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{safari.title}</span>
          </div>
        </div>
      </div>
      
      {/* Safari Overview */}
      <div className="safari-container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Images */}
          <div className="w-full lg:w-3/5">
            {/* Main Image */}
            <div className="relative h-[400px] mb-4 overflow-hidden rounded-lg">
              <img 
                src={safari.gallery[activeImageIndex]} 
                alt={safari.title} 
                className="w-full h-full object-cover"
              />
              {safari.featured && (
                <Badge className="absolute top-4 right-4 bg-safari-500">Featured</Badge>
              )}
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {safari.gallery.map((image, index) => (
                <button
                  key={index}
                  className={`h-24 rounded-md overflow-hidden border-2 ${activeImageIndex === index ? 'border-safari-500' : 'border-transparent'}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={image} alt={`${safari.title} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Column - Safari Info */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h1 className="font-display text-3xl font-bold">{safari.title}</h1>
                <div className="flex items-center">
                  <span className="text-yellow-500 text-lg font-bold mr-1">{safari.rating}</span>
                  <span className="text-gray-600">/ 5.0</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{safari.longDescription.slice(0, 250)}...</p>
              
              {/* Key Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar size={20} className="text-safari-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-medium">{safari.days} Days</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Map size={20} className="text-safari-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-medium">{safari.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users size={20} className="text-safari-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Group Size</p>
                    <p className="font-medium">{safari.groupSize}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="text-safari-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Price From</p>
                    <p className="font-medium text-safari-500 text-xl">${safari.price.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col gap-3">
                <Button asChild size="lg" className="bg-safari-500 hover:bg-safari-600">
                  <Link to="/contact">Book This Safari</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Request Customization</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Safari Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="safari-container">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="includes">What's Included</TabsTrigger>
              <TabsTrigger value="highlights">Highlights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-display text-2xl font-semibold mb-4">About This Safari</h2>
              <p className="text-gray-700 mb-6">{safari.longDescription}</p>
              
              <h3 className="font-display text-xl font-semibold mb-3">Destination Information</h3>
              <p className="text-gray-700 mb-6">
                Located in {safari.location}, this safari offers an incredible opportunity to experience the beauty 
                and wildlife of East Africa. The region is known for its diverse ecosystems and abundant wildlife, 
                making it a perfect destination for safari enthusiasts and nature lovers.
              </p>

              <h3 className="font-display text-xl font-semibold mb-3">Best Time to Visit</h3>
              <p className="text-gray-700">
                While this safari is available year-round, the best wildlife viewing is typically during the dry seasons: 
                January through March and June through October. The famous wildebeest migration (if applicable) is best seen 
                in the Maasai Mara from July to October.
              </p>
            </TabsContent>
            
            <TabsContent value="itinerary" className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-display text-2xl font-semibold mb-4">Safari Itinerary</h2>
              <div className="space-y-6">
                {safari.itinerary.map((day, index) => (
                  <div key={index} className="border-b pb-6 last:border-0">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="bg-safari-100 text-safari-800 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-lg">Day {day.day}</span>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold mb-2">{day.title}</h3>
                        <p className="text-gray-700 mb-4">{day.description}</p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <div>
                            <h4 className="font-medium text-sm text-gray-500">Meals Included:</h4>
                            <div className="flex gap-2 mt-1">
                              {day.meals.includes('breakfast') && (
                                <Badge variant="outline">Breakfast</Badge>
                              )}
                              {day.meals.includes('lunch') && (
                                <Badge variant="outline">Lunch</Badge>
                              )}
                              {day.meals.includes('dinner') && (
                                <Badge variant="outline">Dinner</Badge>
                              )}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-sm text-gray-500">Accommodation:</h4>
                            <p className="text-gray-700">{day.accommodation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="includes" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-display text-2xl font-semibold mb-4">What's Included</h2>
                  <ul className="space-y-3">
                    {safari.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="font-display text-2xl font-semibold mb-4">What's Not Included</h2>
                  <ul className="space-y-3">
                    {safari.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <X size={20} className="text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="highlights" className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-display text-2xl font-semibold mb-4">Safari Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {safari.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start bg-safari-50 p-4 rounded-md">
                    <CheckCircle size={20} className="text-safari-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Booking CTA */}
      <section className="py-12 bg-safari-800 text-white">
        <div className="safari-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-4">Ready to Book Your African Adventure?</h2>
            <p className="text-safari-100 mb-8">
              Contact our safari specialists to customize this itinerary or book your spot today. 
              Start planning your dream safari adventure now!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button asChild size="lg" className="bg-safari-500 hover:bg-safari-600">
                <Link to="/contact">Book This Safari</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <a href="tel:(202)883-9907">Call Us (202) 883-9907</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Similar Safaris */}
      <section className="py-16">
        <div className="safari-container">
          <h2 className="section-title text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {recommendations.map((safari) => (
              <SafariCard
                key={safari.id}
                id={safari.id}
                title={safari.title}
                image={safari.image}
                rating={safari.rating}
                description={safari.description}
                price={safari.price}
                days={safari.days}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SafariDetail;
