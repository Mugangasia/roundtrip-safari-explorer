
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
import { Pencil, Trash2, Plus } from "lucide-react";
import { toast } from "sonner";

const Admin = () => {
  const [packages, setPackages] = useState<Safari[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentPackage, setCurrentPackage] = useState<Safari | null>(null);
  const [packageToDelete, setPackageToDelete] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
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

  useEffect(() => {
    // Load packages from data
    setPackages(safaris);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      featured: checked,
    }));
  };

  const handleAddNew = () => {
    // Reset form data and open dialog
    setFormData({
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
    setIsDialogOpen(true);
  };

  const handleEdit = (id: string) => {
    const packageToEdit = packages.find((p) => p.id === id);
    if (packageToEdit) {
      setCurrentPackage(packageToEdit);
      setFormData({
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
      setIsDialogOpen(true);
    }
  };

  const handleDelete = (id: string) => {
    setPackageToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (packageToDelete) {
      setPackages(packages.filter((p) => p.id !== packageToDelete));
      toast.success("Safari package deleted successfully!");
      setIsDeleteDialogOpen(false);
      setPackageToDelete(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a new package or update existing one
    const newPackageData = {
      ...formData,
      // Add missing fields with default values
      gallery: [formData.image],
      longDescription: formData.description,
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
        packages.map((p) => (p.id === formData.id ? newPackageData : p))
      );
      toast.success("Safari package updated successfully!");
    } else {
      // Create a new package with a generated id
      const newId = formData.title
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

    setIsDialogOpen(false);
  };

  return (
    <Layout>
      {/* Admin Header */}
      <div className="bg-white border-b">
        <div className="safari-container py-8">
          <h1 className="font-display text-3xl font-bold mb-2">
            Safari Packages Management
          </h1>
          <p className="text-gray-600 mb-6">
            Add, edit, or remove safari packages from your website.
          </p>

          <Button
            onClick={handleAddNew}
            className="bg-safari-500 hover:bg-safari-600"
          >
            <Plus size={18} className="mr-2" /> Add New Package
          </Button>
        </div>
      </div>

      {/* Packages Table */}
      <div className="safari-container py-8">
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
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
                        onClick={() => handleEdit(pkg.id)}
                      >
                        <Pencil size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDelete(pkg.id)}
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
        </div>
      </div>

      {/* Add/Edit Package Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <Label htmlFor="title">Package Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Maasai Mara Safari"
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
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
                  value={formData.image}
                  onChange={handleChange}
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
                  value={formData.price}
                  onChange={handleChange}
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
                  value={formData.days}
                  onChange={handleChange}
                  required
                  min={1}
                />
              </div>

              <div>
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
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
                  value={formData.rating}
                  onChange={handleChange}
                  required
                  min={1}
                  max={5}
                  step={0.1}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={handleSwitchChange}
                />
                <Label htmlFor="featured">Featured Package</Label>
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-safari-500 hover:bg-safari-600">
                {currentPackage ? "Update Package" : "Add Package"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Safari Package</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this safari package? This action cannot be undone.
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
