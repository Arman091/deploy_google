import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header";
import Template from "./components/Home/Template";
import MainBody from "./components/Home/mainBody";
import FormHeader from "./components/Forms/FormHeader";

function App() {
  let HomeComponent = (
    <div>
      <Header />
      <Template />
      <MainBody />
    </div>
  );
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={HomeComponent} />
          <Route path="/form/:id" element={<FormHeader />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
