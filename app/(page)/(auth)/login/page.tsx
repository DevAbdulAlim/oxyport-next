"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FcDoughnutChart } from "react-icons/fc";
import * as Yup from "yup";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import Link from "next/link";
import { login } from "@/lib/auth/login";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values: any) => {
    const { email, password } = values;
    const isSuccess = await login(email, password);
    if (isSuccess) {
      if (pathname === "/login") {
        router.push("/");
      }
      router.refresh();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <section className="mx-3">
      <div className="container mx-auto">
        <div className="flex justify-center items-center w-full h-full">
          <div className="shadow-2xl w-[500px] my-12 p-8 md:p-12 rounded-md bg-white">
            <div className="flex justify-center items-center mb-6">
              <span className="text-5xl text-blue-900">
                <FcDoughnutChart />
              </span>
            </div>

            <h1 className="text-3xl font-semibold mb-6 text-center text-blue-900">
              Welcome to Oxyport
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="border mt-2 py-2 px-4 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="example@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    className="text-red-500 text-sm"
                    component="div"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="border mt-2 py-2 px-4 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="********"
                  />
                  <ErrorMessage
                    name="password"
                    className="text-red-500 text-sm"
                    component="div"
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="bg-blue-900 text-white w-full py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Login
                  </button>
                </div>
              </Form>
            </Formik>

            <div className="flex items-center mb-8">
              <div className="flex-1 border-t border-gray-300"></div>
              <div className="mx-4 text-gray-500">or</div>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <button
              type="button"
              className="bg-blue-500 mb-3 flex justify-center items-center text-white w-full py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              <span className="text-xl mr-2">
                <BsFacebook />
              </span>
              Continue With Facebook
            </button>
            <button
              type="button"
              className="bg-red-500 mb-3 flex justify-center items-center text-white w-full py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
            >
              <span className="text-xl mr-2">
                <AiFillGoogleCircle />
              </span>
              Continue With Google
            </button>
            <p className="text-center my-4">
              {"Don't Have an Account?"}{" "}
              <Link href="/register" className="underline font-semibold text-blue-900">
                Register
              </Link>
            </p>
            <p className="text-center bg-gray-100 px-4 py-3 my-4 rounded-md">
              Forgot your password{" "}
              <Link href="/forgot-password" className="underline font-semibold text-blue-900">
                Reset It
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  
  );
}
