import { Formik, Form } from "formik";
import * as Yup from "yup";

// ================================
// FORMIK CONTAINER COMPONENT =====
// ================================
const FormikContainer = () => {
  const initialValues = {};
  const validationSchema = Yup.object({});
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
          {" "}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

// EXPORT ====================
export default FormikContainer;
