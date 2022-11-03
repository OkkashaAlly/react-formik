import Input from "./shared/Input";
import Textarea from "./shared/Textarea";
import Select from "./shared/Select";
import RadioButtons from "./shared/RadioButtons";
import CheckboxButtons from "./shared/CheckboxButtons";
import DatePicker from "./shared/DatePicker";

// ================================
// FORMIK CONTROL COMPONENT =======
// ================================
const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;

    case "textarea":
      return <Textarea {...rest} />;

    case "select":
      return <Select {...rest} />;

    case "radio":
      return <RadioButtons {...rest} />;

    case "checkbox":
      return <CheckboxButtons {...rest} />;
      break;
    case "date":
      return <DatePicker {...rest} />;
      break;

    default:
      return null;
  }
};

// EXPORT ====================
export default FormikControl;
