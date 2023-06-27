import { IonIcon } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../hooks";
import { useWishesStore } from "../../../hooks/useWishesStore";

export const LikeButton = ({ product }) => {
  const { startAddingWishes, wishes, startDeletingWishes } = useWishesStore();
  const [isLiked, setIsLiked] = useState(false);

  const { status } = useAuthStore();

  const navigate = useNavigate();

  const { id, nombre, descripcion, caracteristicas, image, precio, categoria } =
    product;

  const handleCart = () => {
    if (status == "authenticated") {
      startAddingWishes({
        id,
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

  useEffect(() => {
    setIsLiked(wishes.find((wish) => wish.id == product.id) ? true : false);
  }, [wishes]);

  const handleRemove = () => {
    startDeletingWishes(id);
  };
  return (
    <div>
      {isLiked ? (
        <IonIcon
          style={{ cursor: "pointer" }}
          className="liked"
          onClick={handleRemove}
          name="heart"
        />
      ) : (
        <IonIcon
          style={{ cursor: "pointer" }}
          onClick={handleCart}
          className=""
          name="heart"
        />
      )}
    </div>
  );
};
