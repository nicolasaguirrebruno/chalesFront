import React, { useState } from "react";
import { Money, Tag } from "phosphor-react";
import { IonIcon } from "@ionic/react";
import { Rate } from "antd";
import { LikeButton } from "../../shop/LikeButton";
import { useNavigate } from "react-router-dom";

export const ChalCard = ({ chal }) => {
  const [rating, setRating] = useState(chal.rating);

  const navigate = useNavigate();

  const seeMore = () => {
    navigate(
      `/tienda/coleccion-${chal.categoria.toLowerCase()}/product/${chal.nombre}`
    );
  };

  return (
    <div className="chal">
      <img src={chal.image[0]} alt="chal" className="chal__img" />
      <div className="product__like">
        <LikeButton product={chal} />
      </div>
      <h5 className="chal__name"> {chal.nombre}</h5>
      <div className="chal__category">
        <Tag className="icon" />
        <p>{chal.categoria}</p>
      </div>
      <div className="chal__price">
        <Money className="icon" />
        <p>€ {chal.precio}</p>
      </div>
      <div className="chal__rating">
        <div className="stars">
          <Rate
            className="stars__icon"
            defaultValue={rating}
            tooltips={["Malo", "Regular", "Bueno", "Muy Bueno", "Excelente"]}
            onChange={(value) => setRating(value)}
          />
        </div>

        <p>Rating: {rating}</p>
      </div>
      <button onClick={seeMore} className="chal__button">
        <p className="chal__button__text"> Ver más</p>
      </button>
    </div>
  );
};
