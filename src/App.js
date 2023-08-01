import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header";
import Template from "./components/Home/Template";
import MainBody from "./components/Home/mainBody";
import FormHeader from "./components/Forms/FormHeader";
import FormTab from "./components/Forms/FormTab";
import QuestionForm from "./components/Forms/Question_Form";
import ViewForm from "./components/Home/ViewForm";
function App() {
  let HomeComponent = (
    <div>
      <Header />
      <Template />
      <MainBody />
    </div>
  );

  let CompleteForm = (
    <div>
      <FormHeader />
      <FormTab />
      <QuestionForm />
    </div>
  );
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={HomeComponent} />
          <Route path="/form/:id" element={CompleteForm} />
          <Route path="/viewForm/:id" element={<ViewForm/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
