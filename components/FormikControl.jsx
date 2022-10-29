import Input from "./shared/Input";
import Textarea from "./shared/Textarea";

// ================================
// FORMIK CONTROL COMPONENT =======
// ================================
const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;

    case "textarea":
      return <Textarea {...rest} />;
      
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
