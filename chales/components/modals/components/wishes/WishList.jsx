import React from "react";
import { useNavigate } from "react-router-dom";
import { WishItem } from "./WishItem";

export const WishList = ({ wishes, isAllWishes }) => {
  const navigate = useNavigate();

  const goToWishList = () => {
    navigate("/tienda/lista-deseos");
  };

  let total = 0;

  return (
    <div>
      {wishes.map((wish, index) => {
        if (index <= 2) {
          return <WishItem key={wish.id} wish={wish} />;
        }
      })}
      <p className="cart__remaining">
        {`${
          wishes.length > 3 && !isAllWishes
            ? `Elementos restantes: ${wishes.length - 3}`
            : ""
        }`}
      </p>
      {isAllWishes ? (
        ""
      ) : (
        <>
          <button onClick={goToWishList} className="cart__button">
            Ver todos mis favoritos
          </button>
        </>
      )}
    </div>
  );
};
