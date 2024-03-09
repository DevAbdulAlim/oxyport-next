import { FaExclamationCircle } from "react-icons/fa";

const InternalServerError = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-red-600 text-4xl">
        <FaExclamationCircle />
      </div>
      <div className="ml-4">
        <h2 className="text-2xl font-bold">Internal Server Error</h2>
        <p className="text-gray-700">Sorry, something went wrong.</p>
      </div>
    </div>
  );
};

export default InternalServerError;
