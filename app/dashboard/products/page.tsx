export default function page() {
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-4xl">Product List</h1>
        <div className="my-4 shadow-md overflow-auto p-4 md:p-8">
          <table className="min-w-full border">
            <thead className="text-left bg-blue-100 text-blue-950">
              <tr className="border hover:bg-blue-50">
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Image</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">InStock</th>
                <th className="py-2 px-4">User</th>
                <th className="py-2 px-4">CreatedAt</th>
                <th className="py-2 px-4">UpdatedAt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border hover:bg-blue-50">
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">Image 1</td>
                <td className="py-2 px-4">Product 1</td>
                <td className="py-2 px-4">$19.99</td>
                <td className="py-2 px-4">Category A</td>
                <td className="py-2 px-4">Yes</td>
                <td className="py-2 px-4">User 1</td>
                <td className="py-2 px-4">2023-10-22</td>
                <td className="py-2 px-4">2023-10-22</td>
              </tr>
              <tr className="border hover:bg-blue-50">
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4">Image 2</td>
                <td className="py-2 px-4">Product 2</td>
                <td className="py-2 px-4">$29.99</td>
                <td className="py-2 px-4">Category B</td>
                <td className="py-2 px-4">No</td>
                <td className="py-2 px-4">User 2</td>
                <td className="py-2 px-4">2023-10-22</td>
                <td className="py-2 px-4">2023-10-22</td>
              </tr>
              <tr className="border hover:bg-blue-50">
                <td className="py-2 px-4">3</td>
                <td className="py-2 px-4">Image 3</td>
                <td className="py-2 px-4">Product 3</td>
                <td className="py-2 px-4">$39.99</td>
                <td className="py-2 px-4">Category C</td>
                <td className="py-2 px-4">Yes</td>
                <td className="py-2 px-4">User 3</td>
                <td className="py-2 px-4">2023-10-22</td>
                <td className="py-2 px-4">2023-10-22</td>
              </tr>
              <tr className="border hover:bg-blue-50">
                <td className="py-2 px-4">4</td>
                <td className="py-2 px-4">Image 4</td>
                <td className="py-2 px-4">Product 4</td>
                <td className="py-2 px-4">$49.99</td>
                <td className="py-2 px-4">Category A</td>
                <td className="py-2 px-4">No</td>
                <td className="py-2 px-4">User 4</td>
                <td className="py-2 px-4">2023-10-22</td>
                <td className="py-2 px-4">2023-10-22</td>
              </tr>
              <tr className="border hover:bg-blue-50">
                <td className="py-2 px-4">5</td>
                <td className="py-2 px-4">Image 5</td>
                <td className="py-2 px-4">Product 5</td>
                <td className="py-2 px-4">$59.99</td>
                <td className="py-2 px-4">Category B</td>
                <td className="py-2 px-4">Yes</td>
                <td className="py-2 px-4">User 5</td>
                <td className="py-2 px-4">2023-10-22</td>
                <td className="py-2 px-4">2023-10-22</td>
              </tr>
              <tr className="border hover:bg-blue-50">
                <td className="py-2 px-4">6</td>
                <td className="py-2 px-4">Image 6</td>
                <td className="py-2 px-4">Product 6</td>
                <td className="py-2 px-4">$69.99</td>
                <td className="py-2 px-4">Category C</td>
                <td className="py-2 px-4">No</td>
                <td className="py-2 px-4">User 6</td>
                <td className="py-2 px-4">2023-10-22</td>
                <td className="py-2 px-4">2023-10-22</td>
              </tr>
              <tr className="border hover:bg-blue-50">
                <td className="py-2 px-4">7</td>
                <td className="py-2 px-4">Image 7</td>
                <td className="py-2 px-4">Product 7</td>
                <td className="py-2 px-4">$79.99</td>
                <td className="py-2 px-4">Category A</td>
                <td className="py-2 px-4">Yes</td>
                <td className="py-2 px-4">User 7</td>
                <td className="py-2 px-4">2023-10-22</td>
                <td className="py-2 px-4">2023-10-22</td>
              </tr>
            </tbody>
          </table>
        </div>

        <nav className="flex justify-center my-8">
          <ul className="flex">
            <li className="py-2 px-4 border">1</li>
            <li className="py-2 px-4 border">2</li>
            <li className="py-2 px-4 border">3</li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
