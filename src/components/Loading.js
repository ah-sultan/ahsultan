import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ width: "100%", height: "100%" }}
    >
      <Spinner />
    </div>
  );
};

export default Loading;
