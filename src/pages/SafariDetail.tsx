import { useParams } from "react-router-dom";
import { safaris } from "@/data/safaris";
import Layout from "@/components/Layout";
import { promos } from "@/data/promos";
import WhatsAppButton from "@/components/WhatsAppButton";
import PromoPopup from "@/components/PromoPopup";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
      <div className="relative bg-safari-900 text-white py-24">
        <div className="absolute inset-0 z-0">
          <img
            src={safari.image}
            alt={safari.title}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="safari-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {safari.title}
            </h1>
            <p className="text-lg md:text-xl mb-8">
              {safari.longDescription || safari.description}
            </p>
          </div>
        </div>
      </div>

      {/* Safari Details */}
      <section className="py-16">
        <div className="safari-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-600 mb-6">{safari.longDescription || safari.description}</p>

              <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {safari.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Itinerary</h3>
              {safari.itinerary.map((day, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-xl font-semibold mb-2">Day {day.day}: {day.title}</h4>
                  <p className="text-gray-600 mb-2">{day.description}</p>
                  <p className="text-gray-600">
                    <strong>Meals:</strong> {day.meals.join(", ")}
                  </p>
                  <p className="text-gray-600">
                    <strong>Accommodation:</strong> {day.accommodation}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-4">Pricing & Info</h2>
              <p className="text-gray-600 mb-2">
                <strong>Price:</strong> ${safari.price.toLocaleString()}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Duration:</strong> {safari.days} days
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Location:</strong> {safari.location}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Group Size:</strong> {safari.groupSize}
              </p>

              <h3 className="text-2xl font-semibold mt-6 mb-4">What's Included</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {safari.inclusions.map((inclusion, index) => (
                  <li key={index}>{inclusion}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-4">What's Excluded</h3>
              <ul className="list-disc list-inside text-gray-600">
                {safari.exclusions.map((exclusion, index) => (
                  <li key={index}>{exclusion}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-safari-50 py-16 border-t border-safari-100">
        <div className="safari-container text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to book your adventure?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our safari experts to start planning your dream adventure.
          </p>
          <Button asChild className="bg-safari-500 hover:bg-safari-600">
            <Link to="/contact">Contact Us</Link>
          </Button>
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
