import React from "react";
import { useModalStore } from "../../../hooks/useModalStore";
import "animate.css";
export const DisplayMessage = () => {
  const { showMessage, message, startClosingMessage } = useModalStore();

  return (
    <div
      style={{ zIndex: 999 }}
      className={`${
        showMessage ? "editmodal " : "productsIndividual__notDisplay"
      }`}
    >
      <div
        style={{ width: "50vw" }}
        className="editContainer animate__animated animate__zoomIn"
      >
        <h1
          style={{ textTransform: "capitalize", letterSpacing: "0.5px" }}
          className="heading__secondary"
        >
          Error
        </h1>
        <hr />
        <p className="errorMessage">{message}</p>
        {/* <hr /> */}
        <button
          style={{ width: "50%", margin: "3rem auto 1rem" }}
          className="product__button"
          onClick={startClosingMessage}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};
