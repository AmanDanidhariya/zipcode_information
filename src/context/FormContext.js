import { createContext, useContext, useState } from "react";

const formContext = createContext();

function FormProvider({ children }) {
  const [postalInput, setPostalInput] = useState("");
  const [error, setError] = useState("");
  const [postalCode, setPostalCode] = useState("");

  //get submit value
  const handleFormSubmit = (value) => {
    setPostalCode(value);
  };

  console.log("postalCode", postalCode);

  return (
    <formContext.Provider
      value={{
        postalInput,
        setPostalInput,
        error,
        setError,
        postalCode,
        setPostalCode,
        handleFormSubmit,
      }}
    >
      {children}
    </formContext.Provider>
  );
}

function useForm() {
  const context = useContext(formContext);
  if (context === undefined)
    throw new Error("formContext was used outside FormProvider");
  return context;
}

export { FormProvider, useForm };
