
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");
  
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-safari-950 text-white pt-12 pb-6">
      <div className="safari-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">Roundtrip Safaris</h2>
            <p className="text-safari-100 mb-6">
              Explore the wild beauty of Africa with our personalized safari adventures.
              Unforgettable experiences await with our expert guides.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-white hover:text-safari-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-safari-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.666.254 1.086.627 1.565 1.106.478.478.851.898 1.106 1.565.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.106 1.565 4.902 4.902 0 01-1.565 1.106c-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.565-1.106 4.902 4.902 0 01-1.106-1.565c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-4.123v-.08c0-2.643.013-2.987.06-4.043.049-1.064.218-1.791.465-2.427.254-.666.627-1.086 1.106-1.565.478-.478.899-.851 1.565-1.106.636-.247 1.363-.416 2.427-.465C9.506 2.013 9.866 2 12.27 2h.045z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-safari-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-safari-100">
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-safari-300" />
                <p>555 Republic Dr Suite 235<br />Plano, TX 75074-5481</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-safari-300" />
                <a href="tel:(202)883-9907" className="hover:text-white">(202) 883-9907</a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-safari-300" />
                <a href="mailto:info@roundtripsafaris.com" className="hover:text-white">info@roundtripsafaris.com</a>
              </div>
              <div>
                <h4 className="font-semibold text-white mt-4 mb-1">Walk-in Hours</h4>
                <p>Mon - Sat: 7:00AM - 6:00PM<br />Sun: Closed</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Subscribe To Our Newsletter</h3>
            <p className="text-safari-100 mb-4">Stay updated with exclusive offers and travel tips</p>
            <form onSubmit={handleSubscribe}>
              <div className="flex flex-col space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button type="submit" className="bg-safari-500 hover:bg-safari-600">
                  Subscribe
                </Button>
              </div>
            </form>
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-2">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/" className="text-safari-100 hover:text-white">Home</Link>
                <Link to="/safaris" className="text-safari-100 hover:text-white">Safaris</Link>
                <Link to="/about" className="text-safari-100 hover:text-white">About</Link>
                <Link to="/contact" className="text-safari-100 hover:text-white">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 mt-6 border-t border-white/10 text-center text-safari-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Roundtrip Safaris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
