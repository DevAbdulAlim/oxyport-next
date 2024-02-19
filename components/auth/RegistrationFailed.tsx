import PrimaryButton from "@/components/buttons/PrimaryButton";

type PropsType = {
  resetState: () => void;
};
const RegistrationFailed: React.FC<PropsType> = ({ resetState }) => {
   const handleClick = () => {
    resetState();
    }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-md mx-3 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Registration Failed!</h1>
        <p className="text-lg text-gray-700 mb-4">
          Oops! It seems there was an issue with the registration process.
          Please try again or use another email address.
        </p>
        <PrimaryButton onClick={handleClick} text="Try Again" />
      </div>
    </div>
  );
};

export default RegistrationFailed;
