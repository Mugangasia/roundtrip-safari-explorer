import { useState } from "react";
import { Link } from "react-router-dom";
import { safaris } from "@/data/safaris";
import SafariCard from "@/components/SafariCard";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Safaris = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  
  // Filter safaris based on search term
  const filteredSafaris = safaris.filter(safari => 
    safari.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    safari.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    safari.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Sort safaris based on selected option
  const sortedSafaris = [...filteredSafaris].sort((a, b) => {
    if (sortBy === "price-low") {
      return a.price - b.price;
    } else if (sortBy === "price-high") {
      return b.price - a.price;
    } else if (sortBy === "duration") {
      return a.days - b.days;
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });
  
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative bg-safari-900 text-white py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80"
            alt="Safari landscape"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="safari-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Discover Our Safari Packages
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Explore our handcrafted safari experiences designed to showcase the best of African wildlife, landscapes, and cultures.
            </p>
          </div>
        </div>
      </div>
      
      {/* Filter and Sort */}
      <div className="bg-gray-50 py-6">
        <div className="safari-container">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="w-full md:w-1/3">
              <label htmlFor="search" className="block text-sm font-medium mb-2">
                Search Safaris
              </label>
              <Input
                id="search"
                type="text"
                placeholder="Search by name, location, or description"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/4">
              <label htmlFor="sort" className="block text-sm font-medium mb-2">
                Sort By
              </label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Default Order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default Order</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSortBy("default");
              }}
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </div>
      
      {/* Safari Listings */}
      <section className="py-16">
        <div className="safari-container">
          {sortedSafaris.length > 0 ? (
            <>
              <p className="mb-8 text-gray-600">
                Showing {sortedSafaris.length} {sortedSafaris.length === 1 ? "safari" : "safaris"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedSafaris.map((safari) => (
                  <SafariCard
                    key={safari.id}
                    id={safari.id}
                    title={safari.title}
                    image={safari.image}
                    rating={safari.rating}
                    description={safari.description}
                    price={safari.price}
                    days={safari.days}
                    featured={safari.featured}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No safaris found</h3>
              <p className="text-gray-600 mb-8">
                We couldn't find any safaris matching your search criteria.
              </p>
              <Button onClick={() => setSearchTerm("")}>Clear Search</Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-safari-50 py-16 border-t border-safari-100">
        <div className="safari-container text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We specialize in creating custom safari experiences tailored to your interests, budget, and schedule.
            Contact our safari experts to start planning your dream adventure.
          </p>
          <Button asChild className="bg-safari-500 hover:bg-safari-600">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Safaris;
