
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interested: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      toast.success("Thank you for your message! Our safari experts will contact you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        interested: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      {/* Contact Hero */}
      <div className="relative bg-safari-900 text-white py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2734&q=80"
            alt="Contact us"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="safari-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl">
              Reach out to our safari specialists to start planning your dream African adventure.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-16">
        <div className="safari-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 shadow-sm rounded-lg border">
                <h2 className="font-display text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below, and one of our safari specialists will contact you shortly to help plan your perfect African adventure.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="interested" className="block text-sm font-medium mb-2">
                        Interested In *
                      </label>
                      <select
                        id="interested"
                        name="interested"
                        value={formData.interested}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a safari package</option>
                        <option value="maasai-mara">Maasai Mara Safari</option>
                        <option value="mount-kenya">Mount Kenya Safari</option>
                        <option value="rift-valley">Rift Valley Safari</option>
                        <option value="amboseli">Amboseli & Tsavo Safari</option>
                        <option value="zanzibar">Zanzibar Beach Escape</option>
                        <option value="animal-conservation">Animal Conservation Package</option>
                        <option value="custom">Custom Safari</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your travel plans, questions, or special requirements"
                        rows={5}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-safari-500 hover:bg-safari-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white p-8 shadow-sm rounded-lg border mb-8">
                <h2 className="font-display text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <MapPin size={24} className="text-safari-500 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                      <p className="text-gray-600">
                        555 Republic Dr Suite 235<br />
                        Plano, TX 75074-5481
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Phone size={24} className="text-safari-500 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone Number</h3>
                      <p className="text-gray-600">
                        <a href="tel:(202)883-9907" className="hover:text-safari-500">
                          (202) 883-9907
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Mail size={24} className="text-safari-500 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Address</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@roundtripsafaris.com" className="hover:text-safari-500">
                          info@roundtripsafaris.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Clock size={24} className="text-safari-500 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Mon - Sat: 7:00AM - 6:00PM<br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-safari-50 p-8 rounded-lg border border-safari-100">
                <h3 className="font-display text-xl font-semibold mb-4">Need Help Now?</h3>
                <p className="text-gray-700 mb-6">
                  Our safari experts are ready to assist you with any questions or booking requests.
                </p>
                <Button asChild className="w-full" variant="outline">
                  <a href="tel:(202)883-9907">
                    Call Us 24/7
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-12 bg-gray-50">
        <div className="safari-container">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">Our Location</h2>
          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden shadow-sm">
            {/* Replace with actual map if needed */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-600">Map placeholder - Google Maps would be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
