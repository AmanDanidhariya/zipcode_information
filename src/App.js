import "./App.css";
import { FormProvider } from "./context/FormContext";
import { PostalProvider } from "./context/postalDetailContext";
import Form from "./components/Form";
import PostalDetails from "./components/PostalDetails";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
