import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ====================
// FORM(formik)========
const initialValues = {
  name: "Okkasha",
  email: "",
  channel: "",
};

const onSubmit = values => {
  console.log("Form values: ", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email").required("Required!"),
  channel: Yup.string().required("Required!"),
});

// ========================
// SIMPLE FORM COMPONENT //
// ========================
const SimpleForm = () => {
  // console.log("field visited", formik.touched);

  ////////////////////
  // RETURN /////////
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="p-6 bg-yellow-200 rounded-md">
        <Form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="name">Name:</label>
            <Field
              className="p-3 border border-black   "
              type="text"
              name="name"
            />
            <ErrorMessage name="name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <Field
              className="p-3 border border-black"
              type="email"
              name="email"
            />
            <ErrorMessage name="email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="channel">Channel:</label>
            <Field
              className="p-3 border border-black"
              type="text"
              name="channel"
            />
            <ErrorMessage name="channel" />
          </div>
          <div className="">
            <button className="p-6 bg-blue-500 " type="submit">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default SimpleForm;
