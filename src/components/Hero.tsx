
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-corporate-dark text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504945005722-33670dcaf685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Safari landscape"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark to-transparent"></div>
      </div>

      {/* Content */}
      <div className="safari-container relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Experience Africa's Magic with Roundtrip Safaris
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Discover the untamed beauty of Africa with our expertly guided safari adventures.
            Witness breathtaking wildlife and immerse yourself in authentic cultural experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-corporate-blue hover:bg-corporate-blue/90 text-white font-semibold">
              <Link to="/safaris">
                Explore Our Safaris
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">
                Plan Your Journey
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md py-8 border-t border-white/20">
        <div className="safari-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h3 className="font-display text-xl font-semibold mb-2">Private Guide</h3>
              <p className="text-blue-100">Experience personalized adventures with expert local guides</p>
            </div>
            <div className="p-4">
              <h3 className="font-display text-xl font-semibold mb-2">Affordable Price</h3>
              <p className="text-blue-100">Luxury experiences tailored to your budget</p>
            </div>
            <div className="p-4">
              <h3 className="font-display text-xl font-semibold mb-2">Great Support</h3>
              <p className="text-blue-100">Enjoy 24/7 assistance from our dedicated team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
