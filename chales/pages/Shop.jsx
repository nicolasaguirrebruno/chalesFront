import { Check } from "phosphor-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="categories">
      <div className="category">
        <div className="img__container">
          <img
            className="category__img img--1"
            src="./public/img/coleccion-vestir.jpeg"
            alt=""
          />
          <img
            className="category__img img--2"
            src="./public/img/coleccion-vestir-2.jpeg"
            alt=""
          />
        </div>

        <div className="category__text">
          <h3 className="category__heading">Coleccion de vestir</h3>
          <ul className="category__perks">
            <li className="category__perk">
              <Check className="check" />
              Diseños únicos
            </li>
            <li className="category__perk">
              <Check className="check" />
              Mezcla de lanas, colores y texturas
            </li>
            <li className="category__perk">
              <Check className="check" />
              Colección inspirada en la esencia de la mujer
            </li>
            <li className="category__perk">
              <Check className="check" />
              Diseños para vestir,elegantes que se adaptan a cualquier ocasión
            </li>
            <button className="btn">
              {" "}
              <Link to="coleccion-vestir" className="btn__link">
                Mirar coleccion
              </Link>{" "}
            </button>
          </ul>
        </div>
      </div>

      <div className="category">
        <div className="img__container">
          <img
            className="category__img img--1"
            src="./public/img/coleccion-manta.jpeg"
            alt=""
          />
          <img
            className="category__img img--2"
            src="./public/img/coleccion-manta-2.jpeg"
            alt=""
          />
        </div>
        <div className="category__text">
          <h3 className="category__heading">Coleccion de mantas</h3>
          <ul className="category__perks">
            <li className="category__perk">
              <Check className="check" />
              Diseños exclusivos
            </li>
            <li className="category__perk">
              <Check className="check" />
              Medidas 0.90 1.80 a 2.20 metros
            </li>
            <li className="category__perk">
              <Check className="check" />
              Confeccionados con lana pura de oveja
            </li>
            <li className="category__perk">
              <Check className="check" />
              Colección con colores propios naturales de la madre tierra
            </li>
            <button className="btn">
              {" "}
              <Link to="coleccion-mantas" className="btn__link">
                Mirar coleccion
              </Link>{" "}
            </button>
          </ul>
        </div>
      </div>
    </section>
  );
};
