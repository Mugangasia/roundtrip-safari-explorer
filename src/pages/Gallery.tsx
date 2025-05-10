
import { useState } from "react";
import Layout from "@/components/Layout";
import { safaris } from "@/data/safaris";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ImageCategory = "all" | "wildlife" | "landscapes" | "cultural" | "accommodations";

const galleryImages = [
  // Combine gallery images from all the safari packages
  ...safaris.map(safari => safari.gallery).flat(),
  // Additional gallery images
  "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2352&q=80",
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80",
  "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2352&q=80",
];

// Remove duplicates
const uniqueGalleryImages = [...new Set(galleryImages)];

// Assign random categories to images for demo purposes
const categorizedImages = uniqueGalleryImages.map((image) => {
  const categories: ImageCategory[] = ["wildlife", "landscapes", "cultural", "accommodations"];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  return {
    url: image,
    category: randomCategory,
    title: `African ${randomCategory.charAt(0).toUpperCase() + randomCategory.slice(1)}`,
    description: `Beautiful image of African ${randomCategory}`,
  };
});

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<ImageCategory>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "all"
    ? categorizedImages
    : categorizedImages.filter(img => img.category === selectedCategory);

  const handleCategoryChange = (category: ImageCategory) => {
    setSelectedCategory(category);
  };
  
  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <Layout>
      {/* Gallery Hero */}
      <div className="relative bg-safari-900 text-white py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80"
            alt="Safari Gallery"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="safari-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Safari Gallery
            </h1>
            <p className="text-lg md:text-xl">
              Explore our collection of stunning African safari images showcasing wildlife, landscapes, and memorable moments.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-gray-50 py-6 border-b">
        <div className="safari-container">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === "all"
                  ? "bg-safari-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleCategoryChange("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === "wildlife"
                  ? "bg-safari-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleCategoryChange("wildlife")}
            >
              Wildlife
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === "landscapes"
                  ? "bg-safari-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleCategoryChange("landscapes")}
            >
              Landscapes
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === "cultural"
                  ? "bg-safari-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleCategoryChange("cultural")}
            >
              Cultural
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === "accommodations"
                  ? "bg-safari-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleCategoryChange("accommodations")}
            >
              Accommodations
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="safari-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div 
                    className="overflow-hidden rounded-lg cursor-pointer group shadow-sm h-64"
                    onClick={() => handleImageClick(image.url)}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{image.title}</DialogTitle>
                    <DialogDescription>{image.description}</DialogDescription>
                  </DialogHeader>
                  <div className="mt-2">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No images found</h3>
              <p className="text-gray-600">
                No images were found in the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image Showcase */}
      <section className="bg-safari-950 py-16 text-white">
        <div className="safari-container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Experience Africa Through Our Lens</h2>
          <p className="text-safari-100 max-w-2xl mx-auto mb-10">
            Our gallery captures the breathtaking beauty and unforgettable moments of African safaris. Each image tells a story of adventure, wilderness, and discovery.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[...Array(4)].map((_, index) => {
              const randomImageIndex = Math.floor(Math.random() * categorizedImages.length);
              return (
                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={categorizedImages[randomImageIndex].url} 
                    alt="Safari highlight"
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
