import Breadcrumb from "../../../components/Breadcrumb";
import CategoryForm from "../../CategoryForm";
import getOne from "../../../services/getOne";

export default async function page({params: {id}}: {params: {id:string}}) {
  const objectId = parseInt(id)
  const initialValues = await getOne('categories', objectId)

  return <div className="container mx-auto">
      <Breadcrumb />
    <h1>Edit Category</h1>
  <CategoryForm initialValues={initialValues.data} id={objectId} update={true}  />
  </div>
}
