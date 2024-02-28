"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSearchParams } from "next/navigation";
import { FcDoughnutChart } from "react-icons/fc";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import Link from "@/components/ui/link";
import { resetPassword } from "@/lib/actions/auth/resetPassword";
import Processing from "@/components/processing";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  // fetch token
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setFailed(true);
    }
  }, [token]);

  const SuccessMessage = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-8 rounded-md mx-3 shadow-lg">
          <h1 className="text-4xl font-bold mb-4">
            Password reset successfully!
          </h1>
          <Link to="/auth/login">Login</Link>
        </div>
      </div>
    );
  };

  const FailMessage = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-8 rounded-md mx-3 shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Password reset Failed!</h1>
          <p className="text-lg text-gray-700 mb-4">
            Oops! It seems there was an issue with the password reset process.
            Please make sure the provided token is valid and try again. If the
            problem persists, you can contact support.
          </p>
          <Link to="/">Back to home</Link>
        </div>
      </div>
    );
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);

    try {
      if (!token) {
        throw new Error("Invalid token");
      }

      const response = await resetPassword({
        password: values.password,
        token,
      });

      if (!response) {
        console.error("Password reset failed");
        setFailed(true);
      } else {
        console.log("Password reset successful");
        setSuccess(true);
      }
    } catch (error) {
      console.error("Password reset failed", error);
      setFailed(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Processing />;
  }

  if (failed) {
    return <FailMessage />;
  }

  if (success) {
    return <SuccessMessage />;
  }

  return (
    <section className="mx-3">
      <div className="container mx-auto">
        <div className="flex justify-center items-center w-full h-screen">
          <div className="shadow-2xl w-[500px] h-[600px]  p-8 md:p-12 rounded-md">
            <div className="flex justify-center items-center">
              <span className="text-5xl">
                <FcDoughnutChart />
              </span>
            </div>

            <h1 className="text-2xl mb-6 text-center">Welcome to Oxyport</h1>
            <h3 className="text-center mb-3 text-3xl font-bold">
              Reset Password!
            </h3>
            <p className="text-center italic text-gray-500">
              {" "}
              You are on the password reset page. Enter your new password below.
            </p>

            <Formik
              initialValues={{ password: "", confirmPassword: "" }}
              validationSchema={Yup.object({
                password: Yup.string()
                  .min(8, "Password must be at least 8 characters")
                  .required("Password is required"),
                confirmPassword: Yup.string()
                  .oneOf([Yup.ref("password")], "Passwords must match")
                  .required("Confirm Password is required"),
              })}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="border mt-2 py-2 px-4 w-full rounded-md"
                    placeholder="********"
                  />
                  <ErrorMessage
                    name="password"
                    className="text-red-500"
                    component="div"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="confirmPassword">Retype Password</label>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="border mt-2 py-2 px-4 w-full rounded-md"
                    placeholder="********"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    className="text-red-500"
                    component="div"
                  />
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    className="bg-blue-900 text-white w-full py-2 px-4 rounded-md"
                  >
                    Reset Password
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
