import { useFormik } from "formik";

const SimpleForm = () => {
  const formValues = {
    name: "Okkasha",
    email: "",
    channel: "",
  };

  const submitHandler = values => {
    console.log("Form values: ", values);
  };

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: submitHandler,
  });

  return (
    <div className="p-6 bg-yellow-200 rounded-md">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            className="p-3 border border-black"
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            className="p-3 border border-black"
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="channel">Channel:</label>
          <input
            className="p-3 border border-black"
            type="text"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
        </div>
        <div className="">
          <button className="p-6 bg-blue-500 " type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;
