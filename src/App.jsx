import React, { useState } from "react";
import Home from "../src/pages/HomePage/Home";
import Profile from "./components/Profile/Profile";
import Login from "../src/pages/Login/Login";

function App() {
  const [Submit, setSubmit] = useState(false);

  const SubmitButton = () => {
    setSubmit(true);
  };
  return <>{!Submit ? <Login SubmitButton={SubmitButton} /> : <Home />}</>;
}

export default App;
