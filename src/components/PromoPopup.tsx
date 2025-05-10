
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

export type PromoType = {
  id: string;
  title: string;
  description: string;
  image?: string;
  linkText: string;
  linkUrl: string;
  delay: number; // Delay in seconds before showing
  enabled: boolean;
  relatedPackages?: string[]; // IDs of related packages
};

interface PromoPopupProps {
  promo?: PromoType;
  currentPackage?: string; // Current package ID if on a package detail page
}

// Default promo data
const defaultPromo: PromoType = {
  id: "group-safari-promo",
  title: "Group Safari Special Offer",
  description: "Book for 4 or more people and get 15% off your entire safari experience! Limited time offer for family and friends group adventures.",
  image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80",
  linkText: "Learn More",
  linkUrl: "/contact",
  delay: 5, // 5 seconds
  enabled: true
};

const PromoPopup = ({ promo = defaultPromo, currentPackage }: PromoPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Skip if promo is disabled
    if (!promo.enabled) return;
    
    // Skip if this promo is limited to specific packages and we're not on one of those pages
    if (promo.relatedPackages?.length && currentPackage && !promo.relatedPackages.includes(currentPackage)) {
      return;
    }

    // Check if this promo has been dismissed recently
    const dismissedPromos = JSON.parse(localStorage.getItem("dismissedPromos") || "{}");
    
    if (dismissedPromos[promo.id] && (Date.now() - dismissedPromos[promo.id]) < 24 * 60 * 60 * 1000) {
      // If dismissed in the last 24 hours, don't show again
      return;
    }

    // Show popup after delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, promo.delay * 1000);

    return () => clearTimeout(timer);
  }, [promo, currentPackage]);

  const handleDismiss = () => {
    setIsOpen(false);
    
    // Store dismissal time in localStorage
    const dismissedPromos = JSON.parse(localStorage.getItem("dismissedPromos") || "{}");
    dismissedPromos[promo.id] = Date.now();
    localStorage.setItem("dismissedPromos", JSON.stringify(dismissedPromos));
  };

  if (!promo.enabled) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" onClick={handleDismiss} />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        <DialogHeader>
          <DialogTitle className="text-xl font-display font-bold">{promo.title}</DialogTitle>
        </DialogHeader>
        
        {promo.image && (
          <div className="relative h-48 overflow-hidden rounded-md mb-4">
            <img 
              src={promo.image} 
              alt={promo.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <DialogDescription className="text-base">{promo.description}</DialogDescription>
        
        <div className="mt-4 flex justify-center">
          <Button asChild className="bg-safari-500 hover:bg-safari-600 font-medium">
            <Link to={promo.linkUrl}>{promo.linkText}</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromoPopup;
