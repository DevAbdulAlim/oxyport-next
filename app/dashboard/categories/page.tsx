import { ListData } from "../components/ListData";
import { getAll } from "../services/getAll";

export default async function Page() {
  const model = "categories";
  const data = await getAll(model);

  console.log(data);

  return (
    <>
      <ListData data={data.data} model={model} />
      {/* Corrected the model prop */}
    </>
  );
}
