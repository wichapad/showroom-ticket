import "./App.css";
import Home from "./Components/HomeComponents/Home";
import Navbar from "./Components/Navbar";
import { ApiProvider } from "./Components/UseContext/ApiContext";

const App = () => {
  return (
    <div>
      <Navbar />
      <ApiProvider>
        <Home />
      </ApiProvider>
    </div>
  );
};

export default App;
