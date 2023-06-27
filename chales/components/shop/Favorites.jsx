import React from "react";
import { useFavoriteStore } from "../../../hooks";
import { useWishesStore } from "../../../hooks/useWishesStore";
import { CartList } from "../modals/components";

export const Favorite = () => {
  const { favorites } = useFavoriteStore();
  let total = 0;
  favorites.forEach((favorite) => (total += Number(favorite.precio)));
  return (
    <section className="cart__page">
      <h1 className="cart__page__heading">Tu carrito</h1>

      <p className="cart__page__paragraph">
        Tienes {favorites.length} piezas en tu carrito
      </p>
      <hr />

      <div className="cart__page__container">
        <CartList isWish={false} favorites={favorites} isAllCart={true} />

        <div className="cart__page__prices">
          <h2 className="cart__page__total">Total:</h2>
          <p className="cart__page__pay">€{total}</p>
          <button className="product__button cart--page--price">Pagar</button>
        </div>
      </div>
    </section>
  );
};
