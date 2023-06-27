import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFavoriteStore } from "../../../hooks";
import { CartList, Text } from "./components";

export const ShoppingCart = ({ show }) => {
  const { favorites, startLoadingFavorites } = useFavoriteStore();

  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/tienda/lista-de-deseos");
  };

  return (
    <div className={`${show ? "cart" : "cart--invisible"}`}>
      {favorites.length > 0 ? (
        <CartList favorites={favorites} isAllCart={false} />
      ) : (
        <Text />
      )}
    </div>
  );
};
