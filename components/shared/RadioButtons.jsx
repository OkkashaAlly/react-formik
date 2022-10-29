import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const RadioButtons = ({ label, name, options, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className={"capitalize"}>
        {label}:
      </label>
      <Field className="p-3 border border-black" name={name} {...rest}>
        {({ field }) =>
          options.map(opt => (
            <span key={opt.value}>
              <input
                {...field}
                type={"radio"}
                value={opt.value}
                id={opt.value}
                checked={field.value === opt.value}
              />
              <label htmlFor={opt.value}>{opt.key}</label>
            </span>
          ))
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButtons;
