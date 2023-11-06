import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import PostalDetails from "./components/PostalDetails";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <div className="flex bg-slate-900 overflow-hidden">
        <div>
          <Form />
        </div>
        <div className="flex items-center p-4 ml-[25%]">
          <PostalDetails />
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
