
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* About Hero */}
      <div className="relative bg-safari-900 text-white py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534476478164-b15fec4f091c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="About Roundtrip Safaris"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="safari-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-lg md:text-xl">
              Learn about Roundtrip Safaris, our mission, and our dedication to providing unforgettable African safari experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20">
        <div className="safari-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Roundtrip Safaris was founded with a single vision: to share the magic of Africa's wildlife and landscapes with travelers from around the world. What began as a small family business has grown into a premier safari company with a reputation for exceptional service, responsible tourism, and unforgettable experiences.
              </p>
              <p className="text-gray-700 mb-6">
                Our journey started when our founder, after years of leading safaris for large tour operators, decided to create a company that would focus on personalized experiences, environmental conservation, and supporting local communities. Today, we're proud to maintain those same values while offering world-class safari experiences.
              </p>
              <p className="text-gray-700">
                With over 15 years of experience and countless satisfied travelers, we continue to craft journeys that inspire, educate, and transform. Our team of experienced guides, all local to the regions we explore, bring unparalleled knowledge and passion to every safari.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1547970600-eab4c0f6469c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Safari guide with travelers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-safari-50">
        <div className="safari-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              To provide exceptional, sustainable safari experiences that connect people with Africa's natural wonders while supporting conservation efforts and local communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-safari-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-safari-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-center mb-4">Exceptional Experiences</h3>
              <p className="text-gray-600 text-center">
                We craft personalized safari journeys that exceed expectations, creating memories that last a lifetime through attention to detail and expert guidance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-safari-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-safari-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-center mb-4">Conservation Focus</h3>
              <p className="text-gray-600 text-center">
                We're committed to protecting Africa's wildlife and habitats through responsible tourism practices and direct support for conservation initiatives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-safari-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-safari-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-center mb-4">Community Empowerment</h3>
              <p className="text-gray-600 text-center">
                We believe in supporting local communities through employment opportunities, cultural exchange, and community development projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="safari-container">
          <h2 className="font-display text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our experienced team of safari specialists, guides, and conservation experts are passionate about creating unforgettable African adventures.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden inline-block">
                <div className="aspect-square w-48 h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-gray-400">JN</span>
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold">John Ngugi</h3>
              <p className="text-safari-500 mb-2">Founder & Lead Guide</p>
              <p className="text-gray-600 text-sm">
                With over 20 years of experience in African safaris, John's knowledge of wildlife and passion for conservation is unmatched.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden inline-block">
                <div className="aspect-square w-48 h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-gray-400">SK</span>
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold">Sarah Kimani</h3>
              <p className="text-safari-500 mb-2">Safari Specialist</p>
              <p className="text-gray-600 text-sm">
                Sarah's attention to detail ensures every safari is perfectly tailored to each client's interests, preferences, and expectations.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden inline-block">
                <div className="aspect-square w-48 h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-gray-400">DM</span>
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold">David Mutua</h3>
              <p className="text-safari-500 mb-2">Wildlife Expert</p>
              <p className="text-gray-600 text-sm">
                A trained zoologist, David brings scientific knowledge and fascinating insights to the wildlife encounters on our safaris.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden inline-block">
                <div className="aspect-square w-48 h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-gray-400">AW</span>
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold">Amina Wanjiku</h3>
              <p className="text-safari-500 mb-2">Customer Experience</p>
              <p className="text-gray-600 text-sm">
                Amina ensures seamless communication and support for all clients before, during, and after their safari adventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-safari-900 text-white">
        <div className="safari-container">
          <h2 className="font-display text-3xl font-bold mb-6 text-center">Why Choose Roundtrip Safaris?</h2>
          <p className="text-safari-100 text-center max-w-3xl mx-auto mb-12">
            We're committed to providing exceptional safari experiences that stand out from the rest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-safari-800/70 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-3">Expert Local Guides</h3>
              <p className="text-safari-100">
                Our guides are born and raised in the regions they lead safaris, providing authentic insights and unparalleled knowledge.
              </p>
            </div>

            <div className="bg-safari-800/70 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-3">Customized Experiences</h3>
              <p className="text-safari-100">
                No two safaris are alike—we tailor every journey to your interests, preferences, and travel style.
              </p>
            </div>

            <div className="bg-safari-800/70 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-3">Responsible Tourism</h3>
              <p className="text-safari-100">
                We follow strict eco-friendly practices and contribute to conservation efforts in all the areas we visit.
              </p>
            </div>

            <div className="bg-safari-800/70 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-3">Quality Accommodations</h3>
              <p className="text-safari-100">
                From luxury lodges to authentic tented camps, we select accommodations that enhance your safari experience.
              </p>
            </div>

            <div className="bg-safari-800/70 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-safari-100">
                Our team is available around the clock to ensure your safari journey is smooth, safe, and enjoyable.
              </p>
            </div>

            <div className="bg-safari-800/70 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-3">Value for Money</h3>
              <p className="text-safari-100">
                We offer competitive pricing without compromising on the quality of your safari experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="safari-container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Start Your Safari Adventure?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to speak with one of our safari specialists and begin planning your dream African adventure.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild className="bg-safari-500 hover:bg-safari-600">
              <Link to="/safaris">Explore Safaris</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
