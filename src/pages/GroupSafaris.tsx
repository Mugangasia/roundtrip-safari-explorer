
import { useState } from "react";
import { groupPackages } from "@/data/groupSafaris";
import GroupPackageCard from "@/components/GroupPackageCard";
import Layout from "@/components/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Heart, Cake, Crown, Users } from "lucide-react";

const GROUP_TYPES = [
  { id: "all", label: "All Packages", icon: Users },
  { id: "honeymoon", label: "Honeymoon", icon: Heart },
  { id: "bridal", label: "Bridal", icon: Cake },
  { id: "king", label: "King's Package", icon: Crown },
  { id: "queen", label: "Queen's Package", icon: Crown },
  { id: "mother", label: "Mother's Package", icon: Users },
];

const GroupSafaris = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredPackages = activeTab === "all" 
    ? groupPackages 
    : groupPackages.filter(pkg => pkg.type === activeTab);

  return (
    <Layout>
      <section className="bg-gradient-to-b from-safari-100/40 to-white py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Specialized Safari Packages
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Experience Africa's wildlife with our specially curated group packages
              designed for unique experiences and celebrations.
            </p>
          </div>

          <div className="mb-12">
            <Tabs 
              defaultValue="all" 
              value={activeTab}
              onValueChange={(value) => setActiveTab(value)}
              className="w-full"
            >
              <div className="flex justify-center mb-8">
                <TabsList className="bg-safari-50 p-1">
                  {GROUP_TYPES.map((type) => {
                    const Icon = type.icon;
                    return (
                      <TabsTrigger 
                        key={type.id} 
                        value={type.id}
                        className="data-[state=active]:text-white data-[state=active]:bg-safari-600"
                      >
                        <Icon className="mr-2 h-4 w-4" />
                        <span className="hidden sm:inline">{type.label}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </div>

              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPackages.map((pkg) => (
                    <GroupPackageCard key={pkg.id} package={pkg} />
                  ))}
                </div>

                {filteredPackages.length === 0 && (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-semibold">No packages found</h3>
                    <p className="text-muted-foreground mt-2">
                      Please check back later or try a different category.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-16 bg-safari-50/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">
              Plan Your Perfect Group Safari
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our specialized packages can be customized to meet your group's specific needs. 
              Contact us to start planning your perfect African adventure.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GroupSafaris;
