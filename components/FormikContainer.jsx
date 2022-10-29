import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

// ================================
// FORMIK CONTAINER COMPONENT =====
// ================================
const FormikContainer = () => {
  const selectOptions = [
    {
      key: "Select an option",
      value: "",
    },
    {
      key: "Option 1",
      value: "option1",
    },
    {
      key: "Option 2",
      value: "option2",
    },
    {
      key: "Option 3",
      value: "option3",
    },
  ];
  const radioOptions = [
    {
      key: "Option 1",
      value: "radioOption1",
    },
    {
      key: "Option 2",
      value: "radioOption2",
    },
    {
      key: "Option 3",
      value: "radioOption3",
    },
  ];

  const initialValues = { email: "", textarea: "", select: "", radio: "" };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    textarea: Yup.string().required("Required"),
    select: Yup.string().required("Required"),
    radio: Yup.string().required("Required"),
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
          {/* Input  */}
          <FormikControl
            control={"input"}
            label={"Email"}
            type={"email"}
            name={"email"}
            placeholder={"example@example.com"}
          />

          {/* Textarea  */}
          <FormikControl
            control={"textarea"}
            label={"Description"}
            name={"textarea"}
          />

          {/* Select  */}
          <FormikControl
            control={"select"}
            label={"Select topic"}
            name={"select"}
            options={selectOptions}
          />

          {/* Radio  */}
          <FormikControl
            control={"radio"}
            label={"Radio topic"}
            name={"radio"}
            options={radioOptions}
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
