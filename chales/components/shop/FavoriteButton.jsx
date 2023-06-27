import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore, useFavoriteStore } from "../../../hooks";

export const FavoriteButton = ({ product }) => {
  const { startAdding, favorites, startDeleting } = useFavoriteStore();

  const { status } = useAuthStore();

  const navigate = useNavigate();

  const { id, nombre, image, caracteristicas, precio, categoria, descripcion } =
    product;

  const favoriteId = id;

  const handleCart = () => {
    if (status == "authenticated") {
      console.log(favoriteId, id);
      startAdding({
        id: favoriteId,
        nombre,
        categoria,
        caracteristicas,
        descripcion,
        precio,
        image,
      });
    } else {
      navigate("/auth/login");
    }
  };

  const handleRemove = () => {
    console.log(favoriteId);
    startDeleting(favoriteId);
  };
  return (
    <div>
      {" "}
      {favorites.find((favorite) => favorite.id == product.id) ? (
        <button className="product__button" onClick={handleRemove}>
          Eliminar del carrito
        </button>
      ) : (
        <button className="product__button" onClick={handleCart}>
          Agregar al carrito
        </button>
      )}
    </div>
  );
};
