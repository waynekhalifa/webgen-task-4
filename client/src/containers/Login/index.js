import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import Layout from "../../hoc/Layout";

import { validateLogin } from "../../shared/validation";
import LoginForm from "../../components/UI/CustomForm";

const Login = ({ history }) => {
  const [loading, setLoading] = React.useState(false);

  const fields = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Your Email",
      value: "",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      value: "",
    },
  ];

  function handleLogin(values) {
    setLoading(true);
    axios
      .post("/api/auth/login", values)
      .then((res) => {
        setLoading(false);
        history.push("/profile");
      })
      .catch((err) => console.log(err));
  }

  return (
    <Layout>
      <h2>Login</h2>
      <LoginForm
        fields={fields}
        validation={validateLogin}
        submitHandler={handleLogin}
        submitButtonText="Login"
      />
      {loading && <p>process...</p>}
    </Layout>
  );
};

export default withRouter(Login);
