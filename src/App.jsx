import React, { useState } from "react";
import Home from "./pages/HomePage/home";
import Profile from "./components/Profile/Profile";
import Login from "./pages/Login/Login";

function App() {
  const [Submit, setSubmit] = useState(false);

  const SubmitButton = () => {
    setSubmit(true);
  };
  return <>{!Submit ? <Login SubmitButton={SubmitButton} /> : <Home />}</>;
}

export default App;
