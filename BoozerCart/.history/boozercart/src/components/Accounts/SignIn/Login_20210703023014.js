import React, { useState } from "react";
import {
  RegisterUserContainer,
  ContainerWrapper,
} from "./../Register/Register.element";
import axios from "axios";

function Login() {
  const token = localStorage.getItem("auth_token");
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.username, values.password);
    axios
      .post("http://localhost:8000/auth/", values)
      .then((response) => {
        console.log("this is auth res", response.data.token);
        localStorage.setItem("auth_token", response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <RegisterUserContainer classname="register-container">
        {token && token != "" && token != undefined ? (
          " You are logged in with this toekn: " + token
        ) : (
          <ContainerWrapper onSubmit={handleSubmit}>
            <h1>
              Username:
              <input
                name="username"
                type="username"
                value={values.username}
                onChange={handleChange}
              ></input>
            </h1>
            <h1>
              Password:
              <input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
              ></input>
            </h1>
            <button>Submit</button>
          </ContainerWrapper>
        )}
      </RegisterUserContainer>
    </>
  );
}

export default Login;
