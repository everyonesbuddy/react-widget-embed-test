import React from "react";

const MyWidget = ({ message = "Hello, World!" }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h2>My React Widget</h2>
      <p>{message}</p>
    </div>
  );
};

export default MyWidget;
