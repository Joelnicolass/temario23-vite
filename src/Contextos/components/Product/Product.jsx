import React from "react";

const Product = ({
  header,
  body,
  footer,
  textBtn,
  onClicked = (data) => {},
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        border: "1px solid white",
        padding: "1rem",
        height: "300px",
        width: "200px",
        borderRadius: "10px",
      }}
    >
      <h3>{header}</h3>
      <p>{body}</p>
      <p>{footer}</p>
      <hr />
      <button
        onClick={(e) => {
          onClicked({ header, body, footer });
        }}
      >
        {textBtn}
      </button>
    </div>
  );
};

export default Product;
