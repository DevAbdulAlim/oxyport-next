import Link from "@/components/ui/link";
import { BiSolidShow } from "react-icons/bi";

interface Order {
  id: number;
  userId: number;
  total: number;
  status: string;
  paymentMethod: string;
  transactionId?: string;
  deliveryDate?: string;
  createdAt: string;
  updatedAt: string;
}

interface OrderTableProps {
  orders: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">User ID</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Payment Method</th>
            <th className="px-4 py-2">Transaction ID</th>
            <th className="px-4 py-2">Delivery Date</th>
            <th className="px-4 py-2">Created At</th>
            <th className="px-4 py-2">Updated At</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(orders) &&
            orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-100">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.userId}</td>
                <td className="px-4 py-2">{order.total}</td>
                <td className="px-4 py-2">{order.status}</td>
                <td className="px-4 py-2">{order.paymentMethod}</td>
                <td className="px-4 py-2">{order.transactionId}</td>
                <td className="px-4 py-2">{order.deliveryDate}</td>
                <td className="px-4 py-2">{order.createdAt}</td>
                <td className="px-4 py-2">{order.updatedAt}</td>
                <td className="flex space-x-4 px-4 py-2">
                  <Link variant="success" to={`/admin/orders/${order.id}/show`}>
                    <BiSolidShow />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
