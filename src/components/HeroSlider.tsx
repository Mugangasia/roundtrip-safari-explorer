
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type SlideType = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
};

// Default slides - in real app, you might fetch these from API or props
const defaultSlides: SlideType[] = [
  {
    id: "slide1",
    image: "https://images.unsplash.com/photo-1504945005722-33670dcaf685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Experience Africa's Magic with Roundtrip Safaris",
    subtitle: "Discover the untamed beauty of Africa with our expertly guided safari adventures. Witness breathtaking wildlife and immerse yourself in authentic cultural experiences.",
    ctaText: "Explore Our Safaris",
    ctaLink: "/safaris",
  },
  {
    id: "slide2",
    image: "https://images.unsplash.com/photo-1534470397273-a1c5ce19aab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Unforgettable Wildlife Encounters",
    subtitle: "Get up close with Africa's magnificent wildlife in their natural habitats. Our expert guides ensure safe and memorable experiences.",
    ctaText: "Plan Your Journey",
    ctaLink: "/contact",
  },
  {
    id: "slide3",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80",
    title: "Cultural Immersion Experiences",
    subtitle: "Connect with local communities and experience authentic African traditions. Our tours blend wildlife adventure with cultural enrichment.",
    ctaText: "Discover Tours",
    ctaLink: "/safaris",
  },
];

interface HeroSliderProps {
  slides?: SlideType[];
}

const HeroSlider = ({ slides = defaultSlides }: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative bg-safari-950 text-white">
      <Carousel
        className="w-full"
        onSelect={(index) => setCurrentSlide(index)}
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              {/* Background Image with Overlay */}
              <div className="relative h-[80vh] min-h-[500px]">
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.image}
                    alt="Safari landscape"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-safari-950 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="safari-container relative z-10 flex items-center h-full">
                  <div className="max-w-3xl py-24 md:py-32">
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 
                      animate-fade-in" style={{animationDelay: '0.2s'}}>
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-safari-100 mb-8 
                      animate-fade-in" style={{animationDelay: '0.4s'}}>
                      {slide.subtitle}
                    </p>
                    {slide.ctaText && (
                      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" 
                          style={{animationDelay: '0.6s'}}>
                        <Button 
                          asChild 
                          size="lg" 
                          className="bg-safari-500 hover:bg-safari-600 text-white font-semibold"
                        >
                          <Link to={slide.ctaLink || "#"}>
                            {slide.ctaText}
                          </Link>
                        </Button>
                        <Button 
                          asChild 
                          variant="outline" 
                          size="lg" 
                          className="border-white text-white hover:bg-white/10"
                        >
                          <Link to="/contact">
                            Plan Your Journey
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom navigation arrows */}
        <div className="absolute bottom-10 right-10 flex gap-3 z-20">
          <CarouselPrevious className="relative h-10 w-10 rounded-full border-2 border-white/50 bg-black/30 hover:bg-black/50" />
          <CarouselNext className="relative h-10 w-10 rounded-full border-2 border-white/50 bg-black/30 hover:bg-black/50" />
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-safari-500" : "w-3 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>

      {/* Features Bar */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md py-8 border-t border-white/20">
        <div className="safari-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h3 className="font-display text-xl font-semibold mb-2">Private Guide</h3>
              <p className="text-safari-100">Experience personalized adventures with expert local guides</p>
            </div>
            <div className="p-4">
              <h3 className="font-display text-xl font-semibold mb-2">Affordable Price</h3>
              <p className="text-safari-100">Luxury experiences tailored to your budget</p>
            </div>
            <div className="p-4">
              <h3 className="font-display text-xl font-semibold mb-2">Great Support</h3>
              <p className="text-safari-100">Enjoy 24/7 assistance from our dedicated team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
