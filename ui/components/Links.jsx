import { IonIcon } from "@ionic/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Wish } from "../../chales/components/modals";
import { useAuthStore, useFavoriteStore } from "../../hooks";
import { useModalStore } from "../../hooks/useModalStore";
import { useWishesStore } from "../../hooks/useWishesStore";

export const Links = ({ component, icon }) => {
  const navigate = useNavigate();

  const { status } = useAuthStore();

  const { favorites } = useFavoriteStore();

  const { wishes } = useWishesStore();

  const { showCart, showWish } = useModalStore();

  const { startClose, startDisplay } = useModalStore();

  const openCart = (displayed) => {
    if (status == "authenticated") {
      startDisplay(displayed);
    } else {
      navigate("/auth/login");
    }
  };

  const displayCart = (displayed) => {
    if (status == "authenticated") {
      startDisplay(displayed);
    }
  };

  const closeCart = (displayed) => {
    if (status == "authenticated") {
      startClose(displayed);
    }
  };

  return (
    <a
      onClick={() => openCart(component == "Wish" ? "wish" : "cart")}
      onMouseEnter={() => displayCart(component == "Wish" ? "wish" : "cart")}
      onMouseLeave={() => closeCart(component == "Wish" ? "wish" : "cart")}
      className="nav__anchors icon--cart"
    >
      <IonIcon className="nav__icons--container--element" name={icon} />

      {component == "ShoppingCart" ? (
        <ShoppingCart show={showCart} />
      ) : (
        <Wish show={showWish} />
      )}

      <p
        className={`${
          status == "authenticated" ? "cart--number" : "invisible"
        }`}
      >
        {component == "ShoppingCart" ? favorites.length : wishes.length}
      </p>
    </a>
  );
};
