import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../hoc/Layout";

const NotFound = () => {
  return (
    <Layout>
      <h2>404 Error...</h2>
      <ul>
        <li>
          <Link to="/">Resigter</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default NotFound;
