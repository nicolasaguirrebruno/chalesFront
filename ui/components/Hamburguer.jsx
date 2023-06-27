import { Hamburger } from "phosphor-react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../hooks";

export const Hamburguer = ({ show, setShow }) => {
  const navigate = useNavigate();
  const { status } = useAuthStore();

  const goToCart = () => {
    console.log(status);
    if (status == "authenticated") {
      navigate("/tienda/carrito");

      setShow(false);
    } else {
      navigate("/auth/login");
      setShow(false);
    }
  };

  const goToFavorite = () => {
    if (status == "authenticated") {
      navigate("/tienda/lista-deseos");

      setShow(false);
    } else {
      navigate("/auth/login");
      setShow(false);
    }
  };

  return (
    <div className={`${show ? "hamburger-menu" : "hamburger-menu-inactive"}`}>
      <div className="hamburger-menu__container">
        <NavLink
          onClick={() => setShow(false)}
          className="hamburger-menu__link"
          to="inicio"
        >
          Inicio
        </NavLink>
        <NavLink
          onClick={() => setShow(false)}
          className="hamburger-menu__link"
          to="about"
        >
          Sobre Mi
        </NavLink>
        <NavLink
          onClick={() => setShow(false)}
          className="hamburger-menu__link"
          to="tienda"
        >
          Tienda
        </NavLink>

        <a className="hamburger-menu__link" onClick={goToCart}>
          Mi carrito
        </a>

        <a onClick={goToFavorite} className="hamburger-menu__link">
          Mi lista de deseos
        </a>

        <NavLink className="hamburger-menu__link">Iniciar Sesion</NavLink>
      </div>
    </div>
  );
};
