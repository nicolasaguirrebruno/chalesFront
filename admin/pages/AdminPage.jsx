import React, { useEffect, useState } from "react";
import { ArrowFatRight, PlusCircle, TShirt, Users } from "phosphor-react";
import { Link, NavLink } from "react-router-dom";
import { ProductList } from "../../chales/components/shop";
import { Products, Upload } from "../components";
import { UserList } from "../components/UserList";
import { useAuthStore } from "../../hooks";

export const AdminPage = () => {
  const [showProducts, setshowProducts] = useState(true);
  const [showUser, setshowUser] = useState(false);
  const [showNewProduct, setshowNewProduct] = useState(false);

  const { startLoadingUsers, allUsers } = useAuthStore();

  useEffect(() => {
    if (showUser) {
      startLoadingUsers();
    }
  }, [showUser]);

  useEffect(() => {
    if (!setshowUser) {
      setshowUser(true);
    }
  }, [allUsers]);

  return (
    <div className="admin">
      <div className="admin__container">
        <header className="admin__header">
          <img
            src="/src/img/img/logo-color.png"
            alt=""
            className="admin__logo"
          />
          <h1 className="admin__heading">Panel de Administrador</h1>

          <a href="inicio" className="admin__header__link">
            <ArrowFatRight weight="thin" />
            Volver al inicio
          </a>
        </header>

        <div className="content">
          <nav className="sidebar">
            <ul className="side-nav">
              <li
                onClick={() => {
                  setshowUser(false);
                  setshowProducts(true);
                  setshowNewProduct(false);
                }}
                className="side-nav__item"
              >
                <NavLink
                  className={`side-nav__link ${
                    showProducts ? "side-nav__active" : ""
                  }`}
                >
                  <TShirt className="side-nav__icon" weight="thin" />
                  <span>ver productos</span>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  setshowUser(true);
                  setshowProducts(false);
                  setshowNewProduct(false);
                }}
                className="side-nav__item"
              >
                <NavLink
                  className={`side-nav__link ${
                    showUser ? "side-nav__active" : ""
                  }`}
                >
                  <Users className="side-nav__icon" weight="thin" />
                  <span>ver usuarios</span>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  setshowNewProduct(true);
                  setshowProducts(false);
                  setshowUser(false);
                }}
                className="side-nav__item"
              >
                <NavLink
                  className={`side-nav__link ${
                    showNewProduct ? "side-nav__active" : ""
                  }`}
                >
                  <PlusCircle className="side-nav__icon" weight="thin" />
                  <span>agregar producto</span>
                </NavLink>
              </li>
            </ul>
            <p className="legal">
              {" "}
              &copy; Nicolas Aguirre 2023 <br /> Todos los derechos reservados
            </p>
          </nav>
          <main className="chal-view">
            <Products show={showProducts} />
            <UserList show={showUser} users={allUsers} />
            <Upload show={showNewProduct} />
          </main>
        </div>
      </div>
    </div>
  );
};
