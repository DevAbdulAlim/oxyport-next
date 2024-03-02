import Link from "@/components/ui/link";
import DeleteForm from "./deleteForm";
import { FaEdit } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  image: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Created At</th>
            <th className="px-4 py-2">Updated At</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) &&
            products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="px-4 py-2">{product.id}</td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.description}</td>
                <td className="px-4 py-2">{product.price}</td>
                <td className="px-4 py-2">{product.stock}</td>
                <td className="px-4 py-2">{product.createdAt}</td>
                <td className="px-4 py-2">{product.updatedAt}</td>
                <td className="flex space-x-4 px-4 py-2">
                  <Link
                    variant="warning"
                    to={`/admin/products/${product.id}/edit`}
                  >
                    <FaEdit />
                  </Link>
                  <Link
                    variant="success"
                    to={`/admin/products/${product.id}/show`}
                  >
                    <BiSolidShow />
                  </Link>
                  <DeleteForm id={product.id} name={product.name} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
