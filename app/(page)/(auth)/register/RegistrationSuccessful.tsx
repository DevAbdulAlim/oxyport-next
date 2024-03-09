import Link from "@/components/ui/link";

export default function RegistrationSuccessful() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-md mx-3 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Registration Successful!</h1>
        <p className="text-lg text-gray-700 mb-4">
          A verification email has been sent to your inbox. Please check and
          confirm to complete the registration process.
        </p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}
