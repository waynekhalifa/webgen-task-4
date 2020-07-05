import React from "react";
import Header from "../../components/Header";
import "./layout.css";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className="main-content">{props.children}</main>
    </>
  );
};

export default Layout;
