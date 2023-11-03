"use client";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { addOne } from "../../services/addOne";
import { useState } from "react";

const validateSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
});

const initialValues = {
  name: "",
  description: "",
};

export default function Page() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState(initialValues);

  const onSubmit = async (values: typeof initialValues, actions:FormikHelpers<typeof initialValues>) => {
    try {
      await addOne("categories", values);
      setSuccessMessage("Added Successfully");
      setIsSubmitted(true);
      setFormData(initialValues);

      actions.resetForm()
      actions.setSubmitting(false)

      setTimeout(() => {
        setSuccessMessage("");
        setIsSubmitted(false);
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("Failed to submit");
      setIsSubmitted(false);
    }
  };

  return (
    <section>
      <h1>Add Category</h1>
      {isSubmitted && (
        <p className="bg-green-500 absolute text-white inline-block">{successMessage}</p>
      )}
      <Formik
        initialValues={formData}
        validationSchema={validateSchema}
        onSubmit={onSubmit}
      >
        <Form className="m-4 shadow-md p-8">
          <div className="mb-3">
            <label htmlFor="name" className="mr-4">
              Category Name
            </label>
            <Field type="text" id="name" className="border p-1" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="mr-4">Category Description</label>
            <Field type="text" id="description" className="border p-1" name="description" />
            <ErrorMessage
            name="description"
            component="div"
            className="text-red-500"
            />

          </div>

          <div className="mb-3">
            <button type="submit" className="bg-blue-500 text-white">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
}
