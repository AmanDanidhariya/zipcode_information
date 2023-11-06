import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import PostalDetails from "./components/PostalDetails";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <div className="flex">
        <div>
          <Form />
        </div>
        <div>
          <PostalDetails />
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
