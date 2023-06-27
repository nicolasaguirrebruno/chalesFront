import { IonIcon } from "@ionic/react";
import { Money } from "phosphor-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FavoriteButton } from "./FavoriteButton";
import { LikeButton } from "./LikeButton";

export const ProductCard = ({ product }) => {
  const [show, setShow] = useState(false);

  const handleMouseEvent = () => {
    setShow(!show);
  };

  return (
    <div
      className="product"
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      <img
        src={product.image[0]}
        alt="chal"
        className={`product__img ${show ? "" : ""}`}
      />
      <div className="product__like">
        <LikeButton product={product} />
      </div>

      <div className="product__text">
        <div className={`product__buttons ${show ? "" : "hidden"}`}>
          <Link
            to={`/tienda/coleccion-${product.categoria}/product/${product.nombre}`}
            className="product__button button__card link"
          >
            Ver mas
          </Link>

          <FavoriteButton product={product} />
        </div>

        <h5 className={`product__name ${show ? "" : ""}`}> {product.nombre}</h5>

        <div className={`product__price ${show ? "" : ""}`}>
          <Money className="product__icon" />
          <p>€ {product.precio}</p>
        </div>
      </div>
    </div>
  );
};
