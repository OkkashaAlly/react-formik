import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

// ================================
// FORMIK CONTAINER COMPONENT =====
// ================================
const FormikContainer = () => {
  const initialValues = { email: "", textarea: "" };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    textarea: Yup.string().required("Required"),
  });
  const handleSubmit = values => console.log("Form values: ", values);

  /////////////////
  // RETURN =======
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form className="p-4 bg-gray-200 rounded-md">
          <FormikControl
            control={"input"}
            label={"Email"}
            type={"email"}
            name={"email"}
            placeholder={"example@example.com"}
          />

          <FormikControl
            control={"textarea"}
            label={"Description"}
            name={"textarea"}
          />

          <button className="py-2 px-3 bg-green-500 mt-3" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

// EXPORT ====================
export default FormikContainer;
