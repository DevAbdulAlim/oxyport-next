import Breadcrumb from "@/components/Breadcrumb";
import { cookies } from "next/headers";
import CategoryForm from "../../CategoryForm";
import getOne from "@/lib/actions/getOne";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const objectId = parseInt(id);
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return (
      <div className="container mx-auto">
        <Breadcrumb />
        <h1 className="text-red-500 text-3xl font-bold mt-8">
          Oops! Authentication Failed
        </h1>
      </div>
    );
  }
  const initialValues = await getOne("categories", objectId);

  return (
    <div className="container mx-auto">
      <Breadcrumb />
      <h1>Edit Category</h1>
      {/* <CategoryForm
        initialValues={initialValues.data}
        id={objectId}
        update={true}
      /> */}
    </div>
  );
}
