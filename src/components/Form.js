import React from "react";
import { useForm } from "../context/FormContext";

const Form = () => {
  const { postalInput, setPostalInput, error, setError, handleFormSubmit } =
    useForm();

  const handleChange = (e) => {
    const value = e.target.value;
    setPostalInput(value);
    //form validation
    if (value.length > 6) {
      setError("input must be a 6 digit number");
    } else if (value === "") {
      setError("enter a value");
    } else {
      setError("");
    }
  };
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(postalInput);
    setPostalInput("");
  };

  return (
    <div className="h-screen border-r-[1px] p-8">
      <form onSubmit={handleSubmit} className=" p-4 bg-slate-500 rounded">
        <div className="flex flex-col">
          <label htmlFor="postal" className="text-white text-xl">
            Enter a postal
          </label>
          <input
            name="postal"
            type="number"
            className="p-2  bg-gray-300 rounded-sm focus:bg-gray-200 focus:outline-none"
            value={postalInput}
            onChange={handleChange}
            placeholder="012345"
          />
          <p className="text-red-600 text-lg">{error}</p>
        </div>
        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-green-400	px-4 py-2 rounded text-slate-900 uppercase text-sm font-semibold hover:bg-slate-700 hover:text-green-400"
          >
            Get Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
