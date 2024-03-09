"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FcDoughnutChart } from "react-icons/fc";
import * as Yup from "yup";

import { useState } from "react";
import Link from "@/components/ui/link";
import { forgotPassword } from "@/lib/actions/auth/forgotPassword";
import Processing from "@/components/processing";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const SuccessMessage = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-8 rounded-md mx-3 shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Request Accepted!</h1>
          <p className="text-lg text-gray-700 mb-4">
            A password reset link has been sent to your email. Please check your
            inbox and follow the instructions to reset your password.
          </p>
          <Link to="/">Back To home</Link>
        </div>
      </div>
    );
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    const response = await forgotPassword(values);
    setLoading(false);
    if (response) {
      console.log("Form submitted with values:", values);
      setSuccess(true);
    } else {
    }
  };

  if (loading) {
    return <Processing />;
  }

  if (success) {
    return <SuccessMessage />;
  }

  return (
    <section className="mx-3">
      <div className="container mx-auto">
        <div className="flex justify-center items-center w-full h-screen">
          <div className="shadow-2xl w-[500px] h-[500px]  p-8 md:p-12 rounded-md">
            <div className="flex justify-center items-center">
              <span className="text-5xl">
                <FcDoughnutChart />
              </span>
            </div>

            <h1 className="text-2xl mb-6 text-center">Welcome to Oxyport</h1>
            <h3 className="text-center mb-3 text-3xl font-bold">
              Forgot your password?
            </h3>
            <p className="text-center mb-3 text-gray-600">
              Please enter the email address associated with your account and We
              will email you a link to reset your password.
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="mb-3">
                  <label htmlFor="email">Enter Your Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="border mt-2 py-2 px-4 w-full rounded-md"
                    placeholder="example@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    className="text-red-500"
                    component="div"
                  />
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    className="bg-blue-900 text-white w-full py-2 px-4 rounded-md"
                  >
                    Send Request
                  </button>
                </div>
              </Form>
            </Formik>

            <p className="text-center my-2">
              {"< "}
              <Link to="/login" variant="link">
                Return to sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
