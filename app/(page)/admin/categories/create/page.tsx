import Breadcrumb from "@/components/Breadcrumb";
import CategoryForm from "../CategoryForm";

export default function page() {
  const initialValues = {
    name: "",
    description: "",
  };
  return (
    <div className="container mx-auto">
      <Breadcrumb />
      <h1 className="text-3xl font-semibold mt-4 mb-6">Add New Category</h1>
      <CategoryForm initialValues={initialValues} />
    </div>
  );
}
