import { Formik, Form } from "formik";
import * as Yup from "yup";
import {FormControl} from "./";

// ================================
// FORMIK CONTAINER COMPONENT =====
// ================================
const RegistrationForm = () => {
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

  const checkboxOptions = [
    {
      key: "Option 1",
      value: "checkboxOption1",
    },
    {
      key: "Option 2",
      value: "checkboxOption2",
    },
    {
      key: "Option 3",
      value: "checkboxOption3",
    },
  ];

  const initialValues = {
    email: "",
    textarea: "",
    select: "",
    radio: "",
    checkbox: null,
    date: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    textarea: Yup.string().required("Required"),
    select: Yup.string().required("Required"),
    radio: Yup.string().required("Required"),
    checkbox: Yup.array().of(Yup.string()).required("Required").nullable(),
    date: Yup.date().required("Required").nullable(),
  });
  const handleSubmit = values => {
    console.log("Form values: ", values);
    // For formatting the date value
    // console.log("Form values: ", JSON.parse(JSON.stringify(values)));
    // OR use Date Parser 
  };
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
          <FormControl
            control={"input"}
            label={"Email"}
            type={"email"}
            name={"email"}
            placeholder={"example@example.com"}
          />

          {/* Textarea  */}
          <FormControl
            control={"textarea"}
            label={"Description"}
            name={"textarea"}
          />

          {/* Select  */}
          <FormControl
            control={"select"}
            label={"Select topic"}
            name={"select"}
            options={selectOptions}
          />

          {/* Radio  */}
          <FormControl
            control={"radio"}
            label={"Radio topic"}
            name={"radio"}
            options={radioOptions}
          />

          {/* checkbox  */}
          <FormControl
            control={"checkbox"}
            label={"checkbox ii topic"}
            name={"checkbox"}
            options={checkboxOptions}
          />

          {/* date  */}
          <FormControl control={"date"} label={"Pick a date"} name={"date"} />

          <button className="py-2 px-3 bg-green-500 mt-3" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

// EXPORT ====================
export default RegistrationForm;
