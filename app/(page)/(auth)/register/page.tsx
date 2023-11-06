"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FcDoughnutChart } from "react-icons/fc";
import * as Yup from "yup";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import Link from "next/link";

export default function Register() {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    agreedToTerms: Yup.boolean().oneOf(
      [true],
      "You must agree to the Terms and Conditions"
    ),
  });

  const handleSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
  };

  const handleCheckboxChange = () => {
    setAgreedToTerms(!agreedToTerms);
  };

  return (
    <section className="mx-3">
      <div className="container mx-auto">
        <div className="flex justify-center items-center w-full h-full">
          <div className="shadow-2xl w-[500px] my-12 p-8 md:p-12 rounded-md">
            <div className="flex justify-center items-center">
              <span className="text-5xl">
                <FcDoughnutChart />
              </span>
            </div>

            <h1 className="text-2xl mb-6 text-center">Welcome to Oxyport</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="mb-3">
                  <label htmlFor="name">Full Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="border mt-2 py-2 px-4 w-full rounded-md"
                    placeholder="John Doe"
                  />
                  <ErrorMessage
                    name="name"
                    className="text-red-500"
                    component="div"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
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

                <div className="mb-3">
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
                  <Field
                    type="checkbox"
                    id="agreedToTerms"
                    name="agreedToTerms"
                    checked={agreedToTerms}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="agreedToTerms">
                    {" "}
                    By signing up, you agree to{" "}
                    <Link href="" className="underline">
                      Terms & Condition
                    </Link>
                  </label>
                  <ErrorMessage
                    name="agreedToTerms"
                    className="text-red-500"
                    component="div"
                  />
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    disabled={!agreedToTerms}
                    className={`${
                      agreedToTerms ? "bg-blue-900" : "bg-gray-500"
                    }  text-white w-full py-2 px-4 rounded-md`}
                  >
                    Create Account
                  </button>
                </div>
              </Form>
            </Formik>

            <div className="flex my-8 items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <div className="mx-4 text-gray-500">or</div>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <button
              type="button"
              className="bg-blue-500 mb-3 flex justify-center items-center text-white w-full py-2 px-4 rounded-md"
            >
              <span className="text-xl mr-2">
                <BsFacebook />
              </span>
              Continue With Facebook
            </button>
            <button
              type="button"
              className="bg-red-500 mb-3  flex justify-center items-center text-white w-full py-2 px-4 rounded-md"
            >
              <span className="text-xl mr-2">
                <AiFillGoogleCircle />
              </span>
              Continue With Google
            </button>
            <p className="text-center my-2">
              Already have account?{" "}
              <Link href="" className="underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
