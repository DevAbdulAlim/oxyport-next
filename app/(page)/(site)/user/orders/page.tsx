import { getAll } from "@/lib/actions/getAll";
import Link from "next/link";

export default async function orders() {
  type orderType = {
    [key: string]: any;
  };
  const headers = [
    "Order_ID",
    "Payment_Method",
    "Transaction_ID",
    "Amount",
    "Status",
  ];
  const orders = await getAll("orders", 1, 5);
  return (
    <div>
      <h2 className="text-2xl">Your Orders</h2>
      <div className="overflow-x-auto my-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((item, index) => (
                <th
                  className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  key={index}
                >
                  {item}
                </th>
              ))}
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders &&
              orders.data &&
              Array.isArray(orders.data) &&
              orders.data.map((order: any) => (
                <tr className="hover:bg-blue-100 " key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.paymentMethod}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.transactionId ? order.transactionId : "undefined"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${order.total}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.status}{" "}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      href={`/orders/${order.id}`}
                      className="text-blue-600 hover:underline mr-2"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
