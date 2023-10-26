"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validateSchema = Yup.object({
  name: Yup.string().required("Name is required"),
});

const initialValues = {
  name: "",
};

const onSubmit = (values: typeof initialValues) => {
  console.log("Form values:", values);
};

export default function Page() {
  return (
    <section>
      <h1>Add Category</h1>
      <Formik
        initialValues={initialValues}
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
            <button type="submit" className="bg-blue-500 text-white">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
}
