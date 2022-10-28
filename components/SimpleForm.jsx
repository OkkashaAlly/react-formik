import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
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
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = values => {
  console.log("Form values: ", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email").required("Required!"),
  channel: Yup.string().required("Required!"),
});

const validateComments = value => {
  let error;

  if (!value) error = "Required";
  return error;
};

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
      validateOnChange={false} // stops validation on each input change
      // validateOnBlur={false}  // stops validation on each element from focus
    >
      <div className="p-6 bg-yellow-200 rounded-md w-7/12">
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
              validate={validateComments}
            />
            <ErrorMessage name="comments" component={TextError} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address">Address:</label>
            <Field name="address">
              {({ form }) => {
                // console.log(form.errors);
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

          <div className="flex flex-col">
            <label htmlFor="phoneNumbers[0]">Phone no. 1</label>
            <Field
              className="p-3 border border-black"
              type="text"
              name="phoneNumbers[0]"
            />
            <ErrorMessage name="phoneNumbers[0]" component={TextError} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phoneNumbers[1]">Phone no. 2</label>
            <Field
              className="p-3 border border-black"
              type="text"
              name="phoneNumbers[1]"
            />
            <ErrorMessage name="phoneNumbers[1]" component={TextError} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phNumbers">Enter phone numbers</label>
            <FieldArray name="phNumbers">
              {({ push, remove, form }) => {
                const { phNumbers } = form.values;

                return (
                  <div className="flex flex-col gap-2">
                    {phNumbers.map((_, i) => {
                      let isDisabled = i > 0;

                      return (
                        <div key={i} className="flex w-full items-center gap-3">
                          <Field
                            type="text"
                            name={`phNumbers[${i}]`}
                            className="p-3 border border-black flex-1"
                          />
                          <div className="h-full flex gap-1">
                            <button
                              type="button"
                              onClick={_ => {
                                remove(i);
                              }}
                              disabled={!isDisabled}
                              className="p-3 border border-black bg-slate-200"
                            >
                              -
                            </button>
                            <button
                              type="button"
                              onClick={_ => push("")}
                              className="p-3 border border-black bg-slate-200"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              }}
            </FieldArray>
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
