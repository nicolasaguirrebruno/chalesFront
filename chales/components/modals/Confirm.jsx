import React from "react";

import "animate.css";

import { useModalStore } from "../../../hooks/useModalStore";
export const Confirm = () => {
  const {
    showConfirm,
    startAcceptingConfirm,
    startRejectingConfirm,
    showConfirmState,
  } = useModalStore();

  return (
    <div
      style={{ zIndex: 999 }}
      className={`${
        showConfirm ? "editmodal " : "productsIndividual__notDisplay"
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
          Confirmar
        </h1>
        <hr />
        <p className="errorMessage">¿Está seguro de que desea continuar?</p>
        {/* <hr /> */}

        <div style={{ display: "flex", gap: "2rem" }}>
          <button
            style={{ width: "50%", margin: "3rem auto 1rem" }}
            className="product__button"
            onClick={startAcceptingConfirm}
          >
            Aceptar
          </button>

          <button
            style={{ width: "50%", margin: "3rem auto 1rem" }}
            className="product__button"
            onClick={startRejectingConfirm}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
