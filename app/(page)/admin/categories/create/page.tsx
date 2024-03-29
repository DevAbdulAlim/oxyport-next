import Breadcrumb from "@/components/Breadcrumb";
import CreateForm from "../createForm";

export default function page() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mt-4 mb-6">Add New Category</h1>
      <CreateForm />
    </div>
  );
}
