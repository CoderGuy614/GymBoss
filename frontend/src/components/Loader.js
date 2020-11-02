import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="grow"
      role="status"
      style={{
        width: "100px",
        margin: "auto",
        height: "100px",
        display: "block",
      }}
    />
  );
};

export default Loader;
