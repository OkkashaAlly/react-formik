import { useFormik } from "formik";

const SimpleForm = () => {
  const formik = useFormik({})
  
  return (
    <div className="p-6 bg-yellow-200 rounded-md">
      <form className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input  className="p-3 border border-black" type="text" name="name" id=" " />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input  className="p-3 border border-black" type="email" name="email" id=" " />
        </div>
        <div className="flex flex-col">
          <label htmlFor="channel">Channel:</label>
          <input className="p-3 border border-black"  type="text" name="channel" id=" " />
        </div>
        <div className="">
          <button className="p-6 bg-blue-500 "type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;
