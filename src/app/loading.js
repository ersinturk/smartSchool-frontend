import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner
        animation="border"
        variant="varning"
        style={{ width: "3rem", height: "3rem" }}
      />
    </div>
  );
};

export default Loading;
