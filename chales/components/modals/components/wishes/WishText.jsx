import React from "react";
import { Link } from "react-router-dom";

export const WishText = () => {
  return (
    <div className="cart__texts">
      <p className="cart__paragraph">
        Por el momento no has agregado nada a tu lista de favoritos
      </p>
      <Link className="cart__link" to="/tienda">
        Comenzar a navegar
      </Link>
    </div>
  );
};
