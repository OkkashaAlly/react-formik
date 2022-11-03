import {
  Input,
  Textarea,
  Select,
  RadioButtons,
  CheckboxButtons,
  DatePicker,
} from "./";

// ================================
// FORMIK CONTROL COMPONENT =======
// ================================
const FormControl = ({ control, ...rest }) => {
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
export default FormControl;
