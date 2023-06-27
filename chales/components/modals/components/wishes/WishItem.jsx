import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishesStore } from "../../../../../hooks/useWishesStore";

export const WishItem = ({ wish }) => {
  const navigate = useNavigate();
  const { startDeletingWishes } = useWishesStore();
  const handleClick = () => {
    navigate(
      `/tienda/coleccion-${wish.categoria.toLowerCase()}/product/${wish.nombre}`
    );
  };

  const id = wish.id;

  const handleRemove = () => {
    console.log(wish);
    console.log(id);
    startDeletingWishes(id);
  };

  return (
    <div className="cart__item">
      <img
        onClick={handleClick}
        src={wish.image[0]}
        alt=""
        className="cart__item--img"
      />
      <div className="cart__item--caracteristics">
        <h1 className="cart__item--heading">{wish.nombre}</h1>
        <p className="cart__item--category">{wish.categoria}</p>
        <a onClick={handleRemove} className="cart__item--eliminate">
          Eliminar De Mi Lista
        </a>
      </div>

      <p className="cart__item--price">€{wish.precio}</p>
    </div>
  );
};
