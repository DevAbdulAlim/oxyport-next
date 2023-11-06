"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FcDoughnutChart } from "react-icons/fc";
import * as Yup from "yup";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import Link from "next/link";

export default function ForgotPassword() {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const handleSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
  };

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
              <Link href="/login" className="hover:underline">
                Return to sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
