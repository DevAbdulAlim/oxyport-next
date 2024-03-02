import Breadcrumb from "@/components/Breadcrumb";
import ProductCreateForm from "../createForm";

export default function page() {
  return (
    <div className="container mx-auto">
      <Breadcrumb />
      <h1 className="text-3xl font-semibold mt-4 mb-6">Add New Category</h1>
      <ProductCreateForm />
    </div>
  );
}
