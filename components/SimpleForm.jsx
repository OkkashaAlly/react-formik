import { useFormik } from "formik";
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

const validate = values => {
  // errors has to have the same properties as initialValues
  let errors = {};

  // check your conditions
  if (!values.name) errors.name = "Required";
  if (!values.email) errors.email = "Required";
  if (!values.channel) errors.channel = "Required";

  return errors;
};

// ========================
// SIMPLE FORM COMPONENT //
// ========================
const SimpleForm = () => {
  // Formik
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // console.log("field visited", formik.touched);

  ////////////////////
  // RETURN /////////
  return (
    <div className="p-6 bg-yellow-200 rounded-md">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            className="p-3 border border-black"
            type="text"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.channel}
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
      </form>
    </div>
  );
};

export default SimpleForm;
