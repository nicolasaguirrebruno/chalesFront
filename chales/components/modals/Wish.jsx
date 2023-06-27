import React from "react";
import { useNavigate } from "react-router-dom";

import { useWishesStore } from "../../../hooks/useWishesStore";
import { WishText } from "./components";
import { WishList } from "./components/wishes/WishList";

export const Wish = ({ show }) => {
  const { wishes } = useWishesStore();

  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/tienda/lista-de-deseos");
  };

  return (
    <div className={`${show ? "cart" : "cart--invisible"}`}>
      {wishes.length > 0 ? (
        <WishList wishes={wishes} isAllWishes={false} />
      ) : (
        <WishText />
      )}
    </div>
  );
};
