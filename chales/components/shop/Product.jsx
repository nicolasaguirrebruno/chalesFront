import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { data } from "../../../data/data";
import { Minus } from "phosphor-react";
import "animate.css";
import { useAuthStore, useFavoriteStore } from "../../../hooks";
import { FavoriteButton } from "./FavoriteButton";
import { ProductList } from "./ProductList";
import { Carousel } from "antd";

export const Product = () => {
  const { name } = useParams();

  const chales = data();

  const product = chales.find((product) => product.nombre === name);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const interest = chales.filter(
    (chal, index) =>
      product.categoria == chal.categoria && product.id != chal.id
  );
  const imagesRefs = useRef([]);

  const handleImageClick = (index) => {
    const imageRef = imagesRefs.current[index];

    imageRef.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setSelectedImageIndex(index);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <>
      <section className="individual animate__animated animate__fadeIn mobile">
        <div className="individual__container">
          <div className="individual__images--small">
            {product.image.map((individual, index) => (
              <img
                key={index}
                className={`individual__img ${
                  selectedImageIndex === index ? "selectedImage" : ""
                }`}
                src={individual}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>

          <div className="individual__products--container">
            <div className="individual__images--big">
              {product.image.map((individual, index) => (
                <img
                  ref={(ref) => (imagesRefs.current[index] = ref)}
                  key={index}
                  className="individual__img"
                  src={individual}
                />
              ))}
            </div>
            <div className="individual__text--container">
              <h1 className="individual__heading">{product.nombre}</h1>
              <p className="individual__description">{product.descripcion}</p>
              <hr />

              <ul className="individual__list">
                {product.caracteristicas.map((perk, index) => (
                  <li key={index}>
                    <div className="individual__perk">
                      {" "}
                      <Minus
                        className="perk--icon"
                        size={36}
                        weight="thin"
                      />{" "}
                      {perk}
                    </div>
                  </li>
                ))}
              </ul>

              <FavoriteButton product={product} />
            </div>
          </div>
        </div>

        <div className="other">
          <h2 className="heading__secondary">
            Otros productos que podrian interesarte
          </h2>

          <ProductList isInterest={true} interestPieces={interest} />
        </div>
      </section>

      <section className="phone__product">
        <div className="phoneProduct__carousel">
          <Carousel dots={true}>
            {product.image.map((individual, index) => (
              <img key={index} className="carousel__img" src={individual} />
            ))}
          </Carousel>
        </div>

        <div className="phoneProduct__text">
          <h1 className="individual__heading">{product.nombre}</h1>
          <p className="individual__description">{product.descripcion}</p>
          <hr />

          <ul className="individual__list">
            {product.caracteristicas.map((perk, index) => (
              <li key={index}>
                <div className="individual__perk">
                  {" "}
                  <Minus className="perk--icon" size={36} weight="thin" />{" "}
                  {perk}
                </div>
              </li>
            ))}
          </ul>

          <FavoriteButton product={product} />
        </div>
      </section>
    </>
  );
};
