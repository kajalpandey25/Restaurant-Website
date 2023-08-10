import React from "react";
import Header from "./Header";
const Layout = ({ Children }) => {
  return (
    <>
    <Header />
   <div>{Children}</div>
    </>
  );
};

export default Layout;
