import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import Layout from "../../hoc/Layout";

import "./profile.css";

const Profile = ({ user, history }) => {
  function handleLogout() {
    axios
      .get("/api/auth/logout")
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => console.log(err));
  }

  return (
    <Layout>
      {user !== null ? (
        <>
          <h2>Welcome {user.name} ...</h2>
          <button className="button" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : null}
    </Layout>
  );
};

export default withRouter(Profile);
