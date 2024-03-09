import Link from "@/components/ui/link";

const LoginSuccessPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Login Successful!
      </h1>
      <p className="text-lg text-green-600 mb-8">Welcome back!</p>
      <Link variant="success" to="/">
        Back to home
      </Link>
    </div>
  );
};

export default LoginSuccessPage;
