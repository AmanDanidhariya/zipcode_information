import { createContext, useCallback, useContext, useState } from "react";

const postalContext = createContext();

function PostalProvider({ children }) {
  const [postalData, setPostalData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const fetchPostalData = useCallback((postalCode) => {
    if (postalCode) {
      setIsLoading(true);
      setIsError("");
      fetch(`https://api.zippopotam.us/in/${postalCode}`)
        .then((response) => {
          //if response is not ok then throw error
          if (!response.ok) {
            setIsError("Enter valid PostalCode.");
          }
          return response.json();
        })
        .then((data) => {
          //if we get data then update state with data
          setPostalData(data);
          setIsLoading(false);
        });
    } else {
      setIsError("Enter PostalCode to the form.");
    }
  }, []);

  return (
    <postalContext.Provider
      value={{
        postalData,
        setPostalData,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
        fetchPostalData,
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
