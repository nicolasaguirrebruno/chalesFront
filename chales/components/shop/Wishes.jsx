import React from "react";
import { useWishesStore } from "../../../hooks/useWishesStore";
import { CartList } from "../modals/components";

export const Wishes = () => {
  const { wishes } = useWishesStore();

  return (
    <section className="cart__page">
      <h1 className="cart__page__heading">Tu Lista de Deseos</h1>

      <p className="cart__page__paragraph">
        Tienes {wishes.length} pieza(s) en tu lista
      </p>
      <hr />

      <div className="cart__page__container">
        <CartList
          isWish={true}
          key={Math.random()}
          favorites={wishes}
          isAllCart={true}
        />
      </div>
    </section>
  );
};
