import Link from "@/components/ui/link";
import DeleteForm from "./deleteForm";
import { FaEdit } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";

interface Category {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

interface CategoryTableProps {
  categories: Category[];
}

const CategoryTable: React.FC<CategoryTableProps> = ({ categories }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Created At</th>
            <th className="px-4 py-2">Updated At</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(categories) &&
            categories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-100">
                <td className="px-4 py-2">{category.id}</td>
                <td className="px-4 py-2">{category.name}</td>
                <td className="px-4 py-2">{category.description}</td>
                <td className="px-4 py-2">{category.createdAt}</td>
                <td className="px-4 py-2">{category.updatedAt}</td>
                <td className="flex space-x-4 px-4 py-2">
                  <Link
                    variant="warning"
                    to={`/admin/categories/${category.id}/edit`}
                  >
                    <FaEdit />
                  </Link>
                  <Link
                    variant="success"
                    to={`/admin/categories/${category.id}/show`}
                  >
                    <BiSolidShow />
                  </Link>
                  <DeleteForm id={category.id} name={category.name} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
