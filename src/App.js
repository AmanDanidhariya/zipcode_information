import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import PostalDetails from "./components/PostalDetails";
import { FormProvider } from "./context/FormContext";
import { PostalProvider } from "./context/postalDetailContext";

// className="flex items-center p-4 ml-[25%]"

function App() {
  return (
    <FormProvider>
      <PostalProvider>
        <div className="flex bg-slate-900 overflow-hidden">
          <div>
            <Form />
          </div>
          <div>
            <PostalDetails />
          </div>
        </div>
      </PostalProvider>
    </FormProvider>
  );
}

export default App;
