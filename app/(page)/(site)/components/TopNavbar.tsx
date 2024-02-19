import {
  FaPhone,
  FaEnvelope,
  FaLanguage,
  FaMoneyBillWave,
} from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className="bg-blue-300 text-white py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Contact Information */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <span>123-456-7890</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>info@example.com</span>
          </div>
        </div>

        {/* Language and Currency Selection */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaLanguage className="mr-2" />
            <select
              className="border-none bg-transparent text-white focus:outline-none"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              {/* Add more language options as needed */}
            </select>
          </div>
          <div className="flex items-center">
            <FaMoneyBillWave className="mr-2" />
            <select
              className="border-none bg-transparent text-white focus:outline-none"
              defaultValue="usd"
            >
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              {/* Add more currency options as needed */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
