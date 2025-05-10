
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="safari-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="font-display text-2xl font-bold text-safari-800">Roundtrip Safaris</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/safaris" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
              Safaris
            </Link>
            <Link to="/gallery" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <a href="tel:(202)883-9907" className="ml-4 flex items-center text-primary font-medium">
              <Phone size={18} className="mr-2" />
              <span>(202) 883-9907</span>
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <a href="tel:(202)883-9907" className="mr-4 text-primary">
              <Phone size={20} />
            </a>
            <button onClick={toggleMenu} className="text-foreground p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t mt-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="px-2 py-2 hover:bg-muted rounded-md" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/about" className="px-2 py-2 hover:bg-muted rounded-md" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/safaris" className="px-2 py-2 hover:bg-muted rounded-md" onClick={toggleMenu}>
                Safaris
              </Link>
              <Link to="/gallery" className="px-2 py-2 hover:bg-muted rounded-md" onClick={toggleMenu}>
                Gallery
              </Link>
              <Link to="/contact" className="px-2 py-2 hover:bg-muted rounded-md" onClick={toggleMenu}>
                Contact
              </Link>
              <Button asChild className="mt-2" variant="outline">
                <Link to="/safaris" onClick={toggleMenu}>
                  View Our Safaris
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
