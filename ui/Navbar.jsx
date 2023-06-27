import { IonIcon, IonMenuButton } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "animate.css";
import { useAuthStore, useFavoriteStore } from "../hooks";
import { Links } from "./components/Links";

import "animate.css";
import { UserModal } from "../chales/components/modals";
import { onCloseUser, onOpenUser } from "../store";
import { useModalStore } from "../hooks/useModalStore";
import { useWishesStore } from "../hooks/useWishesStore";
import { Hamburger, List, X, XSquare } from "phosphor-react";
import { Hamburguer } from "./components/Hamburguer";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [show, setShow] = useState(false);

  const activateNav = () => {
    if (window.scrollY > 40) setNav(true);
    else setNav(false);
  };
  const navigate = useNavigate();
  const { startUserDisplay, startUserClose } = useModalStore();
  const { startLoadingFavorites } = useFavoriteStore();
  const { startLoadingWishes } = useWishesStore();
  const { status } = useAuthStore();

  const openLogin = () => {
    if (status == "authenticated") {
      startUserDisplay();
    } else {
      navigate("/auth/login");
    }
  };

  const openUser = () => {
    if (status == "authenticated") startUserDisplay();
  };

  const closeUser = () => {
    if (status == "authenticated") startUserClose();
  };

  useEffect(() => {
    startLoadingFavorites();
  }, [status]);

  useEffect(() => {
    startLoadingWishes();
  }, [status]);

  window.addEventListener("scroll", activateNav);

  return (
    <nav
      className={
        nav
          ? "nav nav__visible animate__animated animate__fadeIn"
          : "nav nav__transparent "
      }
    >
      <img src="./img/logo-blanco.png" className="nav__logo" alt="logo" />
      <div className="nav__anchors__container mobile">
        <NavLink to="inicio" className="nav__anchors--link">
          Inicio
        </NavLink>
        <NavLink to="about" className="nav__anchors--link">
          Sobre Mi
        </NavLink>
        <NavLink to="tienda" className="nav__anchors--link">
          Tienda
        </NavLink>
      </div>
      <div className="nav__icons--container mobile">
        <Links component={"ShoppingCart"} icon={"cart-outline"} />
        <Links component={"Wish"} icon={"heart-outline"} />

        <a
          className="nav__anchors"
          onClick={() => openLogin()}
          onMouseEnter={() => openUser()}
          onMouseLeave={() => closeUser()}
        >
          <IonIcon
            className="nav__icons--container--element"
            name="person-outline"
          />
          <UserModal show={true} />
        </a>
      </div>
      <button className="btn-mobile-nav">
        <List
          onClick={() => setShow(true)}
          weight="fill"
          name="menu"
          className={`${show ? "invisible " : "icon-mobile-nav"}`}
        />

        <X
          onClick={() => setShow(false)}
          className={`${show ? "icon-mobile-nav " : "invisible"}`}
          name="close"
          weight="thin"
        />
      </button>

      <Hamburguer show={show} setShow={setShow} />
    </nav>
  );
};
