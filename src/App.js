import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import EditForm from "./components/Form/EditForm";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        {/* <Route exact path="/forms/:id" element={<EditForm />} /> */}
        {/* <Route exact path="/forms/" element={<h>hello</h>} /> */}
      </Routes>
     < EditForm/>
    </div>
  );
}

export default App;
