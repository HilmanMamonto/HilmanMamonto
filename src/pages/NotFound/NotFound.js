import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 vw-100">
      <h1 style={{ fontSize: "102px" }}>404</h1>
      <h2>Page Not Found</h2>
      <Link className="text-decoration-underline" to="/">
        <h6>back to home</h6>
      </Link>
    </div>
  );
};

export default NotFound;
