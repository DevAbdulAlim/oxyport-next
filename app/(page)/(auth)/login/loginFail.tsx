import React from "react";

const LoginFailurePage = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-3xl font-bold text-red-800 mb-6">Login Failed!</h1>
      <p className="text-lg text-red-600 mb-8">
        Please check your credentials and try again.
      </p>
      <button
        onClick={onClick}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Retry
      </button>
    </div>
  );
};

export default LoginFailurePage;
