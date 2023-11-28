'use client'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { addOne } from "../services/addOne";
import { useState } from "react";
import { editOne } from "../services/editOne";

const validateSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
});

type initialTypes = {
  initialValues: {
    name: string;
    description: string;
  };
  id?: number;
  update?: boolean;
};

export default function CategoryForm({
  initialValues,
  id = 1,
  update = false,
}: initialTypes) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState(initialValues);

  const onSubmit = async (
    values: typeof formData,
    actions: FormikHelpers<typeof formData>
  ) => {
    try {
      if (update) {
        const newData = await editOne("categories", id, values);
        setSuccessMessage("Updated Successfully");
        setFormData({ ...newData.data });
        actions.resetForm({ values: { ...newData.data } });
      } else {
        await addOne("categories", values);
        setSuccessMessage("Added Successfully");
        setFormData({ ...initialValues });
        actions.resetForm({ values: { ...initialValues } });
      }

      setIsSubmitted(true);

      setTimeout(() => {
        setSuccessMessage("");
        setIsSubmitted(false);
      }, 3000); // Show the success message for 3 seconds
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("Failed to submit");
      setIsSubmitted(false);
    }
  };

  return (
    <section className="relative">
      {isSubmitted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md z-10">
            {successMessage}
          </div>
        </div>
      )}
      <Formik
        initialValues={formData}
        validationSchema={validateSchema}
        onSubmit={onSubmit}
      >
        <Form className="m-4 shadow-md p-8 bg-white rounded-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Category Name
            </label>
            <Field
              type="text"
              id="name"
              className="w-full border p-2 rounded-md"
              name="name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-semibold mb-2"
            >
              Category Description
            </label>
            <Field
              type="text"
              id="description"
              className="w-full border p-2 rounded-md"
              name="description"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
}
