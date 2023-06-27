import React from "react";
import { Link } from "react-router-dom";

export const Text = () => {
  return (
    <div className="cart__texts">
      <p className="cart__paragraph">Tu carrito está vacío</p>
      <Link className="cart__link" to="/tienda">
        Comenzar a comprar
      </Link>
    </div>
  );
};
