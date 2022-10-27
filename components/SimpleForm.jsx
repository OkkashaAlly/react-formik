import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ====================
// FORM(formik)========
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  socials: {
    twitter: "",
    facebook: "",
  },
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
              placeholder="Enter your full name"
            />
            <ErrorMessage name="name" component={TextError} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <Field
              className="p-3 border border-black"
              type="email"
              name="email"
            />
            <ErrorMessage name="email" component={TextError} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="channel">Channel:</label>
            <Field
              className="p-3 border border-black"
              type="text"
              name="channel"
            />
            <ErrorMessage name="channel" component={TextError} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="comments">Comments:</label>
            <Field
              className="p-3 border border-black"
              as="textarea"
              name="comments"
            />
            <ErrorMessage name="comments" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address">Address:</label>
            <Field name="address">
              {props => {
                // console.log(props);
                return (
                  <input type="text" className="p-3 border border-black" />
                );
              }}
            </Field>
            <ErrorMessage name="address" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="facebook">Facebook:</label>
            <Field
              className="p-3 border border-black"
              type="text"
              name="socials.facebook"
            />
            <ErrorMessage name="facebook" component={TextError} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="twitter">twitter:</label>
            <Field
              className="p-3 border border-black"
              type="text"
              name="socials.twitter"
            />
            <ErrorMessage name="twitter" component={TextError} />
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

// ===================
// EXTENDED COMPONENTS
const TextError = ({ children }) => (
  <span className="text-red-500">{children}</span>
);

export default SimpleForm;
