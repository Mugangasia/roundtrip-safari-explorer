import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { safaris, Safari } from "@/data/safaris";
import { promos } from "@/data/promos";
import { PromoType } from "@/components/PromoPopup";
import { Pencil, Trash2, Plus } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("packages");
  const [packages, setPackages] = useState<Safari[]>([]);
  const [promotions, setPromotions] = useState<PromoType[]>([]);
  const [isPackageDialogOpen, setIsPackageDialogOpen] = useState(false);
  const [isPromoDialogOpen, setIsPromoDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentPackage, setCurrentPackage] = useState<Safari | null>(null);
  const [currentPromo, setCurrentPromo] = useState<PromoType | null>(null);
  const [itemToDelete, setItemToDelete] = useState<{id: string, type: 'package' | 'promo'} | null>(null);

  // Package form state
  const [packageFormData, setPackageFormData] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    price: 0,
    days: 0,
    location: "",
    rating: 4.5,
    featured: false,
  });

  // Promo form state
  const [promoFormData, setPromoFormData] = useState<PromoType>({
    id: "",
    title: "",
    description: "",
    image: "",
    linkText: "Learn More",
    linkUrl: "/contact",
    delay: 5,
    enabled: true,
    relatedPackages: [],
  });

  useEffect(() => {
    // Load initial data
    setPackages(safaris);
    setPromotions(promos);
  }, []);

  const handlePackageChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setPackageFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handlePromoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setPromoFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSwitchChange = (checked: boolean, formType: 'package' | 'promo') => {
    if (formType === 'package') {
      setPackageFormData((prev) => ({
        ...prev,
        featured: checked,
      }));
    } else {
      setPromoFormData((prev) => ({
        ...prev,
        enabled: checked,
      }));
    }
  };

  const handleAddNewPackage = () => {
    // Reset form data and open dialog
    setPackageFormData({
      id: "",
      title: "",
      description: "",
      image: "",
      price: 0,
      days: 0,
      location: "",
      rating: 4.5,
      featured: false,
    });
    setCurrentPackage(null);
    setIsPackageDialogOpen(true);
  };

  const handleAddNewPromo = () => {
    // Reset form data and open dialog
    setPromoFormData({
      id: "",
      title: "",
      description: "",
      image: "",
      linkText: "Learn More",
      linkUrl: "/contact",
      delay: 5,
      enabled: true,
      relatedPackages: [],
    });
    setCurrentPromo(null);
    setIsPromoDialogOpen(true);
  };

  const handleEditPackage = (id: string) => {
    const packageToEdit = packages.find((p) => p.id === id);
    if (packageToEdit) {
      setCurrentPackage(packageToEdit);
      setPackageFormData({
        id: packageToEdit.id,
        title: packageToEdit.title,
        description: packageToEdit.description,
        image: packageToEdit.image,
        price: packageToEdit.price,
        days: packageToEdit.days,
        location: packageToEdit.location,
        rating: packageToEdit.rating,
        featured: packageToEdit.featured,
      });
      setIsPackageDialogOpen(true);
    }
  };

  const handleEditPromo = (id: string) => {
    const promoToEdit = promotions.find((p) => p.id === id);
    if (promoToEdit) {
      setCurrentPromo(promoToEdit);
      setPromoFormData({
        ...promoToEdit
      });
      setIsPromoDialogOpen(true);
    }
  };

  const handleDelete = (id: string, type: 'package' | 'promo') => {
    setItemToDelete({id, type});
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (!itemToDelete) return;
    
    if (itemToDelete.type === 'package') {
      setPackages(packages.filter((p) => p.id !== itemToDelete.id));
      toast.success("Safari package deleted successfully!");
    } else {
      setPromotions(promotions.filter((p) => p.id !== itemToDelete.id));
      toast.success("Promotion deleted successfully!");
    }
    
    setIsDeleteDialogOpen(false);
    setItemToDelete(null);
  };

  const handlePackageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a new package or update existing one
    const newPackageData = {
      ...packageFormData,
      // Add missing fields with default values
      gallery: [packageFormData.image],
      longDescription: packageFormData.description,
      groupSize: "2-10 people",
      highlights: ["Default highlight"],
      itinerary: [
        {
          day: 1,
          title: "Day 1",
          description: "Default day description",
          meals: ["breakfast"],
          accommodation: "Default accommodation",
        },
      ],
      inclusions: ["All accommodations", "All meals as indicated"],
      exclusions: ["International flights", "Travel insurance"],
    } as Safari;

    if (currentPackage) {
      // Update existing package
      setPackages(
        packages.map((p) => (p.id === packageFormData.id ? newPackageData : p))
      );
      toast.success("Safari package updated successfully!");
    } else {
      // Create a new package with a generated id
      const newId = packageFormData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      const newPackage = {
        ...newPackageData,
        id: newId,
      };

      setPackages([...packages, newPackage]);
      toast.success("Safari package created successfully!");
    }

    setIsPackageDialogOpen(false);
  };

  const handlePromoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentPromo) {
      // Update existing promo
      setPromotions(
        promotions.map((p) => (p.id === promoFormData.id ? promoFormData : p))
      );
      toast.success("Promotion updated successfully!");
    } else {
      // Create a new promo with a generated id
      const newId = promoFormData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      const newPromo = {
        ...promoFormData,
        id: newId,
      };

      setPromotions([...promotions, newPromo]);
      toast.success("Promotion created successfully!");
    }

    setIsPromoDialogOpen(false);
  };

  return (
    <Layout>
      {/* Admin Header */}
      <div className="bg-white border-b">
        <div className="safari-container py-8">
          <h1 className="font-display text-3xl font-bold mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mb-6">
            Manage safari packages and promotional offers.
          </p>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="packages">Safari Packages</TabsTrigger>
              <TabsTrigger value="promos">Promotions</TabsTrigger>
            </TabsList>

            <TabsContent value="packages">
              <Button
                onClick={handleAddNewPackage}
                className="bg-safari-500 hover:bg-safari-600"
              >
                <Plus size={18} className="mr-2" /> Add New Package
              </Button>
            </TabsContent>

            <TabsContent value="promos">
              <Button
                onClick={handleAddNewPromo}
                className="bg-safari-500 hover:bg-safari-600"
              >
                <Plus size={18} className="mr-2" /> Add New Promotion
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Content based on selected tab */}
      <div className="safari-container py-8">
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          
          {/* Packages Tab Content */}
          {activeTab === "packages" && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {packages.map((pkg) => (
                  <TableRow key={pkg.id}>
                    <TableCell className="font-medium">{pkg.title}</TableCell>
                    <TableCell>${pkg.price.toLocaleString()}</TableCell>
                    <TableCell>{pkg.days} days</TableCell>
                    <TableCell>{pkg.location}</TableCell>
                    <TableCell>
                      {pkg.featured ? (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          Featured
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                          Not Featured
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleEditPackage(pkg.id)}
                        >
                          <Pencil size={16} />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleDelete(pkg.id, 'package')}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}

                {packages.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                      No safari packages found. Add your first package!
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}

          {/* Promos Tab Content */}
          {activeTab === "promos" && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Delay (sec)</TableHead>
                  <TableHead>Link</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {promotions.map((promo) => (
                  <TableRow key={promo.id}>
                    <TableCell className="font-medium">{promo.title}</TableCell>
                    <TableCell>{promo.delay}</TableCell>
                    <TableCell>{promo.linkUrl}</TableCell>
                    <TableCell>
                      {promo.enabled ? (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                          Disabled
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleEditPromo(promo.id)}
                        >
                          <Pencil size={16} />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleDelete(promo.id, 'promo')}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}

                {promotions.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                      No promotions found. Add your first promotion!
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
      </div>

      {/* Package Dialog */}
      <Dialog open={isPackageDialogOpen} onOpenChange={setIsPackageDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {currentPackage ? "Edit Safari Package" : "Add New Safari Package"}
            </DialogTitle>
            <DialogDescription>
              {currentPackage
                ? "Update the details of your safari package."
                : "Add a new safari package to your website."}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handlePackageSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <Label htmlFor="title">Package Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={packageFormData.title}
                  onChange={handlePackageChange}
                  required
                  placeholder="e.g., Maasai Mara Safari"
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={packageFormData.description}
                  onChange={handlePackageChange}
                  required
                  placeholder="Provide a brief description of this safari package"
                  rows={3}
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="image">Main Image URL *</Label>
                <Input
                  id="image"
                  name="image"
                  value={packageFormData.image}
                  onChange={handlePackageChange}
                  required
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <Label htmlFor="price">Price (USD) *</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  value={packageFormData.price}
                  onChange={handlePackageChange}
                  required
                  min={0}
                />
              </div>

              <div>
                <Label htmlFor="days">Duration (Days) *</Label>
                <Input
                  id="days"
                  name="days"
                  type="number"
                  value={packageFormData.days}
                  onChange={handlePackageChange}
                  required
                  min={1}
                />
              </div>

              <div>
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  name="location"
                  value={packageFormData.location}
                  onChange={handlePackageChange}
                  required
                  placeholder="e.g., Maasai Mara, Kenya"
                />
              </div>

              <div>
                <Label htmlFor="rating">Rating (1-5) *</Label>
                <Input
                  id="rating"
                  name="rating"
                  type="number"
                  value={packageFormData.rating}
                  onChange={handlePackageChange}
                  required
                  min={1}
                  max={5}
                  step={0.1}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={packageFormData.featured}
                  onCheckedChange={(checked) => handleSwitchChange(checked, 'package')}
                />
                <Label htmlFor="featured">Featured Package</Label>
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsPackageDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-safari-500 hover:bg-safari-600">
                {currentPackage ? "Update Package" : "Add Package"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Promo Dialog */}
      <Dialog open={isPromoDialogOpen} onOpenChange={setIsPromoDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {currentPromo ? "Edit Promotion" : "Add New Promotion"}
            </DialogTitle>
            <DialogDescription>
              {currentPromo
                ? "Update the details of your promotional offer."
                : "Add a new promotional offer to display to users."}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handlePromoSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <Label htmlFor="promo-title">Promotion Title *</Label>
                <Input
                  id="promo-title"
                  name="title"
                  value={promoFormData.title}
                  onChange={handlePromoChange}
                  required
                  placeholder="e.g., Group Safari Special"
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="promo-description">Description *</Label>
                <Textarea
                  id="promo-description"
                  name="description"
                  value={promoFormData.description}
                  onChange={handlePromoChange}
                  required
                  placeholder="Describe this promotional offer"
                  rows={3}
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="promo-image">Image URL</Label>
                <Input
                  id="promo-image"
                  name="image"
                  value={promoFormData.image || ""}
                  onChange={handlePromoChange}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <Label htmlFor="promo-link-text">Button Text *</Label>
                <Input
                  id="promo-link-text"
                  name="linkText"
                  value={promoFormData.linkText}
                  onChange={handlePromoChange}
                  required
                  placeholder="e.g., Learn More"
                />
              </div>

              <div>
                <Label htmlFor="promo-link-url">Button URL *</Label>
                <Input
                  id="promo-link-url"
                  name="linkUrl"
                  value={promoFormData.linkUrl}
                  onChange={handlePromoChange}
                  required
                  placeholder="/contact"
                />
              </div>

              <div>
                <Label htmlFor="promo-delay">Display Delay (seconds) *</Label>
                <Input
                  id="promo-delay"
                  name="delay"
                  type="number"
                  value={promoFormData.delay}
                  onChange={handlePromoChange}
                  required
                  min={0}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="promo-enabled"
                  checked={promoFormData.enabled}
                  onCheckedChange={(checked) => handleSwitchChange(checked, 'promo')}
                />
                <Label htmlFor="promo-enabled">Enable Promotion</Label>
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsPromoDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-safari-500 hover:bg-safari-600">
                {currentPromo ? "Update Promotion" : "Add Promotion"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Delete {itemToDelete?.type === 'package' ? 'Safari Package' : 'Promotion'}
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this {itemToDelete?.type === 'package' ? 'safari package' : 'promotion'}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Admin;
