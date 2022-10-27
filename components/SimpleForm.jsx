import { Formik, Form } from "formik";
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
      className="p-6 bg-yellow-200 rounded-md"
    >
      <Form className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            className="p-3 border border-black"
            type="text"
            name="name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <span className="text-red-500">{formik.errors.name}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            className="p-3 border border-black"
            type="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500">{formik.errors.email}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="channel">Channel:</label>
          <input
            className="p-3 border border-black"
            type="text"
            name="channel"
            {...formik.getFieldProps("channel")}
          />
          {formik.touched.channel && formik.errors.channel && (
            <span className="text-red-500">{formik.errors.channel}</span>
          )}
        </div>
        <div className="">
          <button className="p-6 bg-blue-500 " type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SimpleForm;
