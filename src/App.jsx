import "./App.css";
import Navbar from "../src/components/Navbar";
import RouterConfig from "./config/RouterConfig";
function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterConfig />
    </div>
  );
}

export default App;
