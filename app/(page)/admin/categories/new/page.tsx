import Breadcrumb from "../../components/Breadcrumb";
import CategoryForm from "../CategoryForm";

export default function page() {
  const initialValues = {
    name: "",
    description: ""
  }
  return <div className="container mx-auto">
      <Breadcrumb />
    <h1>Add Category</h1>
    <CategoryForm initialValues={initialValues}  />
  </div>
}
