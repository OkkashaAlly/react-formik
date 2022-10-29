import Input from "./shared/Input";

// ================================
// FORMIK CONTROL COMPONENT =======
// ================================
const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;

    case "textarea":
      break;
    case "radio":
      break;
    case "select":
      break;
    case "checkbox":
      break;
    case "date":
      break;

    default:
      return null;
  }
};

// EXPORT ====================
export default FormikControl;
