import Breadcrumb from "@/components/Breadcrumb";
import getOne from "@/lib/actions/getOne";
import EditForm from "../../editForm";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const objectId = parseInt(id);

  const initialValues = await getOne("products", objectId);
  return (
    <div className="container mx-auto">
      <Breadcrumb />
      <h1>Edit Category</h1>
      <EditForm product={initialValues.data} />
    </div>
  );
}
