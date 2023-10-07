import React, { useEffect, useState } from "react";
import Validation from "./Validation";
import "./login.css";

const Login = ({ SubmitButton }) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [erros, setErros] = useState({});
  const [Data, setData] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErros(Validation(values));
    setData(true);
  };

  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (Object.keys(erros).length === 0 && Data) {
      SubmitButton(true);
    }
  }, [erros]);

  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Arbazsocial</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on Arbazsocial.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input
                onChange={handleOnChange}
                value={values.email}
                name="email"
                placeholder="Enter Your Email"
                type="email"
                className="loginInput"
              />
              {erros.email && <p className="p">{erros.email}</p>}
              <input
                className="loginInput"
                onChange={handleOnChange}
                value={values.password}
                name="password"
                placeholder="Enter Your Password"
                type="password"
              />
              {erros.password && <p className="p">{erros.password}</p>}
              <button className="loginButton" onClick={handleOnSubmit}>
                Log In
              </button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
