
import Hero from "@/components/Hero";
import SafariCard from "@/components/SafariCard";
import Testimonial from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import { safaris } from "@/data/safaris";
import { testimonials } from "@/data/testimonials";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  // Get featured safaris
  const featuredSafaris = safaris.filter(safari => safari.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Featured Safaris Section */}
      <section className="py-20 bg-white">
        <div className="safari-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Destination Spotlight</h2>
            <p className="section-subtitle">
              Explore the wild beauty of Maasai Mara, Mount Kenya, and the Rift Valley. Your dream safari starts here!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSafaris.map((safari) => (
              <SafariCard
                key={safari.id}
                id={safari.id}
                title={safari.title}
                image={safari.image}
                rating={safari.rating}
                description={safari.description}
                featured={safari.featured}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-safari-500 hover:bg-safari-600 text-white">
              <Link to="/safaris">View All Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Adventure Call to Action */}
      <section className="relative py-24 bg-safari-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504945005722-33670dcaf685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Safari landscape"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="safari-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Embark on Adventures<br />in Our Prime Destinations
            </h2>
            <p className="text-lg mb-8">
              Discover the wonders of Kenya's top destinations with thrilling safaris, breathtaking landscapes, and unforgettable experiences. Your adventure begins here!
            </p>
            <Button asChild size="lg" className="bg-safari-500 hover:bg-safari-600">
              <Link to="/safaris">Explore More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="safari-container">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Travelers Say</h2>
            <p className="section-subtitle">
              Read about the unforgettable experiences our guests have had on their African adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                text={testimonial.text}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-safari-500 text-white">
        <div className="safari-container">
          <div className="text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Subscribe To Our Newsletter</h2>
            <p className="mb-6">Stay updated with exclusive offers and travel tips—subscribe to our newsletter today!</p>
            <div className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
              <Button asChild className="bg-white text-safari-500 hover:bg-gray-100">
                <a href="tel:(202)883-9907">
                  Call us
                </a>
              </Button>
              <Button asChild className="bg-white text-safari-500 hover:bg-gray-100">
                <Link to="/contact">
                  Message us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
