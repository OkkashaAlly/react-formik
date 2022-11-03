import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormControl } from "./";

// ================================
// FORMIK CONTAINER COMPONENT =====
// ================================
const RegistrationForm = () => {
  const mocOptions = [
    {
      key: "Email",
      value: "emailmoc",
    },
    {
      key: "Telephone",
      value: "telephonemoc",
    },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required"),
    }),
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
        <Form className="p-4 bg-gray-200 w-[70%] rounded-md">
          {/* email  */}
          <FormControl
            control={"input"}
            label={"Email"}
            type={"email"}
            name={"email"}
            placeholder={"example@example.com"}
          />

          {/* password  */}
          <FormControl
            control={"input"}
            label={"password"}
            name={"password"}
            type={"password"}
          />
          
          {/* confirmPassword  */}
          <FormControl
            control={"input"}
            label={"confirm Password"}
            name={"confirmPassword"}
            type={"password"}
          />

          {/* modeOfContact  */}
          <FormControl
            control={"radio"}
            label={"mode Of Contact"}
            name={"modeOfContact"}
            options={mocOptions}
          />

          {/* confirmPassword  */}
          <FormControl
            control={"input"}
            label={"phone"}
            name={"phone"}
            type={"number"}
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
export default RegistrationForm;
