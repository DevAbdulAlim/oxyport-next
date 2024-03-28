import Link from "@/components/ui/link";
import { AiOutlineArrowLeft, AiOutlineExclamationCircle } from "react-icons/ai"; // Importing the required icons

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <AiOutlineExclamationCircle className="text-red-500 w-12 h-12 mb-4" />{" "}
      {/* Adding the Not Found icon */}
      <h2 className="text-3xl font-bold mb-4">Not Found</h2>
      <p className="text-gray-600 mb-8">
        Could not find the requested resource
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        <AiOutlineArrowLeft className="w-6 h-6" />
        Return Home
      </Link>
    </div>
  );
}
