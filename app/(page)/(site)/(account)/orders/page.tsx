export default function orders() {
  const headers = ["Product", "Order", "Date", "Items", "Status", "Amount"];
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
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[...Array(10)].map((_, index) => (
              <tr className="hover:bg-teal-100 " key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  Haldirams Nagpur Aloo Bhujia
                </td>
                <td className="px-6 py-4 whitespace-nowrap">#14899</td>
                <td className="px-6 py-4 whitespace-nowrap">March 5, 2023 </td>
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">Processing</td>
                <td className="px-6 py-4 whitespace-nowrap">$15.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href="" className="text-blue-600 hover:text-blue-900 mr-2">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
