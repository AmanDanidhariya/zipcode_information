import { createContext, useContext, useState } from "react";

const postalContext = createContext();

function PostalProvider({ children }) {
    const [postalData, setPostalData] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState("");

  return (
    <postalContext.Provider
      value={{
        postalData ,setPostalData,isLoading,setIsLoading,isError,setIsError
      }}
    >
      {children}
    </postalContext.Provider>
  );
}

//custom hook
function usePostal() {
  const context = useContext(postalContext);
  if (context === undefined)
    throw new Error("postalContext was used outside FormProvider");
  return context;
}

export { PostalProvider, usePostal };
