import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import Layout from "../../hoc/Layout";

import RegisterForm from "../../components/UI/CustomForm";
import { validateRegister } from "../../shared/validation";

const Register = ({ history }) => {
  const [loading, setLoading] = React.useState(false);
  const [confirmation, setConfirmation] = React.useState(false);

  const fields = [
    {
      label: "Full Name",
      name: "name",
      type: "text",
      placeholder: "Full Name",
      value: "",
    },
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

  function handleRegister(values) {
    setLoading(true);
    axios
      .post("/api/auth/register", values)
      .then((res) => {
        setLoading(false);
        setConfirmation(true);
        setTimeout(() => history.push("/login"), 2000);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Layout>
      <h2>Register</h2>
      <RegisterForm
        fields={fields}
        validation={validateRegister}
        submitHandler={handleRegister}
        submitButtonText="Register"
      />
      {loading && <p>process...</p>}
      {confirmation && <p>Thank you for your registration</p>}
    </Layout>
  );
};

export default withRouter(Register);
